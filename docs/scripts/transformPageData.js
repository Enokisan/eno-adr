import getAdrList from "./getAdrList"
import getAllTags from "./getTags"

export default async function transformPageData(pageData) {

    if (pageData.relativePath === 'pages/adr/index.md') {
        // すべてのADRページの場合
        pageData.frontmatter.adrs = getAdrList()
    } else if (pageData.relativePath === 'pages/tag.md') {
        // タグでさがすページの場合
        pageData.frontmatter.adrs = getAdrList()
        pageData.frontmatter.tags = getAllTags()
    }

    return pageData
}