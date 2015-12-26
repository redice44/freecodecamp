(function() {
  var SECONDS = 60;
  var breakDuration = 5 * SECONDS;
  var sessionDuration = 25 * SECONDS;

  var currentTime;
  var intervalId;

  function updateDisplay() {
    updateBreak();
    updateSession();
    updateTimer();
  }

  function updateBreak() {
    console.log('Updating Break');
    $('#break .controls .duration').html(breakDuration / SECONDS);
  }

  function updateSession() {
    console.log('Updating Session');
    $('#session .controls .duration').html(sessionDuration / SECONDS);
  }

  function updateTimer() {
    console.log('Updating Timer');
    var text = '';
    text += parseInt(currentTime / SECONDS)
    text += ':';
    text += currentTime % SECONDS < 10 ? '0' : '';
    text += currentTime % SECONDS;
    $('#timer .timer').html(text);
  }

  function decrimentBreak() {
    if (breakDuration >= SECONDS) {
      breakDuration -= SECONDS;
      updateBreak();
    }
  }

  function decrimentSession() {
    if (sessionDuration >= SECONDS) {
      sessionDuration -= SECONDS;
      currentTime = sessionDuration;
      updateSession();
    }
  }

  function incrimentBreak() {
    breakDuration += SECONDS;
    updateBreak();
  }

  function incrimentSession() {
    sessionDuration += SECONDS;
    currentTime = sessionDuration;
    updateSession();
  }

  function startTimer() {
    intervalId = setInterval(timer, 1000);
    $('#timer').off();
    $('#timer').on('click', pauseTimer);
  }

  function timer() {
    currentTime--;
    updateTimer();
  }

  function pauseTimer() {
    clearInterval(intervalId);
    $('#timer').off();
    $('#timer').on('click', startTimer);
  }

  $(document).ready(function() {
    currentTime = sessionDuration;
    updateDisplay();
    $('#break .controls .less').on('click', decrimentBreak);
    $('#break .controls .more').on('click', incrimentBreak);
    $('#session .controls .less').on('click', decrimentSession);
    $('#session .controls .more').on('click', incrimentSession);
    $('#timer').on('click', startTimer);
  });
})();
