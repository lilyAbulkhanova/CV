<template>
  <article
    class="proj-card"
    :class="{ dimmed }"
    @mouseenter="$emit('hover')"
    @mouseleave="$emit('leave')"
  >
    <div class="proj-body">
      <h3 class="proj-title">
        <span>{{ project.title }}</span>
      </h3>

      <div class="proj-image" v-if="project.image">
        <img :src="project.image" :alt="project.title" loading="lazy" />
      </div>

      <div class="project-copy">
        <section v-for="section in project.sections" :key="section.title" class="project-copy-section">
          <h4 class="project-copy-title">{{ section.title }}</h4>
          <p v-for="paragraph in section.paragraphs" :key="paragraph" class="proj-desc">
            {{ paragraph }}
          </p>
          <ul v-if="section.items?.length" class="project-points">
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>

      <ul class="tag-list">
        <li v-for="tech in project.tech" :key="tech" class="tag">{{ tech }}</li>
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
  project: {
    type: Object,
    required: true,
  },
})

defineEmits(['hover', 'leave'])
</script>
