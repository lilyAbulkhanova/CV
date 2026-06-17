<template>
  <div class="top-actions">
    <div class="language-switcher" role="group" :aria-label="ariaLabel">
      <button
        v-for="language in languages"
        :key="language.code"
        class="language-option"
        :class="{ active: currentLang === language.code }"
        type="button"
        :aria-pressed="currentLang === language.code"
        @click="$emit('change', language.code)"
      >
        {{ language.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ariaLabel: {
    type: String,
    required: true,
  },
  currentLang: {
    type: String,
    required: true,
  },
  languages: {
    type: Array,
    required: true,
  },
})

defineEmits(['change'])
</script>
