import {defineStore} from "pinia";

export const useBaseStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++
        }
    }
})
