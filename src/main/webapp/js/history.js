
//站点
$(function(){
    var dropdown=$('.dropdown');
    dropdown.on('click', function (e) {
        e.stopPropagation();
    })
    $(".site").click(function(){
        var ul = $(".dropdown-site-ul");
        if(ul.css("display")=="none"){
            ul.slideDown("fast");
        }else{
            ul.slideUp("fast");
        }
    });
    //站点 ID
    $(".dropdown-site-ul li a").click(function(){
        var value = $(this).attr("rel");
        switch (value){
            case '1':
                $('.site').attr('id','20110200005');
                break;
            case '2':
                $('.site').attr('id','20110200001');
                break;
            case '3':
                $('.site').attr('id','20110200002');
                break;
        }
        var txt = $(this).text();
        $(".site").html(txt);
        $(".dropdown-site-ul").hide();
    });
    $(document).on('click',function(){
        $('.dropdown ul').slideUp("fast");
    });

    var hiddenNav=$('.hidden_nav');
    hiddenNav.on('click', function (e) {
        e.stopPropagation();
    })
    $(document).on('click',function(e){
        var btn=document.getElementById('showLeftPush');
        var span0=document.getElementsByClassName('icon-bar')[0];
        var span1=document.getElementsByClassName('icon-bar')[1];
        var span2=document.getElementsByClassName('icon-bar')[2];
        if(e.target==btn|| e.target==span0||e.target==span1||e.target==span2){
        }else{
            $('#cbp-spmenu-s1').removeClass('cbp-spmenu-open');
        }
    });
});

//监测量
$(function(){
    $(".monitor").click(function(){
        var ul = $(".dropdown-monitor-ul");
        if(ul.css("display")=="none"){
            ul.slideDown("fast");
        }else{
            ul.slideUp("fast");
        }
    });
    //监测量 ID
    $(".dropdown-monitor-ul li a").click(function(){
        var value = $(this).attr("rel");
        switch (value){
            case 'ps0':
                $('.monitor').attr('id','5');
                break;
            case 'tp0':
                $('.monitor').attr('id','3');
                break;
            case 'ps1':
                $('.monitor').attr('id','6');
                break;
            case 'tp1':
                $('.monitor').attr('id','4');
                break;
        }
        var txt = $(this).text();
        $(".monitor").html(txt);
        $(".dropdown-monitor-ul").hide();
    });
});

$('.nav-a a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
})

//数据分析
$(".nav-a .data-analysis").click(function () {
    if(isClick==true){
        $('.nav-a>li.record').css('display','none');
        isClick=false;
    }else{
        $('.nav-a>li.record').css('display','block');
        isClick=true;
    }
});
////失去焦点时隐藏
$('.nav-a li:not(.blur)').click(function(){
    if($(this).hasClass('active')==false){
        isClick=true;
    }else{
        $('.nav-a>li.record').css('display','none');
        isClick=false;
    }
});

//PC端 点击汉堡包按钮触发事件
var isClick=false;
$(".pc-button").click(
    function () {
        if(isClick==true){
            $('.right-nav').css("width",'200px');
            $('.main-content').css('padding-left','200px');
            isClick=false;
        }else{
            $('.right-nav').css("width",'100px');
            $('.main-content').css('padding-left','100px');
            isClick=true;
        }
    }
);

//点击其他位置 侧边栏菜单 收起
$(function () {
    var hiddenNav=$('.hidden_nav');
    hiddenNav.on('click', function (e) {
        e.stopPropagation();
    })
    $(document).on('click',function(e){
        var btn=document.getElementById('showLeftPush');
        var span0=document.getElementsByClassName('icon-bar')[0];
        var span1=document.getElementsByClassName('icon-bar')[1];
        var span2=document.getElementsByClassName('icon-bar')[2];
        if(e.target==btn|| e.target==span0||e.target==span1||e.target==span2){
        }else{
            $('#cbp-spmenu-s1').removeClass('cbp-spmenu-open');
        }
    });
});

//侧边栏菜单  js
( function( window ) {
    'use strict';
    function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    var hasClass, addClass, removeClass;
    if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
            return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
            elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
            elem.classList.remove( c );
        };
    }
    else {
        hasClass = function( elem, c ) {
            return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
            if ( !hasClass( elem, c ) ) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function( elem, c ) {
            elem.className = elem.className.replace( classReg( c ), ' ' );
        };
    }

    function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
    }
    window.classie = {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };
})( window );
var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    showLeftPush = document.getElementById( 'showLeftPush' ),
    body = document.body;
showLeftPush.onclick = function() {
    classie.toggle( body, 'cbp-spmenu-push-toright' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
};

//移动端侧边栏添加点击收起事件
$('.cbp-spmenu-left .phone-menu').on('click','li:not(.data-analysis)', function () {
    $('.cbp-spmenu-left').removeClass('cbp-spmenu-open');
});

$('.addActive').click(function(){
    $('#facility').addClass('active').siblings().removeClass('active');
})

//获取当前时间 格式 yyyy-MM-dd HH:mm:ss
function newDate(xxx){
    var date = new Date(xxx);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate()+1 < 10 ? '0'+(date.getDate())+' ' : date.getDate() + ' ';
    var h = date.getHours()< 10 ? '0'+(date.getHours())+':' : date.getHours() + ':';
    var m = date.getMinutes()< 10 ? '0'+(date.getMinutes())+':' : date.getMinutes() + ':';
    var s = date.getSeconds()< 10 ? '0'+(date.getSeconds()) : date.getSeconds();
    return Y+M+D+h+m+s;
}

$('.btn-time').on('click','button', function () {
    var dateNumber=$(this).attr('name');
    //当前时间 为结束时间
    var present=+new Date();
    //7天前  开始时间
    var selectDate=present-dateNumber*24*60*60*1000;
    //10分钟间隔  秒为单位
    var timemode=10*60;
    var endTime=newDate(present);
    var startTime=newDate(selectDate);
    var siteID=$('.site').attr('id');
    var monitorID=$('.monitor').attr('id');
    if(siteID!=undefined&&monitorID!=undefined){
        if(monitorID=='3'||monitorID=='4'){
            var subTitle='温度(℃)';
        }else if(monitorID=='5'||monitorID=='6'){
            var subTitle='压力(KPa)';
        }
        //获取用户点击的站点名称
        var title_site=$('.site').html();
        //获取用户点击的站点名称
        var name_monitor=$('.monitor').html();
        //  测试数据
        var sel_history=document.getElementById('history-charts');
        var obj_history={
            sel:sel_history,
            title:title_site,
            subtitle:subTitle,
            name:name_monitor
        }
        $.ajax({
            type:'GET',
            dataType:'json',
            data:'oid='+siteID+"&counter="+monitorID+"&timemode="+timemode+"&starttime="+startTime+"&endtime="+endTime,
            url:'http://139.196.232.96:8080/mpv2/factory/factoryreport',
            success:function(result){
                console.log(result);
                var jsonV=result;
                var jsonObj=eval(jsonV.list);
                var datasJson=jsonV.list[0].datas;
                var timesJson=jsonV.list[0].times;
                historyChart(obj_history,datasJson, timesJson);
            }
        })
    }else{
        alert("请选择站点或监测量");
    }
})

//历史数据 图表
function historyChart(obj,oriData, oriTime){
    this.sel=obj.sel;
    this.title=obj.title;
    this.subtitle=obj.subtitle;
    this.name=obj.name;
    this.data=oriData;
    this.date=oriTime;

    var myChart = echarts.init(this.sel);
    option = {
        tooltip: {
            trigger: 'axis'
            //position: function (pt) {
            //    return [pt[0], '10%'];
            //}
        },
        title: {
            left: 'center',
            padding:0,
            text: this.title,
            textStyle:{
                fontSize:16
            },
            subtext:this.subtitle,
            subtextStyle:{
                color:'#333'
            }
        },
        legend: {
            top: 'bottom',
            data:['流量']
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.date            //时间数据
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            minInterval:0.5
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '10%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
//                鼠标移入显示文本
                name:this.name,
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 0, 0,0)'
                        }])
                    }
                },
//                传入数据  data
                data: this.data
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//运行记录图表
//分析数据 图表
function analyzeCharts(obj){
    this.sel=obj.sel;
    this.data=obj.data;
    this.data1=obj.data1;
    this.date=obj.date;

    var myChart1 = echarts.init(this.sel);
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title:{
            text:'运行,停机时间(h)'
        },
        legend: {
            data:['运行时间','停机时间'],
            right:20
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
                data : this.date
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'运行时间',
                type:'bar',
                data:this.data
            },
            {
                name:'停机时间',
                type:'bar',
                stack: '广告',
                data:this.data1
            }
        ]
    };
    myChart1.setOption(option);
    window.addEventListener("resize", function () {
        myChart1.resize();
    });
}

//    时间 数据
function analyzeData(){
    var base = +new Date();
    var oneDay =24 * 3600 * 1000;
    var date = [];
    //    data 数据
    var data = [];
    var data1 = [];
    //循环天数
    for (var i = 1; i < 10; i++) {
        var now = new Date(base -=oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'));
        var val=parseInt((Math.random()*24));
        data.push(val);
        data1.push(24-val);
    }
    return {date:date.reverse(),data:data,data1:data1};
}
var x_analyze=analyzeData();
var sel_analyze=document.getElementById('analyze-charts');
var obj_analyze={
    sel:sel_analyze,
    data:x_analyze.data,
    data1: x_analyze.data1,
    date: x_analyze.date
}

//使用率 图表
function useCharts(obj){
    this.sel=obj.sel;
    this.data=obj.data;
    this.date=obj.date;
    var myChart2 = echarts.init(this.sel);
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title:{
            text:'使用率(%)'
        },
        legend: {
            data:['使用率'],
            right:20
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
                data : this.date
            }
        ],
        yAxis : [
            {
                type : 'value',
                max:100,
                axisLabel:{
                    show:true,
                    interval:"auto",
                    formatter:'{value}%'
                }
            }
        ],
        series : [
            {
                name:'使用率',
                type:'line',
                itemStyle:{
                    normal:{
                        label:{show:true,position:'top',formatter:'{c}%'}
                    }
                },
                data:this.data
            }
        ]
    };
    myChart2.setOption(option);
    window.addEventListener("resize", function () {
        myChart2.resize();
    });
}
//数据转为百分比
var arrData=x_analyze.data,useArr=[];
for(var i=0;i<arrData.length;i++){
    var arr1=arrData[i]/24*100;
    useArr.push(arr1.toFixed(2));
}
var sel=document.getElementById('analyze-use');
var obj={
    sel:sel,
    data:useArr,
    date: x_analyze.date
}

$('.chart_show').click(function () {
    analyzeCharts(obj_analyze);
    useCharts(obj);
});

//日常维护表格
var maintain_obj={
    name:'analog',
    phone:'13012345678',
    text:'日常维护'
};
var base=+new Date();
var oneDay=24*3600*1000;
var table_maintain=$('#maintain');
for(var i=0;i<5;i++){
    var tr=$('<tr></tr>').html(
        '<td>'+maintain_obj.name+'</td>'+
        '<td>'+maintain_obj.phone+'</td>'+
        '<td>'+maintain_obj.text+'</td>'+
        '<td>'+new Date(base-=oneDay).toLocaleString()+'</td>'
    );
    tr.appendTo(table_maintain);
}
$('#btn_1').click(function () {
    for(var i=0;i<5;i++){
        var tr=$('<tr></tr>').html(
            '<td>'+maintain_obj.name+'</td>'+
            '<td>'+maintain_obj.phone+'</td>'+
            '<td>'+maintain_obj.text+'</td>'+
            '<td>'+new Date(base-=oneDay).toLocaleString()+'</td>'
        );
        tr.appendTo(table_maintain);
    }
});

//报警信息
var message_obj={source:'站点异常',text:'温度超高',name:'analog'};
var base1=+new Date();
var oneDay1=24*3600*1000;
var table_message=$('#message');
for(var i=1;i<=5;i++){
    var tr=$('<tr></tr>').html(
        '<td>'+new Date(base1-=oneDay1).toLocaleString()+'</td>'+
        '<td>'+message_obj.source+'</td>'+
        '<td>'+message_obj.text+'</td>'+
        '<td>'+message_obj.name+'</td>'
    );
    tr.appendTo(table_message);
}
$('#btn_2').click(function(){
    for(var i=1;i<=5;i++){
        var tr=$('<tr></tr>').html(
            '<td>'+new Date(base1-=oneDay1).toLocaleString()+'</td>'+
            '<td>'+message_obj.source+'</td>'+
            '<td>'+message_obj.text+'</td>'+
            '<td>'+message_obj.name+'</td>'
        );
        tr.appendTo(table_message);
    }
});








