import React from 'react';
import ReactEcharts from 'echarts-for-react';

const Profit: React.FC = () => {
  // X-axis data and series data
  const xAxisData: string[] = ["Jan", "Apr", "Jul", "Oct"];
  const data1: number[] = [4, 2, 9, 6];
  const data3: number[] = [3, 2, 6, 8];

  // Emphasis style for the bars
  const emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)'
    }
  };

  // ECharts option
  const option = {
    legend: {
      data: ['bar', 'bar3'],
      left: '10%',
      show:false
    },
    tooltip: {},
    xAxis: {
      data: xAxisData,
      name: 'X Axis',
      axisLine: { show: false },
      splitLine: { show: false },
      splitArea: { show: false },
      axisTick: { show: false },
      axisLabel: { show: true }
    },
    yAxis: { show: false },
    grid: {
      bottom: 100
    },
    series: [
      {
        name: 'bar',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: data1,
        barWidth: "8",
        color: "#8fdf82",
        itemStyle: {
          borderRadius: [10, 10, 0, 0]
        }
      },
      {
        name: 'bar3',
        type: 'bar',
        stack: 'two',
        emphasis: emphasisStyle,
        data: data3,
        barWidth: "8",
        color: "rgba(143, 223, 130, 0.3)",
        itemStyle: {
          borderRadius: [10, 10, 0, 0]
        }
      }
    ]
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: '250px', width: '110%' }}
    />
  );
};

export default Profit;