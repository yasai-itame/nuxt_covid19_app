// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ssr: trueとしないと「Hydration class mismatch on・・」のエラーが発生する 
    ssr: true
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})
