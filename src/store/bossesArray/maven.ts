import { Boss } from "../rename";
import { mavenLoot } from "../bossesLoot/mavenLoot";
import { initialOptions } from "../options/options";

export const maven: Boss = {
    id: "maven",
    name: "Maven",
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
    loot: mavenLoot
}