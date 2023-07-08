import { Options } from "../rename";

export interface Loot extends Options {
    name: string,
    cost: number,
    count: number
}