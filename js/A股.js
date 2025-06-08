// 净利润数据
var profitData = [
  { 排名: 1, 企业简称: "工商银行", "净利润（亿元）": 3651.16 },
  { 排名: 2, 企业简称: "建设银行", "净利润（亿元）": 3324.6 },
  { 排名: 3, 企业简称: "农业银行", "净利润（亿元）": 2698.2 },
  { 排名: 4, 企业简称: "中国银行", "净利润（亿元）": 2463.71 },
  { 排名: 5, 企业简称: "中国石油", "净利润（亿元）": 1802.91 },
  { 排名: 6, 企业简称: "招商银行", "净利润（亿元）": 1480.06 },
  { 排名: 7, 企业简称: "中国移动", "净利润（亿元）": 1319.35 },
  { 排名: 8, 企业简称: "中国海油", "净利润（亿元）": 1240.9 },
  { 排名: 9, 企业简称: "中国平安", "净利润（亿元）": 1092.74 },
  { 排名: 10, 企业简称: "交通银行", "净利润（亿元）": 932.52 },
];

// 营业收入数据
var revenueData = [
  { 排名: 1, 企业简称: "中国石化", "营业收入（亿元）": 32122.15 },
  { 排名: 2, 企业简称: "中国石油", "营业收入（亿元）": 30110.12 },
  { 排名: 3, 企业简称: "中国建筑", "营业收入（亿元）": 22655.29 },
  { 排名: 4, 企业简称: "中国中铁", "营业收入（亿元）": 12634.75 },
  { 排名: 5, 企业简称: "中国铁建", "营业收入（亿元）": 11379.93 },
  { 排名: 6, 企业简称: "中国移动", "营业收入（亿元）": 10093.09 },
  { 排名: 7, 企业简称: "中国平安", "营业收入（亿元）": 9137.89 },
  { 排名: 8, 企业简称: "工商银行", "营业收入（亿元）": 8430.7 },
  { 排名: 9, 企业简称: "中国人寿", "营业收入（亿元）": 8378.59 },
  { 排名: 10, 企业简称: "建设银行", "营业收入（亿元）": 7697.36 },
];

// 提取数据
var companiesProfit = profitData.map((item) => item["企业简称"]);
var companiesRevenue = revenueData.map((item) => item["企业简称"]);
var profits = profitData.map((item) => item["净利润（亿元）"]);
var revenues = revenueData.map((item) => item["营业收入（亿元）"]);

// 初始化图表实例
var profitChart = echarts.init(document.getElementById("profitChart"));
var revenueChart = echarts.init(document.getElementById("revenueChart"));

// 净利润柱状图配置
var profitOption = {
  title: {
    text: "A股企业净利润",
    subtext: "单位：亿元",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "none",
    },
  },
  xAxis: {
    type: "category",
    data: companiesProfit,
    axisLabel: { rotate: 45 },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: function (value) {
        return (value / 1000).toFixed(0) + " 千亿"; // 格式化为万亿元
      },
      rotate: 30,
    },
  },
  series: [
    {
      name: "净利润（亿元）",
      type: "bar",
      data: profits,
      itemStyle: { color: "#3498db" },
      emphasis: {
        itemStyle: {
          shadowBlur: 10, // 阴影模糊
          shadowOffsetY: 0, // 阴影偏移
          shadowColor: "rgba(0, 0, 0, 0.5)", // 阴影颜色
        },
      },
    },
  ],
};

// 营业收入柱状图配置
var revenueOption = {
  title: {
    text: "A股企业营业收入",
    subtext: "单位：亿元",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "none" },
  },
  xAxis: {
    type: "category",
    data: companiesRevenue,
    axisLabel: { rotate: 45 },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: function (value) {
        return (value / 10000).toFixed(1) + " 万亿"; // 格式化为万亿元
      },
      rotate: 30,
    },
  },
  series: [
    {
      name: "营业收入（亿元）",
      type: "bar",
      data: revenues,
      itemStyle: { color: "blue" },
      emphasis: {
        itemStyle: {
          shadowBlur: 10, // 阴影模糊
          shadowOffsetY: 0, // 阴影偏移
          shadowColor: "rgba(0, 0, 0, 0.5)", // 阴影颜色
        },
      },
    },
  ],
};

// 设置两个图表的配置
profitChart.setOption(profitOption);
revenueChart.setOption(revenueOption);
