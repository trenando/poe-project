import { defineStore } from "pinia";
import { Element, FilterAttributes, Options, UnitById } from "./Types";
import { Ref, ref } from "vue";
import { initialOptions } from "./options/options";

export const useUtilityStore = defineStore("utilityStore", () => {

    const options: Ref<Options> = ref(initialOptions)
    const exchangeRatio: Ref<number> = ref(1)
    const lootResult: Ref<string> = ref("0")
    const profit: Ref<string> = ref("0")

    const filterById = <T extends { id: string, name: string }>(filterId: string, filterAttributes: FilterAttributes<T>) => {
        const middleValue = filterAttributes.array.filter(el => el.id === filterId)[0];
        const { id, name, ...value } = middleValue;
        filterAttributes.value.value = value;
    };

    const changeCostValue = <T extends UnitById>(element: Element, elementById: T) => {
        console.log(elementById);
        let { costPerAll, costPerOne, count } = elementById;
        if (element.name === "Cost per one") {
            costPerAll.value = element.value * count.value
        }
        if (element.name === "Count") {
            if (costPerOne.value) {
                costPerAll.value = costPerOne.value * element.value
            } else {
                costPerOne.value = costPerAll.value / element.value
            }
        }
        if (element.name === "Cost per all") {
            if (count.value !== 0) {
                costPerOne.value = element.value / count.value
            } else {
                costPerOne.value = 0;
            }
        }
    }

    return {
        options, exchangeRatio, lootResult, profit,
        filterById, changeCostValue
    }
})