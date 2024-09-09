import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { color } from 'echarts';
import { graphic } from 'echarts'
import { BorderStyle } from '@mui/icons-material';
import axios from 'axios';

const LineChart: React.FC = () => {
  const [chartData,setChartData] = React.useState(null || [])

  const chartName = "orderLineChart"

  React.useEffect (() => {
    
    const fetchData = async() => {
      const res =await axios.get(`http://localhost:8800/api/fetch/fetchChartData?chartName=${chartName}`);
      console.log(res.data.chartData[0].data)
      setChartData(res.data.chartData[0].data);
    }

    fetchData()

  },[])

  const getOption = () => {
    return {
      xAxis: {
        type: 'category',
        show:"",
        // splitLine:{ show: false },
        // axisLine: { show: false },
        // axisTick: { show: false },
        // axisLabel: { show: false }
      },
      yAxis: {
        type: 'value',
        show:''
      },
      series: [
        {
          name:"series1",
          data: chartData,
          type: 'line',
          smooth: true,
          color:"#8fdf82",
          areaStyle: { color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#8fdf82'
            },
            {
              offset: 1,
              color: 'rgb(143, 223, 130,0)'
            }])}
            ,
            symbol:"none",
            markPoint:{
                data:[{
                    name: 'one data',
                    coord: [6, 90],
                    symbol: 'circle',
                    symbolSize: 12,
                    itemStyle: {
                    color: 'white',
                    borderType:"solid",
                    borderWidth:4,
                    borderColor:"#8fdf82"
                    } }
                  ]
              }

        },
        
      ],


    };
  };

  return <ReactEcharts style={{height:"200px",width:"100%",color:"green"}}  option={getOption()} />;
};

export default LineChart;