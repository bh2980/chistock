import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  stockHistory1Day,
  stockHistory5Day,
  stockHistory1Month,
  stockHistory1Year,
} from './dummyData';

const getStockHistory = dummyStock => {
  if ('historical' in dummyStock) {
    return [...dummyStock.historical].reverse();
  } else {
    return [...dummyStock].reverse();
  }
};

const StockChart = () => {
  const [stockHistory, setStockHistory] = useState(getStockHistory(stockHistory1Day));

  const candleInfo = stockHistory.map(({ date, open, low, high, close }) => ({
    x: date,
    y: [open, high, low, close],
  }));

  const series = [
    {
      data: candleInfo,
    },
  ];

  const options = {
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#e64747',
          downward: '#1b67e0',
        },
        wick: {
          useFillColor: true,
        },
      },
    },
    chart: {
      type: 'candlestick',
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function (value) {
          switch ('1d') {
            case '1d':
              return value + 'd';
              break;
            case '5d':
              return value + '5';
              break;
            case '1m':
              return value + 'M';
              break;
            case '1y':
              return value + 'Y';
              break;
          }
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return <ReactApexChart options={options} series={series} type="candlestick" height={'100%'} />;
};

export default StockChart;
