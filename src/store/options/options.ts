import { Option } from "../types";

export const initialOptions: InitialOptions = {
    options: [
        {
            name: "Chaos",
            value: "chaos"
        },
        {
            name: "Divine",
            value: "divine"
        }
    ],
    selectedValue: "chaos"
}

type InitialOptions = {
    options: Array<Option>,
    selectedValue: "divine" | "chaos"
}