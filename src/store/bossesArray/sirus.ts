import { Boss } from "../rename";
import { sirusLoot } from "../bossesLoot/sirusLoot";
import { initialOptions } from "../options/options";

export const sirus: Boss = {
    id: "sirus",
    name: "Sirus",
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
    loot: sirusLoot
}