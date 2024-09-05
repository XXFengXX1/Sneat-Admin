import React from 'react';
import ReactEcharts from 'echarts-for-react';

type Props = {
  color:String,
  progress:number[]
}


export default function TeamMemberProgress({color,progress}:Props) {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['55%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        itemStyle: {
          borderRadius: 8
        },
        labelLine: {
          show: false
        },
        data: [
          { value: `${progress[0]}` },
          { value: `${progress[1] - progress[0] }` }
        ],
        color: [`${color}`, "rgba(0,0,0,0.1)"]
      }
    ]
  };

  return <ReactEcharts option={option} style={{ height: '50px', width: '100%' }} />;
};

