import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { graphic } from 'echarts'
import { LineStyle } from '@mui/icons-material';

const CRMStraiLineChart: React.FC = () => {
  const option = {
    xAxis: {
      type: 'category',
      show:false
    },
    yAxis: {
      type: 'value',
      show:false
    },
    series: [
      {
        data: [250, 250, 200, 200, 150, 150, 260,260,320],
        type: 'line',
        color:"rgba(255,220,40)",
        symbol:"none",
        lineStyle:{
          width:3
        },
        areaStyle: { color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(255,220,40,.6)'
          },
          {
            offset: 1,
            color: 'rgba(255,220,40,.0)'
          }])}
          , markPoint:{
            data:[{
                name: 'one data',
                coord: [8, 320],
                symbol: 'circle',
                symbolSize: 12,
                itemStyle: {
                color: 'white',
                borderType:"solid",
                borderWidth:4,
                borderColor:"rgba(255,220,40)"
                } }
              ]
          }
      }
    ]
  };

  return <ReactEcharts option={option} style={{ height: '225px', width: '125%',position:"absolute",top:"18px",left:"-30px",translate:"scale(1.2) !important" }} />;
};

export default CRMStraiLineChart;