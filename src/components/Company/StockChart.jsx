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

  const chartChange = chartMode => {
    setStockHistory(getStockHistory(chartMode));
  };

  const candleInfo = stockHistory.map(({ date, open, low, high, close }) => ({
    x: new Date(date),
    y: [open, high, low, close],
  }));

  const candleSeries = [
    {
      data: candleInfo,
    },
  ];

  const candleOptions = {
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#e64747',
          downward: '#3861e8',
        },
        wick: {
          useFillColor: true,
        },
      },
    },
    chart: {
      type: 'candlestick',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 150,
        dynamicAnimation: {
          enabled: true,
          speed: 150,
        },
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeFormatter: {
          year: 'yyyy',
          month: "MMM 'yy",
          day: 'dd MMM',
          hour: 'HH:mm',
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        formatter: function (value) {
          return value + '.0';
        },
      },
    },
  };

  return (
    <div className="graph">
      <ul>
        <li>
          <input type="radio" id="oneday" name="chart-date" value="1day" defaultChecked />
          <label
            className="shadow-box"
            htmlFor="oneday"
            onClick={() => chartChange(stockHistory1Day)}
          >
            1일
          </label>
        </li>
        <li>
          <input type="radio" id="fiveday" name="chart-date" value="5day" />
          <label
            className="shadow-box"
            htmlFor="fiveday"
            onClick={() => chartChange(stockHistory5Day)}
          >
            5일
          </label>
        </li>
        <li>
          <input id="onemonth" type="radio" name="chart-date" value="1month" />
          <label
            className="shadow-box"
            htmlFor="onemonth"
            onClick={() => chartChange(stockHistory1Month)}
          >
            1개월
          </label>
        </li>
        <li>
          <input id="oneyear" type="radio" name="chart-date" value="1year" />
          <label
            className="shadow-box"
            htmlFor="oneyear"
            onClick={() => chartChange(stockHistory1Year)}
          >
            1년
          </label>
        </li>
      </ul>
      <div className="graph-chart shadow-box">
        <ReactApexChart
          options={candleOptions}
          series={candleSeries}
          type="candlestick"
          height={'100%'}
        />
      </div>
    </div>
  );
};

export default StockChart;
