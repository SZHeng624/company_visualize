var myChart = echarts.init(document.getElementById("profit2018-2024"));

var option = {
  title: {},
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["营业收入", "净利润", "营业收入同比", "净利润同比"],
  },
  xAxis: [
    {
      type: "category",
      data: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "金额 (亿元)",
      position: "left",
      axisLabel: {
        formatter: "{value}",
      },
    },
    {
      type: "value",
      name: "同比",
      position: "right",
      axisLabel: {
        formatter: "{value}%",
      },
    },
  ],
  series: [
    {
      name: "营业收入",
      type: "bar",
      data: [2502.66, 3768.44, 5097.11, 7172.89, 8530.62, 8686.87, 9411.68],
      barWidth: "40%",
    },
    {
      name: "净利润",
      type: "bar",
      data: [614.12, 802.34, 1403.5, 1432.84, 470.79, 655.73, 713.32],
      barWidth: "40%",
    },
    {
      name: "营业收入同比",
      type: "line",
      yAxisIndex: 1,
      data: [58.12, 50.58, 35.26, 40.72, 18.93, 1.83, 8.34],
      smooth: true,
      lineStyle: {
        color: "#FF7F0E",
      },
    },
    {
      name: "净利润同比",
      type: "line",
      yAxisIndex: 1,
      data: [48.96, 30.65, 74.93, 2.09, -67.14, 39.28, 8.78],
      smooth: true,
      lineStyle: {
        color: "#2CA02C",
      },
    },
  ],
};

myChart.setOption(option);
