<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const title = (route.meta?.title as string) ?? route.name ?? 'Página'
</script>

<template>
    <div class="placeholder">
        <h2 class="placeholder-title">{{ title }}</h2>
        <p class="placeholder-text">Conteúdo em construção. Integração com API em breve.</p>
    </div>
</template>

<style scoped>
.placeholder {
    padding: 2rem 0;
    text-align: center;
}

.placeholder-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-heading);
    margin: 0 0 0.5rem;
}

.placeholder-text {
    font-size: 1rem;
    color: var(--color-text);
    opacity: 0.85;
    margin: 0;
}
</style>
