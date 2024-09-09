import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import axios from 'axios';

const RevenueBarChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const {state,dispatch} = React.useContext(ThemeContext);

  const [width,setWidth] = React.useState(window.innerWidth)

  const [clock,setClock] = React.useState(0)
  const [processedChartData,setProcessedData] = React.useState(null || [])

  const chartName = "RevenueBarChart"
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
    130,]

  const processData = (Arr:never[],arrIndex:number) =>{
      let replacedData = {value:Arr[arrIndex],itemStyle: {
        color: 'rgb(105, 108, 255)',
      },}

      Arr[arrIndex] = (replacedData as never )
      return Arr
  }


  const fetchData = async() => {
    const res =await axios.get(`http://localhost:8800/api/fetch/fetchChartData?chartName=${chartName}`);

    let rawData =  res.data.chartData[0].data

      var max_of_Array = Math.max(...rawData)
      let index = rawData.indexOf((max_of_Array as never),0)

      let finalData = processData(rawData,index)
      setProcessedData(finalData)
    

    //set clock reset the data of the chart 
    setTimeout(()=>{setClock(1)},500)
  }

  useEffect(() => {
    fetchData()
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
          data: processedChartData,
          type: 'bar',
          color: 'rgba(105, 108, 255,0.3)',
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
      window.removeEventListener("resize",handleResize)
    };
  }, [state.fontPColor,width,clock]);

  return <div ref={chartRef} style={{ width: '100%', height: '200px' }} />;
};

export default RevenueBarChart;