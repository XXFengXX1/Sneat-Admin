import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// Register the required components
echarts.use([BarChart, GridComponent, TooltipComponent, TitleComponent, LegendComponent, CanvasRenderer]);

const EExpenseChart: React.FC = () => {
  const xAxisData: string[] = []; // Assuming data should be added here if necessary
  const data1: number[] = [5, 9, 5, 10, 12, 10, 7, 6, 3, 2, 6];
  const data2: number[] = [-10, -5, -6, -4, -6, -4, -8, -6, -3, -11, -5];

  const emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)',
    },
  };

  const option = {
    xAxis: {
      data: xAxisData,
      name: 'X Axis',
      axisLine: { onZero: true },
      splitLine: { show: false },
      splitArea: { show: false },
      show: false,
    },
    yAxis: { show: false },
    grid: {
      bottom: 100,
    },
    series: [
      {
        name: 'bar',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: data1,
        barWidth: '8',
        itemStyle: {
          borderRadius: [10, 10, 0, 0],
        },
        color:"rgb(105, 108, 255)"
      },
      {
        name: 'bar2',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: data2,
        barWidth: '8',
        itemStyle: {
          borderRadius: [0, 0, 10, 10],
        },
        color:"rgb(255, 171, 0)"
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: '350px', width: '110%' }} />;
};

export default EExpenseChart;