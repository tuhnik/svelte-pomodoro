import { writable } from 'svelte/store';
import { MINUTE, SESSION_MODE } from './constants';

const breakLength = writable(5);
const sessionLength = writable(25);
const ticking = writable(false);
const seconds = writable(25 * MINUTE);
const mode = writable(SESSION_MODE);

export { breakLength, sessionLength, ticking, seconds, mode };
