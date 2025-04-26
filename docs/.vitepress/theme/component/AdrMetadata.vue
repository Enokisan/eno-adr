<template>
    <div class="adr-metadata">
        <div class="metadata-item" v-if="frontmatter.status">
            <span class="label">ステータス:</span>
            <span class="value">{{ frontmatter.status }} ({{ adrCreatedDate }})</span>
        </div>
        <div class="metadata-item" v-if="frontmatter.author">
            <span class="label">作成者:</span>
            <span class="value">{{ frontmatter.author }}</span>
        </div>
        <div class="metadata-item" v-if="frontmatter.tags && frontmatter.tags.length">
            <span class="label">タグ:</span>
            <span class="value">
                <span class="tag" v-for="tag in frontmatter.tags" :key="tag">{{ tag }}</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

const { frontmatter } = useData()
const adrCreatedDate = computed(() => {
    if (!frontmatter.value.date) return ''
    return new Date(frontmatter.value.date).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
})
</script>

<style scoped>
.adr-metadata {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background-color: var(--vp-c-bg-soft);
}

.metadata-item {
    margin: 0.5rem 0;
}

.label {
    font-weight: bold;
    margin-right: 0.5rem;
    color: var(--vp-c-text-2);
}

.tag {
    display: inline-block;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem;
    background-color: var(--vp-c-brand-soft);
    border-radius: 4px;
    font-size: 0.9em;
}
</style>