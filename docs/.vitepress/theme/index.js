import DefaultTheme from 'vitepress/theme'
import AdrMetadata from './component/AdrMetadata.vue'

// https://vitepress.dev/guide/extending-default-theme#registering-global-components
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('AdrMetadata', AdrMetadata)
    }
}