<template>
  <div class="cursor-glow" :style="cursorStyle" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const cursorStyle = ref({ left: '-200px', top: '-200px' })

const onMouseMove = (event) => {
  cursorStyle.value = {
    left: event.clientX + 'px',
    top: event.clientY + 'px',
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})
</script>
