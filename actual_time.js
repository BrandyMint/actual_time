(function() {
  // function updates all elements with role="time-for-now"
  // each element should have data-time attr containing valid date string for Date js object
  var _for_now_updater, _defaults;

  _defaults = {
    interval: 60,
    selector: '[role="time-from-now"]'
  };

  _for_now_updater = function($el, selector) {
    return function() {
      $el.find(selector).each(function(i, obj) {
        var time;
        time = $el.find(obj).data('time')
        $el.find(obj).html(moment(time).fromNow())
      });
    };
  };

  // options:
  //* required
  // $el: - jquery function or jquery object $('div.class')
  //
  //* optional
  // selector: Sizzle selector for elements to be updated
  // interval: update interval

  this.actual_time = function(options) {
    $ = options.$el;
    if (typeof $ === "function") { $ = $('body'); }
    options = $.extend(_defaults, options)

    _for_now_updater($, options.selector).call();

    setInterval( _for_now_updater($, options.selector), options.interval * 1000);
  }
}).call(this)
