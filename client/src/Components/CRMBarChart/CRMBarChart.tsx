import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const CRMBarChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [width,setWidth] = React.useState(window.innerWidth)

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current!);

    const data1: number[] = [10, 6, 7, 8, 5, 10, 8];
    const data2: number[] = [2, 3, 4, 5, 3, 2, 3];

    const emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)',
      },
    };

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize",handleResize)

    const option: echarts.EChartsOption = {

      xAxis: {
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        name: '',
        axisLine: { onZero: true, show: false },
        splitLine: { show: false },
        splitArea: { show: false },
        axisPointer: { show: false },
        axisTick: { show: false },
      },
      yAxis: { show: false },
      grid: {
        bottom: 100,
      },
      series: [
        {
          name: 'bar',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data1,
          itemStyle: {
            color: 'red',
            borderRadius: [8, 8, 8, 8],
          },
          barWidth: '10',
        },
        {
          name: 'bar2',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data2,
          itemStyle: {
            color: 'grey',
            borderRadius: [8, 8, 8, 8],
          },
          barWidth: '15',
        },
      ],
    };

    chartInstance.setOption(option);

    chartInstance.on('brushSelected', function (params: any) {
      const brushed: string[] = [];
      const brushComponent = params.batch[0];

      for (let sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        const rawIndices = brushComponent.selected[sIdx].dataIndex;
        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
      }

      chartInstance.setOption({
        title: {
          backgroundColor: '#333',
          text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
          bottom: 0,
          right: '10%',
          width: 100,
          textStyle: {
            fontSize: 12,
            color: '#fff',
          },
        },
      });
    });

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
      window.removeEventListener("resize",handleResize)
    };
  }, [width]);

  return <div ref={chartRef} style={{ width: '120%', height: '400px',position:"absolute",left:"-34px",top:"-8px" }} />;
};

export default CRMBarChart;