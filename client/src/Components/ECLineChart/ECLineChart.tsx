import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { graphic } from 'echarts'

const ECLineChart: React.FC = () => {
  const getOption = () => {
    return {
      xAxis: {
        type: 'category',
        show:true,
        data: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        splitLine:{ show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: true }
      },
      yAxis: {
        type: 'value',
        show:''
      },
      series: [
        {
          name:"series1",
          data: [10, 32, 20, 80, 20, 70,30],
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

  return <ReactEcharts style={{width: '70%', height: '200px' ,padding:"0px",color:"green"}} className='col-auto' option={getOption()} />;
};

export default ECLineChart;