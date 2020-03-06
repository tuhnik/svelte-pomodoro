<script>
	import { breakLength, sessionLength } from './store.js'
	
	function breakLengthInc() {
		breakLength.update(n => n + 60)
	}

	function breakLengthDec() {
		if($breakLength > 60) {
			breakLength.update(n => n - 60)
		}
	}

	function sessionLengthInc() {
		sessionLength.update(n => n + 60)
	}

	function sessionLengthDec() {
		if($sessionLength > 60) {
			sessionLength.update(n => n - 60)
		}
	}


</script>

<main>
<div class="settings">
	<div class="break">
		<div id="break-label">Break length</div>
		<i class="fa fa-arrow-up" on:click={breakLengthInc}></i>
		<div class="counter">{$breakLength / 60}</div>
		<i class="fa fa-arrow-down" on:click={breakLengthDec}></i>
	</div>
	<div class="session">
		<div id="session-label">Session length</div>
			<i class="fa fa-arrow-up" on:click={sessionLengthInc}></i>
			<div class="counter">{$sessionLength / 60}</div>
			<i class="fa fa-arrow-down" on:click={sessionLengthDec}></i>
	</div>
</div>
</main>

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
		margin: .25em;
		min-width: 7.5em;
	}
	i {
		cursor: pointer;
		font-size: 1.5em;
    	color: #fe3e1a;
	}
</style>