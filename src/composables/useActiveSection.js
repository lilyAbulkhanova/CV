import { onMounted, onUnmounted, ref } from 'vue'

export const useActiveSection = (sections) => {
  const activeSection = ref('about')
  let observer

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) activeSection.value = entry.target.id
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.value.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    activeSection,
    scrollTo,
  }
}
