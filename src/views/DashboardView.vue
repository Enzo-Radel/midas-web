<script setup lang="ts">
// Conteúdo principal do dashboard (dados mock – integração com API depois)
const cards = [
    { title: 'Saldo atual', value: 'R$ 12.450,00', subtitle: 'Conta corrente' },
    { title: 'Investimentos', value: 'R$ 28.320,00', subtitle: '+2,3% este mês' },
    { title: 'Receitas do mês', value: 'R$ 8.500,00', subtitle: 'Meta: R$ 10.000' },
    { title: 'Despesas do mês', value: 'R$ 5.230,00', subtitle: '72% da previsão' },
]
</script>

<template>
    <div class="dashboard">
        <section class="dashboard-cards">
            <article v-for="(card, i) in cards" :key="i" class="card">
                <h3 class="card-title">{{ card.title }}</h3>
                <p class="card-value">{{ card.value }}</p>
                <p class="card-subtitle">{{ card.subtitle }}</p>
            </article>
        </section>
        <section class="dashboard-section">
            <h2 class="section-title">Resumo recente</h2>
            <p class="placeholder-text">Aqui serão exibidas as últimas transações e movimentações (integração com API).</p>
        </section>
    </div>
</template>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.dashboard-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
}

.card {
    background: var(--color-background-soft);
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    padding: 1.25rem;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.card:hover {
    border-color: var(--color-border-hover);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.card-title {
    font-size: 0.875rem;
    color: var(--color-text);
    opacity: 0.85;
    margin: 0 0 0.5rem;
    font-weight: 500;
}

.card-value {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-heading);
    margin: 0 0 0.25rem;
}

.card-subtitle {
    font-size: 0.8125rem;
    color: var(--color-text);
    opacity: 0.7;
    margin: 0;
}

.dashboard-section {
    background: var(--color-background-soft);
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    padding: 1.5rem;
}

.section-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-heading);
    margin: 0 0 0.75rem;
}

.placeholder-text {
    font-size: 0.9375rem;
    color: var(--color-text);
    opacity: 0.8;
    margin: 0;
}
</style>
