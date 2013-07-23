(function() {
  // function updates all elements with role="time"
  // each element should have data-time attr containing valid date string for Date js object
  var _for_now_updater, _defaults;

  _defaults = {
    interval: 60,
    selector: '[role="time"]'
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
  //* optional
  // $el: - jquery function or jquery object $('div.class')
  // selector: Sizzle selector for elements to be updated
  // interval: update interval

  this.actual_time = function(options) {
    var $;

    if (typeof options !== "undefined" && typeof options.$el !== "undefined" && options.$el != null) {
      $ = options.$el;
    } else if (typeof jQuery !== "undefined" && jQuery != null) {
      $ = jQuery;
    } else {
      return console.log('actual_time unable to bind jQuery function. exiting...');
    }
    if (typeof $ === "function") { $ = $('body'); }
    options = $.extend(_defaults, options)

    _for_now_updater($, options.selector).call();

    setInterval( _for_now_updater($, options.selector), options.interval * 1000);
  };

  // function set data-time attr to current date/time in ISO8601
  // $el - jquery object
  this.set_actual_time = function($el) {
    $el.data('time', moment().format());
  };
}).call(this)
