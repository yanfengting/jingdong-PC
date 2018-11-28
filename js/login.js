// 扫码登录点击监听
$("#tip1").on("click",function(){
    $("#a2").css("color","#e4393c");
    $("#login-qrcode").css("display","block");
    $("#login-box").css("display","none");
});
    
$("#tip2").on("click",function(){
    $("#a3").css("color","#e4393c");
    $("#login-box").css("display","block");
    $("#login-qrcode").css("display","none");
});

// var t = document.getElementById("tip2");
// console.log(t)
// var a3 = document.getElementById("a3");
// t.onclick = function(){
//     a3.style.color="#e4393c";
// };
