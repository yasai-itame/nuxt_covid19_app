<script setup lang="ts">
const { data: cards, dateValue, limitValue, startDate, endDate } = useApi('Covid19Patient', 'till', '2020-01-24', '2022-09-26')

//import { format } from 'date-fns'

/*
type Foo = {
  foo: string;
  [key: string]: unknown; // APIレスポンスで他のキーを省略する場合
}
*/

/*
type Patient = {
  [key: string]: unknown
}
const startDate = '2020-01-24'
const endDate = '2022-09-26'
const dateValue = ref<Date>(new Date(endDate))
const limitValue = ref<number>(10)

const adjustDate = computed(() => {
  return format(new Date(dateValue.value), 'yyyy-MM-dd')
})

const { data: cards, error } = await useAsyncData<Patient[]>(`patient_${adjustDate.value}_${limitValue.value}`, () => $fetch(`https://api.data.metro.tokyo.lg.jp/v1/Covid19Patient?till=${adjustDate.value}&limit=${limitValue.value}`), {
  watch: [dateValue, limitValue]
})

if (error.value) {
  console.error(error.value)
  throw createError(error.value)
}
*/

// computedにしないとデータが反映されなかった
// const cardData = cards.value?.find((v: Object, i: number) => {
//   return i === 0 ? v : null
// })

const cardData = computed(() => {
  return cards.value?.find((v: Object, i: number) => {
    return i === 0 ? v : null
  })
})

</script>

<template>
  <v-container
    class="py-8 px-6"
    fluid
  >
    <v-row>
      <v-col cols="8">
        <v-date-picker class="w-100 mb-8"
          v-model="dateValue"
          color="primary"
          elevation="24"
          :min="startDate"
          :max="endDate"
          >
        </v-date-picker>
      </v-col>
      <v-col cols="4">
        <v-select
          v-model="limitValue"
          label="表示件数"
          :items="['10', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000']"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="card in cardData"
        :key="card.No"
        cols="4"
      >
        <v-card :title="card['患者_年代']" :subtitle="card['都道府県名']" :text="dateAction(card['公表_年月日'])">
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>