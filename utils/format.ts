import { format } from 'date-fns'

export const dateAction = ((date: string) => {
  return format(new Date(date), 'yyyy/MM/dd')
})

export const adjustDateAction = ((date: Date) => {
  return format(new Date(date), 'yyyy-MM-dd')
})