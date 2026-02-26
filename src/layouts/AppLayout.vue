<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

// Mock: opções do menu lateral (será substituído por dados da API)
const sidebarItems = [
  { path: '/', name: 'Dashboard', icon: 'gauge' },
  { path: '/transacoes', name: 'Transações', icon: 'right-left' },
  { path: '/carteira', name: 'Carteira', icon: 'wallet' },
  { path: '/investimentos', name: 'Investimentos', icon: 'chart-line' },
  { path: '/metas', name: 'Metas', icon: 'bullseye' },
  { path: '/relatorios', name: 'Relatórios', icon: 'chart-column' },
  { path: '/configuracoes', name: 'Configurações', icon: 'gear' },
]

// Mock: usuário no header (será substituído por dados da API)
const user = {
  name: 'Usuário Demo',
  email: 'usuario@midas.app',
  avatar: null,
}

// Mock: indicador de notificações não lidas (será substituído por dados da API)
const hasUnreadNotifications = true
</script>

<template>
  <div class="app-layout">
    <aside class="sidebar">
      <div class="sidebar-panel">
        <div class="sidebar-brand">
          <span class="brand-icon">M</span>
          <span class="brand-name">Midas</span>
        </div>
        <nav class="sidebar-nav">
          <RouterLink v-for="item in sidebarItems" :key="item.path" :to="item.path" class="sidebar-link"
            :class="{ active: route.path === item.path }">
            <FontAwesomeIcon :icon="['fas', item.icon]" class="sidebar-link-icon" />
            <span class="sidebar-link-label">{{ item.name }}</span>
          </RouterLink>
        </nav>
        <div class="sidebar-footer">
          <span class="sidebar-version">v0.1.0</span>
        </div>
      </div>
    </aside>

    <div class="main-wrapper">
      <header class="header">
        <div class="header-left">
          <h1 class="header-title">{{ route.meta?.title ?? 'Dashboard' }}</h1>
        </div>
        <div class="header-right">
          <button type="button" class="header-btn" title="Notificações" aria-label="Notificações">
            <FontAwesomeIcon icon="bell" class="header-btn-icon" />
            <span v-if="hasUnreadNotifications" class="header-badge" aria-hidden="true" />
          </button>
          <div class="header-user">
            <div class="header-avatar">
              {{ user.name.charAt(0).toUpperCase() }}
            </div>
            <div class="header-user-info">
              <span class="header-user-name">{{ user.name }}</span>
              <span class="header-user-email">{{ user.email }}</span>
            </div>
          </div>
        </div>
      </header>

      <main class="main-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background: var(--color-background);
}

/* Primeira camada: apenas define o espaço da sidebar na tela */
.sidebar {
  width: var(--sidebar-width, 260px);
  min-width: var(--sidebar-width, 260px);
  padding: var(--sidebar-gap, 12px);
  display: flex;
  flex-direction: column;
}

/* Segunda camada: bloco flutuante com bordas arredondadas e conteúdo */
.sidebar-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: var(--sidebar-bg, var(--vt-c-black-soft));
  color: var(--sidebar-text, var(--vt-c-white));
  border-radius: var(--sidebar-panel-radius, 1rem);
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.brand-icon {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.sidebar-nav {
  flex: 1;
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.sidebar-link:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--sidebar-text);
}

.sidebar-link.active {
  background: rgba(56, 118, 242, 0.2);
  color: var(--color-accent);
}

.sidebar-link-icon {
  width: 1.125rem;
  font-size: 1.125rem;
  opacity: 0.9;
}

.sidebar-link-label {
  font-size: 0.9375rem;
}

.sidebar-footer {
  padding: 1rem 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.sidebar-version {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
}

.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.header {
  height: var(--header-height, 64px);
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}

.header-left {
  flex: 1;
}

.header-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-btn {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: none;
  background: var(--color-background-mute);
  color: var(--color-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: background 0.2s;
}

.header-btn:hover {
  background: var(--color-border-hover);
}

.header-btn-icon {
  font-size: 1.25rem;
}

.header-badge {
  position: absolute;
  top: 0.375rem;
  right: 0.375rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--color-accent);
}

.header-user {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
}

.header-avatar {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
}

.header-user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header-user-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-heading);
}

.header-user-email {
  font-size: 0.75rem;
  color: var(--color-text);
  opacity: 0.8;
}

.main-content {
  flex: 1;
  padding: 1.5rem;
  overflow: auto;
}

@media (max-width: 768px) {
  .sidebar {
    width: 72px;
    min-width: 72px;
    padding: 8px;
  }

  .sidebar-panel {
    border-radius: 0.75rem;
  }

  .brand-name,
  .sidebar-link-label,
  .sidebar-footer,
  .header-user-info {
    display: none;
  }

  .sidebar-brand {
    justify-content: center;
    padding: 1rem;
  }

  .sidebar-link {
    justify-content: center;
    padding: 0.875rem;
  }

  .header-user {
    padding: 0.25rem;
  }
}
</style>
