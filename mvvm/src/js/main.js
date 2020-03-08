import $ from 'jquery';
const compiler = require('vue-template-compiler')
function Component(options) {
    this._sourceMap = {};
    var fuseIndex = ['data', 'props', 'computed', 'methods'];
    var curValue = null;
    var curFuse;
    var template = $(options.el).prop("outerHTML");
    var res = compiler.compile(template);
    console.log(res);
    function createElement(tag, attr, children) {
        console.log(tag);
    }
    // console.log(res);
    for (var i in fuseIndex) {
        curFuse = fuseIndex[i];
        curValue = options[curFuse] || null;
        if (!!curValue) {
            this._sourceMap[curFuse] = [];
        }
        for (var j in curValue) {
            if (!this[j]) {
                this._sourceMap[curFuse].push(j);
                this[j] = curValue[j]
            }
            else {
                console.warn(curFuse + '.' + j + '命名和已经有的属性冲突了');
            }
        }
    }
    this.created = options.created;
    this.created();
}
// Component.prototype.created = function () {
//     console.log('created');
// }
Component.prototype.setData = function (key, val) {
    console.log(this);
    if (this._sourceMap['data'].toString().indexOf(key) == -1) {
        console.warn(key + '没有定义');
        return;
    }
    console.log(key + '发生了变化');
    this[key] = val;
}

var com = new Component({
    data: {
        name: '我的名字',
        title: '文章标题',
        time: '2018-01-02',
        content: '文章内容',
        times: 1
    },
    props: {
        'author': '刘鹏'
    },
    methods: {
        start() {
            setInterval(() => {
                this.setData('name', '换个名字' + (this.times++));
            }, 3000);
        }
    },
    created() {
        this.start();
    },
    el: '#app'
});
