# countable

A jQuery plugin that adds a character counter to inputs and textareas.


## Settings

The countable plugin has 11 settings:

* `threshold` - The percentage at which the counter begins to fade in. Default is 0.5.
* `appendMethod` - One of `insertAfter`, `insertBefore`, `prependTo`, or `appendTo` to insert the counter after or before the input/textarea or prepend or append to the `target` element. Default is `insertAfter`.
* `target` - Container element into which to place the counter
* `startOpacity` - The percentage of opacity it should start out with once it reaches the threshold. Default is 0.25.
* `maxLength` - The maximum number of characters. Default uses the `maxlength` attribute of the input/textarea.
* `maxClassName` - The class name to add once the user has gone over the max number of characters. Default is 'maxed'.
* `className` - The class name for the counter. Default is 'counter'.
* `tagName` - The type of tag to use for the counter. Default is `span`.
* `interval` - The interval at which it checks the input/textarea. Default is 750.
* `positiveCopy` - The copy to use when the character count is below the max. Use `{n}` to denote where the number should go. Default is "You have {n} characters left.".
* `negativeCopy` - The copy to use when the character count is over the max. Use `{n}` to denote where the number should go. Default is "You are {n} characters over.".
* `fadeDuration` - The duration of the fade animations. Default is 'normal'.

## License

The expandable plugin is dual licensed *(just like jQuery)* under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses.

Copyright (c) 2009 [Brandon Aaron](http://brandonaaron.net)