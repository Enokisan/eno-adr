import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export default function getAllTags() {
    const pageDir = path.join(__dirname, '../pages')
    const tags = new Set()

    const processDirectory = (dir) => {
        fs.readdirSync(dir).forEach(file => {
            const filePath = path.join(dir, file)
            const stat = fs.statSync(filePath)

            if (stat.isDirectory()) {
                processDirectory(filePath)
            } else if (file.endsWith('.md')) {
                const content = fs.readFileSync(filePath, 'utf-8')
                const { data } = matter(content)

                if (data.tags && Array.isArray(data.tags)) {
                    data.tags.forEach(tag => tags.add(tag))
                }
            }
        })
    }

    processDirectory(pageDir)
    return Array.from(tags).sort()
}