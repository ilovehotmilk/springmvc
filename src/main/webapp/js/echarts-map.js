var myChart = echarts.init(document.getElementById('map'));
var geoCoordMap = {
    "沈阳":[123.38,41.8],
    "上海":[121.48,31.22],
    "武汉":[114.31,30.52]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    backgroundColor: '#f9f9f9',
    title: {
        text: '全国站点分布图',

        x:'center',
        textStyle: {
            color: '#2a333d'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + params.value[2];
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['站点'],
        textStyle: {
            color: '#2a333d'
        }
    },

    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#878c9a',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [
        {
            name: '站点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([

                {name: "上海", value: '压缩机组'},
                {name: "沈阳", value: '压缩机组'},
                {name: "武汉", value: '压缩机组'}
            ]),
            symbolSize: 13,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 0
                }
            }
        }
    ]
}
myChart.setOption(option);