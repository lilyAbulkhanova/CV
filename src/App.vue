<template>
  <CursorGlow />
  <LanguageSwitcher
    :aria-label="copy.languageSwitcherLabel"
    :current-lang="currentLang"
    :languages="languages"
    @change="setLanguage"
  />

  <div class="layout">
    <Sidebar
      :active-section="activeSection"
      :nav-label="copy.navLabel"
      :profile="profile"
      :sections="sections"
      :socials="socials"
      @navigate="scrollTo"
    />

    <main class="right-content">
      <AboutSection :copy="copy" :title="sectionLabels.about" />
      <ExperienceSection :jobs="jobs" :title="sectionLabels.experience" />
      <ProjectsSection :projects="projects" :title="sectionLabels.projects" />
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import AboutSection from './components/AboutSection.vue'
import CursorGlow from './components/CursorGlow.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Sidebar from './components/Sidebar.vue'
import { useActiveSection } from './composables/useActiveSection'
import {
  copyByLang,
  jobsByLang,
  languages,
  metaByLang,
  profileByLang,
  projectsByLang,
  sectionsByLang,
  socials,
} from './data/portfolio'

const currentLang = ref('ru')

const updateDocumentMeta = (lang) => {
  document.documentElement.lang = lang
  document.title = metaByLang[lang].title
  const description = document.querySelector('meta[name="description"]')
  description?.setAttribute('content', metaByLang[lang].description)
}

const setLanguage = (lang) => {
  currentLang.value = lang
  updateDocumentMeta(lang)
}

const sections = computed(() => sectionsByLang[currentLang.value])
const sectionLabels = computed(() =>
  sections.value.reduce((labels, section) => {
    labels[section.id] = section.label
    return labels
  }, {})
)
const profile = computed(() => profileByLang[currentLang.value])
const copy = computed(() => copyByLang[currentLang.value])
const jobs = computed(() => jobsByLang[currentLang.value])
const projects = computed(() => projectsByLang[currentLang.value])
const { activeSection, scrollTo } = useActiveSection(sections)

onMounted(() => {
  updateDocumentMeta(currentLang.value)
})
</script>

<style>
/* ─── Layout ─────────────────────────────────────── */
.top-actions {
  position: fixed;
  top: 20px;
  right: 24px;
  z-index: 120;
  display: flex;
  align-items: center;
  gap: 10px;
}

.language-switcher {
  display: flex;
  gap: 2px;
  padding: 3px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: rgba(15, 23, 42, 0.78);
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 32px rgba(2, 6, 23, 0.28);
}

.language-option {
  min-width: 40px;
  height: 34px;
  padding: 0 10px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  font: inherit;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  transition: background 0.2s, color 0.2s;
}

.language-option:hover,
.language-option.active {
  background: var(--accent-soft);
  color: var(--accent);
}

.language-option:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.layout {
  display: flex;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  gap: 0;
}

/* ─── Cursor glow ────────────────────────────────── */
.cursor-glow {
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
  transition: left 0.08s ease, top 0.08s ease;
}

/* ─── Left panel ─────────────────────────────────── */
.left-panel {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 380px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 96px 0;
  z-index: 10;
}

.left-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.name {
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 8px;
}

.title {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 16px;
  letter-spacing: 0.01em;
}

.tagline {
  font-size: 0.9rem;
  color: var(--text-secondary);
  max-width: 280px;
  line-height: 1.7;
}

/* ─── Nav ────────────────────────────────────────── */
.main-nav {
  margin-top: 56px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-primary);
}

.nav-line {
  display: block;
  height: 1px;
  background: var(--text-muted);
  width: 32px;
  transition: width 0.25s ease, background 0.2s;
}

.nav-link:hover .nav-line,
.nav-link.active .nav-line {
  width: 64px;
  background: var(--text-primary);
}

/* ─── Social icons ───────────────────────────────── */
.social-links {
  display: flex;
  gap: 16px;
  margin-top: auto;
  padding-top: 32px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  color: var(--text-muted);
  transition: color 0.2s, transform 0.2s;
}

.social-icon:hover {
  color: var(--text-primary);
  transform: translateY(-2px);
}

.social-icon svg {
  display: block;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* ─── Right content ──────────────────────────────── */
.right-content {
  flex: 1;
  padding: 96px 0 96px 80px;
  min-width: 0;
}

/* ─── Section ────────────────────────────────────── */
.section {
  margin-bottom: 128px;
  scroll-margin-top: 96px;
}

.section-header {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-primary);
  margin-bottom: 32px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.mobile-only { display: none; }

/* ─── About ──────────────────────────────────────── */
.about-text p {
  margin-bottom: 16px;
  line-height: 1.75;
  font-size: 0.95rem;
}

.about-text p:last-child { margin-bottom: 0; }

.inline-link {
  color: var(--accent);
  font-weight: 500;
  transition: opacity 0.15s;
  border-bottom: 1px solid transparent;
}

.inline-link:hover {
  border-color: var(--accent);
}

.inline-accent {
  color: var(--accent);
  font-weight: 500;
}

/* ─── Experience ─────────────────────────────────── */
.exp-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.exp-card {
  display: grid;
  grid-template-columns: minmax(150px, 170px) minmax(0, 1fr);
  gap: 24px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: background 0.2s, border-color 0.2s, opacity 0.2s;
  cursor: default;
}

.exp-card:hover {
  background: var(--bg-card);
  border-color: var(--border);
}

.exp-card.dimmed {
  opacity: 0.45;
}

.exp-period {
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.5;
  padding-top: 4px;
  overflow-wrap: normal;
  word-break: keep-all;
}

.exp-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.exp-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.15s;
}

.exp-link:hover {
  color: var(--accent);
}

.arrow-icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  transition: transform 0.2s;
}

.exp-link:hover .arrow-icon {
  transform: translate(2px, -2px);
}

.exp-desc {
  font-size: 0.88rem;
  line-height: 1.7;
  margin-bottom: 12px;
  color: var(--text-secondary);
}

.exp-desc-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
  color: var(--text-secondary);
}

.exp-desc-list li {
  position: relative;
  padding-left: 16px;
  font-size: 0.88rem;
  line-height: 1.65;
}

.exp-desc-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.72em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.75;
}

.exp-detail-groups {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 16px;
}

.exp-detail-group {
  padding-left: 16px;
  border-left: 1px solid var(--border);
}

.exp-detail-title {
  margin-bottom: 2px;
  color: var(--text-primary);
  font-size: 0.9rem;
  font-weight: 700;
}

.exp-detail-subtitle {
  margin-bottom: 10px;
  color: var(--text-muted);
  font-size: 0.78rem;
  line-height: 1.55;
}

.exp-desc-list.compact {
  gap: 7px;
  margin-bottom: 0;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 4px 12px;
  border-radius: 100px;
  letter-spacing: 0.04em;
}

/* ─── Projects ───────────────────────────────────── */
.proj-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.proj-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: background 0.2s, border-color 0.2s, opacity 0.2s;
  cursor: default;
}

.proj-card:hover {
  background: var(--bg-card);
  border-color: var(--border);
}

.proj-card.dimmed {
  opacity: 0.45;
}

.proj-image {
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  aspect-ratio: 1890 / 1320;
  background: #05060d;
  box-shadow: 0 20px 48px rgba(2, 6, 23, 0.32);
}

.proj-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.proj-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 18px;
}

.proj-desc {
  font-size: 0.88rem;
  line-height: 1.7;
  margin-bottom: 0;
  color: var(--text-secondary);
}

.project-copy {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 22px;
}

.project-copy-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-copy-section + .project-copy-section {
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.project-copy-title {
  color: var(--text-primary);
  font-size: 0.9rem;
  font-weight: 700;
}

.project-points {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 4px;
  color: var(--text-secondary);
}

.project-points li {
  position: relative;
  padding-left: 18px;
  font-size: 0.88rem;
  line-height: 1.65;
}

.project-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.72em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.75;
}

.proj-body > .tag-list {
  margin-top: 4px;
}

/* ─── Footer ─────────────────────────────────────── */
.site-footer {
  padding-top: 32px;
  border-top: 1px solid var(--border);
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* ─── Responsive ─────────────────────────────────── */
@media (max-width: 900px) {
  .layout {
    flex-direction: column;
    padding: 0 32px;
  }

  .left-panel {
    position: static;
    height: auto;
    width: 100%;
    padding: 112px 0 104px;
  }

  .left-inner {
    height: auto;
  }

  .name {
    font-size: 3rem;
    line-height: 1.05;
    margin-bottom: 16px;
  }

  .title {
    margin-bottom: 22px;
    color: var(--text-primary);
    font-size: 1.35rem;
  }

  .tagline {
    max-width: 420px;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  .main-nav { display: none; }

  .social-links {
    display: flex;
    gap: 22px;
    margin-top: 34px;
    padding-top: 0;
  }

  .social-icon {
    width: 30px;
    height: 30px;
  }

  .social-icon svg {
    width: 22px;
    height: 22px;
  }

  .right-content {
    padding: 0 0 72px;
  }

  .mobile-only { display: block; }

  .section {
    margin-bottom: 104px;
    scroll-margin-top: 32px;
  }

  .section-header {
    margin-bottom: 36px;
    padding-bottom: 0;
    border-bottom: 0;
    font-size: 0.82rem;
    letter-spacing: 0.16em;
  }

  .about-text p {
    margin-bottom: 24px;
    font-size: 1rem;
    line-height: 1.75;
  }

  .exp-card {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 0;
    border: 0;
    border-radius: 0;
  }

  .exp-card:hover {
    background: transparent;
    border-color: transparent;
  }

  .exp-list {
    gap: 72px;
  }

  .exp-period {
    padding-top: 0;
    font-size: 0.78rem;
    letter-spacing: 0.08em;
  }

  .exp-title {
    margin-bottom: 12px;
    font-size: 1.08rem;
    line-height: 1.45;
  }

  .exp-desc,
  .exp-desc-list li {
    font-size: 0.98rem;
    line-height: 1.7;
  }

  .exp-desc-list {
    gap: 12px;
    margin-bottom: 18px;
  }

  .exp-detail-groups {
    gap: 24px;
    margin-bottom: 20px;
  }

  .exp-detail-title {
    font-size: 0.98rem;
  }

  .exp-detail-subtitle {
    font-size: 0.86rem;
  }

  .tag-list {
    gap: 10px;
  }

  .tag {
    padding: 6px 14px;
    font-size: 0.78rem;
  }

  .proj-card {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
  }

  .proj-card:hover {
    background: transparent;
    border-color: transparent;
  }

  .proj-title {
    margin-bottom: 18px;
    font-size: 1.08rem;
    line-height: 1.45;
  }

  .proj-image {
    margin-bottom: 30px;
  }

  .project-copy {
    gap: 26px;
    margin-bottom: 24px;
  }

  .project-copy-title {
    font-size: 0.98rem;
  }

  .proj-desc,
  .project-points li {
    font-size: 0.98rem;
    line-height: 1.7;
  }
}

@media (max-width: 600px) {
  .top-actions {
    top: 16px;
    right: 16px;
    gap: 8px;
  }

  .language-option {
    min-width: 38px;
  }

  .layout {
    padding: 0 32px;
  }

  .cursor-glow {
    display: none;
  }

  .left-panel {
    padding: 104px 0 98px;
  }

  .name {
    font-size: 2.65rem;
  }

  .title {
    font-size: 1.24rem;
  }

  .tagline {
    max-width: 100%;
    font-size: 1.02rem;
  }

  .right-content {
    padding: 0 0 64px;
  }

  .section {
    margin-bottom: 96px;
  }

  .project-copy {
    gap: 22px;
    margin-bottom: 20px;
  }

  .project-copy-section + .project-copy-section {
    padding-top: 22px;
  }
}

@media (max-width: 420px) {
  .layout {
    padding: 0 24px;
  }

  .name {
    font-size: 2.35rem;
  }

  .title {
    font-size: 1.12rem;
  }

  .about-text p,
  .exp-desc,
  .exp-desc-list li,
  .proj-desc,
  .project-points li {
    font-size: 0.95rem;
  }
}
</style>
