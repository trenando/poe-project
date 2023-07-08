import { defineStore } from "pinia";
import { FilterAttributes, Options, ElementById, ExtendedElement } from "./types";
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

    const changeCostValue = <T extends ElementById>(element: ExtendedElement, elementById: T) => { 
        const { costPerAll, costPerOne, count } = elementById; 
 
        const costPerOneMultiplier = costPerOne.selectedValue === 'divine' ? exchangeRatio.value : 1; 
        const costPerAllMultiplier = costPerAll.selectedValue === 'divine' ? exchangeRatio.value : 1; 
 
        const finalCostPerAllMultiplier = (costPerOneMultiplier / costPerAllMultiplier); 
        const finalCostPerOneMultiplier = (costPerAllMultiplier / costPerOneMultiplier); 
 
        if (element.name === "Cost per one") { 
            costPerAll.value = element.value * count.value * finalCostPerAllMultiplier 
        } 
        if (element.name === "Count") { 
 
            if (costPerOne.value) { 
                costPerAll.value = costPerOne.value * element.value * finalCostPerAllMultiplier 
            } else { 
                costPerOne.value = costPerAll.value / element.value * finalCostPerOneMultiplier 
            } 
        } 
        if (element.name === "Cost per all") { 
            if (count.value !== 0) { 
                costPerOne.value = element.value / count.value * finalCostPerOneMultiplier 
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