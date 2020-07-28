<script>
  import {
    breakLength,
    sessionLength,
    ticking,
    seconds,
    mode,
  } from "./store.js";
  import { playBeep } from "./Beep.svelte";
  import formatTime from "./utils/formatTime.js";
  import { SESSION_MODE, BREAK_MODE, MINUTE } from "./constants";

  function countdown() {
    if ($ticking) {
      seconds.update((n) => n - 1);
      if($seconds === 0) {
        if ($mode === SESSION_MODE) {
          mode.update((mode) => BREAK_MODE);
        }
        else {
          mode.update((mode)=> SESSION_MODE)
        }
      }
      if ($seconds < 0) {
        if ($mode === SESSION_MODE) {
          seconds.update((_) => $breakLength * MINUTE);
        } else {
          seconds.update((_) => $sessionLength * MINUTE);
        }
        playBeep();
      }
    }
  };
  
  ticking.subscribe(value=>{
    if(!value) {
      window.clearInterval(document.pomodoroTimer)
      }
    else {
      document.pomodoroTimer = window.setInterval(countdown, 1000);
    }
  })
</script>

<div>
  <h2 id="timer-label">{$mode === SESSION_MODE ? 'Session' : 'Break'}</h2>
  <h2 id="time-left">{formatTime($seconds)}</h2>
</div>
