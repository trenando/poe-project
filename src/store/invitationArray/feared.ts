import { Invitation } from "../Types";
import { fearedLoot } from "../invitationLoot/fearedLoot";
import { initialOptions } from "../options/options";

export const feared: Invitation = {
    id: "feared",
    name: "The Feared",
    invitations: {
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
        }
    },
    sets: {
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
        }
    },
    loot: fearedLoot
}