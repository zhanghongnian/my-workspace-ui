import React, { Component } from 'react';
import { Card } from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/line';

import { getExchangeRateHistoryApi } from '../../services/exchangeApi';

export default class ExchangeRate extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  processData = (originData) => {
    const data = {};
    for (const country in originData) {
      const rateData = originData[country]
      for (const item of rateData) {
        const time = new Date(item.timestamp * 1000);
        if (data[country] === undefined) {
          data[country] = [];
        }
        data[country].push({
          value: [
            [time.getFullYear(), time.getMonth() + 1, time.getDate()].join('/'),
            item.rate
          ]
        })
      }
    }
    this.initLine(data);
  }

  getExchangeRateHistory = async () => {
    const resp = await getExchangeRateHistoryApi();
    this.processData(resp);
  }

  componentDidMount = () => {
    const data = this.getExchangeRateHistory();
  }

  initLine(data) {
    const countrys = [];
    const series = [];
    for (const country in data) {
      countrys.push(country);
      series.push({
        name: country,
        type: 'line',
        showSymbol: false,
        smooth: true,
        data: data[country]
      })
    }
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: countrys
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'time',
      }],
      yAxis: [{
        type: 'value',
        min: function (value) {
          return (value.min - 0.001).toFixed(3);
        },
        max: function (value) {
          return (value.max + 0.001).toFixed(3);
        }
      }],
      dataZoom: [{
        type: 'inside',
        start: 90,
        end: 100
      }, {
        start: 90,
        end: 100,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        }
      }],
      series: series
    };
    let myChart = echarts.init(this.ID)

    myChart.setOption(option);
    window.onresize = function () {
      myChart.resize();
    }
  }

  render() {
    const { width = "100%", height = "500px" } = this.props
    return (
      <Card title="汇率图" className="m-t-16">
        <div ref={ID => this.ID = ID} style={{ width, height }}></div>
      </Card>
    )
  }
}
