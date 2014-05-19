(function ($, window, document, undefined) {

    // Function-level strict mode syntax
  'use strict';

    $.fn.animateCSS = function (effect, callback, params) {
        
        // Check if there were params handed over in the callback 
        if (callback && typeof callback !== "function") {
            params = callback
        }

        // Deal with params array  and set some default values
        var settings = $.extend({
            delay: 0,
            animateClass: 'animated',
            lastCallbackOnly: false,
            lastCallback: null
        }, params);

        // Global variables
        var intLength = this.length;

        // Return this to maintain chainability
        return this.each(function (index) {

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

            }

            // Event triggered when the animation has finished
            $this.bind(transitionEnd, function () {

                // Remove the classes so they can be added again later
                $this.removeClass(animated + " " + effect);

            });

            // Check if callback is meant to run on every element or only on last
            if (typeof callback === "function" && (settings.lastCallbackOnly == false || index == intLength - 1)) {

                $this.bind(transitionEnd, function () {

                    // Execute the callback
                    callback.call(this);

                });

            }

            // Check if callback is meant to run on every element or only on last
            if (typeof settings.lastCallback === "function" && index == intLength - 1) {

                $this.bind(transitionEnd, function () {

                    // Execute the callback
                    settings.lastCallback.call(this);

                });

            }

            // Event triggered when the animation has finished
            $this.bind(transitionEnd, function () {

                // Unbind the event handlers
                $this.unbind(transitionEnd);

            });



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

})(jQuery, window, document);