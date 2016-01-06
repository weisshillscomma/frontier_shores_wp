function navigateto(x_cord, y_cord, zoom){

	//ENTER X AND Y COORDINATES OF ZOOM POINT ON MAP THAT IS 1366PX WIDE

	var map = $('.context_map');
	var scale = zoom;
	var x = x_cord;
	var y = y_cord;
	var xScaled = x*scale;
	var yScaled = y*scale;
	var mapXScaled = 1366*scale;
	var mapYScaled = 768*scale;
	var xp = xScaled-(170.75); // 1366 * 0.125
	var yp = yScaled-(230.4); // 768 * 0.3
	
	map.animate({
		'left' : '-' + xp,
		'top' : '-' + yp,
		'width' : mapXScaled,
		'height' : mapYScaled,
	}, 3000, 'easeInOutCubic', function(){
		if($('.content_section.active .expanded.active .label_bar .checkbox').hasClass('checked')){
			$('.content_section.active .expanded.active .labels.non_full_map').fadeIn(250);
		}
	});
}

function attract_loop(active_item){
	if($(active_item).is(':last-of-type')){
		var next_item = $('.attract_item:first-of-type');
	} else {
		var next_item = $(active_item).next('.attract_item');
	}
	var map = $('.attract_loop_map');
	var scale = 8;
	var x = $(active_item).find('.x_cord').text();
	var y = $(active_item).find('.y_cord').text();
	var xScaled = x*scale;
	var yScaled = y*scale;
	var mapXScaled = 1366*scale;
	var mapYScaled = 768*scale;
	var xp = xScaled-(170.75); // 1366 * 0.125
	var yp = yScaled-(389); // 768 * 0.5 + 5
	map.animate({
		'left' : '-' + xp,
		'top' : '-' + yp,
		'width' : mapXScaled,
		'height' : mapYScaled,
	}, 3000, 'easeInOutCubic', function(){
		setTimeout(function(){
			$(next_item).css('z-index',20).addClass('active');
			$(active_item).css('z-index',100);
			$(next_item).show();
			$(active_item).removeClass('active').fadeOut(1000);
			if($('.attract_loop').hasClass('active')){
				attract_loop(next_item);
			}
		},6000);
	});
}

$(function(){


	if($('.attract_loop').hasClass('active')){
		attract_loop($('.attract_item.active'));
		$('.context_nav').css('opacity',0);
	}
	$('.call_to').click(function(){
		$('.intro_screen').fadeIn(1000);
		$('.intro_screen').addClass('active');
		$('.attract_loop').removeClass('active');
		$('.attract_loop').fadeOut(1000);
		$('.attract_loop_map').fadeOut(1000);
		$('.context_nav').animate({
			'opacity': 1
		},1000);
	});

	$('.info_nav').click(function(){

		if($(this).hasClass('active')){

		} else {
			var active_section = $('.content_section.active');
			var active_nav = $('.navigation .context_nav.active');
			var active_icon = $(active_section).find('.single_icon.active');
			var active_icon_type = $(active_icon).find('div').attr('class');
			var goto_nav = $(this);
			var goto_section = $('.intro_screen');
			var checkbox = $(active_section).find('.expanded.active').find('.checkbox');

			$(active_section).find('.context_icon').trigger('click');

			$(active_nav).removeClass('active');
			$(goto_nav).addClass('active');
			$(goto_section).addClass('active');
			$(active_section).find('.beacons').fadeOut(500);
			$(active_section).find('.labels').fadeOut(500);
			$(goto_section).fadeIn(500);
			$(active_section).removeClass('active').fadeOut(500, function(){
				$('.intro_screen .intro_content').animate({
					'width' : '31.25%',
					'right' : '0%'
				},1000, function(){
					$('.intro_content h1').fadeIn(1000);
					$('.intro_content p').fadeIn(1000);
				});
			});

			$('.intro_map').animate({
				'width': 939.125,
				'height' : 720,
				'top' : '48px',
				'left' : '0',
				'opacity' : 1
			}, 3000, 'easeInOutCubic');
			if($(checkbox).hasClass('checked')){
				$('.checkbox').trigger('click');
			}
		}

	});
	$('.context_nav').click(function(){
		if($('.attract_loop').hasClass('active')){

		} else {
			var active_section = $('.content_section.active');
			var active_nav = $('.navigation .context_nav.active');
			var active_icon = $(active_section).find('.single_icon.active');
			var active_icon_type = $(active_icon).find('div').attr('class');
			var goto_nav = $(this);
			var index = $('.navigation .context_nav').index( goto_nav );
			var goto_section = $('.content_section').eq( index );
			var checkbox = $(goto_section).find('.expanded.active').find('.checkbox');
			if($('.intro_screen').hasClass('active')){

				$('.intro_screen').removeClass('active');
				$('.info_nav').removeClass('active');
				$(goto_section).addClass('active');
				$(goto_nav).addClass('active');
				$('.intro_content h1').fadeOut(1000);
				$('.intro_content p').fadeOut(1000, function(){
					$('.intro_screen .intro_content').animate({
						'width' : '31.25%',
						'right' : '6.25%'
					},1000, function(){
						$(goto_section).fadeIn(1000, function(){
							$(goto_section).find('.beacons').fadeIn(1000, function(){
								$(goto_section).find('.object_icon').each(function(){
									var borderColor = $(this).css('borderColor');
									$(this).animate({
										boxShadow : '0px 0px 15px 3px ' + borderColor
									},1000, function(){
										$(this).animate({
											boxShadow : 'none'
										},1000);
									});	
								});
							});
							if($(checkbox).hasClass('checked')){
								$(goto_section).find('.expanded.active').find('.labels.non_full_map').fadeIn(250);
							}
							
						});
						$('.intro_screen').fadeOut(1000);
					});
				});
				$('.intro_content h1').fadeOut(1500);
				$('.intro_content p').fadeOut(1500);
				$('.intro_map').animate({
					'width': 3052.15625,
					'height' : 2340,
					'top' : '-125%',
					'left' : '-89%',
					'opacity' : 0
				}, 3000, 'easeInOutCubic');
				

			} else {
				if($(goto_nav).hasClass('active')){
			
				} else {
					$(active_section).find('.context_icon').trigger('click');

					$(active_nav).removeClass('active');
					$(goto_nav).addClass('active');
					$(goto_section).addClass('active');
					$(active_section).find('.beacons').fadeOut(500);
					$(active_section).find('.labels').fadeOut(500);
					$(goto_section).find('.beacons').hide();
					$(active_section).removeClass('active').fadeOut(500, function(){
						$(goto_section).fadeIn(500, function(){
							if(active_icon_type === 'context_icon'){
								$(goto_section).find('.beacons').fadeIn(1000, function(){
									$(goto_section).find('.object_icon').each(function(){
										var borderColor = $(this).css('borderColor');
										$(this).animate({
											boxShadow : '0px 0px 15px 3px ' + borderColor
										},1000, function(){
											$(this).animate({
												boxShadow : 'none'
											},1000);
										});	
										if($(checkbox).hasClass('checked')){
											$(goto_section).find('.expanded.active').find('.labels.non_full_map').fadeIn(250);
										}
									});
								});
							} else {
								setTimeout(function(){
									$(goto_section).find('.beacons').fadeIn(1000);
									if($(checkbox).hasClass('checked')){
										$(goto_section).find('.expanded.active').find('.labels.non_full_map').fadeIn(250);
									}
									$(goto_section).find('.object_icon').each(function(){
										var borderColor = $(this).css('borderColor');
										$(this).animate({
											boxShadow : '0px 0px 15px 3px ' + borderColor
										},1000, function(){
											$(this).animate({
												boxShadow : 'none'
											},1000);
										});	
									});
								},2000);
							}
						});
					});

					if(active_icon_type === 'context_icon'){
					} else {
						var map = $('.context_map');
						map.animate({
							'left' : 0,
							'top' : 0,
							'width' : 1366,
							'height' : 768,
						}, 3000, 'easeInOutCubic', function(){
						});
					}
				}
			}
		}
		
	});
	$('.context_map.big').removeClass('big');
	$('.single_icon').click(function(){
		if($('.warrior_section').hasClass('active')){
			$('.warrior_section').removeClass('active');
			$('.warrior_section .warrior_back').trigger('click');
		}
		var active_icon = $('.content_section.active .single_icon.active');
		var icon = $(this);
		var index = $('.content_section.active .icons .single_icon').index( icon );
		var icon_type = $(icon).find('div').attr('class');
		var active_icon_type = $(active_icon).find('div').attr('class');
		var active_expanded = $('.content_section.active .expanded.active');
		var expanded = $('.content_section.active .expanded').eq( index );
		if($(icon).hasClass('active')){

		} else {
			$(active_expanded).find('.collapse_map').trigger('click');
			$(active_icon).removeClass('active');
			$(icon).addClass('active');
			$(active_expanded).removeClass('active');
			$(expanded).addClass('active');

			$(active_icon).animate({
				'background-color': 'rgb(182,175,166)'
			},700, function(){
			});
			
			$(icon).animate({
				'background-color': 'rgb(225,219,206)'
			},700, function(){
			});


			if(icon_type === 'object_icon') {
				if(active_icon_type === 'context_icon'){
					$('.locator').css('z-index',10);
					$('.single_content').css('z-index',20);
				}
				$(active_expanded).find('h1').fadeOut(500);
				$(active_expanded).find('h2').fadeOut(500);
				$(active_expanded).find('.images').fadeOut(500);
				$(active_expanded).find('.content').fadeOut(500, function(){
					$(active_expanded).css('z-index',20).fadeOut(700);
					$(expanded).css('z-index',30).fadeIn(300, function(){
						$(expanded).find('.object_content').animate({
							'width' : '68.75%',
						}, 500, function(){
							$('.object_content').css('width','68.75%');
							$(expanded).find('h1').fadeIn(500);
							$(expanded).find('h2').fadeIn(500);
							$(expanded).find('.images').fadeIn(500);
							$(expanded).find('.content').fadeIn(500, function(){
								setTimeout(function(){
									$('.locator').css('z-index','');
									$('.single_content').css('z-index','');
								}, 1925);
								$(expanded).find('.locator').animate({
									'left' : '0',
								},2000, function(){
									$('.locator').css('left','0');
									$('.context_map').addClass('big');

									var borderColor = $(expanded).find('.map_button').css('borderColor');
									$(expanded).find('.map_button').animate({
										boxShadow : '0px 0px 15px 3px ' + borderColor
									},250, function(){
										$(expanded).find('.map_button').animate({
											boxShadow : 'none'
										},250);
									});

								});
								$(active_expanded).css('z-index', '');
								$(expanded).css('z-index', '');
							});
						});
					});
				});

				var x_cord = $(icon).find('.x_cord').text();
				var y_cord = $(icon).find('.y_cord').text();

				if($('.content_section.active .expanded.active .label_bar .checkbox').hasClass('checked')){
					$(active_expanded).find('.labels.non_full_map').fadeOut(250);
				}
				if(active_icon_type === 'context_icon'){
					$(active_expanded).find('.beacons').fadeOut(250, function(){
						navigateto(x_cord, y_cord, 8);
					});
				} else {
					navigateto(x_cord, y_cord, 8);
				}

			} else if (icon_type === 'context_icon') {
				$('.context_map').removeClass('big');
				$(active_expanded).find('.locator').css('z-index','10');
				$(active_expanded).find('.single_content').css('z-index','20');
				$(active_expanded).find('.locator').animate({
					'left' : '62.5%',
				},1000, function(){
					$('.locator').css('left','62.5%');
					$(active_expanded).find('h1').fadeOut(500);
					$(active_expanded).find('h2').fadeOut(500);
					$(active_expanded).find('.images').fadeOut(500);
					$(active_expanded).find('.content').fadeOut(500, function(){
						$(active_expanded).find('.object_content').animate({
							'width' : '31.25%',
						}, 500, function(){
							$('.object_content').css('width','31.25%');
							$(active_expanded).css('z-index',20).fadeOut(700);
							$(expanded).css('z-index',30).fadeIn(300, function(){
								$(expanded).find('h1').fadeIn(500);
								$(expanded).find('h2').fadeIn(500);
								$(expanded).find('.images').fadeIn(500);
								$(expanded).find('.content').fadeIn(500, function(){
									$('.locator').css('z-index','');
									$('.single_content').css('z-index','');
									$(active_expanded).css('z-index', '');
									$(expanded).css('z-index', '');
								});
							});
						});
					});
				});

				var map = $('.context_map');
				$(active_expanded).find('.labels.non_full_map').fadeOut(250, function(){
					map.animate({
						'left' : 0,
						'top' : 0,
						'width' : 1366,
						'height' : 768,
					}, 3000, 'easeInOutCubic', function(){
						$(expanded).find('.beacons').fadeIn(250);
						if($('.label_bar .checkbox').hasClass('checked')){
							$(expanded).find('.labels.non_full_map').fadeIn(250);
						}
					});
				});
			}
		}
	});
	$('.beacon').click(function(){
		var beacon = $(this);
		var index = $('.content_section.active .beacons .beacon').index( beacon );
		var click_this = $('.content_section.active .icons .single_icon').eq( index + 1 );
		$(click_this).trigger('click');
	});


	$('.map_button').click(function(){
		$('.context_map.big').removeClass('big');
		navigateto(260, 492, 3.4);
		$('.content_section.active .expanded.active .single_content h1').fadeOut(500);
		$('.content_section.active .expanded.active .single_content h2').fadeOut(500);
		$('.content_section.active .expanded.active .single_content .images').fadeOut(500);
		$('.content_section.active .expanded.active .single_content .content').fadeOut(500, function(){
			$('.content_section.active .expanded.active .locator').css('z-index','10');
			$('.content_section.active .expanded.active .single_content').css('z-index','20');
			$('.content_section.active .expanded.active .locator').animate({
				'left': '62.5%'
			}, 1000, function(){
				$('.expanded.active .small_map .full_map .crop_outline').animate({
					'width' : '9.09697700456471%',
					'height' : '25.73529411764708%',
					'left' : '15.5%',
					'top' : '56.75%'
				}, 500);
				$('.content_section.active .expanded.active .single_content.object_content').animate({
					'width': '62.5%'
				}, 500, function(){
					$('.warrior_section').addClass('active').show(function(){
						$('.content_section.active .expanded.active .single_content').fadeOut(500);
					});
				});
			});
		});
	});
	$('.warrior_back').click(function(){
		$('.article_title .single_war_content').trigger('click');
		var active_icon = $('.content_section.active .single_icon.active');
		var x_cord = $(active_icon).find('.x_cord').text();
		var y_cord = $(active_icon).find('.y_cord').text();
		if($('.warrior_section').hasClass('active')){
			navigateto(x_cord, y_cord, 8);
			$('.warrior_section').removeClass('active');
			setTimeout(function(){
				$('.context_map').addClass('big');
			}, 3000);
		}
		$('.expanded.active .small_map .full_map .crop_outline').animate({
			'width' : '3.092972181552%',
			'height' : '10.9375%',
			'left' : '22.465226939971%',
			'top' : '62.95572916666703%'
		}, 500);
		$('.content_section.active .expanded.active .single_content').fadeIn(500, function(){
			$('.warrior_section').fadeOut(500, function(){
				$('.content_section.active .expanded.active .single_content.object_content').animate({
					'width' : '68.75%'
				}, 500, function(){
					$('.content_section.active .expanded.active .single_content h1').fadeIn(500);
					$('.content_section.active .expanded.active .single_content h2').fadeIn(500);
					$('.content_section.active .expanded.active .single_content .images').fadeIn(500);
					$('.content_section.active .expanded.active .single_content .content').fadeIn(500);
				});
				$('.content_section.active .expanded.active .locator').animate({
					'left': '0'
				}, 1000, function(){
					$('.content_section.active .expanded.active .locator').css('z-index', 20);
					$('.content_section.active .expanded.active .single_content').css('z-index',10);
				});
			});
		});
	});


	$('.label_bar .checkbox').click(function(){
		if($(this).hasClass('checked')){
			$('.label_bar .checkbox').removeClass('checked').addClass('unchecked');
			$('.labels').hide();
		} else if ($(this).hasClass('unchecked')){
			$('.label_bar .checkbox').removeClass('unchecked').addClass('checked');
			$('.content_section.active .expanded.active').find('.labels').show();
			$('.content_section.active .expanded.active .condensed .labels').hide();
		}
	});
	$('.german_checkbox').click(function(){
		if($(this).hasClass('checked')){
			$(this).removeClass('checked').addClass('unchecked');
			$('.german_map').hide();
		} else {
			$(this).removeClass('unchecked').addClass('checked');
			$('.german_map').show();
		}
	});
	$('.single_war_content').click(function(){
		if($(this).hasClass('active')){

		} else {
			var active_war = $('.single_war_content.active');
			var goto_war = $(this);
			var new_content = $(goto_war).html();
			$(active_war).removeClass('active');
			$(goto_war).addClass('active');
			$('.warrior_content').fadeOut(250, function(){
				$('.warrior_content').html(new_content);
				$('.warrior_content').fadeIn(250);
			});

			var marker = $(goto_war).attr('id');
			$('.warrior_beacon.active').removeClass('active');
			$('.warrior_beacon.' + marker).addClass('active');

			if($(goto_war).parent().hasClass('warrior_column')){
				var name = $(goto_war).find('h1').text();
				$('.name_highlights .highlight.active').removeClass('active');
				$('.name_highlights .highlight.' + name).addClass('active');
			} else {
				$('.name_highlights .highlight.active').removeClass('active');
			}
		}

	});

	$('.expand_map').click(function(){
		$(this).next('.full_map').removeClass('condensed');
		$('.content_section.active .expanded.active .small_map .full_map').css('z-index',30).css('border-right','1px solid #e1dbce').animate({
			'width' : 1280,
			'height' : 720,
			'background-color' : 'rgb(182, 175, 166)'
		}, 500, function(){
			if($('.label_bar .checkbox').hasClass('checked')){
				$('.content_section.active .expanded.active .small_map .full_map .labels').fadeIn(500);
			}
		});
		$('.content_section.active .expanded.active .small_map .full_map img').animate({
			'opacity' : 1
		}, 500);
		$('.content_section.active .expanded.active .small_map .full_map .collapse_map').fadeIn(500);
		$('.content_section.active .expanded.active .small_map .full_map .label_bar').fadeIn(500);
	});
	$('.collapse_map').click(function(){
		$(this).parent('.full_map').addClass('condensed');
		var active_expanded = $('.content_section.active .expanded.active');
		$(active_expanded).find('.small_map .full_map .labels').fadeOut(500, function(){
			$(active_expanded).find('.small_map .full_map .label_bar').fadeOut(500);
			$(active_expanded).find('.small_map .full_map').css('border-right','none').animate({
				'width' : 170.750,
				'height' : 96,
				'background-color' : 'rgb(146, 140, 133)'
			}, 500, function(){
				$(this).css('z-index','');
			});
			$(active_expanded).find('.small_map .full_map img').animate({
				'opacity' : 0.8
			}, 500);
			$(active_expanded).find('.small_map .full_map .collapse_map').fadeOut(500);
		});
	});
	$('.lightbox_trigger').click(function(){
		var index = $(this).parent().find('.lightbox_trigger').index( this );
		var lightbox_content = $(this).parent().find('.lightbox_content').eq( index );
		var lightbox_html = $(lightbox_content).html();
		$('.the_lightbox .content').html(lightbox_html);
		if($(lightbox_content).hasClass('image_content')){
			var image_width = $(lightbox_content).find('img').width()+30;
			var image_height = $(lightbox_content).find('img').height()+30;
			$('.the_lightbox .content').width(image_width);
			$('.the_lightbox').fadeIn(500);
			var text_height = $('.the_lightbox .content .image_caption').height()+20;
			var content_height = image_height + text_height;
			$('.the_lightbox .content').height(content_height);
		} else if ($(lightbox_content).hasClass('text_content')){
			var content_width = $(lightbox_content).find('.content').width()+30;
			var content_height = $(lightbox_content).find('.content').height()+30;
			$('.the_lightbox .content').width(content_width).height(content_height);
			$('.the_lightbox').fadeIn(500);
			$('.the_lightbox .content_column').columnize({width:512.250, accuracy:1});

		}
	});
	$('.the_lightbox .close').click(function(){
		$('.the_lightbox').fadeOut(500, function(){
			$('.the_lightbox .content').html('');
		});
	});
});