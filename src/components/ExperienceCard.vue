<template>
  <article
    class="exp-card"
    :class="{ dimmed }"
    @mouseenter="$emit('hover')"
    @mouseleave="$emit('leave')"
  >
    <div class="exp-period">{{ job.period }}</div>
    <div class="exp-body">
      <h3 class="exp-title">
        <div class="exp-link">
          {{ job.role }} · {{ job.company }}
        </div>
      </h3>

      <ul v-if="Array.isArray(job.desc)" class="exp-desc-list">
        <li v-for="item in job.desc" :key="item">{{ item }}</li>
      </ul>
      <p v-else class="exp-desc">{{ job.desc }}</p>

      <div v-if="job.details?.length" class="exp-detail-groups">
        <div v-for="detail in job.details" :key="detail.title" class="exp-detail-group">
          <h4 class="exp-detail-title">{{ detail.title }}</h4>
          <p class="exp-detail-subtitle">{{ detail.subtitle }}</p>
          <ul class="exp-desc-list compact">
            <li v-for="item in detail.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <ul class="tag-list">
        <li v-for="tech in job.tech" :key="tech" class="tag">{{ tech }}</li>
      </ul>
    </div>
  </article>
</template>

<script setup>
defineProps({
  dimmed: {
    type: Boolean,
    default: false,
  },
  job: {
    type: Object,
    required: true,
  },
})

defineEmits(['hover', 'leave'])
</script>
