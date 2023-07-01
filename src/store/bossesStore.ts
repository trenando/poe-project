import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { Boss, BossById, BossElement, Options } from "./Types";
import { Loot } from "./loot/Types";
import { initialOptions } from "./options/options";
import { bossesArray } from "./bossesArray";

export const useBossesStore = defineStore("bossesStore", () => {

    const options: Ref<Options> = ref(initialOptions)
    const exchangeRatio: Ref<number> = ref(1)
    const lootResult: Ref<string> = ref("0")
    const profit: Ref<string> = ref("0")

    const bosses: Ref<Array<Boss>> = ref(bossesArray);

    const bossById: Ref<BossById> = ref({
        costPerOne: {
            name: "",
            value: 0,
            options: [],
            selectedValue: ""
        },
        costPerAll: {
            name: "",
            value: 0,
            options: [],
            selectedValue: ""
        },
        count: {
            name: "",
            value: 0
        },
        loot: []
    })

    const changeDepValue = (element: BossElement) => {
        let { costPerAll, costPerOne, count } = bossById.value;
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

    const filterBossById = (bossId: string) => {
        const middleValue = bosses.value.filter(el => el.id === bossId)[0];
        const { id, name, ...value } = middleValue;
        bossById.value = value;
    };

    const calculateFinalResult = () => {
        const currentExchangeValue = options.value.selectedValue;
        const costPerAll = JSON.parse(JSON.stringify(bossById.value.costPerAll))
        const chaos = calculateSelectedValue(bossById.value.loot, "chaos")
        const divine = calculateSelectedValue(bossById.value.loot, "divine")
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
        bosses, bossById, filterBossById, lootResult,
        changeDepValue, options, exchangeRatio, calculateFinalResult,
        profit
    }
})