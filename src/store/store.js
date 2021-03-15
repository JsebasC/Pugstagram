//objeto que nos permite acceder, de manera reactiva, a un valor global 
import { writable } from 'svelte/store';

//variable reactiva
export const count = writable(0);
