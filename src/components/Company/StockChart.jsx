import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const StockChart = ({ stockHistory }) => {
  const options = {
    chart: {
      type: 'candlestick',
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function (value) {
          return value;
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const candleInfo = stockHistory.map(({ date, open, low, high, close }) => ({
    x: new Date(date),
    y: [open, high, low, close],
  }));

  const series = [
    {
      data: candleInfo,
    },
  ];

  return <ReactApexChart options={options} series={series} type="candlestick" height={'100%'} />;
};

export default StockChart;
