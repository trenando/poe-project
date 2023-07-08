import { Boss } from "../rename";
import { shaperLoot } from "../bossesLoot/shaperLoot";
import { initialOptions } from "../options/options";

export const shaper: Boss = {
    id: "shaper",
    name: "Shaper",
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
    loot: shaperLoot
}