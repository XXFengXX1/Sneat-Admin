import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { color } from 'echarts';
import { graphic } from 'echarts'
import { BorderStyle, WidthFull } from '@mui/icons-material';

const IncomeLineChart: React.FC = () => {
  const getOption = () => {
    return {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel:{
          color:"rgba(200,200,200,0.5)"
        },
        axisLine:{
          lineStyle:{

            color:"rgba(230,230,230,0.3)"
          }
        }

        
      },
      yAxis: {
        type: 'value',
        show:false,
        axisLine:{
          lineStyle:{
            color:"rgba(230,230,230,0.3)",
            width:10
          }
        },
        splitLine:{
          color:"rgba(105, 108, 255,0.3)"
        },
        color:"rgba(230,230,230,0.3)"
      },
      series: [
        {
          name:"series1",
          data: [70, 52, 90, 60, 150, 98,120],
          grid:{
            color:"rgba(105, 108, 255,0.3)"
          },
          type: 'line',
          smooth: true,
          color:"rgb(105, 108, 255)",
          areaStyle: { color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(105, 108, 255,0.5)'
            },
            {
              offset: 1,
              color: 'rgba(105, 108, 255,0)'
            }])},
            symbol:"none",
            markPoint:{
                data:[{
                    name: 'one data',
                    coord: [6, 120],
                    symbol:'circle',
                    symbolSize: 12,
                    itemStyle: {
                    color: 'white',
                    borderType:"solid",
                    borderWidth:4,
                    borderColor:"rgb(105, 108, 255)"
                    } }
                  ]
              }

        },
        
      ],


    };
  };

  return <ReactEcharts style={{height:"300px",width:"150%",color:"rgb(105, 108, 255)"}}  option={getOption()} />;
};

export default IncomeLineChart;