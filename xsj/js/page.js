 $(document).ready(function(){
 	$('.npc_box').fadeOut();
 	setTimeout(function () {
        $('.loading_bg').fadeOut();
    },2500);

 	$(".start_video").click(function(){
 		$(this).hide();
 		$(".enter_video").get(0).play();
 	});

	$(".enter_video").on("timeupdate", function() {
		if($(".enter_video").get(0).currentTime > 13.3){
			$(this).fadeOut();
			$(".enter_video").fadeOut();
		}
	});
 });

(function() {

	$("#wrapper").load(function (){});

	var myScroll;
	var win_height = document.body.scrollHeight,
		win_width = document.body.scrollWidth,
		x_width = (win_height*6660)/1204,
		x_factor = x_width / 6660;

	console.log(x_width);  // 4071.229235880399
	console.log(x_factor);  //0.6112956810631229  

	$("#scroller").css('height',win_height);
	$("#scroller").css('max-height',win_height);
	$("#scroller").css('width',x_width);

	var npc_pic_width = 200,
		npc_pic_height = 346,
		dialogue_box_height = 110;

	$(".npc_box").css('width',x_factor*npc_pic_width);   //npc.jpg  w:200   h:346   multi with x_factor to get responsive position
	$(".npc_box").css('height',x_factor*npc_pic_height);


	$(".dialogue_box").css('left',x_factor*npc_pic_width);		//dialogue_box responsive position
	$(".dialogue_box").css('bottom',x_factor*npc_pic_height - dialogue_box_height*1.2);

	$("#loading_bar").css({
		top: (win_height - x_factor*65)*0.5,
		left: (win_width - x_factor*172)*0.5
	});

	var progress1 = $("#loading_bar").Progress({
		percent: 100,
		width: x_factor*172,
		height: x_factor*65,
		fontSize: x_factor*16,
		increaseSpeed: 2
	});


	//responsive coordinates and w and h for every items
	$(".enter_btn").css({
		top: (win_height - x_factor*65)*0.5,
		left: (win_width - x_factor*172)*0.5,
		width: x_factor * 172,
		height: x_factor * 65,
	});

	$(".close_btn_win").css({
		top: (win_height - 681*x_factor)*0.5,
		right:5,
		width: x_factor * 40,
		height: x_factor * 40,
	});

	$(".animate-bounce-up").css({
		top: -(x_factor * 31) - 5,
		width: x_factor * 24,
		height: x_factor * 31,
	});

	$(".alert_find_key").css({
		left: (win_width - 321*x_factor)*0.5,
		top: (win_height - 353*x_factor)*0.5 ,
		width: 321*x_factor,
		height: 353*x_factor
	});

	$(".alert_find_xm").css({
		left: (win_width - 370*x_factor)*0.5,
		top: (win_height - 461*x_factor)*0.5 ,
		width: 370*x_factor,
		height: 461*x_factor
	});

	$(".alert_find_zb").css({
		left: (win_width - 370*x_factor)*0.5,
		top: (win_height - 461*x_factor)*0.5 ,
		width: 370*x_factor,
		height: 461*x_factor
	});

	$(".alert_need_key").css({
		left: (win_width - 302*x_factor)*0.5,
		top: (win_height - 334*x_factor)*0.5 ,
		width: 302*x_factor,
		height: 334*x_factor
	});

	$(".alert_invate_friend").css({
		right: 80*x_factor,
		top: 0,
		width: 304*x_factor,
		height: 330*x_factor
	});

	$(".video_box_1").css({
		top: (win_height - 600*x_factor)*0.5,
		width: win_width,
		height: 600*x_factor
	});

	$(".video_box_2").css({
		top: (win_height - 600*x_factor)*0.5,
		width: win_width,
		height: 600*x_factor
	});

	$(".guid_play_1").css({
		left: x_width * 381 / 6660,
		top: win_height * 282 / 1204,
		width: x_factor * 448,
		height: x_factor * 258
	});

	$(".guid_play_video_1").css({
		width: x_factor * 448,
		height: x_factor * 258
	});

	$(".slide_hand").css({
		left: x_width * 600 / 6660,
		top: win_height * 778 / 1204,
		width: x_factor * (746 - 689),
		height: x_factor * (861 - 778)
	});

	$(".role_box_1").css({
		left: x_width * 211 / 6660,
		top: win_height * 625 / 1204,
		width: x_factor * (308 - 211),
		height: x_factor * (795 - 625)
	});

	$(".role_box_2").css({
		left: x_width * 308 / 6660,
		top: win_height * 616 / 1204,
		width: x_factor * (395 - 308),
		height: x_factor * (785 - 616)
	});

	$(".role_box_3").css({
		left: x_width * 577 / 6660,
		top: win_height * 618 / 1204,
		width: x_factor * (683 - 577),
		height: x_factor * (741 - 618)
	});

	$(".role_box_4").css({
		left: x_width * 683 / 6660,
		top: win_height * 626 / 1204,
		width: x_factor * (785 - 683),
		height: x_factor * (779 - 626)
	});

	$(".role_box_5").css({
		left: x_width * 785 / 6660,
		top: win_height * 650 / 1204,
		width: x_factor * (866 - 785),
		height: x_factor * (829 - 650)
	});

	$(".denglong_box").css({
		left: x_width * 1044 / 6660,
		top: win_height * 275 / 1204,
		width: x_factor * (1111 - 1044),
		height: x_factor * (392 - 275)
	});

	$(".wine_box").css({
		left: x_width * 1434 / 6660,
		top: win_height * 463 / 1204,
		width: x_factor * (1496 - 1434),
		height: x_factor * (517 - 463)
	});

	$(".flag_box").css({
		left: x_width * 1742 / 6660,
		top: win_height * 374 / 1204,
		width: x_factor * (1875 - 1742),
		height: x_factor * (655 - 374)
	});

	$(".info_img_jianxia_box").css({
		left: x_width * 3639 / 6660,
		top: win_height * 389 / 1204,
		width: x_factor * (4007 - 3639),
		height: x_factor * (541 - 389)
	});

	$(".chest_box_1").css({
		left: x_width * 3520 / 6660,
		top: win_height * 767 / 1204,
		width: x_factor * (3738 - 3520),
		height: x_factor * (944 - 767)
	});

	$(".chest_box_2").css({
		left: x_width * 3745 / 6660,
		top: win_height * 722 / 1204,
		width: x_factor * (3959 - 3745),
		height: x_factor * (894 - 722)
	});

	$(".guid_play_2").css({
		left: x_width * 4706 / 6660,
		top: win_height * 231 / 1204,
		width: x_factor * (5165 - 4706),
		height: x_factor * (722 - 231)
	});

	$(".guid_play_video_2").css({
		width: x_factor * (5165 - 4706),
		height: x_factor * (722 - 231)
	});

	$(".light_box").css({
		left: x_width * 5704 / 6660,
		top: win_height * 273 / 1204,
		width: x_factor * (5816 - 5704),
		height: x_factor * (373 - 273)
	});

	$(".cell_phone_box").css({
		left: x_width * 5564 / 6660,
		top: win_height * 492 / 1204,
		width: x_factor * (5649 - 5564),
		height: x_factor * (584 - 492)
	});

	$(".tickets_box").css({
		left: x_width * 5782 / 6660,
		top: win_height * 519 / 1204,
		width: x_factor * (5948 - 5782),
		height: x_factor * (594 - 519)
	});

	$(".info_img_shanhai_box").css({
		left: x_width * 6333 / 6660,
		top: win_height * 234 / 1204,
		width: x_factor * (6547 - 6333),
		height: x_factor * (444 - 234)
	});


	myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: true });

	page_1 = page_2 = page_3 = page_4 = 1;


	myScroll.on('scrollEnd',function(){

		$(".slide_hand").fadeOut();

		var win_path = Math.abs(myScroll.x*100/(x_width - win_width));

		if(win_path > 0 && win_path <=17){
			if(page_1 == 1){
				$(".dialogue_text_aera").html(" ");
				$('.npc_box').fadeIn();
				$(".dialogue_text_aera").html("一支穿云箭，千军万马来相见......左右滑动,四处看看，前面好像发现点线索！");
				setTimeout(function () {
        			$('.npc_box').fadeOut();
    			},2500);
    		}
    		page_1 = 0;
    		
		}
		else if(win_path > 17 && win_path <=46){
			if(page_2 == 1){
				$(".dialogue_text_aera").html(" ");
				$('.npc_box').fadeIn();
				$(".dialogue_text_aera").html("兰陵美酒郁金香，玉碗盛来琥珀光。大侠何不小坐片刻，喝上一杯！");
				setTimeout(function () {
        			$('.npc_box').fadeOut();
    			},2500);
			}
    		page_2 = 0;
		}
		else if(win_path > 46 && win_path <=74){
			if(page_3 == 1){
				$(".dialogue_text_aera").html(" ");
				$('.npc_box').fadeIn();
				$(".dialogue_text_aera").html("宝箱都已经在招手了，你会不会就是那个有缘人？");
				setTimeout(function () {
        			$('.npc_box').fadeOut();
    			},2500);
			}
    		page_3 = 0;
		}
		else if(win_path > 74 && win_path <=101){
			if(page_4 == 1){
				$(".dialogue_text_aera").html(" ");
				$('.npc_box').fadeIn();
				$(".dialogue_text_aera").html("欢迎来到魔法的世界，关门，熄灯，嘿嘿嘿~");
				setTimeout(function () {
        			$('.npc_box').fadeOut();
    			},2500);
			}
    		page_4 = 0;
		}
	 });
	
	setTimeout(function () {
       	$("#scroller").removeClass("on").addClass("off");
    },500);
    setTimeout(function () {
       	$("#scroller").removeClass("off").addClass("on");
    },600);

    var img = new Image(); 
	img.src = 'images/bg_off.jpg';

       var wxConfig = {
		debug: false
	}
	var shareData = {
	    title: '男生最爱的“CJ动漫展”，到底有什么秘密呢？',
	    desc: 'show girl ？ 领游戏周边？还有...',
	    link: '',
	    imgUrl: 'http://x.xoyobox.com/wx/2016/07/27/test/Max_test/test_cj_h5/images/logo.jpg',
	    success: function(res) {
	    },
	}
	usewxapi.getSignature(wxConfig,
	function() {
	    wx.ready(function() {
	        wx.onMenuShareTimeline(shareData);
	        wx.onMenuShareAppMessage(shareData);
	        wx.onMenuShareQQ(shareData);
	        wx.onMenuShareWeibo(shareData);
	        wx.onMenuShareQZone(shareData);
	    });
	});

})();
//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);