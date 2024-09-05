import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ThemeContext } from '../../ThemeContext/ThemeContext';

const ECoBarChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const {state,dispatch} = React.useContext(ThemeContext);

  const [width,setWidth] = React.useState(window.innerWidth)

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current!);

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize",handleResize)
    
    const option: echarts.EChartsOption = {
      xAxis: {
        type: 'category',
        data: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        axisLine:{
            show:false
        },
        axisPointer:{
            show:false
        },
        axisLabel:{
            color:`${state.fontPColor}`
        },
        axisTick:{
          show:false
        }
      },
      yAxis: {
        type: 'value',
        show:false
      },
      series: [
        {
          data: [
            120,
            {
              value: 200,
              itemStyle: {
                color: 'rgb(105, 108, 255)',
              },
            },
            150,
            80,
            70,
            110,
            130,
          ],
          type: 'bar',
          color: 'rgba(105, 108, 255,0.3)',
          barWidth:"13",
          itemStyle: {
            normal: {
              barBorderRadius: [50, 50, 50, 50],
            },

          }
        },

      ],
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
      window.removeEventListener("resize",handleResize)
    };
  }, [state.fontPColor,width]);

  return <div ref={chartRef} style={{ width: '70%', height: '200px' ,padding:"0px"}} className='col-auto'/>;
};

export default ECoBarChart;