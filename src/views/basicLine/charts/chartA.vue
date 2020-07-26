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
            let myChart = this.$echarts.init(
                document.getElementById("chartA")
            );
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
                    trigger: "axis"
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: "none"
                        },
                        dataView: { readOnly: true },
                        magicType: { type: ["line", "bar"] },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: "red" // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "blue" // 100% 处的颜色
                        }
                    ]
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: [
                        "七日前",
                        "六日前",
                        "五日前",
                        "四日前",
                        "三日前",
                        "两日前",
                        "当前"
                    ],
                    axisLabel: {
                        fontSize: 18
                    }
                },
                yAxis: {
                    type: "value",
                    axisLabel: {
                        formatter: "{value} °C",
                        fontSize: 15
                    },
                    scale: true,
                },
                series: [
                    {
                        name: "时间",
                        type: "line",
                        data: [32.5, 32.6, 32.4, 32.5, 32.4, 32.6, 32.4],
                        markPoint: {
                            data: [
                                { type: "max", name: "最大值" },
                                { type: "min", name: "最小值" }
                            ]
                        },
                        markLine: {
                            data: [{ type: "average", name: "平均值" }]
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