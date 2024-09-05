import React from 'react';
import ReactEcharts from 'echarts-for-react';

const Expense: React.FC = () => {
  // ECharts option
  const option = {
    series: [
      {
        label: {
          show: false
        },
        name: 'Access From',
        type: 'pie',
        radius: ['60%', '70%'],
        center: ['50%', '70%'],
        // Adjust the start and end angle
        startAngle: 180,
        endAngle: 360,
        data: [
          { value: 1048 },
          { value: 735 }
        ],
        color: ["rgb(105, 108, 255)", "rgba(100,100,100,0.2)"]
      }
    ]
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: '500px', width: '200%'}}
    />
  );
};

export default Expense;