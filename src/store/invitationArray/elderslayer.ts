import { Invitation } from "../types";
import { elderslayerLoot } from "../invitationLoot/elderslayerLoot";
import { initialOptions } from "../options/options";

export const elderslayer: Invitation = {
    id: "elderslayer",
    name: "The Elderslayer",
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
    loot: elderslayerLoot
}