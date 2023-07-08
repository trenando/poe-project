import { Boss } from "../types";
import { cortexLoot } from "../bossesLoot/cortexLoot";
import { initialOptions } from "../options/options";

export const cortex: Boss = {
    id: "cortex",
    name: "Cortex",
    costPerOne: {
        name: "Cost per one",
        value: 0,
        ...initialOptions
    },
    costPerAll: {
        name: "Cost per all",
        value: 0,
        ...initialOptions
    },
    count: {
        name: "Count",
        value: 0
    },
    loot: cortexLoot
}