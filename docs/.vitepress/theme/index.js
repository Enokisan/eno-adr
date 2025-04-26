import DefaultTheme from 'vitepress/theme'
import AdrMetadata from './component/AdrMetadata.vue'
import AdrList from './component/AdrList.vue'

// https://vitepress.dev/guide/extending-default-theme#registering-global-components
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('AdrMetadata', AdrMetadata)
        app.component('AdrList', AdrList)
    }
}