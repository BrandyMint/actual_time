(function() {
  // function updates all elements with role="time-for-now"
  // each element should have data-time attr containit valid date string for Date js object
  // first argument is jquery element (scope), second one - time in seconds
  this.actual_time = function($el, interval) {
    setInterval(function() {
      $el.find('[role="time-for-now"]').each(function(i, obj){
        var time;
        time = $el.find(obj).data('time')
        $el.find(obj).html(moment(time).fromNow())
      });
    }, interval * 1000);
  }
}).call(this)
