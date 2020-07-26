<template>
    <div class="chartA">
        <div id="chartA" style="width: 75%;height:300px;"></div>
    </div>
</template>

<script>
export default {
    name: "chartA",
    props: {},
    data() {
        return {};
    },
    created() {},
    mounted() {
        this.drawChart();
    },
    methods: {
        drawChart() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById("chartA"));
            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: "日温度",
                    subtext: "chartA | 字体大小 | 渐变",
                    left: 100,
                    textStyle: {
                        fontSize: 20
                    }
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{b}: {c} ({d}%)"
                },
                legend: {
                    orient: "horizontal",
                    bottom: 10,
                    data: [
                        "已用产床",
                        "未用产床",
                        "待产",
                        "已产",
                        "断奶",
                        "空产床"
                    ],
                    textStyle: {
                        fontSize: 16
                    }
                },
                series: [
                    {
                        type: "pie",
                        selectedMode: "single",
                        radius: ["0", "40%"],
                        label: {
                            position: "inner"
                        },
                        labelLine: {
                            show: true
                        },
                        data: [
                            { value: 800, name: "已用产床" },
                            { value: 200, name: "未用产床" }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0
                            },
                            normal: {
                                color: function(params) {
                                    //自定义颜色 89,212,212
                                    var colorList = [
                                        "rgba(58,161,255,0.5)",
                                        "rgba(54,203,203,0.7)"
                                    ];
                                    return colorList[params.dataIndex];
                                }
                            }
                        }
                    },
                    {
                        type: "pie",
                        // 内外圈厚度
                        radius: ["40%", "60%"],
                        label: {
                            formatter: "{d}%"
                        },
                        data: [
                            { value: 300, name: "待产" },
                            { value: 300, name: "已产" },
                            { value: 200, name: "断奶" },
                            { value: 200, name: "空产床" }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0
                            },
                            normal: {
                                textStyle: {
                                    fontSize: 30
                                },
                                color: function(params) {
                                    //自定义颜色  "rgb(255,0,0)",
                                    var colorList = [
                                        "rgb(0,238,255)",
                                        "rgb(149,162,255)",
                                        "rgb(58,186,255)",
                                        "rgba(54,203,203,0.7)"
                                    ];
                                    return colorList[params.dataIndex];
                                }
                            }
                        }
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>