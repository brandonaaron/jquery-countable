# countable

A jQuery plugin that adds a character counter to inputs and textareas.


## Settings

The countable plugin has 13 settings:

* `threshold` - The percentage at which the counter begins to fade in. Default is **0.5**.
* `appendMethod` - One of **insertAfter**, **insertBefore**, **prependTo**, or **appendTo** to insert the counter after or before the input/textarea or prepend or append to the **target** element. Default is **'insertAfter'**.
* `target` - Container element into which to place the counter.
* `startOpacity` - The percentage of opacity it should start out with once it reaches the threshold. Default is **0.25**.
* `maxLength` - The maximum number of characters. Default uses the **maxlength** attribute of the input/textarea.
* `maxClassName` - The class name to add once the user has gone over the max number of characters. Default is **'maxed'**.
* `className` - The class name for the counter. Default is **'counter'**.
* `tagName` - The type of tag to use for the counter. Default is `span`.
* `interval` - The interval at which it checks the input/textarea. Default is **750**.
* `positiveCopy` - The copy to use when the character count is below the max. Use `{n}` to denote where the number should go. Default is **'You have {n} characters left.'**.
* `negativeCopy` - The copy to use when the character count is over the max. Use `{n}` to denote where the number should go. Default is **'You are {n} characters over.'**.
* `fadeDuration` - The duration of the fade animations. Default is **'normal'**.
* `defaultText` - Text to ignore in the character count. This would be used if you have default text that disappears when focus is brought to the text box. Default is **''**.

## Examples

Add counter to all textarea objects on the page using defaults:

    $("textarea").countable();

Add counters to a specific set of text fields, before each element:

    $("#myTextBox, textarea.info").countable({ appendMethod: "insertBefore" });

Add counter to a specific textarea, but display in a given container element (with other advanced options):

    $("#comments").each(function() {
      $(this).countable({
        threshold: .75,
        appendMethod: "appendTo",
        target: $(this).parent().find("label small"),
        startOpacity: 1,
        maxLength: $(this).metadata().maxLength,
        positiveCopy: " ({n} characters left)",
        negativeCopy: " ({n} characters over the limit)",
        fadeDuration: 0,
        defaultText: "Enter message"
      })
    });

_Note: In the last example, the code is wrapped in an `each()` function call to get `this` to point to the text element. Also, `maxLength` is being pulled from contextual information using the metadata jQuery plugin (<http://plugins.jquery.com/project/metadata>)._

## License

The expandable plugin is dual licensed *(just like jQuery)* under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses.

Copyright (c) 2009 [Brandon Aaron](http://brandonaaron.net)