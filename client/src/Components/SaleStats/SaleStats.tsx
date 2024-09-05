import React from 'react';
import ReactEcharts from 'echarts-for-react';

const SaleStats: React.FC = () => {
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
        radius: ['60%', '70%'],
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
          { value: 1748 },
          { value: 735 }
        ],
        color: ["rgb(113, 221, 55)", "rgba(0,0,0,0.1)"]
      }
    ]
  };

  return <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default SaleStats;