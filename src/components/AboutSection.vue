<template>
  <section id="about" class="section">
    <div class="section-header mobile-only">
      <span>{{ title }}</span>
    </div>
    <div class="about-text">
      <p>{{ copy.aboutIntro }}</p>
      <p>
        {{ copy.aboutCurrent.before }}
        <span class="inline-accent">{{ copy.aboutCurrent.company }}</span>{{ copy.aboutCurrent.after }}
      </p>
      <p>{{ copy.aboutOutside }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  copy: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>
