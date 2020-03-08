//打包 main.js /main.ts文件
const config = require("../config");
const { dest } = require("gulp");
const browserify = require("browserify");
const fs = require("fs-extra");
const argv = require("yargs").argv;
const babelify = require("babelify");
const tsify = require("tsify");
const source = require("vinyl-source-stream");
const reload = require("./server").reload;
const path = require("path");
const merge = require("merge-stream");
const Utli = require("../libs/util");
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var gulpif = require('gulp-if');
const readline = require('readline');
var es3ify = require("gulp-es3ify");
//console.log(browserSync);
// browserSync.reload();
var DEBUG = argv._ == "dev";
function script(cb) {
	var entries = global.entries;
	var tasks = [];
	//console.log(entries);
	entries.map((entry, key) => {
		let entryAllPath = config.src + entry;
		// console.log(entryAllPath);
		// console.log(fs.existsSync(entryAllPath));
		if (!Utli.isChanged(entryAllPath)) {
			return true;
		}
		if (!Utli.isEntrySync(entryAllPath)) {
			return true;
		}
		let extname = path.extname(entry);
		let filename = entry.split('/');
		filename = filename[filename.length - 1];
		filename = filename.split('.')[0] + '.js';
		var curTask = browserify({
			entries: entryAllPath,
			debug: false,
			cache: {},
			packageCache: {}
		});
		if (extname == ".ts") {
			curTask = curTask.plugin(tsify)
				.on('file', function (file, id, parent) {
					var filename = path.basename(file);
					//console.log("TypeScript:正在加载" + filename);
				})
		}
		curTask = curTask

			.transform(babelify, {
				//此处babel的各配置项格式与.babelrc文件相同
				global: true,
				ignore: [/.*(core-js|babel).*/],
				presets: [
					"@babel/preset-env" //转换es6代码
				],
				plugins: [

					[
						"@babel/plugin-transform-runtime",
						{
							corejs: 2
						}
					]
				]
			})

			.on('bundle', function (bundle) {
				//console.log(bundle);
				console.log("打包" + filename);
			})
			.on('file', function (filename) {
				// console.log(process.stdout,);
				let relativePath = path.relative(path.resolve(__dirname, '../../'), filename);
				
				readline.clearLine(process.stdout, 0);
				readline.cursorTo(process.stdout, 0, 10);
				process.stdout.write(relativePath, 'utf-8');
			})
			.bundle() //合并打包
			.on('error', function (error) {
				console.error(error.toString());
				cb();
			})
			.pipe(source(filename))
			.pipe(buffer())
			.pipe(gulpif(!DEBUG, uglify()))
			// .pipe(es3ify())
			.pipe(dest(config.dist + Utli.toVersionUrl(path.dirname(entry.replace(config.src, '')))))
			.pipe(reload({ stream: true }));
		//console.log(tasks);
		tasks.push(curTask);
	});
	//console.log(tasks);
	// console.log(tasks);
	if (tasks.length == 0) {
		//console.log('空');
		cb();
		return false;
	}
	return merge(...tasks);
}

module.exports = script;
