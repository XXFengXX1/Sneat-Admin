import ReactEcharts from 'echarts-for-react';
import React from 'react';

const EcBalanceChart: React.FC = () => {

    const orange:String = "rgb(255, 171, 0)"
  const orangeBac:String ="rgb(255, 171, 0,0.15)"
  const getOption = () => {
    return {
      xAxis: {
        type: 'category',
        show:"true",
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
          data: [40, 20, 80, 50, 60, 40,100],
          type: 'line',
          smooth: true,
          color:`${orange}`,
          lineStyle:{
            width:4,
            shadowBlur:"10",
            shadowColor:`${orangeBac}`,
            shadowOffsetY:"4"
          },
            symbol:"none",
            markPoint:{
                data:[{
                    name: 'one data',
                    coord: [6, 100],
                    symbol: 'circle',
                    symbolSize: 12,
                    itemStyle: {
                    color: 'white',
                    borderType:"solid",
                    borderWidth:4,
                    borderColor:`${orange}`
                    },}
                  ]
              }
              
        },
      ],
    };
  };

  return <ReactEcharts style={{height:"300px",width:"120%",color:"green",position:"absolute",left:"-40px",top:"100px"}}  option={getOption()} />;
};

export default EcBalanceChart;