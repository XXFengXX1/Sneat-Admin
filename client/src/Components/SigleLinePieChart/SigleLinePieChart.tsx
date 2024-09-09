import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ThemeContext } from '../../ThemeContext/ThemeContext';

const SigleLinePieChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const {state} = React.useContext(ThemeContext);

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
          radius: ['55%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: `${state.themeColorBac}`,
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1448 },
            { value: 735 },
          ],
          color: ['rgb(105, 108, 255)', 'rgba(200,200,200,0.3)'],
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
    };
  }, [state.themeColorBac]);

  return <div ref={chartRef} className="col-auto" style={{ width:"120px", height: '100px' }} />;
};

export default SigleLinePieChart;