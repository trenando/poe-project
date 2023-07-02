import { Ref } from "vue"
import { Loot } from "./bossesLoot/Types"

export interface Option {
    name: string
    value: string
}

export interface Element {
    name: string
    value: number
}

export interface ExtendedElement extends Element {
    options?: Array<Option>
    selectedValue?: string
}

export interface Options {
    options: Array<Option>
    selectedValue: string
}

export interface BossById {
    costPerOne: ExtendedElement
    costPerAll: ExtendedElement
    count: ExtendedElement
    loot: Array<Loot>
}

export interface ElementById {
    costPerOne: ExtendedElement
    costPerAll: ExtendedElement
    count: ExtendedElement
}

export interface Boss extends BossById {
    id: string
    name: string
}

export interface FilterAttributes<T> {
    array: Array<T>,
    value: Ref<Omit<T, "id" | "name">>
}

export interface UnitById {
    costPerOne: ExtendedElement
    costPerAll: ExtendedElement
    count: ExtendedElement
}

export interface InvitationById {
    invitations: UnitById
    sets: UnitById
    loot: Array<Loot>
}

export interface Invitation extends InvitationById {
    id: string
    name: string
}