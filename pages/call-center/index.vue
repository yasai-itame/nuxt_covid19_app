<script setup lang="ts">
const { data: cards, dateValue, limitValue, startDate, endDate } = useApi('Covid19CallCenter', 'from', '2020-01-29', '2023-05-07')

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
        :key="card"
        cols="4"
      >
        <v-card :subtitle="card['都道府県名']">
          <template v-slot:text>
            相談件数： {{ card['相談件数'] }}件<br>
            受付年月日: {{dateAction(card['受付_年月日'])}}
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>