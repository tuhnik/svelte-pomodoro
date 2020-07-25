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
    if ($ticking || $breakLength >= MAX_MINUTES) return;
    breakLength.update((minutes) => minutes + MINUTE);
    if ($mode === BREAK_MODE) {
      seconds.update((_) => $breakLength);
    }
  };

  const breakLengthDec = () => {
    if ($ticking || $breakLength <= MINUTE) return;
    breakLength.update((minutes) => minutes - MINUTE);
    if ($mode === BREAK_MODE) {
      seconds.update((_) => $breakLength);
    }
  };

  const sessionLengthInc = () => {
    if ($ticking || $sessionLength >= MAX_MINUTES) return;
    sessionLength.update((minutes) => minutes + MINUTE);
    if ($mode === SESSION_MODE) {
      seconds.update((_) => $sessionLength);
    }
  };

  const sessionLengthDec = () => {
    if ($ticking || $sessionLength <= MINUTE) return;
    sessionLength.update((minutes) => minutes - MINUTE);
    if ($mode === SESSION_MODE) {
      seconds.update((_) => $sessionLength);
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

  .disabled > div {
    background: #c1c1c1;
    border: 2px solid #848484;
    cursor: not-allowed;
  }

  .disabled .fa {
    color: gray;
    cursor: not-allowed;
  }

  i {
    cursor: pointer;
    font-size: 1.5em;
    color: #fe3e1a;
  }
</style>

<main>
  <div class={$ticking ? 'settings disabled' : 'settings'}>
    <div class="break">
      <div id="break-label">Break length</div>
      <i class="fa fa-arrow-up" on:click={breakLengthInc} />
      <div class="counter">{$breakLength / 60}</div>
      <i class="fa fa-arrow-down" on:click={breakLengthDec} />
    </div>
    <div class="session">
      <div id="session-label">Session length</div>
      <i class="fa fa-arrow-up" on:click={sessionLengthInc} />
      <div class="counter">{$sessionLength / 60}</div>
      <i class="fa fa-arrow-down" on:click={sessionLengthDec} />
    </div>
  </div>
</main>
