import { Boss } from "../Types";
import { elderLoot } from "../loot/elderLoot";
import { initialOptions } from "../options/options";

export const elder: Boss = {
    id: "elder",
    name: "Elder",
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
    loot: elderLoot
}