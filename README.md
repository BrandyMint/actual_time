actual_time
===========

JavaScript time actualizer

Component registers functions
  actual_time(options), set_actual_time($el)

example:

    <body>
      <div class="events">
        it happened <span role="time" data-time="2013-07-23T15:20:25.880+04:00"></span>
        and that happened <span role="time" data-time="2013-07-28T14:30:35.880+04:00"></span>
        this won't update unless custom selector specified <div class="event" data-time="2013-08-23T11:20:25.880+04:00"></div>
      </div>
    </body>

javascript:

    <script type="text/javascript">
      // basic usage
      window.actual_time();
    </script>

or

    <script type="text/javascript">
      window.actual_time({
          $el: $('div.events'),
          selector: 'div.event',
          interval: 15
        });
    </script>

actual_time(options)
--------------------

function updates all elements within $el scope filtered by options.selector with momento.fromNow() function every options.interval seconds

options (hash):

    optional:

      $el: jQuery function or jQuery object
           (in case of jQuery function objects scoped to $('body'))
      selector: Sizzle selector to filter objects for update (default: '[role="time"]')
      interval: interval in seconds between updates (default: 60 sec)


set_actual_time($el)
--------------------

function sets current date/time in ISO8601 format for provided jquery element

option:

    $el: jQuery object ($('div.span').eq(0))
