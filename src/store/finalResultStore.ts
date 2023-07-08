import { defineStore, storeToRefs } from "pinia";
import { Loot } from "./bossesLoot/Types";
import { useUtilityStore } from "./utilityStore";
import { ElementById } from "./rename";

export const useFinalResultStore = defineStore("finalResultStore", () => {

    const utilityStore = useUtilityStore()
    const { options, exchangeRatio, lootResult, profit } = storeToRefs(utilityStore)

    const extendedCalculatedResult = (calculatedStore: CalculatedStore) => {
        const costPerAll = {
            value: 0,
            selectedValue: "chaos"
        };
        calculatedStore.sets.forEach(el => {
            if (el.costPerAll.selectedValue === "divine") {
                costPerAll.value += el.costPerAll.value * exchangeRatio.value
            } else {
                costPerAll.value += el.costPerAll.value
            }
        })
        return {
            costPerAll: costPerAll,
            loot: calculatedStore.loot
        }
    }

    const calculateFinalResult = (itemById: ItemById) => {
        const currentExchangeValue = options.value.selectedValue;
        const costPerAll = JSON.parse(JSON.stringify(itemById.costPerAll))
        const chaos = calculateSelectedValue(itemById.loot, "chaos")
        const divine = calculateSelectedValue(itemById.loot, "divine")

        let lootResultNum = 0;
        let profinNum = 0;
        if (currentExchangeValue === "chaos") {
            lootResultNum = chaos + divine * exchangeRatio.value
        } else {
            lootResultNum = Number((chaos / exchangeRatio.value + divine).toFixed(2))
        }
        if (costPerAll.selectedValue !== currentExchangeValue) {
            if (costPerAll.selectedValue === "divine") {
                costPerAll.value = costPerAll.value * exchangeRatio.value
            } else {
                costPerAll.value = Number((costPerAll.value / exchangeRatio.value).toFixed(2))
            }
        }
        lootResult.value = `${lootResultNum} ${currentExchangeValue}`
        profinNum = lootResultNum - costPerAll.value;
        profit.value = `${profinNum} ${currentExchangeValue}`
    }

    const calculateSelectedValue = (loot: Array<Loot>, selectedValue: string) => {
        return loot.filter((el: Loot) => el.selectedValue === selectedValue)
            .reduce((acc: number, currentValue: Loot) => {
                return acc += (currentValue.cost * currentValue.count)
            }, 0);
    }

    return {
        calculateFinalResult, extendedCalculatedResult
    }
})

type ItemById = {
    costPerAll: {
        value: number,
        selectedValue: string
    },
    loot: Array<Loot>
}

type CalculatedStore = {
    sets: Array<ElementById>
    loot: Array<Loot>
}