import path from 'path'
import fs from 'fs'
import { base } from '../.vitepress/config/base'

export default function getAdrList() {
    const adrDir = path.join(__dirname, '../pages/adr')
    const files = fs.readdirSync(adrDir)

    const adrList = files
        .filter(file => file.endsWith('.md') && file != 'index.md')
        .sort()
        .map(file => {
            const content = fs.readFileSync(path.join(adrDir, file), 'utf-8')
            const adrIdMatch = content.match(/adr-id:\s*["']?(\w+)["']?/)
            const titleMatch = content.match(/title:\s*["'](.+?)["']/)
            const statusMatch = content.match(/status:\s*["']?(\w+)["']?/)
            const tagsMatch = content.match(/tags:\s*\[(.*?)\]/)

            const adrId = adrIdMatch ? adrIdMatch[1] : null
            const title = titleMatch ? titleMatch[1] : null

            return {
                text: adrId ? adrId + "_" + title: title,
                link: `${base}pages/adr/${file.replace('.md', '')}`,
                adrId: adrId,
                title: title,
                status: statusMatch ? statusMatch[1] : null,
                tags: tagsMatch ? tagsMatch[1].split(',').map(tag => tag.trim().replace(/['"]/g, '')) : []
            }
        })

    return adrList
}