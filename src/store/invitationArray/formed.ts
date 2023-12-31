import { Invitation } from "../types";
import { formedLoot } from "../invitationLoot/formedLoot";
import { initialOptions } from "../options/options";

export const formed: Invitation = {
    id: "formed",
    name: "The Formed",
    sets: [
        {
            name:"Invitations",
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
        {
            name:"Sets",
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
        }
    ],
    loot: formedLoot
}