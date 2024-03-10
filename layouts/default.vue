<script setup lang="ts">

type List = {
  id: number
  name: string
  link: string
}
const drawer = ref()
const lists = ref<List[]>([])

const listsData = [
  {
    id: 1,
    name: '新型コロナウイルス陽性患者発表詳細',
    link: '/'
  },
  {
    id: 2,
    name: '新型コロナコールセンター相談件数',
    link: '/call-center'
  },
  {
    id: 3,
    name: '新型コロナ受診相談窓口相談件数',
    link: '/consultation'
  }
]

lists.value = [...listsData]

</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="list in lists"
          :key="list.id"
          :title="list.name"
          link
          nuxt
          :to="list.link"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>