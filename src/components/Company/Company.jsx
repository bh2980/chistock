import React, { useState, useEffect } from 'react';
import './css/Company.scss';
import CompanyPresenter from './CompanyPresenter';

const companyProfile = [
  {
    symbol: 'AAPL', //티커
    price: 163.4, //실시간 가격
    beta: 1.202736,
    volAvg: 93034629,
    mktCap: 2669040893952,
    lastDiv: 0.865,
    range: '116.21-182.94',
    changes: -1.1100006, //가격 등락 -> 비율 등락 계산
    companyName: 'Apple Inc.', //회사 이름
    currency: 'USD', //기준 단위
    cik: '0000320193',
    isin: 'US0378331005',
    cusip: '037833100',
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
    industry: 'Consumer Electronics',
    website: 'https://www.apple.com',
    //설명
    description:
      "Apple Inc. (Apple) designs, manufactures and markets mobile communication and media devices, personal computers, and portable digital music players, and a variety of related software, services, peripherals, networking solutions, and third-party digital content and applications. The Company's products and services include iPhone, iPad, Mac, iPod, Apple TV, a portfolio of consumer and professional software applications, the iOS and OS X operating systems, iCloud, and a variety of accessory, service and support offerings. The Company also delivers digital content and applications through the iTunes Store, App StoreSM, iBookstoreSM, and Mac App Store. The Company distributes its products worldwide through its retail stores, online stores, and direct sales force, as well as through third-party cellular network carriers, wholesalers, retailers, and value-added resellers. In February 2012, the Company acquired app-search engine Chomp.",
    ceo: 'Mr. Timothy Cook',
    sector: 'Technology',
    country: 'US',
    fullTimeEmployees: '154000',
    phone: '14089961010',
    address: '1 Apple Park Way',
    city: 'Cupertino',
    state: 'CALIFORNIA',
    zip: '95014',
    dcfDiff: 89.92,
    dcf: 166.582,
    image: 'https://financialmodelingprep.com/image-stock/AAPL.png', //로고
    ipoDate: '1980-12-12',
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false,
  },
];

const companyQuote = [
  {
    symbol: 'AAPL', //티커
    name: 'Apple Inc.', //이름
    price: 164.105, //실시간 가격
    changesPercentage: -0.2461849, //등락 비율
    change: -0.40499878, //등락 가격
    dayLow: 162.97,
    dayHigh: 166.32,
    yearHigh: 182.94,
    yearLow: 116.21,
    marketCap: 2680556617728.0,
    priceAvg50: 168.0756,
    priceAvg200: 147.22935,
    volume: 77200885,
    avgVolume: 93034629,
    exchange: 'NASDAQ',
    open: 164.415,
    previousClose: 164.51, //전일 종가
    eps: 5.61,
    pe: 29.252226,
    earningsAnnouncement: '2022-01-27T21:00:00.000+0000',
    sharesOutstanding: 16334399426,
    timestamp: 1642791863, //받아올때 시간
  },
];

const stockHistory = [
  {
    date: '2022-01-21 16:00:00',
    open: 162.4,
    low: 162.39,
    high: 162.69,
    close: 162.53,
    volume: 634163,
  },
  {
    date: '2022-01-21 15:59:00',
    open: 163.17,
    low: 162.3,
    high: 163.18,
    close: 162.41,
    volume: 1871004,
  },
  {
    date: '2022-01-21 15:58:00',
    open: 162.87,
    low: 162.8691,
    high: 163.18,
    close: 163.17,
    volume: 848850,
  },
  {
    date: '2022-01-21 15:57:00',
    open: 162.5,
    low: 162.47,
    high: 162.96,
    close: 162.875,
    volume: 665920,
  },
  {
    date: '2022-01-21 15:56:00',
    open: 162.815,
    low: 162.47,
    high: 162.82,
    close: 162.49,
    volume: 502015,
  },
  {
    date: '2022-01-21 15:55:00',
    open: 162.65,
    low: 162.6,
    high: 162.91,
    close: 162.8168,
    volume: 695548,
  },
  {
    date: '2022-01-21 15:54:00',
    open: 162.64,
    low: 162.52,
    high: 162.7199,
    close: 162.6399,
    volume: 600625,
  },
  {
    date: '2022-01-21 15:53:00',
    open: 162.6701,
    low: 162.61,
    high: 162.74,
    close: 162.66,
    volume: 374139,
  },
  {
    date: '2022-01-21 15:52:00',
    open: 162.78,
    low: 162.64,
    high: 162.95,
    close: 162.67,
    volume: 376766,
  },
  {
    date: '2022-01-21 15:51:00',
    open: 162.91,
    low: 162.785,
    high: 163.29,
    close: 162.785,
    volume: 407970,
  },
  {
    date: '2022-01-21 15:50:00',
    open: 163.18,
    low: 162.68,
    high: 163.19,
    close: 162.9,
    volume: 665508,
  },
  {
    date: '2022-01-21 15:49:00',
    open: 163.23,
    low: 163.03,
    high: 163.36,
    close: 163.18,
    volume: 295379,
  },
  {
    date: '2022-01-21 15:48:00',
    open: 163.15,
    low: 163.11,
    high: 163.4083,
    close: 163.23,
    volume: 299148,
  },
  {
    date: '2022-01-21 15:47:00',
    open: 162.99,
    low: 162.9502,
    high: 163.28,
    close: 163.135,
    volume: 260981,
  },
  {
    date: '2022-01-21 15:46:00',
    open: 163.07,
    low: 162.92,
    high: 163.24,
    close: 163.01,
    volume: 369863,
  },
  {
    date: '2022-01-21 15:45:00',
    open: 163.19,
    low: 162.94,
    high: 163.31,
    close: 163.065,
    volume: 423445,
  },
];

const stockDailyHistory = {
  symbol: 'AAPL',
  historical: [
    {
      date: '2021-02-03',
      open: 135.759995,
      high: 135.770004,
      low: 133.610001,
      close: 133.940002,
      adjClose: 133.119354,
      volume: 89880900,
      unadjustedVolume: 89880900,
      change: -1.81999,
      changePercent: -1.341,
      vwap: 134.44,
      label: 'February 03, 21',
      changeOverTime: -0.01341,
    },
    {
      date: '2021-02-02',
      open: 135.729996,
      high: 136.309998,
      low: 134.610001,
      close: 134.990005,
      adjClose: 134.162918,
      volume: 83305400,
      unadjustedVolume: 83305400,
      change: -0.73999,
      changePercent: -0.545,
      vwap: 135.30333,
      label: 'February 02, 21',
      changeOverTime: -0.00545,
    },
    {
      date: '2021-02-01',
      open: 133.75,
      high: 135.380005,
      low: 130.929993,
      close: 134.139999,
      adjClose: 133.318115,
      volume: 106239800,
      unadjustedVolume: 106239800,
      change: 0.39,
      changePercent: 0.292,
      vwap: 133.48333,
      label: 'February 01, 21',
      changeOverTime: 0.00292,
    },
    {
      date: '2021-01-29',
      open: 135.830002,
      high: 136.740005,
      low: 130.210007,
      close: 131.960007,
      adjClose: 131.151489,
      volume: 177523800,
      unadjustedVolume: 177523800,
      change: -3.87,
      changePercent: -2.849,
      vwap: 132.97001,
      label: 'January 29, 21',
      changeOverTime: -0.02849,
    },
    {
      date: '2021-01-28',
      open: 139.520004,
      high: 141.990005,
      low: 136.699997,
      close: 137.089996,
      adjClose: 136.250046,
      volume: 142621100,
      unadjustedVolume: 142621100,
      change: -2.43001,
      changePercent: -1.742,
      vwap: 138.59333,
      label: 'January 28, 21',
      changeOverTime: -0.01742,
    },
    {
      date: '2021-01-27',
      open: 143.429993,
      high: 144.300003,
      low: 140.410004,
      close: 142.059998,
      adjClose: 141.189606,
      volume: 140843800,
      unadjustedVolume: 140843800,
      change: -1.37,
      changePercent: -0.955,
      vwap: 142.25667,
      label: 'January 27, 21',
      changeOverTime: -0.00955,
    },
    {
      date: '2021-01-26',
      open: 143.600006,
      high: 144.300003,
      low: 141.369995,
      close: 143.160004,
      adjClose: 142.282852,
      volume: 98390600,
      unadjustedVolume: 98390600,
      change: -0.44,
      changePercent: -0.306,
      vwap: 142.94333,
      label: 'January 26, 21',
      changeOverTime: -0.00306,
    },
    {
      date: '2021-01-25',
      open: 143.070007,
      high: 145.089996,
      low: 136.539993,
      close: 142.919998,
      adjClose: 142.044342,
      volume: 157611700,
      unadjustedVolume: 157611700,
      change: -0.15001,
      changePercent: -0.105,
      vwap: 141.51666,
      label: 'January 25, 21',
      changeOverTime: -0.00105,
    },
    {
      date: '2021-01-22',
      open: 136.279999,
      high: 139.850006,
      low: 135.020004,
      close: 139.070007,
      adjClose: 138.217926,
      volume: 114459400,
      unadjustedVolume: 114459400,
      change: 2.79001,
      changePercent: 2.047,
      vwap: 137.98001,
      label: 'January 22, 21',
      changeOverTime: 0.02047,
    },
    {
      date: '2021-01-21',
      open: 133.800003,
      high: 139.669998,
      low: 133.589996,
      close: 136.869995,
      adjClose: 136.031387,
      volume: 120150900,
      unadjustedVolume: 120150900,
      change: 3.06999,
      changePercent: 2.294,
      vwap: 136.71,
      label: 'January 21, 21',
      changeOverTime: 0.02294,
    },
  ],
};

const getCompanyProfile = () => {
  return companyProfile[0];
};

const getCompanyQuote = () => {
  return companyQuote[0];
};

const getStockHistory = () => {
  return [...stockHistory].reverse();
};

const getStockDailyHistory = () => {
  return [...stockDailyHistory.historical].reverse();
};

const Company = () => {
  const [profile, setProfile] = useState(getCompanyProfile());
  const [quote, setQuote] = useState(getCompanyQuote());
  const [stockHistory, setStockHistory] = useState(getStockHistory());

  return <CompanyPresenter />;
};

export default Company;
