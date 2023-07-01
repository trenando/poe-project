import { Loot } from "./loot/Types"

export interface Option {
    name: string,
    value: string
}

export interface BossElement {
    name: string,
    value: number
    options?: Array<Option>
    selectedValue?: string
}

export interface Options {
    options: Array<Option>
    selectedValue: string
}

export interface BossById {
    costPerOne: BossElement
    costPerAll: BossElement
    count: BossElement 
    loot: Array<Loot>
}

export interface Boss extends BossById {
    id: string,
    name: string
}