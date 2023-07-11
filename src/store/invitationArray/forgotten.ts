import { Invitation } from "../types";
import { forgottenLoot } from "../invitationLoot/forgottenLoot";
import { initialOptions } from "../options/options";

export const forgotten: Invitation = {
    id: "forgotten",
    name: "The Forgotten",
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
    loot: forgottenLoot
}