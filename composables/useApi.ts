export const useApi = (category: string, typeName: string, startDate: string, endDate: string) => {
  const runtimeConfig = useRuntimeConfig()
  const apiUrl = runtimeConfig.public.covid19ApiUrl

  const dateData = (name: string) => {
    switch (name) {
      case 'from':
        return startDate
      case 'till':
        return endDate
      default:
        return ''
    }
  }

  const dateValue = ref<Date>(new Date(dateData(typeName)))
  const limitValue = ref<number>(10)

  type Data = {
    [key: string]: unknown
  }

  const adjustDate = computed(() => {
    return adjustDateAction(new Date(dateValue.value))
  })

  const { data, error } = useAsyncData<Data[]>(`data_${adjustDate.value}_${limitValue.value}`, () => $fetch(`${apiUrl}/${category}?${typeName}=${adjustDate.value}&limit=${limitValue.value}`), {
    watch: [dateValue, limitValue]
  })

  return {
    limitValue,
    dateValue,
    startDate,
    endDate,
    data,
    error
  }
}