import { Boss } from "../types";
import { eaterLoot } from "../bossesLoot/eaterLoot";
import { initialOptions } from "../options/options";

export const eater: Boss = {
    id: "eater",
    name: "Eater of worlds",
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
    loot: eaterLoot
}