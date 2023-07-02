import { Boss } from "../Types";
import { uberLoot } from "../bossesLoot/uberLoot";
import { initialOptions } from "../options/options";

export const uber: Boss = {
    id: "uber",
    name: "Uber Elder",
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
    loot: uberLoot
}