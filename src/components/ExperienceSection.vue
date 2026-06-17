<template>
  <section id="experience" class="section">
    <div class="section-header mobile-only">
      <span>{{ title }}</span>
    </div>
    <div class="exp-list">
      <ExperienceCard
        v-for="job in jobs"
        :key="job.company"
        :job="job"
        :dimmed="Boolean(hoveredCard && hoveredCard !== job.company)"
        @hover="hoveredCard = job.company"
        @leave="hoveredCard = null"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ExperienceCard from './ExperienceCard.vue'

defineProps({
  jobs: {
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
