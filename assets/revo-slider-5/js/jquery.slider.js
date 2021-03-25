var tpj=jQuery;
         var revapi8;
         tpj(document).ready(function() {
         	if(tpj("#rev_slider_280_1").revolution == undefined){
         		revslider_showDoubleJqueryError("#rev_slider_280_1");
         	}else{
         		revapi8 = tpj("#rev_slider_280_1").show().revolution({
         			sliderType:"hero",
         			jsFileLocation:"assets/revo-slider-5/js/",
         			sliderLayout:"fullscreen",
         			dottedOverlay:"none",
         			delay:9000,
         			particles: {
         				startSlide: "first",
         				endSlide: "last",
         				zIndex: "1",
         				particles: {
         					number: {
         						value: 90
         					},
         					color: {
         						value: "#dadada"
         					},
         					shape: {
         						type: "circle",
         						stroke: {
         							width: 0,
         							color: "#dadada",
         							opacity: 1
         						},
         						image: {
         							src: ""
         						}
         					},
         					opacity: {
         						value: .1, 
         						random: false, 
         						min: 0.25, 
         						anim: {
         							enable: false, 
         							speed: 1,
         							opacity_min: 0,
         							sync: false
         							}
         						},
         					size: {
         						value: 5, 
         						random: true, 
         						min: 1, 
         						anim: {
         							enable: false,
         							speed: 40,
         							size_min: 0.1,
         							sync: false
         						}
         					},
         					line_linked: {
         						enable: true,
         						distance: 150,
         						color: "#dadada",
         						opacity: 0.5,
         						width: 1
         					},
         					move: {
         						enable: true,
         						speed: 1,
         						direction: "none",
         						random: true,
         						min_speed: 3,
         						straight: false,
         						out_mode: "out"
         					}
         				},
         				interactivity: {
         					events: {
         						onhover: {
         							enable: true,
         							mode: "repulse"
         						},
         						onclick: {
         							enable: false,
         							mode: "bubble"
         						}
         					},
         					modes: {
         						grab: {
         							distance: 400,
         							line_linked: {
         								opacity: 0.5
         							}
         						}, 
         						bubble: {
         							distance: 400,
         							size: 40,
         							opacity: 1
         						}, 
         						repulse: {
         							distance: 75
         						}
         					}
         				}
         			},
         			navigation: {
         			},
         			responsiveLevels:[1240,1024,778,480],
         			visibilityLevels:[1240,1024,778,480],
         			gridwidth:[1240,1024,778,480],
         			gridheight:[868,768,960,720],
         			lazyType:"none",
                parallax: {
                  type: "off",
                  origo: "slidercenter",
                  speed: 1000,
                  levels: [0],
                  type: "scroll",
                  disable_onmobile: "on"
                },
         			shadow:0,
         			spinner:"spinner0",
         			autoHeight:"off",
         			fullScreenAutoWidth:"off",
         			fullScreenAlignForce:"off",
         			fullScreenOffsetContainer: "",
         			fullScreenOffset: "",
         			disableProgressBar:"on",
         			hideThumbsOnMobile:"off",
         			hideSliderAtLimit:0,
         			hideCaptionAtLimit:0,
         			hideAllCaptionAtLilmit:0,
         			debugMode:false,
         			fallbacks: {
         				simplifyAll:"off",
         				disableFocusListener:false,
         			}
         		});
         	}
         
                      RsParticlesAddOn(revapi8);
         });	/*ready*/