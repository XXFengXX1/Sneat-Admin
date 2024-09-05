import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { color, graphic } from 'echarts'

import { ThemeContext } from '../../ThemeContext/ThemeContext';

// Register the required components
echarts.use([LineChart, GridComponent, CanvasRenderer]);


const IncomeChart: React.FC = () => {

  const chartRef = useRef<HTMLDivElement | null>(null);
  const {state,dispatch} = React.useContext(ThemeContext);
  const [width,setWidth] = React.useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize",handleResize)
    const chartInstance = echarts.init(chartRef.current!);
  const option = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisTick:{
        show:false
      },
      axisLine:{
        show:false
      },
      axisLabel:{
        color:`${state.fontPColor}`,

      },
    },
    yAxis: {
      type: 'value',
      axisLine:{
        color:`${state.fontPColor}`,
        show:false
      },
      splitLine:{
        lineStyle:{

            color:`rgba(100,100,100,0.2)`,
        }
      }
    },
    series: [
      {
        data: [150, 150, 230, 230, 110, 110, 60, 60, 200, 200, 310, 310],
        type: 'line',
        symbol: 'none',
        color:"rgb(105, 108, 255)",
        
        lineStyle:{
            width:4
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgb(105, 108, 255,0.4)' },
            { offset: 1, color: 'rgb(105, 108, 255,0.0)' },
          ]),
        },
      },
    ],
  };
  chartInstance.setOption(option);
  return () => {
    chartInstance.dispose();
    window.removeEventListener("resize",handleResize)
  };
}, [state.fontPColor,width]);

  return (
    <div
     ref={chartRef}
      style={{ height: '370px', width: '100%' }}
    />
  );
};

export default IncomeChart;