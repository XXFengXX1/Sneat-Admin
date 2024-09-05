import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { RadarChart } from 'echarts/charts';
import { TitleComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { color } from 'echarts';
import { LineStyle } from '@mui/icons-material';

// Register the required components
echarts.use([RadarChart, TitleComponent, LegendComponent, CanvasRenderer]);

const RadarChartComponent: React.FC = () => {
  const option = {

    legend: {
      data: ['Income', 'Earning'],
      show:false,
    //   color:"rgb(105, 108, 255)",
    //   itemStyle:{
    //     color:"rgb(105, 108, 255)"
    //   }
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Jan', max: 6500 },
        { name: 'Jun', max: 16000 },
        { name: 'May', max: 30000 },
        { name: 'Apr', max: 38000 },
        { name: 'Mar', max: 52000 },
        { name: 'Feb', max: 25000 },
      ],
      splitLine:{
        lineStyle:{
           color: "rgba(150,150,150,0.3)"
        }
      },
      splitArea:{
        show:false
      },
      axisLine:{
        lineStyle:{
            color: "rgba(150,150,150,0.5)"
        }
      }
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [4200, 7000, 20000, 35000, 50000, 18000],
            name: 'Income',
            areaStyle: {
              color: 'rgb(105, 108, 255)',
            },
            lineStyle: {
              color: 'rgba(0, 0, 0, 0)',
            },
            symbol: 'none',
            color:"rgb(105, 108, 255)"
          },
          {
            value: [4500, 16000, 18000, 26000, 42000, 17000],
            name: 'Earning',
            areaStyle: {
              color: 'rgba(3, 195, 236, 1)',
            },
            lineStyle: {
              color: 'rgba(0, 0, 0, 0)',
            },
            symbol: 'none',
          },
        ],
      },
    ],
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: '400px', width: '100%' }}
    />
  );
};

export default RadarChartComponent;