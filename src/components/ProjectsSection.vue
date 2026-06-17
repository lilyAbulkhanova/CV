<template>
  <section id="projects" class="section">
    <div class="section-header mobile-only">
      <span>{{ title }}</span>
    </div>
    <div class="proj-list">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
        :dimmed="Boolean(hoveredCard && hoveredCard !== project.title)"
        @hover="hoveredCard = project.title"
        @leave="hoveredCard = null"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'

defineProps({
  projects: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})

const hoveredCard = ref(null)
</script>
