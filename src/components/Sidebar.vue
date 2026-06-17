<template>
  <aside class="left-panel">
    <div class="left-inner">
      <header class="site-header">
        <h1 class="name">{{ profile.name }}</h1>
        <h2 class="title">{{ profile.title }}</h2>
        <p class="tagline">{{ profile.tagline }}</p>
      </header>

      <nav class="main-nav" :aria-label="navLabel">
        <ul>
          <li v-for="section in sections" :key="section.id">
            <a
              :href="`#${section.id}`"
              class="nav-link"
              :class="{ active: activeSection === section.id }"
              @click.prevent="$emit('navigate', section.id)"
            >
              <span class="nav-line" />
              <span class="nav-label">{{ section.label }}</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="social-links">
        <a
          v-for="link in socials"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          :aria-label="link.label"
          v-html="link.icon"
        />
      </div>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  activeSection: {
    type: String,
    required: true,
  },
  navLabel: {
    type: String,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
  },
  sections: {
    type: Array,
    required: true,
  },
  socials: {
    type: Array,
    required: true,
  },
})

defineEmits(['navigate'])
</script>
