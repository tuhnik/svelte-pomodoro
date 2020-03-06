import { writable } from 'svelte/store';

const breakLength = writable(5 * 60);
const sessionLength = writable(1 * 60);
const ticking = writable(false);

export { breakLength, sessionLength, ticking };
