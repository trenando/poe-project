import { Invitation } from "../Types";
import { twistedLoot } from "../invitationLoot/twistedLoot";
import { initialOptions } from "../options/options";

export const twisted: Invitation = {
    id: "twisted",
    name: "The Twisted",
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
    loot: twistedLoot
}