import { Options } from "../types";

export interface Loot extends Options {
    name: string,
    cost: number,
    count: number
}