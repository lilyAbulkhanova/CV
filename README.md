# 🚀 Portfolio — Vue 3

Портфолио-сайт в стиле [brittanychiang.com](https://brittanychiang.com), собранный на **Vue 3 + Vite**.

## Возможности

- 🌙 Тёмная тема с custom cursor glow
- 📱 Полностью адаптивный (desktop / tablet / mobile)
- ⚡ Sticky левая панель с активной навигацией
- 🎯 Плавная прокрутка + Intersection Observer
- 🍔 Мобильное меню с overlay
- 🏷️ Hover-подсветка карточек
- 🚀 GitHub Actions для автодеплоя

## Запуск локально

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Деплой на GitHub Pages

1. Создай репозиторий на GitHub (например `portfolio`)
2. Загрузи файлы:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/USERNAME/portfolio.git
   git push -u origin main
   ```
3. В настройках репозитория: **Settings → Pages → Source → GitHub Actions**
4. При следующем push сайт автоматически задеплоится

> Твой сайт будет доступен по адресу: `https://USERNAME.github.io/portfolio/`

## Кастомизация

Все данные находятся в `src/App.vue` в секции `<script setup>`:

- `socials` — ссылки на соцсети
- `jobs` — опыт работы
- `projects` — проекты
- Личная информация — в шаблоне (имя, должность, about)

Цветовая схема задана CSS-переменными в `src/style.css`.
