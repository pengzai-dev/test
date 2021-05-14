import React, { Component, useEffect, useState } from 'react';

/**
 * data 随机结果
 * granularity 粒度 默认 10
 */
export class RandomTongji extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <canvas width={1000} height={1000} ref={this.myRef}></canvas>;
    }
    componentDidMount() {
        const { granularity = 10, data, scale = 10 } = this.props;
        let canvas = this.myRef.current;
        let cxt = canvas.getContext('2d');
        cxt.translate(500, 1000);
        cxt.scale(1, -1);
        //画笔描边样式
        cxt.strokeStyle = '#ccc';
        cxt.lineWidth = 0.5;

        var ProbabilityArr = new Array(granularity);
        var perWidthPixel = 1000 / granularity;
        var perWidth = 10 / granularity;
        for (var i in data) {
            let index = parseInt((data[i] + 5) / perWidth);
            if (!ProbabilityArr[index]) {
                ProbabilityArr[index] = 0;
            }
            ProbabilityArr[index]++;
        }
        
        

        for (var i in ProbabilityArr) {
            cxt.fillRect(
                perWidthPixel * (i - granularity / 2),
                0,
                perWidthPixel - 2,
                (ProbabilityArr[i] / granularity) * scale
            );
        }
    }
}
