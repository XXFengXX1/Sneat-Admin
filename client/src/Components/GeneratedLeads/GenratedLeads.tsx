import React from 'react';
import ReactEcharts from 'echarts-for-react';

const GenratedLeads: React.FC = () => {
  const option = {
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['55%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 4,

        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 648 },
          { value: 735 },
          { value: 580 },
          { value: 884 },
        ],
        color: [
          "rgba(113, 221, 55, 0.7)",
          "rgba(113, 221, 55, 0.4)",
          "rgba(113, 221, 55, 0.2)",
          "rgb(113, 221, 55)"
        ]
      }
    ]
  };

  return <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} className='col-auto'/>;
};

export default GenratedLeads;