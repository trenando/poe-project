import { Options } from "../Types";

export interface Loot extends Options {
    name: string,
    cost: number,
    count: number
}