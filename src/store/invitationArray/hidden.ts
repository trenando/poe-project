import { Invitation } from "../types";
import { hiddenLoot } from "../invitationLoot/hiddenLoot";
import { initialOptions } from "../options/options";

export const hidden: Invitation = {
    id: "hidden",
    name: "The Hidden",
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
    loot: hiddenLoot
}