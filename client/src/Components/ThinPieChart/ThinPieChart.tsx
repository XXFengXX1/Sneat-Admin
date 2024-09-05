import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const ThinPieChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current!);

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['60%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 1,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048 },
            { value: 735 },
            { value: 280 },
            { value: 484 },
          ],
          color: [
            'rgb(113, 221, 55)',
            'rgb(105, 108, 255)',
            'rgb(100,100,100)',
            'rgb(55, 202, 221)',
          ],
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '150%', height: '200px' }} />;
};

export default ThinPieChart;