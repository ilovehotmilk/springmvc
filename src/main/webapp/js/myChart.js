//吸气 排气
function chartFun(obj1,obj2){
    this.mgSelect=obj1.sel;
    this.mgTitle=obj1.title;
    this.mgUnit=obj1.unit;
    this.mgColor=obj1.color;
    this.mgMin=obj1.min;
    this.mgMax=obj1.max;
    this.mgData=obj1.data;

    this.mSelect=obj2.sel;
    this.mTitle=obj2.title;
    this.mUnit=obj2.unit;
    this.mColor=obj2.color;
    this.mMin=obj2.min;
    this.mMax=obj2.max;
    this.mData=obj2.data;
    switch(this.mgColor){
        case 'green':
             gaugeOptions = {
                chart: {
                    type: 'solidgauge'
                },
                title: null,
                pane: {
                    center: ['50%', '65%'],  // x 左右     y 上下
                    size: '100%',       //画图尺寸
                    startAngle: -130,  // x轴或测量轴的开始度数，以度数的方式给出。0是北
                    endAngle: 130,    //x轴极坐标或角度轴的最终度数，以度数的方式给出。0是北
                    background: {
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                        innerRadius: '80%',  //画图宽度
                        outerRadius: '100%', //画框宽度
                        shape: 'arc'
                    }
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    stops: [
                        [1, '#449D44']
                    ],
                    lineWidth: 0,
                    minorTickInterval: null,
                    tickPixelInterval: 400,
                    tickWidth: 0,
                    title: {
                        y: -50    //title 文本位置
                    },
                    labels: {
                        y: 30  //起点  终点  文字位置
                    }
                },
                plotOptions: {
                    series: {         //去除动画加载效果
                        animation: false
                    },
                    solidgauge: {
                        dataLabels: {
                            y: 30,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                }
            } ;
            break;
        case 'red':
             gaugeOptions = {
                chart: {
                    type: 'solidgauge'
                },
                title: null,
                pane: {
                    center: ['50%', '65%'],  // x 左右     y 上下
                    size: '100%',       //画图尺寸
                    startAngle: -130,  // x轴或测量轴的开始度数，以度数的方式给出。0是北
                    endAngle: 130,    //x轴极坐标或角度轴的最终度数，以度数的方式给出。0是北
                    background: {
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                        innerRadius: '80%',  //画图宽度
                        outerRadius: '100%', //画框宽度
                        shape: 'arc'
                    }
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    stops: [
                        [1, '#e4393c']
                    ],
                    lineWidth: 0,
                    minorTickInterval: null,
                    tickPixelInterval: 400,
                    tickWidth: 0,
                    title: {
                        y: -50    //title 文本位置
                    },
                    labels: {
                        y: 30  //起点  终点  文字位置
                    }
                },
                plotOptions: {
                    series: {         //去除动画加载效果
                        animation: false
                    },
                    solidgauge: {
                        dataLabels: {
                            y: 30,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                }
            } ;
            break;
        case 'blue':
             gaugeOptions = {
                chart: {
                    type: 'solidgauge'
                },
                title: null,
                pane: {
                    center: ['50%', '65%'],  // x 左右     y 上下
                    size: '100%',       //画图尺寸
                    startAngle: -130,  // x轴或测量轴的开始度数，以度数的方式给出。0是北
                    endAngle: 130,    //x轴极坐标或角度轴的最终度数，以度数的方式给出。0是北
                    background: {
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                        innerRadius: '80%',  //画图宽度
                        outerRadius: '100%', //画框宽度
                        shape: 'arc'
                    }
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    stops: [
                        [1, '#154B9D']
                    ],
                    lineWidth: 0,
                    minorTickInterval: null,
                    tickPixelInterval: 400,
                    tickWidth: 0,
                    title: {
                        y: -50    //title 文本位置
                    },
                    labels: {
                        y: 30  //起点  终点  文字位置
                    }
                },
                plotOptions: {
                    series: {         //去除动画加载效果
                        animation: false
                    },
                    solidgauge: {
                        dataLabels: {
                            y: 30,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                }
            } ;
            break;
        default:
             gaugeOptions = {
                chart: {
                    type: 'solidgauge'
                },

                title: null,
                pane: {
                    center: ['50%', '65%'],  // x 左右     y 上下
                    size: '100%',       //画图尺寸
                    startAngle: -130,  // x轴或测量轴的开始度数，以度数的方式给出。0是北
                    endAngle: 130,    //x轴极坐标或角度轴的最终度数，以度数的方式给出。0是北
                    background: {
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                        innerRadius: '80%',  //画图宽度
                        outerRadius: '100%', //画框宽度
                        shape: 'arc'
                    }
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    stops: [
                        [0.6, '#154B9D'],
                        [0.8, 'green'],
                        [0.9, '#e4393c']
                    ],
                    lineWidth: 0,
                    minorTickInterval: null,
                    tickPixelInterval: 400,
                    tickWidth: 0,
                    title: {
                        y: -50    //title 文本位置
                    },
                    labels: {
                        y: 30  //起点  终点  文字位置
                    }
                },
                plotOptions: {
                    series: {         //去除动画加载效果
                        animation: false
                    },
                    solidgauge: {
                        dataLabels: {
                            y: 30,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                }
            } ;
    }
    switch(this.mColor){
        case 'green':
             gaugeOptions1 = {
                chart: {
                    type: 'solidgauge'
                },
                title: null,
                pane: {
                    center: ['50%', '65%'],  // x 左右     y 上下
                    size: '100%',       //画图尺寸
                    startAngle: -130,  // x轴或测量轴的开始度数，以度数的方式给出。0是北
                    endAngle: 130,    //x轴极坐标或角度轴的最终度数，以度数的方式给出。0是北
                    background: {
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                        innerRadius: '80%',  //画图宽度
                        outerRadius: '100%', //画框宽度
                        shape: 'arc'
                    }
                },
                tooltip: {
                    enabled: false
                },
                // the value axis 轴心
                yAxis: {
                    stops: [
                        [1, '#449D44']
                    ],
                    lineWidth: 0,
                    minorTickInterval: null,
                    tickPixelInterval: 400,
                    tickWidth: 0,
                    title: {
                        y: -50    //title 文本位置
                    },
                    labels: {
                        y: 30  //起点  终点  文字位置
                    }
                },
                plotOptions: {
                    series: {         //去除动画加载效果
                        animation: false
                    },
                    solidgauge: {
                        dataLabels: {
                            y: 30,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                }
            } ;
            break;
        case 'red':
             gaugeOptions1 = {
                chart: {
                    type: 'solidgauge'
                },
                title: null,
                pane: {
                    center: ['50%', '65%'],  // x 左右     y 上下
                    size: '100%',       //画图尺寸
                    startAngle: -130,  // x轴或测量轴的开始度数，以度数的方式给出。0是北
                    endAngle: 130,    //x轴极坐标或角度轴的最终度数，以度数的方式给出。0是北
                    background: {
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                        innerRadius: '80%',  //画图宽度
                        outerRadius: '100%', //画框宽度
                        shape: 'arc'
                    }
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    stops: [
                        [1, '#e4393c']
                    ],
                    lineWidth: 0,
                    minorTickInterval: null,
                    tickPixelInterval: 400,
                    tickWidth: 0,
                    title: {
                        y: -50    //title 文本位置
                    },
                    labels: {
                        y: 30  //起点  终点  文字位置
                    }
                },
                plotOptions: {
                    series: {         //去除动画加载效果
                        animation: false
                    },
                    solidgauge: {
                        dataLabels: {
                            y: 30,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                }
            } ;
            break;
        case 'blue':
             gaugeOptions1 = {
                chart: {
                    type: 'solidgauge'
                },
                title: null,
                pane: {
                    center: ['50%', '65%'],  // x 左右     y 上下
                    size: '100%',       //画图尺寸
                    startAngle: -130,  // x轴或测量轴的开始度数，以度数的方式给出。0是北
                    endAngle: 130,    //x轴极坐标或角度轴的最终度数，以度数的方式给出。0是北
                    background: {
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                        innerRadius: '80%',  //画图宽度
                        outerRadius: '100%', //画框宽度
                        shape: 'arc'
                    }
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    stops: [
                        [1, '#154B9D']
                    ],
                    lineWidth: 0,
                    minorTickInterval: null,
                    tickPixelInterval: 400,
                    tickWidth: 0,
                    title: {
                        y: -50    //title 文本位置
                    },
                    labels: {
                        y: 30  //起点  终点  文字位置
                    }
                },
                plotOptions: {
                    series: {         //去除动画加载效果
                        animation: false
                    },
                    solidgauge: {
                        dataLabels: {
                            y: 30,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                }
            } ;
            break;
        default:
             gaugeOptions1 = {
                chart: {
                    type: 'solidgauge'
                },

                title: null,
                pane: {
                    center: ['50%', '65%'],  // x 左右     y 上下
                    size: '100%',       //画图尺寸
                    startAngle: -130,  // x轴或测量轴的开始度数，以度数的方式给出。0是北
                    endAngle: 130,    //x轴极坐标或角度轴的最终度数，以度数的方式给出。0是北
                    background: {
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                        innerRadius: '80%',  //画图宽度
                        outerRadius: '100%', //画框宽度
                        shape: 'arc'
                    }
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    stops: [
                        [0.6, '#154B9D'],
                        [0.8, 'green'],
                        [0.9, '#e4393c']
                    ],
                    lineWidth: 0,
                    minorTickInterval: null,
                    tickPixelInterval: 400,
                    tickWidth: 0,
                    title: {
                        y: -50    //title 文本位置
                    },
                    labels: {
                        y: 30  //起点  终点  文字位置
                    }
                },
                plotOptions: {
                    series: {         //去除动画加载效果
                        animation: false
                    },
                    solidgauge: {
                        dataLabels: {
                            y: 30,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                }
            } ;
    }
        $(this.mgSelect).highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: this.mgMin,                     // ***改动
                max: this.mgMax,                     // ***改动
                title: {
                    text:this.mgTitle      // ***改动
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Speed',
                innerRadius: '80%',   //更改画图宽度
                data: this.mgData,               // ***改动
                dataLabels: {
                    format: '<div style="text-align:center"><span class="stress" style="font-size:20px;">{y:.2f}</span><br/>' +
                    '<span style="font-size:14px;color:#878C9A">'+this.mgUnit+'</span></div>'
                },
                tooltip: {
                    valueSuffix: ' MPa'
                }
            }]
        }));
//        温度参数
        // The RPM gauge 每秒 尺寸
        $(this.mSelect).highcharts(Highcharts.merge(gaugeOptions1, {
            yAxis: {
                min:this.mMin,
                max:this.mMax,
                title: {
                    text: this.mTitle
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'RPM',
                innerRadius: '80%',
                data: this.mData,        // ***改动
                dataLabels: {
                    format: '<div style="text-align:center"><span class="temp" style="font-size:20px;">{y:.1f}</span><br/>' +
                    '<span style="font-size:14px;color:#878C9A">'+this.mUnit+'</span></div>'
                },
                tooltip: {
                    valueSuffix: '℃'
                }
            }]
        }));
    }

//流量
function singleChartFun(obj1){
    this.mgSelect=obj1.sel;
    this.mgTitle=obj1.title;
    this.mgUnit=obj1.unit;
    this.mgMin=obj1.min;
    this.mgMax=obj1.max;
    this.mgData=obj1.data;

    var gaugeOptions = {
        chart: {
            type: 'solidgauge'
        },
        title: null,
        pane: {
            center: ['50%', '65%'],  // x 左右     y 上下
            size: '100%',       //画图尺寸
            startAngle: -130,  // x轴或测量轴的开始度数，以度数的方式给出。0是北
            endAngle: 130,    //x轴极坐标或角度轴的最终度数，以度数的方式给出。0是北
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '80%',  //画图宽度
                outerRadius: '100%', //画框宽度
                shape: 'arc'
            }
        },
        tooltip: {
            enabled: false
        },
        yAxis: {
            stops: [
               [1,'#ff6700']
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -50    //title 文本位置
            },
            labels: {
                y: 30  //起点  终点  文字位置
            }
        },
        plotOptions: {
            series: {         //去除动画加载效果
                animation: false
            },
            solidgauge: {
                dataLabels: {
                    y: 30,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    } ;
//        设置图表参数       // ***改动  压力
    $(this.mgSelect).highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: this.mgMin,                     // ***改动
            max: this.mgMax,                     // ***改动
            title: {
                text:this.mgTitle      // ***改动
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Speed',
            innerRadius: '80%',   //更改画图宽度
            data: this.mgData,               // ***改动
            dataLabels: {
                format: '<div style="text-align:center"><span class="stress" style="font-size:20px;">{y:.2f}</span><br/>' +
                '<span style="font-size:14px;color:#878C9A">'+this.mgUnit+'</span></div>'
            },
            tooltip: {
                valueSuffix: ' MPa'
            }
        }]
    }));
}
//振动
function vibrateChartFun(obj){
    this.sel=obj.sel;
    this.title=obj.title;
    this.data=obj.data;
    var myChart = echarts.init(this.sel);  // -***
    option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        animation:false,
        title:{
            textStyle:{
                fontSize:'13px'
            },
            text:'振动(g)'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : obj.xname,      //****
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitNumber:3
            }
        ],
        series : [
            {
                name:'振动频率(g)',
                type:'bar',
                barWidth: '20%',
                data:this.data  //***
            }
        ]
    };
    myChart.setOption(option);
}

//上海
//     ****吸气压力  温度
var MG_1={
    sel:"#container-1-mg",
    title:"吸气压力",
    unit:'MPa',
    color:'green',
    min:0,
    max:2,
    // data就是需要传入值的位置   是一个数组类型
    data:[0]
}
var M_1={
    sel:"#container-1-m",
    title:"吸气温度",
    unit:'℃',
    color:'blue',
    min:0,
    max:100,
    // data就是需要传入值的位置   是一个数组类型
    data:[0]
}
chartFun(MG_1,M_1);  //函数调用

//     ****排气压力  温度
var MG_2={
    sel:"#container-2-mg",
    title:"排气压力",
    unit:'MPa',
    color:'green',
    min:0,
    max:2,
    data:[0]
}
var M_2={
    sel:"#container-2-m",
    title:"排气温度",
    unit:'℃',
    color:'red',
    min:0,
    max:100,
    data:[0]
}
chartFun(MG_2,M_2);

//流量
var L_1={
    sel:"#container-L-1",
    title:"润滑油流量",
    unit:'ml/min',
    min:0,
    max:100,
    data:[77.2]
}
singleChartFun(L_1);

//震动
var sel_mm_1=document.getElementById('container-mm-1');
var mm_1={
    sel:sel_mm_1,
    title:"振动(g)",
    xname:['x轴','y轴','z轴'],
    data:[23.3,53.6,41.7]
}
vibrateChartFun(mm_1);

//武汉
//     ****吸气压力  温度
var MG_3={
    sel:"#container-3-mg",
    title:"吸气压力",
    unit:'MPa',
    color:'green',
    min:0,
    max:2,
    data:[0.8]
}
var M_3={
    sel:"#container-3-m",
    title:"吸气温度",
    unit:'℃',
    color:'blue',
    min:0,
    max:100,
    data:[55]
}
chartFun(MG_3,M_3);
//     ****排气压力  温度
var MG_4={
    sel:"#container-4-mg",
    title:"排气压力",
    unit:'MPa',
    color:'green',
    min:0,
    max:2,
    data:[0.5]
}
var M_4={
    sel:"#container-4-m",
    title:"排气温度",
    unit:'℃',
    color:'red',
    min:0,
    max:100,
    data:[79.5]
}
chartFun(MG_4,M_4);

//流量
var L_2={
    sel:"#container-L-2",
    title:"润滑油流量",
    unit:'ml/min',
    min:0,
    max:100,
    data:[79.2]
}
singleChartFun(L_2);
//震动
var sel_mm_2=document.getElementById('container-mm-2');
var mm_2={
    sel:sel_mm_2,
    title:"振动(g)",
    xname:['x轴','y轴','z轴'],
    data:[40.3,25.6,55.7]
}
vibrateChartFun(mm_2);

//沈阳
//     ****吸气压力  温度
var MG_5={
    sel:"#container-5-mg",
    title:"吸气压力",
    unit:'MPa',
    color:'green',
    min:0,
    max:2,
    data:[1.3]
}
var M_5={
    sel:"#container-5-m",
    title:"吸气温度",
    unit:'℃',
    color:'blue',
    min:0,
    max:100,
    data:[73]
}
chartFun(MG_5,M_5);
//     ****排气压力  温度
var MG_6={
    sel:"#container-6-mg",
    title:"排气压力",
    unit:'MPa',
    color:'green',
    min:0,
    max:2,
    data:[0.25]
}
var M_6={
    sel:"#container-6-m",
    title:"排气温度",
    unit:'℃',
    color:'red',
    min:0,
    max:100,
    data:[35]
}
chartFun(MG_6,M_6);

//流量
var L_3={
    sel:"#container-L-3",
    title:"润滑油流量",
    unit:'ml/min',
    min:0,
    max:100,
    data:[80.2]
}
singleChartFun(L_3);
//震动
var sel_mm_3=document.getElementById('container-mm-3');
var mm_3={
    sel:sel_mm_3,
    title:"振动(g)",
    xname:['x轴','y轴','z轴'],
    data:[21.3,43.6,33.7]
}
vibrateChartFun(mm_3);


//定时器刷新函数
window.setInterval(function(){

    MG_3.data[0]=parseFloat((Math.random()/10+0.8).toFixed(2));
    M_3.data[0]=parseFloat((Math.random()+55).toFixed(1));
    chartFun(MG_3,M_3);
    MG_4.data[0]=parseFloat((Math.random()/10+0.5).toFixed(2));
    M_4.data[0]=parseFloat((Math.random()+79.5).toFixed(1));
    chartFun(MG_4,M_4);
    MG_5.data[0]=parseFloat((Math.random()/10+1.3).toFixed(2));
    M_5.data[0]=parseFloat((Math.random()+73).toFixed(1));
    chartFun(MG_5,M_5);
    MG_6.data[0]=parseFloat((Math.random()/10+0.25).toFixed(2));
    M_6.data[0]=parseFloat((Math.random()+35).toFixed(1));
    chartFun(MG_6,M_6);

    L_1.data[0]=parseFloat((Math.random()*2+78.8).toFixed(1));
    singleChartFun(L_1);
    mm_1.data[0]=parseFloat((Math.random()*12+22.9).toFixed(1));
    mm_1.data[1]=parseFloat((Math.random()*7+52.9).toFixed(1));
    mm_1.data[2]=parseFloat((Math.random()*9+42.9).toFixed(1));
    vibrateChartFun(mm_1);

    L_2.data[0]=parseFloat((Math.random()*2+78.5).toFixed(1));
    singleChartFun(L_2);
    mm_2.data[0]=parseFloat((Math.random()*8+40.9).toFixed(1));
    mm_2.data[1]=parseFloat((Math.random()*7+25.9).toFixed(1));
    mm_2.data[2]=parseFloat((Math.random()*10+55.9).toFixed(1));
    vibrateChartFun(mm_2);

    L_3.data[0]=parseFloat((Math.random()*3+79.3).toFixed(1));
    singleChartFun(L_3);
    mm_3.data[0]=parseFloat((Math.random()*10+21.9).toFixed(1));
    mm_3.data[1]=parseFloat((Math.random()*8+43.9).toFixed(1));
    mm_3.data[2]=parseFloat((Math.random()*10+33.9).toFixed(1));
    vibrateChartFun(mm_3);

    $('.s1_l').html(MG_3.data[0]);
    $('.s1_t').html(M_3.data[0]);
    $('.s1_hm').html(MG_4.data[0]);
    $('.s1_fm').html(M_4.data[0]);
    $('.s1_lube').html(L_2.data[0]);
    $('.s1_shake_x').html(mm_2.data[0]);
    $('.s1_shake_y').html(mm_2.data[1]);
    $('.s1_shake_z').html(mm_2.data[2]);
},2000);

