import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ThemeContext } from '../../ThemeContext/ThemeContext';

const HeatMap: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const {state,dispatch} = React.useContext(ThemeContext);

  const [width,setWidth] = React.useState(window.innerWidth)
  

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current!);
  const hours: string[] = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  const days: string[] = ['1k', '2k', '3k', '4k', '5k', '6k', '7k', '8k'];

  const handleResize = () => setWidth(window.innerWidth)
  window.addEventListener("resize",handleResize)
  
  // Map the data as described in your code
  const data: [number, number, number | string][] = [
    [0, 0, 1], [0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1], [0, 5, 1], [0, 6, 1], [0, 7, 1],
    [1, 0, 1], [1, 1, 2], [1, 2, 2], [1, 3, 2], [1, 4, 2], [1, 5, 2], [1, 6, 2], [1, 7, 1],
    [2, 0, 1], [2, 1, 2], [2, 2, 2], [2, 3, 4], [2, 4, 3], [2, 5, 3], [2, 6, 3], [2, 7, 1],
    [3, 0, 1], [3, 1, 2], [3, 2, 3], [3, 3, 4], [3, 4, 4], [3, 5, 3], [3, 6, 3], [3, 7, 1],
    [4, 0, 1], [4, 1, 2], [4, 2, 3], [4, 3, 4], [4, 4, 4], [4, 5, 3], [4, 6, 2], [4, 7, 1],
    [5, 0, 1], [5, 1, 2], [5, 2, 2], [5, 3, 2], [5, 4, 2], [5, 5, 3], [5, 6, 3], [5, 7, 1],
    [6, 0, 1], [6, 1, 2], [6, 2, 2], [6, 3, 2], [6, 4, 2], [6, 5, 2], [6, 6, 3], [6, 7, 1],
    [7, 0, 1], [7, 1, 1], [7, 2, 1], [7, 3, 1], [7, 4, 1], [7, 5, 1], [7, 6, 1], [7, 7, 1],
   
  ].map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });

  const option = {
    tooltip: {
      position: 'top'
    },
    grid: {
      height: '60%',
      top: '0%',
      show: false
    },
    xAxis: {
      type: 'category',
      data: hours,
      splitArea: {
        show: true
      },
      show: true,
      axisTick:{
        show:false
      }
    },
    yAxis: {
      type: 'category',
      data: days,
      splitArea: {
        show: true
      },
      show: true,
      axisTick:{
        show:false
      }
    },
    visualMap: {
      min: 1,
      max: 4,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%',
      inRange: {
        color: ['rgb(105, 108, 255,0.1)', 'rgb(105, 108, 255)'] // From smaller to bigger value
      }
    },
    series: [
      {
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
          show: false
        },
        itemStyle: {
          borderRadius: 8,
          borderColor: `${state.themeColorMain}`,
          borderWidth: 8,
          color: "rgba(100,100,100,0.1)"
        },

      }
    ]
  };
  chartInstance.setOption(option);
  return () => {
    chartInstance.dispose();
    window.removeEventListener("resize",handleResize)
  };
}, [state.themeColorBac,width]);

  return <div ref={chartRef} style={{ height: '500px', width: '112%',position:"absolute",left:"-10px" }} />;
};

export default HeatMap;