import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { color } from 'echarts';
import { graphic } from 'echarts'
import { BorderStyle } from '@mui/icons-material';

const LineChart: React.FC = () => {
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
          data: [10, 122, 20, 30, 80, 30,90],
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