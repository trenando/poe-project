import { Boss } from "../Types";
import { atziriLoot } from "../loot/atziriLoot";
import { initialOptions } from "../options/options";

export const atziri: Boss = {
    id: "atziri",
    name: "Atziri",
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
    loot: atziriLoot
}