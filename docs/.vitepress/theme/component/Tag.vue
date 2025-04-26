<template>
    <div class="tags-page">
        <div class="tags-list" v-if="tags.length">
            <button
                v-for="tag in tags"
                :key="tag"
                :class="{ active: selectedTag === tag }"
                @click="changeSelectedTag(tag)">{{ tag }}
            </button>
        </div>
        <div v-else class="loading">
            タグを読み込み中
        </div>
        <div class="filtered-adrs">
            <h2 v-if="selectedTag">{{ selectedTag }}に関連するADR</h2>
            <h2 v-else>すべてのADR</h2>
            <ul v-if="adrList.length">
                <li v-for="adr in filteredAdrs" :key="adr.link">
                    <a :href="adr.link">{{ adr.text }}</a>
                </li>
            </ul>
            <p v-else-if="tags.length && selectedTag">
                選択したタグに一致するADRが見つかりませんでした
            </p>
        </div>
    </div>
</template>

<script setup>
import { useData } from 'vitepress'
import { computed, ref } from 'vue';

const { frontmatter } = useData()
const selectedTag = ref('')

const adrList = computed(() => frontmatter.value.adrs || [])
const tags = computed(() => frontmatter.value.tags || [])

const filteredAdrs = computed(() => {
    if (!selectedTag.value) return adrList.value
    return adrList.value.filter(adr => {
        return adr.tags?.includes(selectedTag.value)
    })
})

function changeSelectedTag(tag) {
    selectedTag.value = tag === selectedTag.value ? '' : tag
}

</script>

<style scoped>
/* .tags-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
} */

.tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
}

.tags-list button {
    padding: 0.5rem 1rem;
    border: 1px solid var(--vp-c-border);
    border-radius: 4px;
    background: var(--vp-c-bg);
    cursor: pointer;
    transition: all 0.2s;
}

.tags-list button:hover {
    background: var(--vp-c-bg-soft);
}

.tags-list button.active {
    background: var(--vp-c-brand);
    color: white;
    border-color: var(--vp-c-brand);
}

.filtered-adrs {
    margin-top: 2rem;
}

.filtered-adrs ul {
    list-style: none;
    padding: 0;
}

.filtered-adrs li {
    margin: 0.5rem 0;
}

.loading {
    text-align: center;
    margin: 2rem 0;
    color: var(--vp-c-text-2);
}


</style>