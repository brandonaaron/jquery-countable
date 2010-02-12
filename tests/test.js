
test("input", 8, function() {
    var $el = $('#test1').countable(),
        $counter = $el.next();
    
    ok($counter.is('span'), 'counter is a span tag');
    ok($counter.is('.counter'), 'counter has correct class name');
    ok($counter.is(':hidden'), 'counter should be hidden initially');
    
    var str = '';
    for (var i=0; i<13; i++) str+='1';
    $el.val(str);
    $el.trigger('keyup');
    
    ok($counter.is(':visible'), 'counter should be visible since threshold has been met');
    ok($counter.find('.num').text() == "12", 'number of characters left should be 12');
    
    var str = '';
    for (var i=0; i<24; i++) str+='1';
    $el.val(str);
    $el.trigger('keyup');
    
    ok($counter.is(':visible'), 'counter should be visible');
    ok($counter.find('.num').text() == "1", 'number of characters left should be 1');
    
    var str = '';
    for (var i=0; i<5; i++) str+='1';
    $el.val(str);
    $el.trigger('keyup');
    
    ok($counter.is(':hidden'), 'counter should be hidden since threshold hasn\'t been met');
});

test("textarea", 8, function() {
    var $el = $('#test2').countable(),
        $counter = $el.next();
    
    ok($counter.is('span'), 'counter is a span tag');
    ok($counter.is('.counter'), 'counter has correct class name');
    ok($counter.is(':hidden'), 'counter should be hidden initially');
    
    var str = '';
    for (var i=0; i<13; i++) str+='1';
    $el.val(str);
    $el.trigger('keyup');
    
    ok($counter.is(':visible'), 'counter should be visible since threshold has been met');
    ok($counter.find('.num').text() == "12", 'number of characters left should be 12');
    
    var str = '';
    for (var i=0; i<24; i++) str+='1';
    $el.val(str);
    $el.trigger('keyup');
    
    ok($counter.is(':visible'), 'counter should be visible');
    ok($counter.find('.num').text() == "1", 'number of characters left should be 1');
    
    var str = '';
    for (var i=0; i<5; i++) str+='1';
    $el.val(str);
    $el.trigger('keyup');
    
    ok($counter.is(':hidden'), 'counter should be hidden since threshold hasn\'t been met');
});