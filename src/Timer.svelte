<script>
    import { breakLength, sessionLength, ticking } from './store.js'
    let initialSeconds = $sessionLength;
    let sessionMode = true;

    const countdown = () => {
        if($ticking) {
            initialSeconds = initialSeconds - 1;
                if(initialSeconds === 0) {
                    if(sessionMode) {
                        sessionMode = false;
                        initialSeconds = $breakLength;
                    }
                    else {
                        sessionMode = true;
                        initialSeconds = $sessionLength;
                    }
                }
        }
    }

    setInterval(countdown, 1000)

    const formatTime = (sec) => {
        let date = new Date(0);
        date.setSeconds(sec);
        return date.toISOString().substr(14, 5);
    }
</script>

<main>
	<h1 id="timer-label">{sessionMode?'session':'break'}</h1>
    <h2 id="time-left">{formatTime(initialSeconds)}</h2>
</main>

<style>
</style>