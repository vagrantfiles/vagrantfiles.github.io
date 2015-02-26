(function(){
  var clock;
  $(document).ready(function() {
    var clock;
    clock = $('.clock').FlipClock({
      clockFace: 'DailyCounter',
      autoStart: false,
      callbacks: {
        stop: function() {
          $('.message').html('The clock has stopped!')
        }
      }
    });
    var then = new Date("March 26, 2015 14:42:00 PST");
    then = then.getTime();
    var now = new Date();
    now = now.getTime();
    var countDownTime = Math.floor((then - now)/1000);

    clock.setTime(countDownTime);
    clock.setCountdown(true);
    clock.start();
  });
}());
