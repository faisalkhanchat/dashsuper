$('.logo').css('cursor', 'pointer');
$(".logo").on("click", function(){
	//window.alert("called home");
    window.location.href = 'home.php';	
});

$('#Navigation').prepend('<div id="menu-trigger"><a>menu</a></div>'); 
$("#menu-trigger").on("click", function(){
    $("#mobilemenu").slideToggle();
	
	if($("#menu-trigger a").html() == "menu")
	{
		$("#menu-trigger a").html("close");
//		$("#menu-trigger").css("background-color","#23361b");
		$("#menu-trigger").css('background-image','url(_images/cloud_menu_hover.png)');
		$("#menu-trigger > a").css('color', '#fff');
		
		//return (0);
	}
	
	else
	{
		$("#menu-trigger a").html("menu");
		$("#menu-trigger").css('background-image','url(_images/cloud_menu.png)');
		$("#menu-trigger a").css('color','#14749c');

		//$("#menu-trigger").css("background-color","");
		//return (0);
	}
	
	
});

// iPad
var isiPad = navigator.userAgent.match(/iPad/i) != null;
if (isiPad) $('#mynav').addClass('no-transition');








;( function( $, window, undefined ) {

	'use strict';

	// global
	var Modernizr = window.Modernizr;

	$.CBPFWSlider = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	// the options
	$.CBPFWSlider.defaults = {
		// default transition speed (ms)
		speed : 500,
		// default transition easing
		easing : 'ease'
	};

	$.CBPFWSlider.prototype = {
		_init : function( options ) {
			// options
			this.options = $.extend( true, {}, $.CBPFWSlider.defaults, options );
			// cache some elements and initialize some variables
			this._config();
			// initialize/bind the events
			this._initEvents();
		},
		_config : function() {

			// the list of items
			this.$list = this.$el.children( 'ul' );
			// the items (li elements)
			this.$items = this.$list.children( 'li' );
			// total number of items
			this.itemsCount = this.$items.length;
			// support for CSS Transitions & transforms
			this.support = Modernizr.csstransitions && Modernizr.csstransforms;
			this.support3d = Modernizr.csstransforms3d;
			// transition end event name and transform name
			var transProperties = {
				'WebkitTransition' : { transitionEndEvent : 'webkitTransitionEnd', tranformName : '-webkit-transform' },
				'MozTransition' : { transitionEndEvent : 'transitionend', tranformName : '-moz-transform' },
				'OTransition' : { transitionEndEvent : 'oTransitionEnd', tranformName : '-o-transform' },
				'msTransition' : { transitionEndEvent : 'MSTransitionEnd', tranformName : '-ms-transform' },
				'transition' : { transitionEndEvent : 'transitionend', tranformName : 'transform' }
			};
			if( this.support ) {
				this.transEndEventName = transProperties[ Modernizr.prefixed( 'transition' ) ].transitionEndEvent + '.cbpFWSlider';
				this.transformName = transProperties[ Modernizr.prefixed( 'transition' ) ].tranformName;
			}
			// current and old item´s index
			this.current = 0;
			this.old = 0;
			// check if the list is currently moving
			this.isAnimating = false;
			// the list (ul) will have a width of 100% x itemsCount
			this.$list.css( 'width', 100 * this.itemsCount + '%' );
			// apply the transition
			if( this.support ) {
				this.$list.css( 'transition', this.transformName + ' ' + this.options.speed + 'ms ' + this.options.easing );
			}
			// each item will have a width of 100 / itemsCount
			this.$items.css( 'width', 100 / this.itemsCount + '%' );
			// add navigation arrows and the navigation dots if there is more than 1 item
			if( this.itemsCount > 1 ) {

				// add navigation arrows (the previous arrow is not shown initially):
				this.$navPrev = $( '<span class="cbp-fwprev"><</span>' ).hide();
				this.$navNext = $( '<span class="cbp-fwnext">></span>' );
				$( '<nav/>' ).append( this.$navPrev, this.$navNext ).appendTo( this.$el );
				// add navigation dots
				var dots = '';
				for( var i = 0; i < this.itemsCount; ++i ) {
					// current dot will have the class cbp-fwcurrent
					var dot = i === this.current ? '<span class="cbp-fwcurrent"></span>' : '<span></span>';
					dots += dot;
				}
				var navDots = $( '<div class="cbp-fwdots"/>' ).append( dots ).appendTo( this.$el );
				this.$navDots = navDots.children( 'span' );

			}

		},
		_initEvents : function() {
			
			var self = this;
			if( this.itemsCount > 1 ) {
				this.$navPrev.on( 'click.cbpFWSlider', $.proxy( this._navigate, this, 'previous' ) );
				this.$navNext.on( 'click.cbpFWSlider', $.proxy( this._navigate, this, 'next' ) );
				this.$navDots.on( 'click.cbpFWSlider', function() { self._jump( $( this ).index() ); } );
			}

		},
		_navigate : function( direction ) {

			// do nothing if the list is currently moving
			if( this.isAnimating ) {
				return false;
			}

			this.isAnimating = true;
			// update old and current values
			this.old = this.current;
			if( direction === 'next' && this.current < this.itemsCount - 1 ) {
				++this.current;
			}
			else if( direction === 'previous' && this.current > 0 ) {
				--this.current;
			}
			// slide
			this._slide();

		},
		_slide : function() {

			// check which navigation arrows should be shown
			this._toggleNavControls();
			// translate value
			var translateVal = -1 * this.current * 100 / this.itemsCount;
			if( this.support ) {
				this.$list.css( 'transform', this.support3d ? 'translate3d(' + translateVal + '%,0,0)' : 'translate(' + translateVal + '%)' );
			}
			else {
				this.$list.css( 'margin-left', -1 * this.current * 100 + '%' );	
			}
			
			var transitionendfn = $.proxy( function() {
				this.isAnimating = false;
			}, this );

			if( this.support ) {
				this.$list.on( this.transEndEventName, $.proxy( transitionendfn, this ) );
			}
			else {
				transitionendfn.call();
			}

		},
		_toggleNavControls : function() {

			// if the current item is the first one in the list, the left arrow is not shown
			// if the current item is the last one in the list, the right arrow is not shown
			switch( this.current ) {
				case 0 : this.$navNext.show(); this.$navPrev.hide(); break;
				case this.itemsCount - 1 : this.$navNext.hide(); this.$navPrev.show(); break;
				default : this.$navNext.show(); this.$navPrev.show(); break;
			}
			// highlight navigation dot
			this.$navDots.eq( this.old ).removeClass( 'cbp-fwcurrent' ).end().eq( this.current ).addClass( 'cbp-fwcurrent' );

		},
		_jump : function( position ) {

			// do nothing if clicking on the current dot, or if the list is currently moving
			if( position === this.current || this.isAnimating ) {
				return false;
			}
			this.isAnimating = true;
			// update old and current values
			this.old = this.current;
			this.current = position;
			// slide
			this._slide();

		},
		destroy : function() {

			if( this.itemsCount > 1 ) {
				this.$navPrev.parent().remove();
				this.$navDots.parent().remove();
			}
			this.$list.css( 'width', 'auto' );
			if( this.support ) {
				this.$list.css( 'transition', 'none' );
			}
			this.$items.css( 'width', 'auto' );

		}
	};

	var logError = function( message ) {
		if ( window.console ) {
			window.console.error( message );
		}
	};

	$.fn.cbpFWSlider = function( options ) {
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				var instance = $.data( this, 'cbpFWSlider' );
				if ( !instance ) {
					logError( "cannot call methods on cbpFWSlider prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for cbpFWSlider instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		} 
		else {
			this.each(function() {	
				var instance = $.data( this, 'cbpFWSlider' );
				if ( instance ) {
					instance._init();
				}
				else {
					instance = $.data( this, 'cbpFWSlider', new $.CBPFWSlider( options, this ) );
				}
			});
		}
		return this;
	};

} )( jQuery, window );





function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


