//不在目录 css js 下面的文件全部复制
const config = require("../config");
const { src, dest } = require("gulp");
const Utli = require("../libs/util");
const reload = require("./server").reload;
function copy() {
    let copyglob = [].concat(global.copyglob);
    for (var i in global.entries) {
        let curentry = `${config.src}${global.entries[i]}`;
        if (Utli.isEntrySync(curentry)) {
            copyglob.push(`!${config.src}${global.entries[i]}`);
        }
    }
    return src(copyglob)
        .pipe(dest(config.dist))
        .pipe(reload({ stream: true }));;
}
module.exports = copy;