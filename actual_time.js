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
    var time = moment().format();
    // this double assignment is necessary because jquery with $.data updates only
    // inner element's data object, but with $.attr it also shows changes in elements panel (chrome)
    // tho when assigned with only $.attr then $.data('time') return correct value for first call
    // but when changed with $.attr lately $.data('time') still returns old values and it changes
    // only with $.data('time', new_value) call
    $el.data('time', time);
    $el.attr('data-time', time);
  };
}).call(this)
