import React, { Component } from 'react';
import { Card } from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map' //引入地图
import 'echarts/lib/component/tooltip';
import 'echarts/map/js/china';

import { getExchangeRateHistoryApi } from '../../services/exchangeApi';

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    this.initMap();
  }

  initMap() {
    const option = {
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],           // 文本，默认为数值文本
        calculable: true
      },
      series: [
        {
          name: '温度',
          type: 'map',
          mapType: 'china',
          roam: false,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { name: '北京', value: Math.round(Math.random() * 1000) },
            { name: '天津', value: Math.round(Math.random() * 1000) },
            { name: '上海', value: Math.round(Math.random() * 1000) },
            { name: '重庆', value: Math.round(Math.random() * 1000) },
            { name: '河北', value: Math.round(Math.random() * 1000) },
            { name: '河南', value: Math.round(Math.random() * 1000) },
            { name: '云南', value: Math.round(Math.random() * 1000) },
            { name: '辽宁', value: Math.round(Math.random() * 1000) },
            { name: '黑龙江', value: Math.round(Math.random() * 1000) },
            { name: '湖南', value: Math.round(Math.random() * 1000) },
            { name: '安徽', value: Math.round(Math.random() * 1000) },
            { name: '山东', value: Math.round(Math.random() * 1000) },
            { name: '新疆', value: Math.round(Math.random() * 1000) },
            { name: '江苏', value: Math.round(Math.random() * 1000) },
            { name: '浙江', value: Math.round(Math.random() * 1000) },
            { name: '江西', value: Math.round(Math.random() * 1000) },
            { name: '湖北', value: Math.round(Math.random() * 1000) },
            { name: '广西', value: Math.round(Math.random() * 1000) },
            { name: '甘肃', value: Math.round(Math.random() * 1000) },
            { name: '山西', value: Math.round(Math.random() * 1000) },
            { name: '内蒙古', value: Math.round(Math.random() * 1000) },
            { name: '陕西', value: Math.round(Math.random() * 1000) },
            { name: '吉林', value: Math.round(Math.random() * 1000) },
            { name: '福建', value: Math.round(Math.random() * 1000) },
            { name: '贵州', value: Math.round(Math.random() * 1000) },
            { name: '广东', value: Math.round(Math.random() * 1000) },
            { name: '青海', value: Math.round(Math.random() * 1000) },
            { name: '西藏', value: Math.round(Math.random() * 1000) },
            { name: '四川', value: Math.round(Math.random() * 1000) },
            { name: '宁夏', value: Math.round(Math.random() * 1000) },
            { name: '海南', value: Math.round(Math.random() * 1000) },
            { name: '台湾', value: Math.round(Math.random() * 1000) },
            { name: '香港', value: Math.round(Math.random() * 1000) },
            { name: '澳门', value: Math.round(Math.random() * 1000) }
          ]
        }
      ]
    };
    let myChart = echarts.init(this.ID)
    console.log(1111)
    myChart.setOption(option);
    console.log(2222)
    window.onresize = function () {
      myChart.resize();
    }
  }

  render() {
    const { width = "100%", height = "500px" } = this.props
    return (
      <Card title="温度" className="m-t-16">
        <div ref={ID => this.ID = ID} style={{ width, height }}></div>
      </Card>
    )
  }
}
