import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { Boss, BossById } from "./types";
import { bossesArray } from "./bossesArray";

export const useBossesStore = defineStore("bossesStore", () => {
    const bosses: Ref<Array<Boss>> = ref(bossesArray);

    const bossById: Ref<BossById> = ref({
        costPerOne: {
            name: "",
            value: 0,
            options: [],
            selectedValue: ""
        },
        costPerAll: {
            name: "",
            value: 0,
            options: [],
            selectedValue: ""
        },
        count: {
            name: "",
            value: 0
        },
        loot: []
    })

    return {
        bosses, bossById
    }
})