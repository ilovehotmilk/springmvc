function modalFun(obj) {
    this.sel = obj.sel;
    this.title = obj.title;
    this.name = obj.name;
    this.data = obj.data;
        $(this.sel).highcharts({
            chart: {
                type: 'spline',   //曲线图
                animation: Highcharts.svg,
                marginLeft:55
            },
            title: {
                text:this.title   //标题title
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 100
            },
            yAxis: {
                title: null,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            plotOptions: {
                series: {         //去除动画加载效果
                    animation: false
                }
            },
            credits:{                          //右下角文本不显示
                enabled: false
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: this.name,
                data:this.data
            }]
        });
}
//封装data函数
function modalData(){
    var data = [];
    return data;
}
//8小时时差等于28800000毫秒
//  上海    ************************************
//  吸气压力
var MG_1_1={
    sel:'#modal-1-mg',
    title:'实时趋势图 - 吸气压力(MPa)',
    name:'压力值',
    //data的值类型 : [{x,y}]   注:x为图表上的时间  y为图表上的值
    data:modalData()
}
modalFun(MG_1_1);
var M_1_1={
    sel:'#modal-1-m',
    title:'实时趋势图 - 吸气温度(℃)',
    name:'吸气温度',
    data:modalData()
}
modalFun(M_1_1);

//  排气压力
var MG_2_1={
    sel:'#modal-2-mg',
    title:'实时趋势图 - 排气压力(MPa)',
    name:'排气压力',
    data:modalData()
}
modalFun(MG_2_1);
//排气温度
var M_2_1={
    sel:'#modal-2-m',
    title:'实时趋势图 - 排气温度(℃)',
    name:'排气温度',
    data:modalData()
}
modalFun(M_2_1);

//  流量
var MG_L_1={
    sel:'#modal-L-1',
    title:'实时趋势图 - 润滑油流量(L/min)',
    name:'润滑油流量',
    data:modalData()
}
modalFun(MG_L_1);
//震动
var M_L_1={
    sel:'#modal-mm-1',
    title:'实时趋势图 - 震动(mm/s)',
    name:'震动',
    data:modalData()
}
modalFun(M_L_1);

//  武汉    ************************************
//  吸气压力
var MG_3_1={
    sel:'#modal-3-mg',
    title:'实时趋势图 - 压力(MPa)',
    name:'压力值',
    data:modalData()
}
modalFun(MG_3_1);
var M_3_1={
    sel:'#modal-3-m',
    title:'实时趋势图 - 温度(℃)',
    name:'温度值',
    data:modalData()
}
modalFun(M_3_1);

//  排气压力
var MG_4_1={
    sel:'#modal-4-mg',
    title:'实时趋势图 - 压力值(MPa)',
    name:'压力值',
    data:modalData()
}
modalFun(MG_4_1);
var M_4_1={
    sel:'#modal-4-m',
    title:'实时趋势图 - 温度值(℃)',
    name:'温度值',
    data:modalData()
}
modalFun(M_4_1);

//  流量
var MG_L_2={
    sel:'#modal-L-2',
    title:'实时趋势图 - 润滑油流量(L/min)',
    name:'润滑油流量',
    data:modalData()
}
modalFun(MG_L_2);
//震动
var M_L_2={
    sel:'#modal-mm-2',
    title:'实时趋势图 - 震动(mm/s)',
    name:'震动',
    data:modalData()
}
modalFun(M_L_2);

//  沈阳   ************************************
//  吸气压力
var MG_5_1={
    sel:'#modal-5-mg',
    title:'实时趋势图 - 压力值(MPa)',
    name:'压力值',
    data:modalData()
}
modalFun(MG_5_1);
var M_5_1={
    sel:'#modal-5-m',
    title:'实时趋势图 - 温度值(℃)',
    name:'温度值',
    data:modalData()
}
modalFun(M_5_1);

//  排气压力
var MG_6_1={
    sel:'#modal-6-mg',
    title:'实时趋势图 - 压力值(MPa)',
    name:'压力值',
    data:modalData()
}
modalFun(MG_6_1);
var M_6_1={
    sel:'#modal-6-m',
    title:'实时趋势图 - 温度值(MPa)',
    name:'温度值',
    data:modalData()
}
modalFun(M_6_1);

//  流量
var MG_L_3={
    sel:'#modal-L-3',
    title:'实时趋势图 - 润滑油流量(L/min)',
    name:'润滑油流量',
    data:modalData()
}
modalFun(MG_L_3);
//震动
var M_L_3={
    sel:'#modal-mm-3',
    title:'实时趋势图 - 震动(mm/s)',
    name:'震动',
    data:modalData()
}
modalFun(M_L_3);

//定时器刷新函数
window.setInterval(function(){
    MG_3_1.data.push({x:(new Date()).getTime()+28800000,y:Math.random()/10+0.8});
    modalFun(MG_3_1);
    M_3_1.data.push({x:(new Date()).getTime()+28800000,y:Math.random()+55});
    modalFun(M_3_1);
    MG_4_1.data.push({x:(new Date()).getTime()+28800000,y:Math.random()/10+0.5});
    modalFun(MG_4_1);
    M_4_1.data.push({x:(new Date()).getTime()+28800000,y:Math.random()+79.5});
    modalFun(M_4_1);
    MG_5_1.data.push({x:(new Date()).getTime()+28800000,y:Math.random()/10+1.3});
    modalFun(MG_5_1);
    M_5_1.data.push({x:(new Date()).getTime()+28800000,y:Math.random()+73});
    modalFun(M_5_1);
    MG_6_1.data.push({x:(new Date()).getTime()+28800000,y:Math.random()/10+0.25});
    modalFun(MG_6_1);
    M_6_1.data.push({x:(new Date()).getTime()+28800000,y:Math.random()+35});
    modalFun(M_6_1);

    MG_L_1.data.push({x:(new Date()).getTime()+28800000,y:(Math.random()*2)+80.5});
    modalFun(MG_L_1);
    MG_L_2.data.push({x:(new Date()).getTime()+28800000,y:(Math.random()*2)+78.5});
    modalFun(MG_L_2);
    MG_L_3.data.push({x:(new Date()).getTime()+28800000,y:(Math.random()*3)+79.3});
    modalFun(MG_L_3);

},2000);



