import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const ShadowLineChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [width,setWidth] = React.useState(window.innerWidth)

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current!);

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize",handleResize)

    const option: echarts.EChartsOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          data: [120, 932, 301, 734, 590, 1330, 1320],
          type: 'line',
          smooth: true,
          symbol: 'none',
          color: 'rgb(255, 171, 0)',
          lineStyle: {
            shadowBlur: 15,
            shadowOffsetY: 8,
            shadowColor: 'rgba(255, 171, 0,0.8)',
          },
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
      window.removeEventListener("resize",handleResize)
    };
  }, [width]);

  return <div ref={chartRef} style={{ width: '100%', height: '200px' }} />;
};

export default ShadowLineChart;