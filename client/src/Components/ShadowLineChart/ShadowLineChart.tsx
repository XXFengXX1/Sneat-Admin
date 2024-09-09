import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import axios from 'axios';

const ShadowLineChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [width,setWidth] = React.useState(window.innerWidth)

  const [chartData,setChartData] = React.useState(null || [])
  const [clock,setClock] = React.useState(0)

  const chartName = "ShadowLineChart"


    const fetchData = async() => {
      const res =await axios.get(`http://localhost:8800/api/fetch/fetchChartData?chartName=${chartName}`);
      console.log(res.data.chartData[0].data)
      setChartData(res.data.chartData[0].data);
      
      //set clock reset the data of the chart 
      setTimeout(()=>{setClock(1)},100)
    }

    

  useEffect(() => {
    fetchData()
    const chartInstance = echarts.init(chartRef.current!);

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize",handleResize)

    const option: echarts.EChartsOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          data: chartData,
          type: 'line',
          smooth: true,
          symbol: 'none',
          color: 'rgb(255, 171, 0)',
          lineStyle: {
            shadowBlur: 15,
            shadowOffsetY: 8,
            shadowColor: 'rgba(255, 171, 0,0.8)',
          },
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
      window.removeEventListener("resize",handleResize)
    };
  }, [width,clock]);

  return <div ref={chartRef} style={{ width: '100%', height: '200px' }} />;
};

export default ShadowLineChart;