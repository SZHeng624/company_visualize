var myChart = echarts.init(document.getElementById("chart"));

var option = {
  title: {},
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value", // 将x轴设为值轴
    position: "top", // 将x轴放置顶部
    axisLabel: {
      formatter: "{value}%", // 显示百分比
    },
  },
  yAxis: {
    type: "category", // 将y轴设为类目轴
    data: [
      "电子设备",
      "交运设备",
      "信息技术",
      "家电",
      "休闲、生活及专业服务",
      "互联网",
      "轻工制造",
      "纺织服装",
      "基础化工",
      "食品饮料",
      "国防与装备",
      "机械设备",
      "文化传媒",
      "交通运输",
      "石油能源",
      "医药生物",
      "公用事业",
      "有色金属",
      "建筑",
      "农林渔牧",
      "钢铁",
      "金融",
      "电气设备",
      "商贸零售",
      "建材",
      "综合",
      "房地产",
    ],
    position: "right", // 将y轴放置右侧
    axisLabel: {
      rotate: 0, // 不旋转，保持水平显示
    },
    inverse: true,
  },
  series: [
    {
      data: [
        10.69, 7.55, 7.49, 6.61, 5.15, 5.1, 4.97, 3.69, 3.69, 3.14, 2.64, 2.43,
        2.1, 1.72, -0.1, -0.14, -0.6, -1.86, -3.39, -4.01, -6.65, -7.52, -7.92,
        -10.84, -13.39, -13.72, -21.36,
      ],
      type: "bar",
      barWidth: "60%",
      itemStyle: {
        color: function (params) {
          // 根据值设置柱子颜色
          if (params.value < 0) {
            return "#d44d43"; // 红色代表负增长
          }
          return "#4ab8e7"; // 蓝色代表正增长
        },
      },
    },
  ],
};

// 使用刚指定的配置项和数据显示图表
myChart.setOption(option);
