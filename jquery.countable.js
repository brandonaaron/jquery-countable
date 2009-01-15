/*! Copyright (c) 2009 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 */

(function($) {

$.fn.extend({
	countable: function(options) {
		return this.each(function() {
			var $this = $(this), interval, prev_char_diff, $el;
			options = $.extend({
				threshold: 0.5,
				appendMethod: 'insertAfter', // insertBefore || insertAfter
				startOpacity: .25,
				maxLength: parseInt( $this.attr('maxlength'), 10 ),
				maxClassName: 'maxed',
				className: 'counter',
				tagName: 'span',
				interval: 750,
				positiveCopy: "You have {n} characters left.",
				negativeCopy: "You are {n} characters over.",
				fadeDuration: 'normal'
			}, options);
			
			$el = $('<'+options.tagName+'/>')
				.html( options.positiveCopy.replace("{n}", '<span class="num"/>') )
				.addClass( options.className )
				.css({ opacity: 0 });
			$el[options.appendMethod]($this);
			
			$this
				.bind('keyup', check)
				.bind('focus blur', function(event) {
					if ( event.type == 'blur' ) clearInterval( interval );
					if ( event.type == 'focus' && !interval ) setInterval(check, options.interval);
				});
			
			function check() {
				var val = $this.val(), length = val.length, percentage_complete = length/options.maxLength, char_diff = options.maxLength - length;
				if ( prev_char_diff != undefined && char_diff == prev_char_diff ) return;
				opacity = options.startOpacity + ((options.threshold - percentage_complete) * ((options.startOpacity * 2) - 2));
				
				if ( $el.is(':hidden') && percentage_complete >= options.threshold )
					$el.show();
				if ( $el.is(':visible') && percentage_complete < options.threshold )
					$el.hide();
					
				$el.stop().fadeTo( options.fadeDuration, percentage_complete >= options.threshold ? opacity : 0 );
				if ( char_diff >= 0 ) {
					if ( $el.is( '.'+options.maxClassName ) )
						$el.html( options.positiveCopy.replace("{n}", '<span class="num"/>') );
				} else {
					if ( !$el.is( '.'+options.maxClassName ) )
						$el.html( options.negativeCopy.replace("{n}", '<span class="num"/>') );
				}
				
				$el[ (char_diff < 0 ? 'add' : 'remove') + 'Class' ]( options.maxClassName );
				$el.find('.num').text( Math.abs(char_diff) );
				
				if ( char_diff == -1 || char_diff == 1 )
					$el.html( $el.html().replace(/characters\b/, "character") );
				else
					$el.html( $el.html().replace(/character\b/, "characters") );
					
				prev_char_diff = char_diff;
			};
			check();
		});
	}
});

})(jQuery);