// JavaScript Document
$(function(){
	$('.city-current i').bind('click',function(){
        var a=$('.cityAddress'),b=null;
        a.toggle();
        function _hide(){
            b=setTimeout(function(){a.hide()},500);
        }
        a.bind('mouseover',function(){
            a.show();
            clearTimeout(b);
        }).bind('mouseout',_hide);
    });
	
    $('#j_titleBiao').bind('click',function(){
        var a=$('#j_saixuanFenlei'),b=null;
        a.toggle();
        function _hide(){
            b=setTimeout(function(){a.hide()},500);
        }
        a.bind('mouseover',function(){
            a.show();
            clearTimeout(b);
        }).bind('mouseout',_hide);
    });
	
	$('#intr-i').bind('click',function(){
        var a=$('#notice'),b=null;
        a.toggle();
        function _hide(){
            b=setTimeout(function(){a.hide()},500);
        }
        a.bind('mouseover',function(){
            a.show();
            clearTimeout(b);
        }).bind('mouseout',_hide);
    });
	
    $(".around-list:last,.order-boxTable3 tr td:last,.order-boxTable3 tr th:last").css('border-bottom','0');
	$(".introductionXianLu-box4").each(function(){
        $(this).children('div').children('dl:last').css("border-bottom","0");
     }) 
});