import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { invitationArray } from "./invitationArray";
import { Invitation, InvitationById } from "./Types";

export const useInvitationStore = defineStore("invitationStore", () => {
    const invitations: Ref<Array<Invitation>> = ref(invitationArray)
    
    const invitationById: Ref<InvitationById> = ref({
        invitations: {
            costPerOne: {
                name: "",
                value: 0,
                options: [],
                selectedValue: ""
            },
            costPerAll: {
                name: "",
                value: 0,
                options: [],
                selectedValue: ""
            },
            count: {
                name: "",
                value: 0
            }
        },
        sets: {
            costPerOne: {
                name: "",
                value: 0,
                options: [],
                selectedValue: ""
            },
            costPerAll: {
                name: "",
                value: 0,
                options: [],
                selectedValue: ""
            },
            count: {
                name: "",
                value: 0
            }
        },
        loot: []
    })

    return {
        invitations, invitationById
    }
})