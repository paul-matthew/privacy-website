/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	const $window = $(window),
		  $body = $('body'),
		  $wrapper = $('#page-wrapper'),
		  $banner = $('#banner'),
		  $header = $('#header');

	// Breakpoints.
	breakpoints({
		xlarge: [ '1281px', '1680px' ],
		large:  [ '981px',  '1280px' ],
		medium: [ '737px',  '980px'  ],
		small:  [ '481px',  '736px'  ],
		xsmall: [ null,     '480px'  ]
	});

	// Play initial animations on page load (faster load)
	document.addEventListener('DOMContentLoaded', () => {
		$body.removeClass('is-preload');
	});

	// Mobile class handling.
	const setMobileClass = () => {
		if (browser.mobile || breakpoints.active('<=medium')) {
			$body.addClass('is-mobile');
		} else {
			$body.removeClass('is-mobile');
		}
	};
	setMobileClass();
	$window.on('resize', setMobileClass);

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000, // Slightly faster scroll
		offset: $header.outerHeight()
	});

	// Menu.
	const $menu = $('#menu');
	$menu
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			delay: 300, // Faster panel open/close
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
			target: $body,
			visibleClass: 'is-menu-visible'
		});

	// Header animation toggle.
	if ($banner.length > 0 && $header.hasClass('alt')) {
		$window.on('resize', () => $window.trigger('scroll'));
		$banner.scrollex({
			bottom: $header.outerHeight() + 1,
			terminate: () => $header.removeClass('alt'),
			enter:     () => $header.addClass('alt'),
			leave:     () => $header.removeClass('alt')
		});
	}

	// === Modal Logic ===

	// Open modal
	$(document).on('click', '[data-modal-trigger]', function(e) {
		e.preventDefault();
		const modalID = $(this).data('modal-trigger');
		$('#' + modalID).fadeIn(150).addClass('active');
	});

	// Close modal
	$(document).on('click', '.modal, .modal-close', function(e) {
		if ($(e.target).is('.modal') || $(e.target).is('.modal-close')) {
			$('.modal').fadeOut(150).removeClass('active');
		}
	});
})(jQuery);

