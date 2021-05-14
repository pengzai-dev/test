import './App.css';
import gauss_map_img from './images/gauss_map.png';
import { RandomTongji } from './components/RandomTongji';
import Ziggurat from "node-ziggurat"

function gaosi(x, u = 0, s = 1) {

    var y = (1 / (s * Math.sqrt(2 * Math.PI))) * Math.pow(Math.E, -(Math.pow(x - u, 2) / (2 * Math.pow(s, 2))));
    return y;
}

console.log(gaosi(4));

const getRandomData = function (fun, nums = 100) {
    var data = [];
    for (var i = 0; i < nums; i++) {
        data.push(fun());
    }
    return data;
};
function App() {

    
    const data = getRandomData(() => {
        return Math.random() * 4 - 2;
    }, 1000);
    
    // 中心极限定理
    const data2 = getRandomData(() => {
        var total = 0;
        let num = 30;
        let a = Math.sqrt(3);
        for (var i = 0; i < num; i++) {
            total += Math.random() * 2 * a - a;
        }
        return total / Math.sqrt(num);
    }, 1000);

    // Box-Muller变换
    const data3 = getRandomData(() => {
        return Math.sin(2 * Math.PI * Math.random()) *
            Math.sqrt(-2 * Math.log(Math.random()));
    }, 1000);

    var maxgaosi = gaosi(0);

    // 拒绝采样
    const data5 = getRandomData(() => {
        function randomGauss() {
            var x = Math.random() * 8 - 4;
            var y = Math.random() * maxgaosi;
            var y2 = gaosi(x);
            if (y <= y2) {
                return x;
            }
            else {
                return randomGauss();
            }
        }
        return randomGauss();
    }, 1000);

    // var z = new Ziggurat();
    // const data4 = getRandomData(() => {
    //     return z.nextGaussian()
    // }, 1000);

    return (
        <div className="App">
            <h1>正态分布</h1>
            <img src={gauss_map_img} />
            <br /><br /><br />
            <h1>均匀分布</h1>
            <RandomTongji granularity={100} scale={400} data={data} />
            <br /><br /><br />
            <h2>拒绝-采样法</h2>
            <RandomTongji granularity={100} scale={600} data={data5} />
            <br /><br /><br />
            <h2>中心极限定理</h2>
            <RandomTongji granularity={100} scale={600} data={data2} />
            <br /><br /><br />
            <h2>box-muller变换</h2>
            <RandomTongji granularity={100} scale={600} data={data3} />
            <br /><br /><br />
            {/* <h2>Ziggurat</h2>
            <RandomTongji granularity={100} scale={500} data={data4} /> */}
        </div>
    );
}

export default App;
