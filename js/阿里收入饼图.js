// 初始化第一个饼图实例
var myChart1 = echarts.init(document.getElementById("pieChart1"));

// 设置第一个饼图的配置项（收入分布）
var option1 = {
  title: {
    left: "center",
    top: "20px",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} 百万元 ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "right",
    data: [
      "淘天集团",
      "云智能集团",
      "阿里国际数字商业集团",
      "菜鸟集团",
      "本地生活集团",
      "大文娱集团",
      "所有其他",
    ],
  },
  series: [
    {
      name: "分部",
      type: "pie",
      center: ["50%", "60%"],
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
        { value: 434893, name: "淘天集团" },
        { value: 106374, name: "云智能集团" },
        { value: 102598, name: "阿里国际数字商业集团" },
        { value: 99020, name: "菜鸟集团" },
        { value: 59802, name: "本地生活集团" },
        { value: 21145, name: "大文娱集团" },
        { value: 192331, name: "所有其他" },
      ],
    },
  ],
};

// 使用配置项设置第一个饼图
myChart1.setOption(option1);
