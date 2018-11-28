    // 滚动到某个位置显示搜索框
    // var jingDong = document.getElementById("body");
    // var daoHang = document.getElementById("header-header");
    // $("window").onscroll = function(e){
    //     if(this.scrollTop>400){
    //         daoHang.style.display="block";
    //     }else{
    //         daoHang.style.display="none";
    //     }
    // }

    $(window).scroll(function(){
        if($(window).scrollTop()>10){
            $("#header-header").css("display","block");
        }else{
            $("#header-header").css("display","none");
        }
    });

    // 导航栏北京    
    var beijing = document.getElementById("dd");
    var lis = document.querySelectorAll("#nav-list li");
    var xm = document.getElementById("xm");
    
    // onmouseenter鼠标放在第一个导航栏，下面出现下拉框，remove移除，也就是#xiaomi.hide隐藏的话就会出现下拉框
    lis[0].onmouseenter = function(){
        beijing.classList.remove("hide");
        xm.classList.remove("hide");
    }
    lis[0].onmouseleave = function(){
        beijing.classList.add("hide");
        xm.classList.add("hide");
    }

    // 为了让导航栏停在那里可以点击。
    beijing.onmouseenter = function(){
        beijing.classList.remove("hide");
        xm.classList.remove("hide");
    }

    beijing.onmouseleave = function(){
        beijing.classList.add("hide");
        xm.classList.add("hide");
    }

 
/* 我的京东下拉框 */
var dd1 = document.getElementById("dd1");
var lis1 = document.querySelectorAll("#nav-list1 li");
var xm1 = document.getElementById("wdjd");

// onmouseenter鼠标放在第一个导航栏，下面出现下拉框，remove移除，也就是#xiaomi.hide隐藏的话就会出现下拉框
lis1[5].onmouseenter = function(){
    dd1.classList.remove("hide");
    xm1.classList.remove("hide");
}
lis1[5].onmouseleave = function(){
    dd1.classList.add("hide");
    xm1.classList.add("hide");
}

// 为了让导航栏停在那里可以点击。
dd1.onmouseenter = function(){
    dd1.classList.remove("hide");
    xm1.classList.remove("hide");
}

dd1.onmouseleave = function(){
    dd1.classList.add("hide");
    xm1.classList.add("hide");
}
/* 企业采购下拉框 */
var dd2 = document.getElementById("dd2");
var qiye = document.getElementById("n");
qiye.onmouseenter = function(){
    qiye.classList.remove("hide");
    // qiye.style.display="block";
    dd2.style.display="block";
}
qiye.onmouseleave = function(){
    qiye.classList.add("hide");
    // qiye.style.display="none";
    dd2.style.display="none";
}
dd2.onmouseenter = function(){
    qiye.classList.remove("hide");
    // qiye.style.display="block";
    dd2.style.display="block";
}
dd2.onmouseleave = function(){
    qiye.classList.add("hide");
    // qiye.style.display="none";
    dd2.style.display="none";
}

// 客户服务下拉框
var dd3 = document.getElementById("dd3");
var khfw = document.getElementById("khfw");
khfw.onmouseenter = function(){
    dd3.style.display="block";
    khfw.classList.remove("hide");
}
khfw.onmouseleave = function(){
    dd3.style.display="none";
    khfw.classList.add("hide");
}
dd3.onmouseenter = function(){
    dd3.style.display="block";
    khfw.classList.remove("hide");
}
dd3.onmouseleave = function(){
    dd3.style.display="none";
    khfw.classList.add("hide");
}
// 网站导航下拉框
var dd4 = document.getElementById("dd4");
var k = document.getElementById("wzdh");
k.onmouseenter = function(){
    dd4.classList.remove("hide");
    k.classList.remove("hide");
}
k.onmouseleave = function(){
    dd4.classList.add("hide");
    k.classList.add("hide");
}
dd4.onmouseenter = function(){
    dd4.classList.remove("hide");
    k.classList.remove("hide");
}
dd4.onmouseleave = function(){
    dd4.classList.add("hide");
    k.classList.add("hide");
}

// 中间部分
// var jiayong = document.getElementById("jiayong");
var li1 = document.querySelectorAll("#J_fs_act1 li");
var ss = document.getElementById("clearfix");
li1[0].onmouseenter = function(){
    ss.style.display="block";
    
}
li1[0].onmouseleave = function(){
    ss.style.display="none";    
}
ss.onmouseenter = function(){
    ss.style.display="block";
    
}
ss.onmouseleave = function(){
    ss.style.display="none";    
}
// 获取我的购物车的href
    var btn = document.getElementById("#button2");
    btn.onclick = function(){
        location.href = "shop.html";
    }
// 侧边栏
    $(".j1").mouseenter(function(){
        $(".j1").css("background","#e33333");
        $("#yonghu").show();
        // $("#yonghu").css("background","#e33333");
    });
    $(".j1").mouseleave(function(){
        $(".j1").css("background","#5f5f5f");
        $("#yonghu").hide();
    });
    $("#yonghu").mouseenter(function(){
        $("#yonghu").show();
        $(".j1").css("background","#e33333");
    });
    $("#yonghu").mouseleave(function(){
        $("#yonghu").hide();
        $(".j1").css("background","#5f5f5f");
    });

// 回到顶部
var back = document.getElementById("mmmmmm");

back.onclick = function(){
    var step = document.documentElement.scrollTop/15;
        //  console.log(step);
        // setInterval每隔***（我们设置的）秒数执行一些，不限次数
         var timer = setInterval(function(){
            // 获得到当前位置距离顶部多少像素=...除以15获得稍微小一点的高度
             document.documentElement.scrollTop =  document.documentElement.scrollTop - step  ;
             console.log(document.documentElement.scrollTop =  document.documentElement.scrollTop - step);
             if(document.documentElement.scrollTop<=0){
                 clearInterval(timer);
             }
         },20);
}

function display() { 
    document.getElementById("box").style.display = "block"; 
    document.getElementById("J-trigger").style.backgroundColor="#e33333"; 
}
function disappear() { 
    document.getElementById("box").style.display = "none"; 
    document.getElementById("J-trigger").style.backgroundColor="#5f5f5f"; 
}
box.onmouseenter = function(){
    box.style.display="block";
    // document.getElementById("box").style.backgroundColor="#e33333"; 
    document.getElementById("J-trigger").style.backgroundColor="#e33333";
}
box.onmouseleave = function(){
    box.style.display="none";   
    document.getElementById("J-trigger").style.backgroundColor="#5f5f5f"; 
}

