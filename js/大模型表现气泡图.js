var chart = echarts.init(document.getElementById("chart-bubble"));

var data = [
  {
    model: "Claude 3.5 Sonnet New",
    size: 1000,
    MMLU: 90.5,
    GSM8K: 92.5,
    publisher: "Anthropic",
  },
  {
    model: "GPT-4o",
    size: 1000,
    MMLU: 88.7,
    GSM8K: 90.5,
    publisher: "OpenAI",
  },
  {
    model: "Claude 3.5 Sonnet",
    size: 1000,
    MMLU: 88.7,
    GSM8K: 96.4,
    publisher: "Anthropic",
  },
  {
    model: "Llama3.1-405B Instruct",
    size: 4050.0,
    MMLU: 87.3,
    GSM8K: 96.8,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "Claude3-Opus",
    size: 1000,
    MMLU: 86.8,
    GSM8K: 95,
    publisher: "Anthropic",
  },
  {
    model: "GPT-4",
    size: 1750.0,
    MMLU: 86.4,
    GSM8K: 87.1,
    publisher: "OpenAI",
  },
  {
    model: "Llama3-400B-Instruct-InTraining",
    size: 4000.0,
    MMLU: 86.1,
    GSM8K: 94.1,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "Qwen2.5-72B",
    size: 727.0,
    MMLU: 86.1,
    GSM8K: 91.5,
    publisher: "阿里巴巴",
  },
  {
    model: "Llama3.3-70B-Instruct",
    size: 700.0,
    MMLU: 86,
    GSM8K: 91.1,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "Amazon Nova Pro",
    size: 1000,
    MMLU: 85.9,
    GSM8K: 94.8,
    publisher: "亚马逊",
  },
  {
    model: "Phi 4 - 14B",
    size: 140.0,
    MMLU: 84.4,
    GSM8K: 80.6,
    publisher: "Microsoft",
  },
  {
    model: "Qwen2-72B",
    size: 727.0,
    MMLU: 84.2,
    GSM8K: 89.5,
    publisher: "阿里巴巴",
  },
  {
    model: "Gemini-ultra",
    size: 1000,
    MMLU: 83.7,
    GSM8K: 88.9,
    publisher: "DeepMind",
  },
  {
    model: "Llama3.1-70B-Instruct",
    size: 700.0,
    MMLU: 83.6,
    GSM8K: 95.1,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "Qwen2.5-32B",
    size: 320.0,
    MMLU: 83.3,
    GSM8K: 92.9,
    publisher: "阿里巴巴",
  },
  {
    model: "Qwen2-72B-Instruct",
    size: 720.0,
    MMLU: 82.3,
    GSM8K: 91.1,
    publisher: "阿里巴巴",
  },
  {
    model: "Llama3-70B-Instruct",
    size: 700.0,
    MMLU: 82,
    GSM8K: 93,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "GPT-4o mini",
    size: 1000,
    MMLU: 82,
    GSM8K: 87,
    publisher: "OpenAI",
  },
  {
    model: "Gemini 1.5 Pro",
    size: 1000,
    MMLU: 81.9,
    GSM8K: 91.7,
    publisher: "Google Deep Mind",
  },
  { model: "GLM4", size: 1000, MMLU: 81.5, GSM8K: 87.6, publisher: "智谱AI" },
  { model: "Grok-1.5", size: 1000, MMLU: 81.3, GSM8K: 90, publisher: "xAI" },
  {
    model: "Mistral Large",
    size: 1000,
    MMLU: 81.2,
    GSM8K: 81,
    publisher: "MistralAI",
  },
  {
    model: "Claude 3.5 Haiku",
    size: 1000,
    MMLU: 80.9,
    GSM8K: 85.6,
    publisher: "Anthropic",
  },
  {
    model: "Qwen2.5-Math-72B",
    size: 727.0,
    MMLU: 80.8,
    GSM8K: 95.9,
    publisher: "阿里巴巴",
  },
  {
    model: "YAYI2-30B",
    size: 300.0,
    MMLU: 80.5,
    GSM8K: 71.2,
    publisher: "中科闻歌",
  },
  {
    model: "Amazon Nova Lite",
    size: 1000,
    MMLU: 80.5,
    GSM8K: 94.5,
    publisher: "亚马逊",
  },
  {
    model: "Qwen1.5-110B",
    size: 1100.0,
    MMLU: 80.4,
    GSM8K: 85.4,
    publisher: "阿里巴巴",
  },
  {
    model: "DeepSeek V2.5",
    size: 2360.0,
    MMLU: 80.4,
    GSM8K: 95.1,
    publisher: "DeepSeek-AI",
  },
  {
    model: "Qwen2.5-14B",
    size: 140.0,
    MMLU: 79.7,
    GSM8K: 92.9,
    publisher: "阿里巴巴",
  },
  {
    model: "Gemini-pro",
    size: 1000.0,
    MMLU: 79.13,
    GSM8K: 86.5,
    publisher: "DeepMind",
  },
  {
    model: "Claude3-Sonnet",
    size: 1000,
    MMLU: 79,
    GSM8K: 92.3,
    publisher: "Anthropic",
  },
  {
    model: "DeepSeek-V2-236B",
    size: 2360.0,
    MMLU: 78.5,
    GSM8K: 79.2,
    publisher: "DeepSeek-AI",
  },
  {
    model: "PaLM 2",
    size: 3400.0,
    MMLU: 78.3,
    GSM8K: 80.7,
    publisher: "Google Research",
  },
  {
    model: "Phi-3-medium 14B-preview",
    size: 140.0,
    MMLU: 78.2,
    GSM8K: 90.3,
    publisher: "Microsoft",
  },
  {
    model: "Mixtral-8×22B-MoE",
    size: 1410.0,
    MMLU: 77.75,
    GSM8K: 78.6,
    publisher: "MistralAI",
  },
  {
    model: "Amazon Nova Micro",
    size: 1000,
    MMLU: 77.6,
    GSM8K: 92.3,
    publisher: "亚马逊",
  },
  {
    model: "Qwen1.5-72B-Chat",
    size: 720.0,
    MMLU: 77.5,
    GSM8K: 79.5,
    publisher: "阿里巴巴",
  },
  {
    model: "Qwen-72B",
    size: 720.0,
    MMLU: 77.4,
    GSM8K: 78.9,
    publisher: "阿里巴巴",
  },
  {
    model: "Yi-1.5-34B",
    size: 340.0,
    MMLU: 77.1,
    GSM8K: 82.7,
    publisher: "零一万物",
  },
  {
    model: "Qwen2-57B-A14B",
    size: 570.0,
    MMLU: 76.5,
    GSM8K: 80.7,
    publisher: "阿里巴巴",
  },
  {
    model: "Phi-3-small 7B",
    size: 70.0,
    MMLU: 75.3,
    GSM8K: 88.9,
    publisher: "Microsoft",
  },
  {
    model: "Claude3-Haiku",
    size: 1000,
    MMLU: 75.2,
    GSM8K: 88.9,
    publisher: "Anthropic",
  },
  {
    model: "Gemma2-27B",
    size: 270.0,
    MMLU: 75,
    GSM8K: 75,
    publisher: "Google Deep Mind",
  },
  { model: "GLM-4-9B", size: 90.0, MMLU: 74.7, GSM8K: 84, publisher: "智谱AI" },
  {
    model: "Qwen2.5-7B",
    size: 70.0,
    MMLU: 74.2,
    GSM8K: 85.4,
    publisher: "阿里巴巴",
  },
  {
    model: "DBRX Instruct",
    size: 1320.0,
    MMLU: 73.7,
    GSM8K: 72.8,
    publisher: "databricks",
  },
  {
    model: "Qwen1.5-32B",
    size: 320.0,
    MMLU: 73.4,
    GSM8K: 77.4,
    publisher: "阿里巴巴",
  },
  { model: "Grok-1", size: 3140.0, MMLU: 73, GSM8K: 62.9, publisher: "xAI" },
  {
    model: "GLM-4-9B-Chat",
    size: 90.0,
    MMLU: 72.4,
    GSM8K: 79.6,
    publisher: "智谱AI",
  },
  {
    model: "Gemma 2 - 9B",
    size: 90.0,
    MMLU: 71.3,
    GSM8K: 68.6,
    publisher: "Google Research",
  },
  {
    model: "DeepSeek-V2-236B-Chat",
    size: 2360.0,
    MMLU: 71.1,
    GSM8K: 84.4,
    publisher: "DeepSeek-AI",
  },
  {
    model: "XVERSE-65B",
    size: 650.0,
    MMLU: 70.8,
    GSM8K: 60.3,
    publisher: "元象XVERSE",
  },
  {
    model: "Mixtral-8×7B-MoE",
    size: 450.0,
    MMLU: 70.6,
    GSM8K: 74.4,
    publisher: "MistralAI",
  },
  {
    model: "Qwen2-7B",
    size: 70.0,
    MMLU: 70.3,
    GSM8K: 79.9,
    publisher: "阿里巴巴",
  },
  {
    model: "GPT-3.5",
    size: 1750.0,
    MMLU: 70,
    GSM8K: 57.1,
    publisher: "OpenAI",
  },
  {
    model: "Yi-1.5-9B",
    size: 90.0,
    MMLU: 69.5,
    GSM8K: 73.7,
    publisher: "零一万物",
  },
  {
    model: "Llama3.1-8B-Instruct",
    size: 80.0,
    MMLU: 69.4,
    GSM8K: 84.5,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "PaLM",
    size: 5400.0,
    MMLU: 69.3,
    GSM8K: 56.5,
    publisher: "Google Research",
  },
  {
    model: "LLaMA2 70B",
    size: 700.0,
    MMLU: 68.9,
    GSM8K: 56.8,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "Phi-3-mini 3.8B",
    size: 38.0,
    MMLU: 68.8,
    GSM8K: 82.5,
    publisher: "Microsoft",
  },
  {
    model: "Yi-9B",
    size: 90.0,
    MMLU: 68.4,
    GSM8K: 52.3,
    publisher: "零一万物",
  },
  {
    model: "Llama3-8B-Instruct",
    size: 80.0,
    MMLU: 68.4,
    GSM8K: 79.6,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "Aquila2-34B",
    size: 340.0,
    MMLU: 67.79,
    GSM8K: 58.4,
    publisher: "北京智源人工智能研究院",
  },
  {
    model: "Jamba-v0.1",
    size: 520.0,
    MMLU: 67.4,
    GSM8K: 59.9,
    publisher: "A21 Labs",
  },
  {
    model: "Qwen-14B",
    size: 140.0,
    MMLU: 66.3,
    GSM8K: 61.3,
    publisher: "阿里巴巴",
  },
  { model: "Grok-0", size: 330.0, MMLU: 65.7, GSM8K: 56.8, publisher: "xAI" },
  {
    model: "Qwen2.5-3B",
    size: 30.0,
    MMLU: 65.6,
    GSM8K: 79.1,
    publisher: "阿里巴巴",
  },
  {
    model: "Gemma 7B",
    size: 70.0,
    MMLU: 64.3,
    GSM8K: 46.4,
    publisher: "Google Research",
  },
  {
    model: "LLaMA 65B",
    size: 650.0,
    MMLU: 63.4,
    GSM8K: 50.9,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "LLaMA2 34B",
    size: 340.0,
    MMLU: 62.6,
    GSM8K: 42.2,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "Qwen1.5-MoE-A2.7B",
    size: 143.0,
    MMLU: 62.5,
    GSM8K: 61.5,
    publisher: "阿里巴巴",
  },
  {
    model: "StableLM2-12B",
    size: 120.0,
    MMLU: 62.09,
    GSM8K: 56.03,
    publisher: "Stability AI",
  },
  {
    model: "ChatGLM3-6B-Base",
    size: 60.0,
    MMLU: 61.4,
    GSM8K: 72.3,
    publisher: "智谱AI",
  },
  {
    model: "StableLM2-12B-Chat",
    size: 120.0,
    MMLU: 61.14,
    GSM8K: 57.7,
    publisher: "Stability AI",
  },
  {
    model: "Qwen2.5-1.5B",
    size: 15.0,
    MMLU: 60.9,
    GSM8K: 68.5,
    publisher: "阿里巴巴",
  },
  {
    model: "XVERSE-MoE-A4.2B",
    size: 258.0,
    MMLU: 60.2,
    GSM8K: 51.2,
    publisher: "元象XVERSE",
  },
  {
    model: "Mistral 7B",
    size: 73.0,
    MMLU: 60.1,
    GSM8K: 52.1,
    publisher: "MistralAI",
  },
  {
    model: "DeciLM-7B",
    size: 70.4,
    MMLU: 59.76,
    GSM8K: 47.38,
    publisher: "Deci",
  },
  {
    model: "Baichuan2-13B-Base",
    size: 130.0,
    MMLU: 59.17,
    GSM8K: 52.77,
    publisher: "百川智能",
  },
  {
    model: "MiniCPM-MoE-8x2B",
    size: 136.0,
    MMLU: 58.9,
    GSM8K: 61.5,
    publisher: "OpenBMB",
  },
  {
    model: "LLaMA 33B",
    size: 330.0,
    MMLU: 57.8,
    GSM8K: 35.6,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "Qwen-7B",
    size: 70.0,
    MMLU: 56.7,
    GSM8K: 51.6,
    publisher: "阿里巴巴",
  },
  {
    model: "Phi-2",
    size: 27.0,
    MMLU: 56.7,
    GSM8K: 61.1,
    publisher: "Microsoft",
  },
  {
    model: "Qwen2-1.5B",
    size: 15.0,
    MMLU: 56.5,
    GSM8K: 58.5,
    publisher: "阿里巴巴",
  },
  {
    model: "ChatGLM2 12B",
    size: 120.0,
    MMLU: 56.18,
    GSM8K: 40.94,
    publisher: "智谱AI",
  },
  {
    model: "LLaMA2 13B",
    size: 130.0,
    MMLU: 54.84,
    GSM8K: 28.7,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "Baichuan2-7B-Base",
    size: 70.0,
    MMLU: 54.16,
    GSM8K: 24.49,
    publisher: "百川智能",
  },
  {
    model: "MiniCPM-2B-DPO",
    size: 24.0,
    MMLU: 53.46,
    GSM8K: 53.83,
    publisher: "面壁智能",
  },
  {
    model: "Baichuan 13B - Chat",
    size: 130.0,
    MMLU: 52.1,
    GSM8K: 26.6,
    publisher: "百川智能",
  },
  {
    model: "Baichuan 13B - Base",
    size: 130.0,
    MMLU: 51.62,
    GSM8K: 26.6,
    publisher: "百川智能",
  },
  {
    model: "InternLM 7B",
    size: 70.0,
    MMLU: 51,
    GSM8K: 31.2,
    publisher: "上海人工智能实验室",
  },
  {
    model: "InternLM Chat 7B 8K",
    size: 70.0,
    MMLU: 50.8,
    GSM8K: 31.2,
    publisher: "上海人工智能实验室",
  },
  {
    model: "ChatGLM2-6B",
    size: 62.0,
    MMLU: 47.86,
    GSM8K: 32.37,
    publisher: "智谱AI",
  },
  {
    model: "Qwen2.5-0.5B",
    size: 5.0,
    MMLU: 47.5,
    GSM8K: 41.6,
    publisher: "阿里巴巴",
  },
  {
    model: "LLaMA 13B",
    size: 130.0,
    MMLU: 46.94,
    GSM8K: 17.8,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "Stable LM Zephyr 3B",
    size: 30.0,
    MMLU: 45.9,
    GSM8K: 52.54,
    publisher: "Stability AI",
  },
  {
    model: "Qwen2-0.5B",
    size: 4.0,
    MMLU: 45.4,
    GSM8K: 58.5,
    publisher: "阿里巴巴",
  },
  {
    model: "LLaMA2 7B",
    size: 70.0,
    MMLU: 45.3,
    GSM8K: 14.6,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "Qwen-1.8B",
    size: 18.0,
    MMLU: 45.3,
    GSM8K: 32.3,
    publisher: "阿里巴巴",
  },
  {
    model: "Baichuan 7B",
    size: 70.0,
    MMLU: 42.3,
    GSM8K: 9.7,
    publisher: "百川智能",
  },
  {
    model: "Gemma 2B",
    size: 20.0,
    MMLU: 42.3,
    GSM8K: 17.7,
    publisher: "Google Research",
  },
  {
    model: "Gemma 2B - It",
    size: 20.0,
    MMLU: 42.3,
    GSM8K: 17.7,
    publisher: "Google Research",
  },
  {
    model: "Stable LM 2 - 1.6B",
    size: 16.0,
    MMLU: 38.93,
    GSM8K: 17.82,
    publisher: "Stability AI",
  },
  {
    model: "RecurrentGemma-2B",
    size: 27.0,
    MMLU: 38.4,
    GSM8K: 13.4,
    publisher: "Google Research",
  },
  {
    model: "Phi-1.5",
    size: 13.0,
    MMLU: 37.6,
    GSM8K: 40.2,
    publisher: "Microsoft",
  },
  {
    model: "DeepSeek Coder-6.7B Instruct",
    size: 67.0,
    MMLU: 37.2,
    GSM8K: 62.8,
    publisher: "DeepSeek-AI",
  },
  {
    model: "ChatGLM-6B",
    size: 62.0,
    MMLU: 36.9,
    GSM8K: 4.82,
    publisher: "智谱AI",
  },
  {
    model: "LLaMA 7B",
    size: 70.0,
    MMLU: 35.1,
    GSM8K: 11,
    publisher: "Facebook AI研究实验室",
  },
  {
    model: "TinyLlama",
    size: 11.0,
    MMLU: 24.3,
    GSM8K: 2.27,
    publisher: "新加坡科技与设计大学",
  },
];

// 将publisher映射为颜色
var colors = {
  Anthropic: "blue", // 红色
  OpenAI: "#1E90FF", // 蓝色
  "Facebook AI研究实验室": "#32CD32", // 绿色
  阿里巴巴: "#FF4500", // 金色
  亚马逊: "#8A2BE2", // 紫色
  "Google Deep Mind": "#FFD700", // 橙色
  "Google Research": "#00FA9A", // 春绿色
  MistralAI: "#00BFFF", // 深天蓝
  智谱AI: "darkblue", // 棕色
  xAI: "#D2691E", // 巧克力色
  "Stability AI": "#2E8B57", // 海洋绿
  个人: "#DCDCDC", // 灰色
  元象XVERSE: "#CD5C5C", // 印度红
  Deci: "#FF1493", // 深粉色
  "A21 Labs": "#00BFFF", // 深天蓝
  中科闻歌: "#8B4513", // 棕色
  北京智源人工智能研究院: "#A0522D", // 沙棕色
};

// 处理数据，若size为0或为空则替换为500
var chartData = data.map(function (item) {
  var size = item.size || 500; // 默认值500
  return {
    name: item.model,
    value: [item.MMLU, item.GSM8K || 0, size],
    itemStyle: {
      color: colors[item.publisher] || "#808080", // 默认灰色
    },
    publisher: item.publisher, // 添加发布者字段
  };
});

var option = {
  title: {},
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return (
        params.name +
        "<br/>MMLU: " +
        params.value[0] +
        "<br/>GSM8K: " +
        params.value[1] +
        "<br/>参数大小: " +
        params.value[2] +
        "<br/>发布者: " +
        params.data.publisher
      ); // 添加发布者信息
    },
  },
  grid: {
    // 调整图表区域
    top: "5%", // 给图表顶部留出空间，避免图例被挡住
    bottom: "10%", // 给底部留出空间
    left: "10%",
    right: "10%",
  },
  xAxis: {
    name: "MMLU",
    type: "value",
    boundaryGap: false,
    min: 60,
  },
  yAxis: {
    name: "GSM8K",
    type: "value",
    min: 50,
  },
  series: [
    {
      type: "scatter",
      data: chartData,
      symbolSize: function (data) {
        return data[2] / 50; // size作为气泡大小
      },
      emphasis: {
        focus: "series",
      },
    },
  ],
};

// 使用刚指定的配置项和数据显示图表
chart.setOption(option);
