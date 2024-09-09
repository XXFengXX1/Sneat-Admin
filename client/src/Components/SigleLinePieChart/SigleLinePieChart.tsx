import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import axios from 'axios';

const SigleLinePieChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const {state,dispatch} = React.useContext(ThemeContext);

  const [chartData,setChartData] = React.useState(null || [])
  const [clock,setClock] = React.useState(0)

  const chartName = "SigleLinePieChart"


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

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['55%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: `${state.themeColorBac}`,
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: chartData[0] },
            { value: chartData[1] },
          ],
          color: ['rgb(105, 108, 255)', 'rgba(200,200,200,0.3)'],
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
    };
  }, [state.themeColorBac,clock]);

  return <div ref={chartRef} className="col-auto" style={{ width:"120px", height: '100px' }} />;
};

export default SigleLinePieChart;