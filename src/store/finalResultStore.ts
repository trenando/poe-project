import { defineStore, storeToRefs } from "pinia";
import { Loot } from "./bossesLoot/Types";
import { useUtilityStore } from "./utilityStore";
import { useBossesStore } from "./bossesStore";

export const useFinalResultStore = defineStore("finalResultStore", () => {
    const bossesStore = useBossesStore();

    const utilityStore = useUtilityStore()
    const { options, exchangeRatio, lootResult, profit } = storeToRefs(utilityStore)

    const calculateFinalResult = () => {
        const currentExchangeValue = options.value.selectedValue;
        const costPerAll = JSON.parse(JSON.stringify(bossesStore.bossById.costPerAll))
        const chaos = calculateSelectedValue(bossesStore.bossById.loot, "chaos")
        const divine = calculateSelectedValue(bossesStore.bossById.loot, "divine")
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
        calculateFinalResult
    }
})