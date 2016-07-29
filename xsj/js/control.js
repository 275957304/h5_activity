(function() {
	var win_width 			= document.body.scrollWidth;

	var enter_box_btn				= $('.enter_box').hammer(),
		guid_play_1					= $('.guid_play_1').hammer(),
		guid_play_2					= $('.guid_play_2').hammer(),
		npc_box_tap					= $('.npc_box').hammer(),
		popup_window_btn			= $(".popup_window").hammer(),		
		slide_hand_btn				= $(".slide_hand").hammer(),
		role_box_1_btn				= $('.role_box_1').hammer(),
		role_box_2_btn				= $('.role_box_2').hammer(),
		role_box_3_btn				= $('.role_box_3').hammer(),
		role_box_4_btn				= $('.role_box_4').hammer(),
		role_box_5_btn				= $('.role_box_5').hammer(),
		wine_box_btn				= $('.wine_box').hammer(),
		flag_box_btn				= $(".flag_box").hammer(),
		info_img_jianxia_box_btn	= $(".info_img_jianxia_box").hammer(),
		chest_box_1_btn				= $('.chest_box_1').hammer(),
		chest_box_2_btn				= $('.chest_box_2').hammer(),
		light_btn 					= $('.light_box').hammer(),
		info_img_shanhai			= $('.info_img_shanhai_box').hammer(),
		tickets_box_btn				= $('.tickets_box').hammer(),
		cell_phone_btn 				= $('.cell_phone_box').hammer();
		
	// listen to events...
	enter_box_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$(".enter_box").addClass("addw").addClass("add");
		$(".enter_box").fadeOut(1500);
		enter_box_btn.off();
	});


	guid_play_1.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$(".video_warp").remove();
		$(".popup_window").fadeIn();
		$("#video_box_1").append('<video class="video_control_1" style="top:100px;" src="movie/jianxia.mp4" width="100%" height="100%" controls="true" autoplay="false" webkit-playsinline></video>');
		popup_window_btn.on("tap", function(ev) {
			$(".popup_window").fadeOut();
			$(".video_control_1").get(0).pause();
			$(".video_control_1").remove();
			popup_window_btn.off();
		});
	});

	guid_play_2.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$(".video_warp").remove();
		$(".popup_window").fadeIn();
		$("#video_box_2").append('<video class="video_control_2" style="top:100px;" src="movie/lm_clip_big.mp4" width="100%" height="100%" controls="true" autoplay="false" webkit-playsinline></video>');

		popup_window_btn.on("tap", function(ev) {
			$(".popup_window").fadeOut();
			$(".video_control_2").get(0).pause();
			$(".video_control_2").remove();
			popup_window_btn.off();
		});
	});

	slide_hand_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$(".slide_hand").fadeOut();
		slide_hand_btn.off();
	});

	role_box_1_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$('.npc_box').fadeIn();
		$(".dialogue_text_aera").html("当世若问医术，莫过于峨眉山上峨嵋派。峨嵋派祖师云清师太与峨眉山寻仙问道，寻得一二仙踪，便在山顶设立道观，一心潜修，观星望月。");
		npc_box_tap.on("tap", function(ev) {
        	$('.npc_box').fadeOut();
        	npc_box_tap.off();
		});
	});

	role_box_2_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$('.npc_box').fadeIn();
		$(".dialogue_text_aera").html("	蜀中唐门，百年世家，在江湖自成一派，在他人眼中，最是神秘莫测。唐门机关之术，乃是武林一绝。");
		npc_box_tap.on("tap", function(ev) {
        	$('.npc_box').fadeOut();
        	npc_box_tap.off();
		});
	});

	role_box_3_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$('.npc_box').fadeIn();
		$(".dialogue_text_aera").html("天忍教本为信奉金国国教萨满教的民间法教，在五色教覆灭后，金主为有效对付敌国抗金势力，便让金国皇族完颜宏烈接掌天忍教，整饬天忍，训练大批间谍、杀手为金国效力。");
		npc_box_tap.on("tap", function(ev) {
        	$('.npc_box').fadeOut();
        	npc_box_tap.off();
		});
	});

	role_box_4_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$('.npc_box').fadeIn();
		$(".dialogue_text_aera").html("	天王帮地处天王岛，此岛是坐落在洞庭湖中间的一座孤岛，地址十分隐秘，曾是钟相、杨幺义军的基地，如果没有岛内人的带领，很难找到其位置所在。");
		npc_box_tap.on("tap", function(ev) {
        	$('.npc_box').fadeOut();
        	npc_box_tap.off();
		});
	});

	role_box_5_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$('.npc_box').fadeIn();
		$(".dialogue_text_aera").html("	武当派以供奉真武大帝为主神，宋时已然是当世五大门派之一。去过武当派的人无不称之为“神仙道观”，是以其亭台楼阁遍布峰峦幽壑，沐风雨而不蚀，迎雷电竟未损，似是岁月无痕，堪称人间奇绝。");
		npc_box_tap.on("tap", function(ev) {
        	$('.npc_box').fadeOut();
        	npc_box_tap.off();
		});
	});

	flag_box_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$('.npc_box').fadeIn();
		$(".dialogue_text_aera").html("《剑侠情缘手游》以“剑侠情缘”经典剧情为根基，给玩家打造一个期许已久的剑侠梦。");
		npc_box_tap.on("tap", function(ev) {
        	$('.npc_box').fadeOut();
        	npc_box_tap.off();
		});
	});

	info_img_jianxia_box_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$('.npc_box').fadeIn();
		$(".dialogue_text_aera").html("《剑网3指尖江湖》是一款3DARPG手游，采用多层次的清丽画风再现端游的完整世界观，具备完整的昼夜变化和风、雷、雨、雪等动态天气效果。玩家也可以破坏岩石，跳到树梢上俯瞰风景，乃至运用轻功飞檐走壁。");
		npc_box_tap.on("tap", function(ev) {
        	$('.npc_box').fadeOut();
        	npc_box_tap.off();
		});
	});

	light_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

	    //console.log(ev);
	    if($("#scroller").hasClass("on")){
	    	$("#scroller").removeClass("on").addClass("off");
	    	cell_phone_btn.on("tap", function(evv) {

	    		console.log($(this).attr('data-htm'));
	    		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

	    		$(".dialogue_text_aera").html("	《魔域手游》采用写实的西方魔幻风格，重现了众神创造的世界与魔族之间的矛盾，激烈的阵营对抗和传承英雄的崛起，令这个充满魔法和幻想的世界更具真实魅力。");
				$('.npc_box').fadeIn();
				setTimeout(function () {
        			$('.npc_box').fadeOut();
    			},2500);
	    	});
	    }
	    else if($("#scroller").hasClass("off")){
	    	$("#scroller").removeClass("off").addClass("on");
	    	cell_phone_btn.off();
		}
	});

	info_img_shanhai.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$('.npc_box').fadeIn();
		$(".dialogue_text_aera").html("这是一款神秘端游，线索断了......");
		npc_box_tap.on("tap", function(ev) {
        	$('.npc_box').fadeOut();
        	npc_box_tap.off();
		});
	});

	wine_box_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$(".popup_window").fadeIn();
		$(".alert_find_key").fadeIn();
		popup_window_btn.on("tap", function(ev) {
			$(".popup_window").fadeOut();
			$(".alert_find_key").fadeOut();
			popup_window_btn.off();
		});
		this.remove();
		wine_box_btn.off();

		chest_box_1_btn.off();
		chest_box_1_btn.on("tap", function(ev) {

			console.log($(this).attr('data-htm')+'_unlock');
			_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm')+'_unlock', "click", "send"]);

			$(".popup_window").fadeIn();
			$(".alert_find_xm").fadeIn();
			popup_window_btn.on("tap", function(ev) {
				$(".popup_window").fadeOut();
				$(".alert_find_xm").fadeOut();
				popup_window_btn.off();
			});
			this.remove();
			chest_box_1_btn.off();
			});

		chest_box_2_btn.off();
		chest_box_2_btn.on("tap", function(ev) {

			console.log($(this).attr('data-htm')+'_unlock');
			_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm')+'_unlock', "click", "send"]);

			$(".popup_window").fadeIn();
			$(".alert_find_zb").fadeIn();
			popup_window_btn.on("tap", function(ev) {
				$(".popup_window").fadeOut();
				$(".alert_find_zb").fadeOut();
				popup_window_btn.off();
			});
			this.remove();
			chest_box_2_btn.off();
		});
	});

	chest_box_1_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$(".popup_window").fadeIn();
		$(".alert_need_key").fadeIn();
		popup_window_btn.on("tap", function(ev) {
			$(".popup_window").fadeOut();
			$(".alert_need_key").fadeOut();
			popup_window_btn.off();
		});
	});

	chest_box_2_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$(".popup_window").fadeIn();
		$(".alert_need_key").fadeIn();
		popup_window_btn.on("tap", function(ev) {
			$(".popup_window").fadeOut();
			$(".alert_need_key").fadeOut();
			popup_window_btn.off();
		});
	});

	tickets_box_btn.on("tap", function(ev) {

		console.log($(this).attr('data-htm'));
		_hmt.push(['_trackEvent', "btn", $(this).attr('data-htm'), "click", "send"]);

		$(".popup_window").fadeIn();
		$(".alert_invate_friend").fadeIn();
		popup_window_btn.on("tap", function(ev) {
			$(".popup_window").fadeOut();
			$(".alert_invate_friend").fadeOut();
			popup_window_btn.off();
		});
	});
})();