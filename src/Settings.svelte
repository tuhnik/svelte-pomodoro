<script>
  import {
    breakLength,
    sessionLength,
    seconds,
    mode,
    ticking,
  } from "./store.js";
  import {
    MINUTE,
    MAX_MINUTES,
    SESSION_MODE,
    BREAK_MODE,
  } from "./constants.js";

  const breakLengthInc = () => {
    if ($breakLength >= 60) return;
    breakLength.update((n) => n + 1);
    if (!$ticking && $mode === BREAK_MODE) {
      seconds.update((_) => $breakLength * MINUTE);
    }
  };

  const breakLengthDec = () => {
    if ($breakLength <= 1) return;
    breakLength.update((n) => n - 1);
    if (!$ticking && $mode === BREAK_MODE) {
      seconds.update((_) => $breakLength * MINUTE);
    }
  };

  const sessionLengthInc = () => {
    if ($sessionLength > 60) return;
    sessionLength.update((n) => n + 1);
    if (!$ticking && $mode === SESSION_MODE) { 
      seconds.update((_) => $sessionLength * MINUTE);
    }
  };

  const sessionLengthDec = () => {
    if ($sessionLength <= 1) return;
    sessionLength.update((n) => n - 1);
    if (!$ticking && $mode === SESSION_MODE) {
      seconds.update((_) => $sessionLength * MINUTE);
    }
  };
</script>

<style>
  .settings {
    user-select: none;
    display: flex;
    justify-content: center;
  }
  .settings > * {
    border: 2px solid #fe3e1a;
    border-radius: 5px;
    padding: 1em;
    margin: 0.25em;
    min-width: 6.5em;
  }

  i {
    cursor: pointer;
    font-size: 1.5em;
    color: #fe3e1a;
  }
</style>

  <div class='settings'>
    <div class="break">
      <div id="break-label">Break length</div>
      <i class="fa fa-arrow-up" on:click={breakLengthInc}  id="break-increment"/>
      <div class="counter" id="break-length" >{$breakLength}</div>
      <i class="fa fa-arrow-down" on:click={breakLengthDec} id="break-decrement"/>
    </div>
    <div class="session">
      <div id="session-label">Session length</div>
      <i class="fa fa-arrow-up" on:click={sessionLengthInc} id="session-increment"/>
      <div class="counter" id="session-length">{$sessionLength}</div>
      <i class="fa fa-arrow-down" on:click={sessionLengthDec} id="session-decrement"/>
    </div>
  </div>
