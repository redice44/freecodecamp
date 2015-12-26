(function() {
  var SECONDS = 60;
  var breakDuration = 5 * SECONDS;
  var sessionDuration = 25 * SECONDS;

  var currentTime;

  function updateDisplay() {
    updateBreak();
    updateSession();
  }

  function updateBreak() {
    console.log('Updating Break');
    $('#break .controls .duration').html(breakDuration / SECONDS);
  }

  function updateSession() {
    console.log('Updating Session');
    $('#session .controls .duration').html(sessionDuration / SECONDS);
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
      updateSession();
    }
  }

  function incrimentBreak() {
    breakDuration += SECONDS;
    updateBreak();
  }

  function incrimentSession() {
    sessionDuration += SECONDS;
    updateSession();
  }

  $(document).ready(function() {
    updateDisplay();
    $('#break .controls .less').on('click', decrimentBreak);
    $('#break .controls .more').on('click', incrimentBreak);
    $('#session .controls .less').on('click', decrimentSession);
    $('#session .controls .more').on('click', incrimentSession);
  });
})();
