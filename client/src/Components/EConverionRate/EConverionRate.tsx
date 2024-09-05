import ReactEcharts from 'echarts-for-react';
import React from 'react';

const EConverionRate: React.FC = () => {
  const getOption = () => {
    return {
      xAxis: {
        type: 'category',
        show:false,
        axisLabel: { show: true },
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        name: '',
        axisLine: { onZero: true, show: false },
        splitLine: { show: false },
        splitArea: { show: false },
        axisPointer: { show: false },
        axisTick: { show: false },
      },
      yAxis: {
        type: 'value',
        show:''
      },
      series: [
        {
          name:"series1",
          data: [0, 20, 40, 30, 60],
          type: 'line',
          smooth: true,
          color:"rgb(105, 108, 255)",
          lineStyle:{
            width:4,
            shadowBlur:"10",
            shadowColor:"rgb(100,100,100,0.6)",
            shadowOffsetY:"4"
          },
            symbol:"none",
            markPoint:{
                data:[{
                    name: 'one data',
                    coord: [4, 60],
                    symbol: 'circle',
                    symbolSize: 12,
                    itemStyle: {
                    color: 'white',
                    borderType:"solid",
                    borderWidth:4,
                    borderColor:"rgb(105, 108, 255)"
                    },},{
                      symbol: 'circle',
                      coord:[2,80],
                      symbolSize: 12,
                      itemStyle: {
                        color: 'white',
                        borderType:"solid",
                        borderWidth:4,
                        borderColor:"black"
                      },
                    }
                  ]
              }
              
        },
      ],
    };
  };

  return <ReactEcharts style={{height:"100px",width:"60%",color:"green",position:"absolute",left:"180px",top:"80px"}}  option={getOption()} />;
};

export default EConverionRate;