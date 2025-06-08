// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("mapChart"));

// 设置地图的配置项
var option = {
  title: {
    // text: "中国企业地区分布",
    // subtext: "数据来源示例",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      // 显示地区和对应的企业数量
      return params.name + ": " + params.value + " 家企业";
    },
  },
  visualMap: {
    min: 0,
    max: 20,
    left: "left",
    top: "bottom",
    text: ["High", "Low"],
    calculable: true,
    inRange: {
      // 设置颜色范围
      color: [
        "#00008B",
        "#FFDAB9",
        "#FFA07A",
        "#FF8C00",
        "#FF8C00",
        "#FF8C00",
        "#FF8C00",
        "#FF6347",
        "#FF6347",
        "#FF6347",
        "#FF6347",
        "#FF6347",
        "#FF6347",
        "#FF6347",
        "#FF6347",
        "#FF4500",
        "#FF4500",
        "#FF0000",
        "#FF0000",
        "#FF4500",
      ],
    },
  },
  series: [
    {
      name: "企业分布",
      type: "map",
      map: "china",
      roam: true,
      label: {
        show: true,
      },
      data: [
        { name: "北京", value: 18 },
        { name: "上海", value: 16 },
        { name: "广东", value: 7 },
        { name: "浙江", value: 3 },
        { name: "江苏", value: 2 },
        { name: "山东", value: 1 },
        { name: "安徽", value: 1 },
        { name: "河南", value: 0 },
        { name: "河北", value: 0 },
        { name: "辽宁", value: 0 },
        { name: "吉林", value: 0 },
        { name: "黑龙江", value: 0 },
        { name: "内蒙古", value: 0 },
        { name: "山西", value: 0 },
        { name: "陕西", value: 0 },
        { name: "湖北", value: 0 },
        { name: "湖南", value: 0 },
        { name: "福建", value: 0 },
        { name: "江西", value: 0 },
        { name: "四川", value: 0 },
        { name: "贵州", value: 0 },
        { name: "云南", value: 0 },
        { name: "重庆", value: 0 },
        { name: "新疆", value: 0 },
        { name: "西藏", value: 0 },
        { name: "甘肃", value: 0 },
        { name: "青海", value: 0 },
        { name: "海南", value: 0 },
        { name: "宁夏", value: 0 },
        { name: "新疆", value: 0 },
        { name: "台湾", value: 0 },
        { name: "香港", value: 0 },
        { name: "澳门", value: 0 },
        { name: "广西", value: 0 },
        { name: "河北", value: 0 },
        { name: "天津", value: 0 },
        { name: "南海诸岛", value: 0 },
      ],
      itemStyle: {
        normal: {
          areaColor: "#dddddd", // 默认颜色（没有数据时使用）
          borderColor: "#ffffff", // 设置边界颜色为白色
          borderWidth: 1, // 设置边界宽度
        },
        emphasis: {
          areaColor: "#ffcc00", // 鼠标悬停时的颜色
          borderColor: "#ff9900", // 鼠标悬停时边界颜色
          borderWidth: 2,
        },
      },
    },
  ],
};

// 使用刚指定的配置项和数据显示图表
myChart.setOption(option);
