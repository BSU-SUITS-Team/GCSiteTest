import { writable } from 'svelte/store';

const initialKeepables = {};

function createKeepablesStore() {
    const { subscribe, set, update } = writable(initialKeepables);

    return {
        subscribe,
        addRover: (name, data) => update(n => { 
            return { ...n, [name]: data }; 
        }),
        removeRover: (name) => update(n => {
            let updated = { ...n };
            delete updated[name];
            return updated;
        }),
        removeElement: (roverName, elementKey) => update(n => {
            if (n[roverName]) {
                n[roverName] = n[roverName].filter(([key]) => key !== elementKey);
            }
            // if empty, remove rover
            if (n[roverName].length === 0) {
                delete n[roverName];
            }
            return { ...n };
        }),
        addElement: (roverName, element) => update(n => {
            if (!n[roverName]) {
                n[roverName] = [];
            }
            // if already exists, remove it
            n[roverName] = n[roverName].filter(([key]) => key !== element[0]);
            if (n[roverName]) {
                n[roverName].push(element);
            }
            return { ...n };
        }),
    };
}

export const keepables = createKeepablesStore();