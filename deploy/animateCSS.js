(function ($, window, document, undefined) {

    // Function-level strict mode syntax
  'use strict';

    $.fn.animateCSS = function (effect, callback, params) {

        // Deal with params array  and set some default values
        var settings = $.extend({
            delay: 0,
            animateClass: 'animated'
        }, params);
        
        // Return this to maintain chainability
        return this.each(function () {

            // Cache $(this) for speed and compression
            var $this = $(this),
                transitionEnd = "webkitAnimationEnd oanimationend msAnimationEnd animationend",
                animated = settings.animateClass,
                visibility = "visibility",
                visible = "visible",
                hidden = "hidden";

            // Create a function we can call later
            function run() {

                // Add the animation effect with classes
                $this.addClass( animated + " " + effect);

                // Check if the elemenr has been hidden to start with
                if ($this.css( visibility ) === hidden) {

                    // If it has, show it (after the class has been added)
                    $this.css( visibility, visible);

                }

                // If the element is hidden
                if ($this.is(":" + hidden)) {

                    // Show it
                    $this.show();

                }

                // Event triggered when the animation has finished
                $this.bind( transitionEnd, function () {

                    // Remove the classes so they can be added again later
                    $this.removeClass(animated + " " + effect);

                    // Add a callback event
                    if (typeof callback === "function") {

                        // Execute the callback
                        callback.call(this);

                        // Unbind the event handlers
                        $this.unbind( transitionEnd );

                    }

                });

            }

            // Check if delay exists or if it"s a callback
            if (!settings.delay || settings.delay == 0) {

                // Run the animation (without delay)
                run();

            } else {

                // Start a counter so we can delay the animation if required
                setTimeout( run, settings.delay );

            }

        });

    };

})(jQuery, window, document);(function(e,t,n,r){"use strict";e.fn.animateCSS=function(t,n,r){return this.each(function(){function l(){i.addClass(o+" "+t);if(i.css(u)===f){i.css(u,a)}if(i.is(":"+f)){i.show()}i.bind(s,function(){i.removeClass(o+" "+t);if(typeof r==="function"){r.call(this);i.unbind(s)}})}var i=e(this),s="webkitAnimationEnd oanimationend msAnimationEnd animationend",o="animated",u="visibility",a="visible",f="hidden";if(!n||typeof n==="function"){r=n;l()}else{setTimeout(l,n)}})}})(jQuery,window,document);