actual_time
===========

JavaScript time actualizer

Component registers function actual_time(options)

example:

    <body>
      <div class="events">
        it happened <span role="time-for-now" data-time="2013-07-23T15:20:25.880+04:00"></span>
        and that happened <span role="time-for-now" data-time="2013-07-28T14:30:35.880+04:00"></span>
        this won't update unless custom selector specified <div class="event" data-time="2013-08-23T11:20:25.880+04:00"></div>
      </div>
    </body>

javascript:

    <script type="text/javascript">
      // basic usage
      window.actual_time({ $el: $ });
    </script>

or

    <script type="text/javascript">
      window.actual_time({
          $el: $('div.events'),
          selector: 'div.event',
          interval: 15
        });
    </script>

actual_time function updates all elements within $el scope filtered by options.selector with momento.fromNow() function every options.interval seconds

options (hash):

    required:

      $el: jQuery function or jQuery object
      (in case of jQuery function objects scoped to $('body'))

    optional:

      selector: Sizzle selector to filter objects for update (default: '[role="time-for-now"]')
      interval: interval in seconds between updates (default: 60 sec)

