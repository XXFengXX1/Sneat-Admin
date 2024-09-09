import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import axios from 'axios';

const BarChartRevenue: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [width,setWidth] = React.useState(window.innerWidth)
  const {state,dispatch} = React.useContext(ThemeContext);

  
  const [chartData1,setChartData1] = React.useState(null || [])
  const [chartData2,setChartData2] = React.useState(null || [])
  const [clock,setClock] = React.useState(0)

  const chartName1 = "BarChartRevenue1"
  const chartName2 = "BarChartRevenue2"

    const fetchData1 = async() => {
      const res =await axios.get(`http://localhost:8800/api/fetch/fetchChartData?chartName=${chartName1}`);
      console.log(res.data.chartData[0].data)
      setChartData1(res.data.chartData[0].data);
      
      //set clock reset the data of the chart 
      setTimeout(()=>{setClock(1)},100)
    }

    
    const fetchData2 = async() => {
      const res =await axios.get(`http://localhost:8800/api/fetch/fetchChartData?chartName=${chartName2}`);
      console.log(res.data.chartData[0].data)
      setChartData2(res.data.chartData[0].data);
    }

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current!);
    fetchData2()
    fetchData1()

    const xAxisData: string[] = [];
    const data1: number[] = chartData1;
    const data2: number[] = chartData2;
    const dataName: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 'Jul'];
    
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize",handleResize)

    const emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)',
      },
    };

    const option: echarts.EChartsOption = {
      legend: {
        data: ['2023', '2022'],
        left: '3%',

        itemStyle:{
            borderRadius:"10",
            
        },

      },
      xAxis: {
        type: 'category',
        data: dataName,
        name: 'X Axis',
        axisLine: { onZero: true },
        splitLine: { show: false },
        splitArea: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(230,230,230,0.1)",
          },
          
        },
        axisLabel: {
          show: true,
          color:`${state.fontPColor}`
        },
      },
      yAxis: {
        axisLabel: {
          color: `${state.fontPColor}`,
        },
        axisLine:{
          show:false
        },
        axisPointer:{
          type:"shadow"
        },
        axisTick:{
          show:false
        },
        splitLine:{
          lineStyle:{
            color:'rgba(150,150,150,0.25)'
          }
        }
        
      },
      grid: {
        bottom: 100,
      },
      series: [
        {
          name: '2023',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data1,
          barWidth: "10",
          color: "rgb(105, 108, 255)",
          itemStyle: {
            normal: {
              barBorderRadius: [50, 50, 50, 50],
            },
          },
        },
        {
          name: '2022',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data2,
          color: "rgb(82, 205, 229)",
          itemStyle: {
            normal: {
              barBorderRadius: [50, 50, 50, 50],
            },
          },
        },
      ],
    };

    chartInstance.setOption(option);

    chartInstance.on('brushSelected', (params: any) => {
      const brushed: string[] = [];
      const brushComponent = params.batch[0];

      for (let sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        const rawIndices = brushComponent.selected[sIdx].dataIndex;
        brushed.push(`[Series ${sIdx}] ${rawIndices.join(', ')}`);
      }

      chartInstance.setOption({
        title: {
          backgroundColor: '#333',
          text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
          bottom: 0,
          right: '10%',
          width: "100%",
          textStyle: {
            fontSize: 12,
            color: '#fff',
          },
        },
      });
    });

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
      window.removeEventListener("resize",handleResize)
    };
  }, [width,state.fontPColor,clock]);

  return <div ref={chartRef} style={{ width: '100%', height: '360px' }} />;
};

export default BarChartRevenue;