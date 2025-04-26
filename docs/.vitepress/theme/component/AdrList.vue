<template>
    <div class="adr-list">
        <div class="adr-item" v-for="adr in adrList" :key="adr.link">
            <div class="adr-content">
                <a :href="adr.link">{{ adr.text }}</a>
                <span class="status-badge" :class="adr.status" v-if="adr.status">
                    {{ adr.status }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

const { frontmatter } = useData()
const adrList = computed(() => frontmatter.value.adrs || [])
</script>

<style scoped>
.adr-list {
    margin: 2rem 0;
}

.adr-item {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid var(--vp-c-border);
    border-radius: 8px;
    transition: all 0.2s;
}

.adr-item:hover {
    border-color: var(--vp-c-brand);
    transform: translateX(4px);
}

.adr-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.adr-item a {
    text-decoration: none;
    color: var(--vp-c-text-1);
    font-weight: 500;
}

.adr-item a:hover {
    color: var(--vp-c-brand);
}

.status-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    white-space: nowrap;
}

.status-badge.accepted {
    background-color: var(--vp-c-green-soft);
    color: var(--vp-c-green-1);
}

.status-badge.proposed {
    background-color: var(--vp-c-yellow-soft);
    color: var(--vp-c-yellow-1);
}

.status-badge.rejected {
    background-color: var(--vp-c-red-soft);
    color: var(--vp-c-red-1);
}

.status-badge.deprecated {
    background-color: var(--vp-c-gray-soft);
    color: var(--vp-c-gray-1);
}
</style>