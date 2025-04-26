import getAdrList from "./getAdrList"

export default async function transformPageData(pageData) {
    // すべてのADRページの場合、ADR一覧情報を載せる
    if (pageData.relativePath === 'pages/adr/index.md') {
        pageData.frontmatter.adrs = getAdrList()
    }

    return pageData
}