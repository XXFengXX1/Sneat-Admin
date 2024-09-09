import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ThemeContext } from '../../ThemeContext/ThemeContext';

const PieChartRevenue: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  let  [ArrColor,setArrColor] = React.useState([0.05, 'rgba(105, 108, 255,0.1)'])

  const {state,dispatch} = React.useContext(ThemeContext);
  
  let colorA: any[] =[]
  for(var i:number= 0.05;i<1;i = i +0.05){
    // let temArr: any[] = []
    colorA.push([ArrColor[0],ArrColor[1]])
   
    ArrColor[0] = Number(ArrColor[0]) + 0.05
    ArrColor[1] = `rgba(105, 108, 255,${0.05 + i})`
  
  }

  

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current!);

    const option: echarts.EChartsOption = {
      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 16,
              color:colorA
            },
          },
          pointer: {
            itemStyle: {
              color: 'auto',
            },show:false
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: `${state.themeColorMain}`,
              width: 2,
            },
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: `${state.themeColorMain}`,
              width: 4,
            },
          },
          axisLabel: {
            color: 'inherit',
            distance: 40,
            show:false
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} km/h',
            color: 'inherit',
            show:false
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    };

    chartInstance.setOption(option);

    const intervalId = setInterval(() => {
      chartInstance.setOption({
        series: [
          {
            data: [
              {
                value: +(Math.random() * 100).toFixed(2),
              },
            ],
          },
        ],
      });
    }, 2000);

    // Cleanup on unmount
    return () => {
      clearInterval(intervalId);
      chartInstance.dispose();
    };
  }, [state.themeColorMain]);

  return <div ref={chartRef} className='PiechartRevenue' style={{ width: '100%', height: '200px',position:"static",margin:"0 auto", }} />;
};

export default PieChartRevenue;