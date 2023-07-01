import { Boss } from "../Types";
import { exarchLoot } from "../loot/exarchLoot";
import { initialOptions } from "../options/options";

export const exarch: Boss = {
    id: "exarch",
    name: "Searing Exarch",
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
    loot: exarchLoot
}