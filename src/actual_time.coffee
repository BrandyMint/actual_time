# function updates all elements with role="time"
# each element should have data-time attr containing valid date string for Date js object

_defaults =
  interval: 60
  selector: '[role="time"]'

_for_now_updater = ($el, selector) ->
  ->
    $el.find(selector).each (i, obj) ->
      if time = $el.find(obj).data 'time'
        $el.find(obj).html moment(time).fromNow()

# options:
#* optional
#   $el: - jquery function or jquery object $('div.class')
#   selector: Sizzle selector for elements to be updated
#   interval: update interval

@actual_time = (options) ->

  if options? && options.$el?
    $ = options.$el
  else if jQuery?
    $ = jQuery
  else
    return console.log 'actual_time unable to bind jQuery function. exiting...'

  if typeof $ == "function"
    $ = $('body')

  options = $.extend {}, _defaults, options

  _for_now_updater($, options.selector).call()

  setInterval _for_now_updater($, options.selector), options.interval * 1000

# function set data-time attr to current date/time in ISO8601
# options (hash)
#* required
#   $el - jquery object
#* optional
#   selector: Sizzle selector for elements to be updated (default: '[role="time"]')

@set_actual_time = (options) ->
  time = moment().format()

  $ = options.$el
  options = $.extend {}, _defaults, options

  $.find(options.selector).each (i, obj) ->

    # this double assignment is necessary because jquery with $.data updates only
    # inner element's data object, but with $.attr it also shows changes in elements panel (chrome)
    # tho when assigned with only $.attr then $.data('time') return correct value for first call
    # but when changed with $.attr lately $.data('time') still returns old values and it changes
    # only with $.data('time', new_value) call

    $.find(obj).data 'time', time
    $.find(obj).attr 'data-time', time

  _for_now_updater($, options.selector).call()
