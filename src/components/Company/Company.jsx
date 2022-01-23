import React, { useState, useEffect } from 'react';
import './css/Company.scss';
import { ReactComponent as TitleIcon } from 'assets/icons/company-title-icon.svg';
import StockChart from './StockChart';

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

const historyDaily = {
  symbol: 'AAPL',
  historical: [
    {
      date: '2022-01-21',
      close: 162.41,
    },
    {
      date: '2022-01-20',
      close: 164.51,
    },
    {
      date: '2022-01-19',
      close: 166.23,
    },
    {
      date: '2022-01-18',
      close: 169.8,
    },
    {
      date: '2022-01-14',
      close: 173.07,
    },
    {
      date: '2022-01-13',
      close: 172.19,
    },
    {
      date: '2022-01-12',
      close: 175.53,
    },
    {
      date: '2022-01-11',
      close: 175.08,
    },
    {
      date: '2022-01-10',
      close: 172.19,
    },
    {
      date: '2022-01-07',
      close: 172.17,
    },
    {
      date: '2022-01-06',
      close: 172.0,
    },
    {
      date: '2022-01-05',
      close: 174.92,
    },
    {
      date: '2022-01-04',
      close: 179.7,
    },
    {
      date: '2022-01-03',
      close: 182.01,
    },
    {
      date: '2021-12-31',
      close: 177.57,
    },
    {
      date: '2021-12-30',
      close: 178.2,
    },
    {
      date: '2021-12-29',
      close: 179.38,
    },
    {
      date: '2021-12-28',
      close: 179.29,
    },
    {
      date: '2021-12-27',
      close: 180.33,
    },
    {
      date: '2021-12-23',
      close: 176.28,
    },
    {
      date: '2021-12-22',
      close: 175.64,
    },
    {
      date: '2021-12-21',
      close: 172.99,
    },
    {
      date: '2021-12-20',
      close: 169.75,
    },
    {
      date: '2021-12-17',
      close: 171.14,
    },
    {
      date: '2021-12-16',
      close: 172.26,
    },
    {
      date: '2021-12-15',
      close: 179.3,
    },
    {
      date: '2021-12-14',
      close: 174.33,
    },
    {
      date: '2021-12-13',
      close: 175.74,
    },
    {
      date: '2021-12-10',
      close: 179.45,
    },
    {
      date: '2021-12-09',
      close: 174.56,
    },
    {
      date: '2021-12-08',
      close: 175.08,
    },
    {
      date: '2021-12-07',
      close: 171.18,
    },
    {
      date: '2021-12-06',
      close: 165.32,
    },
    {
      date: '2021-12-03',
      close: 161.84,
    },
    {
      date: '2021-12-02',
      close: 163.759995,
    },
    {
      date: '2021-12-01',
      close: 164.770004,
    },
    {
      date: '2021-11-30',
      close: 165.300003,
    },
    {
      date: '2021-11-29',
      close: 160.240005,
    },
    {
      date: '2021-11-26',
      close: 156.809998,
    },
    {
      date: '2021-11-24',
      close: 161.940002,
    },
    {
      date: '2021-11-23',
      close: 161.410004,
    },
    {
      date: '2021-11-22',
      close: 161.020004,
    },
    {
      date: '2021-11-19',
      close: 160.550003,
    },
    {
      date: '2021-11-18',
      close: 157.869995,
    },
    {
      date: '2021-11-17',
      close: 153.490005,
    },
    {
      date: '2021-11-16',
      close: 151.0,
    },
    {
      date: '2021-11-15',
      close: 150.0,
    },
    {
      date: '2021-11-12',
      close: 149.990005,
    },
    {
      date: '2021-11-11',
      close: 147.869995,
    },
    {
      date: '2021-11-10',
      close: 147.919998,
    },
    {
      date: '2021-11-09',
      close: 150.809998,
    },
    {
      date: '2021-11-08',
      close: 150.440002,
    },
    {
      date: '2021-11-05',
      close: 151.279999,
    },
    {
      date: '2021-11-04',
      close: 150.960007,
    },
    {
      date: '2021-11-03',
      close: 151.490005,
    },
    {
      date: '2021-11-02',
      close: 150.020004,
    },
    {
      date: '2021-11-01',
      close: 148.960007,
    },
    {
      date: '2021-10-29',
      close: 149.800003,
    },
    {
      date: '2021-10-28',
      close: 152.570007,
    },
    {
      date: '2021-10-27',
      close: 148.850006,
    },
    {
      date: '2021-10-26',
      close: 149.320007,
    },
    {
      date: '2021-10-25',
      close: 148.639999,
    },
    {
      date: '2021-10-22',
      close: 148.690002,
    },
    {
      date: '2021-10-21',
      close: 149.479996,
    },
    {
      date: '2021-10-20',
      close: 149.259995,
    },
    {
      date: '2021-10-19',
      close: 148.759995,
    },
    {
      date: '2021-10-18',
      close: 146.550003,
    },
    {
      date: '2021-10-15',
      close: 144.839996,
    },
    {
      date: '2021-10-14',
      close: 143.759995,
    },
    {
      date: '2021-10-13',
      close: 140.910004,
    },
    {
      date: '2021-10-12',
      close: 141.509995,
    },
    {
      date: '2021-10-11',
      close: 142.809998,
    },
    {
      date: '2021-10-08',
      close: 142.899994,
    },
    {
      date: '2021-10-07',
      close: 143.289993,
    },
    {
      date: '2021-10-06',
      close: 142.0,
    },
    {
      date: '2021-10-05',
      close: 141.110001,
    },
    {
      date: '2021-10-04',
      close: 139.139999,
    },
    {
      date: '2021-10-01',
      close: 142.649994,
    },
    {
      date: '2021-09-30',
      close: 141.5,
    },
    {
      date: '2021-09-29',
      close: 142.830002,
    },
    {
      date: '2021-09-28',
      close: 141.910004,
    },
    {
      date: '2021-09-27',
      close: 145.1581,
    },
    {
      date: '2021-09-24',
      close: 146.919998,
    },
    {
      date: '2021-09-23',
      close: 146.830002,
    },
    {
      date: '2021-09-22',
      close: 145.850006,
    },
    {
      date: '2021-09-21',
      close: 143.429993,
    },
    {
      date: '2021-09-20',
      close: 142.940002,
    },
    {
      date: '2021-09-17',
      close: 146.059998,
    },
    {
      date: '2021-09-16',
      close: 148.789993,
    },
    {
      date: '2021-09-15',
      close: 149.029999,
    },
    {
      date: '2021-09-14',
      close: 148.119995,
    },
    {
      date: '2021-09-13',
      close: 149.550003,
    },
    {
      date: '2021-09-10',
      close: 148.970001,
    },
    {
      date: '2021-09-09',
      close: 154.070007,
    },
    {
      date: '2021-09-08',
      close: 155.110001,
    },
    {
      date: '2021-09-07',
      close: 156.690002,
    },
    {
      date: '2021-09-03',
      close: 154.300003,
    },
    {
      date: '2021-09-02',
      close: 153.649994,
    },
    {
      date: '2021-09-01',
      close: 152.509995,
    },
    {
      date: '2021-08-31',
      close: 151.830002,
    },
    {
      date: '2021-08-30',
      close: 153.119995,
    },
    {
      date: '2021-08-27',
      close: 148.600006,
    },
    {
      date: '2021-08-26',
      close: 147.539993,
    },
    {
      date: '2021-08-25',
      close: 148.360001,
    },
    {
      date: '2021-08-24',
      close: 149.619995,
    },
    {
      date: '2021-08-23',
      close: 149.710007,
    },
    {
      date: '2021-08-20',
      close: 148.190002,
    },
    {
      date: '2021-08-19',
      close: 146.699997,
    },
    {
      date: '2021-08-18',
      close: 146.360001,
    },
    {
      date: '2021-08-17',
      close: 150.190002,
    },
    {
      date: '2021-08-16',
      close: 151.119995,
    },
    {
      date: '2021-08-13',
      close: 149.100006,
    },
    {
      date: '2021-08-12',
      close: 148.889999,
    },
    {
      date: '2021-08-11',
      close: 145.860001,
    },
    {
      date: '2021-08-10',
      close: 145.600006,
    },
    {
      date: '2021-08-09',
      close: 146.089996,
    },
    {
      date: '2021-08-06',
      close: 146.139999,
    },
    {
      date: '2021-08-05',
      close: 147.059998,
    },
    {
      date: '2021-08-04',
      close: 146.949997,
    },
    {
      date: '2021-08-03',
      close: 147.360001,
    },
    {
      date: '2021-08-02',
      close: 145.520004,
    },
    {
      date: '2021-07-30',
      close: 145.860001,
    },
    {
      date: '2021-07-29',
      close: 145.639999,
    },
    {
      date: '2021-07-28',
      close: 144.979996,
    },
    {
      date: '2021-07-27',
      close: 146.770004,
    },
    {
      date: '2021-07-26',
      close: 148.990005,
    },
    {
      date: '2021-07-23',
      close: 148.559998,
    },
    {
      date: '2021-07-22',
      close: 146.800003,
    },
    {
      date: '2021-07-21',
      close: 145.399994,
    },
    {
      date: '2021-07-20',
      close: 146.149994,
    },
    {
      date: '2021-07-19',
      close: 142.449997,
    },
    {
      date: '2021-07-16',
      close: 146.389999,
    },
    {
      date: '2021-07-15',
      close: 148.479996,
    },
    {
      date: '2021-07-14',
      close: 149.149994,
    },
    {
      date: '2021-07-13',
      close: 145.639999,
    },
    {
      date: '2021-07-12',
      close: 144.5,
    },
    {
      date: '2021-07-09',
      close: 145.110001,
    },
    {
      date: '2021-07-08',
      close: 143.240005,
    },
    {
      date: '2021-07-07',
      close: 144.570007,
    },
    {
      date: '2021-07-06',
      close: 142.020004,
    },
    {
      date: '2021-07-02',
      close: 139.960007,
    },
    {
      date: '2021-07-01',
      close: 137.270004,
    },
    {
      date: '2021-06-30',
      close: 136.960007,
    },
    {
      date: '2021-06-29',
      close: 136.330002,
    },
    {
      date: '2021-06-28',
      close: 134.779999,
    },
    {
      date: '2021-06-25',
      close: 133.110001,
    },
    {
      date: '2021-06-24',
      close: 133.410004,
    },
    {
      date: '2021-06-23',
      close: 133.699997,
    },
    {
      date: '2021-06-22',
      close: 133.979996,
    },
    {
      date: '2021-06-21',
      close: 132.300003,
    },
    {
      date: '2021-06-18',
      close: 130.460007,
    },
    {
      date: '2021-06-17',
      close: 131.789993,
    },
    {
      date: '2021-06-16',
      close: 130.149994,
    },
    {
      date: '2021-06-15',
      close: 129.639999,
    },
    {
      date: '2021-06-14',
      close: 130.479996,
    },
    {
      date: '2021-06-11',
      close: 127.349998,
    },
    {
      date: '2021-06-10',
      close: 126.110001,
    },
    {
      date: '2021-06-09',
      close: 127.129997,
    },
    {
      date: '2021-06-08',
      close: 126.739998,
    },
    {
      date: '2021-06-07',
      close: 125.900002,
    },
    {
      date: '2021-06-04',
      close: 125.889999,
    },
    {
      date: '2021-06-03',
      close: 123.540001,
    },
    {
      date: '2021-06-02',
      close: 125.059998,
    },
    {
      date: '2021-06-01',
      close: 124.279999,
    },
    {
      date: '2021-05-28',
      close: 124.610001,
    },
    {
      date: '2021-05-27',
      close: 125.279999,
    },
    {
      date: '2021-05-26',
      close: 126.849998,
    },
    {
      date: '2021-05-25',
      close: 126.900002,
    },
    {
      date: '2021-05-24',
      close: 127.099998,
    },
    {
      date: '2021-05-21',
      close: 125.43,
    },
    {
      date: '2021-05-20',
      close: 127.309998,
    },
    {
      date: '2021-05-19',
      close: 124.690002,
    },
    {
      date: '2021-05-18',
      close: 124.849998,
    },
    {
      date: '2021-05-17',
      close: 126.269997,
    },
    {
      date: '2021-05-14',
      close: 127.449997,
    },
    {
      date: '2021-05-13',
      close: 124.970001,
    },
    {
      date: '2021-05-12',
      close: 122.769997,
    },
    {
      date: '2021-05-11',
      close: 125.910004,
    },
    {
      date: '2021-05-10',
      close: 126.849998,
    },
    {
      date: '2021-05-07',
      close: 130.210007,
    },
    {
      date: '2021-05-06',
      close: 129.740005,
    },
    {
      date: '2021-05-05',
      close: 128.100006,
    },
    {
      date: '2021-05-04',
      close: 127.849998,
    },
    {
      date: '2021-05-03',
      close: 132.539993,
    },
    {
      date: '2021-04-30',
      close: 131.460007,
    },
    {
      date: '2021-04-29',
      close: 133.479996,
    },
    {
      date: '2021-04-28',
      close: 133.580002,
    },
    {
      date: '2021-04-27',
      close: 134.389999,
    },
    {
      date: '2021-04-26',
      close: 134.720001,
    },
    {
      date: '2021-04-23',
      close: 134.320007,
    },
    {
      date: '2021-04-22',
      close: 131.940002,
    },
    {
      date: '2021-04-21',
      close: 133.5,
    },
    {
      date: '2021-04-20',
      close: 133.110001,
    },
    {
      date: '2021-04-19',
      close: 134.839996,
    },
    {
      date: '2021-04-16',
      close: 134.160004,
    },
    {
      date: '2021-04-15',
      close: 134.5,
    },
    {
      date: '2021-04-14',
      close: 132.029999,
    },
    {
      date: '2021-04-13',
      close: 134.429993,
    },
    {
      date: '2021-04-12',
      close: 131.240005,
    },
    {
      date: '2021-04-09',
      close: 133.0,
    },
    {
      date: '2021-04-08',
      close: 130.360001,
    },
    {
      date: '2021-04-07',
      close: 127.900002,
    },
    {
      date: '2021-04-06',
      close: 126.209999,
    },
    {
      date: '2021-04-05',
      close: 125.900002,
    },
    {
      date: '2021-04-01',
      close: 123.0,
    },
    {
      date: '2021-03-31',
      close: 122.150002,
    },
    {
      date: '2021-03-30',
      close: 119.900002,
    },
    {
      date: '2021-03-29',
      close: 121.389999,
    },
    {
      date: '2021-03-26',
      close: 121.209999,
    },
    {
      date: '2021-03-25',
      close: 120.589996,
    },
    {
      date: '2021-03-24',
      close: 120.089996,
    },
    {
      date: '2021-03-23',
      close: 122.540001,
    },
    {
      date: '2021-03-22',
      close: 123.389999,
    },
    {
      date: '2021-03-19',
      close: 119.989998,
    },
    {
      date: '2021-03-18',
      close: 120.529999,
    },
    {
      date: '2021-03-17',
      close: 124.760002,
    },
    {
      date: '2021-03-16',
      close: 125.57,
    },
    {
      date: '2021-03-15',
      close: 123.989998,
    },
    {
      date: '2021-03-12',
      close: 121.029999,
    },
    {
      date: '2021-03-11',
      close: 121.959999,
    },
    {
      date: '2021-03-10',
      close: 119.980003,
    },
    {
      date: '2021-03-09',
      close: 121.089996,
    },
    {
      date: '2021-03-08',
      close: 116.360001,
    },
    {
      date: '2021-03-05',
      close: 121.419998,
    },
    {
      date: '2021-03-04',
      close: 120.129997,
    },
    {
      date: '2021-03-03',
      close: 122.059998,
    },
    {
      date: '2021-03-02',
      close: 125.120003,
    },
    {
      date: '2021-03-01',
      close: 127.790001,
    },
    {
      date: '2021-02-26',
      close: 121.260002,
    },
    {
      date: '2021-02-25',
      close: 120.989998,
    },
    {
      date: '2021-02-24',
      close: 125.349998,
    },
    {
      date: '2021-02-23',
      close: 125.860001,
    },
    {
      date: '2021-02-22',
      close: 126.0,
    },
    {
      date: '2021-02-19',
      close: 129.869995,
    },
    {
      date: '2021-02-18',
      close: 129.710007,
    },
    {
      date: '2021-02-17',
      close: 130.839996,
    },
    {
      date: '2021-02-16',
      close: 133.190002,
    },
    {
      date: '2021-02-12',
      close: 135.369995,
    },
    {
      date: '2021-02-11',
      close: 135.130005,
    },
    {
      date: '2021-02-10',
      close: 135.389999,
    },
    {
      date: '2021-02-09',
      close: 136.009995,
    },
    {
      date: '2021-02-08',
      close: 136.910004,
    },
    {
      date: '2021-02-05',
      close: 136.759995,
    },
    {
      date: '2021-02-04',
      close: 137.389999,
    },
    {
      date: '2021-02-03',
      close: 133.940002,
    },
    {
      date: '2021-02-02',
      close: 134.990005,
    },
    {
      date: '2021-02-01',
      close: 134.139999,
    },
    {
      date: '2021-01-29',
      close: 131.960007,
    },
    {
      date: '2021-01-28',
      close: 137.089996,
    },
    {
      date: '2021-01-27',
      close: 142.059998,
    },
    {
      date: '2021-01-26',
      close: 143.160004,
    },
    {
      date: '2021-01-25',
      close: 142.919998,
    },
  ],
};

const getCompanyProfile = () => {
  return companyProfile;
};

const getCompanyQuote = () => {
  return companyQuote;
};

const getHistoryDaily = () => {
  return [...historyDaily.historical].reverse();
};

const Company = () => {
  const [profile, setProfile] = useState(getCompanyProfile());
  const [quote, setQuote] = useState(getCompanyQuote());
  const [stock, setStock] = useState(getHistoryDaily());

  return (
    <div className="container">
      <div className="wrapper">
        <div className="left-box">
          <div className="left-title shadow-box">
            <div className="icon-box shadow-box">
              <TitleIcon width="3em" height="3em" fill="white" />
            </div>
            <div className="company-name">
              {profile[0].companyName} ({profile[0].symbol})
            </div>
            <div>
              <div className="price">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: `${profile[0].currency}`,
                }).format(`${quote[0].price}`)}
              </div>
              <div className="price-ratio">
                {quote[0].change > 0
                  ? `▲ ${quote[0].change.toFixed(2)} ${quote[0].changesPercentage.toFixed(2)}%`
                  : `▼ ${quote[0].change.toFixed(2)} ${quote[0].changesPercentage.toFixed(2)}%`}
              </div>
            </div>
          </div>
          <div className="graph">
            <div className="btn-list">
              <ul>
                <li>
                  <input type="radio" id="oneday" name="chart-date" value="1day" />
                  <label className="shadow-box" htmlFor="oneday">
                    1일
                  </label>
                </li>
                <li>
                  <input type="radio" id="fiveday" name="chart-date" value="5day" />
                  <label className="shadow-box" htmlFor="fiveday">
                    5일
                  </label>
                </li>
                <li>
                  <input id="onemonth" type="radio" name="chart-date" value="1month" />
                  <label className="shadow-box" htmlFor="onemonth">
                    1개월
                  </label>
                </li>
                <li>
                  <input id="oneyear" type="radio" name="chart-date" value="1year" />
                  <label className="shadow-box" htmlFor="oneyear">
                    1년
                  </label>
                </li>
              </ul>
            </div>
            <div className="graph-chart shadow-box">
              <StockChart historyDaily={stock} />
            </div>
          </div>
        </div>
        <div className="vertical-line" />
        <div className="summary-box">
          <div className="summary-logo">
            <div className="logo-box shadow-box">
              <img alt="Apple Inc." src={profile[0].image}></img>
            </div>
          </div>
          <div className="summary-detail shadow-box">
            <div className="summary-title">회사 개요</div>
            <div className="summary-content">{profile[0].description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
