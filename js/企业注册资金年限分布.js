// 初始化第一个饼图实例
var myChart1 = echarts.init(document.getElementById("pieChart1"));

// 设置第一个饼图的配置项（金额区间）
var option1 = {
  title: {
    left: "center",
    top: "20px",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: [
      "1亿以上",
      "5000万-1亿",
      "3000-5000万",
      "2000-3000万",
      "1000-2000万",
      "1000以下",
    ],
  },
  series: [
    {
      name: "金额区间",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: "outside",
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 20, name: "1亿以上" },
        { value: 10, name: "5000万-1亿" },
        { value: 3, name: "3000-5000万" },
        { value: 4, name: "2000-3000万" },
        { value: 4, name: "1000-2000万" },
        { value: 9, name: "1000以下" },
      ],
    },
  ],
};

// 使用配置项设置第一个饼图
myChart1.setOption(option1);

// 初始化第二个饼图实例
var myChart2 = echarts.init(document.getElementById("pieChart2"));

// 设置第二个饼图的配置项（年限区间）
var option2 = {
  title: {
    left: "center",
    top: "20px",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["5-10年", "10年以上", "5年以下"],
  },
  series: [
    {
      name: "年限区间",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: "outside",
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 24, name: "5-10年" },
        { value: 32, name: "10年以上" },
        { value: 20, name: "5年以下" },
      ],
    },
  ],
};

// 使用配置项设置第二个饼图
myChart2.setOption(option2);
