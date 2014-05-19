This is my extension on Craig Dennis' fab plugin. It allows us to pass a custom "animated" class for different timings, etc.

Use the animate.css animations from http://daneden.me/animate/

## USAGE:

Basic
<pre>
$('#your-id').animateCSS('fadeIn');
</pre>

With callback
<pre>
$('#your-id').animateCSS('fadeIn', function(){
    alert('Boom! Animation Complete');
});
</pre>

With delay (in ms)
<pre>
$('#your-id').animateCSS('fadeIn', { delay: 500 });
</pre>

With delay AND callback
<pre>
$('#your-id').animateCSS('fadeIn', function(){
    alert('Boom! Animation Complete');
}, {
    delay: 1000
});
</pre>

With delay, callback AND custom animated class
<pre>
$('#your-id').animateCSS('fadeIn', function(){
    alert('Boom! Animation Complete');
}, {
    delay: 1000,
    animateClass: 'myAnimatedClass'
});
</pre>

If you want to hide an element when the page loads and then apply an effect, it might look something like this:
<pre>
&lt;style&gt;
    .js #your-id {
        visibility:hidden;
    }
&lt;/style&gt;

$(window).load( function(){
    $('#your-id').animateCSS('fadeIn', function(){
        alert('Boom! Animation Complete');
    }, {
        delay: 1000
    });
});
</pre>

Additional options:

lastCallbackOnly: The given callback will be fired after THE LAST matching element of the selector has ended its animation.
<pre>
{ 
    lastCallbackOnly : true
}
</pre>

lastCallback: Optional, additional callback to be called when all animations on all mathing elements of the selector have ended their animation.
<pre>
{ 
    lastCallback: function() {
        // Code ....
    }
}
</pre>

Remember to use a .js (or .no-js depending on how you role) so that the element still displays for non javascript users (and Google previews).
