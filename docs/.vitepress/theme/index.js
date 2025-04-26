import DefaultTheme from 'vitepress/theme'
import AdrMetadata from './component/AdrMetadata.vue'
import AdrList from './component/AdrList.vue'
import Tag from './component/Tag.vue'

// https://vitepress.dev/guide/extending-default-theme#registering-global-components
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('AdrMetadata', AdrMetadata)
        app.component('AdrList', AdrList)
        app.component('Tag', Tag)
    }
}