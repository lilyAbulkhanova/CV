import linguoBanner from '../img/linguo.png'

export const languages = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
]

export const metaByLang = {
  en: {
    title: 'Abulkhanova Lily',
    description: 'Portfolio - Frontend Engineer',
  },
  ru: {
    title: 'Абульханова Лилия',
    description: 'Портфолио - Frontend разработчик',
  },
}

export const sectionsByLang = {
  en: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ],
  ru: [
    { id: 'about', label: 'О себе' },
    { id: 'experience', label: 'Опыт' },
    { id: 'projects', label: 'Проекты' },
  ],
}

export const profileByLang = {
  en: {
    name: 'Abulkhanova Lily',
    title: 'Frontend Engineer',
    tagline: 'I build complex web interfaces for B2B products.',
  },
  ru: {
    name: 'Абульханова Лилия',
    title: 'Frontend разработчик',
    tagline: 'Создаю сложные веб-интерфейсы для B2B-продуктов.',
  },
}

export const copyByLang = {
  en: {
    navLabel: 'Sections',
    languageSwitcherLabel: 'Language switcher',
    aboutIntro:
      'Frontend developer with 4+ years of experience in complex B2B products. My area of responsibility is interfaces where architecture, data handling, resilient application state, and precise business-logic implementation matter.',
    aboutCurrent: {
      before: 'I currently work at ',
      company: 'TopSports',
      after:
        ', where I develop key frontend modules of the B2B portal: catalog, cart, checkout, preorders, documents, and user scenarios for different roles. I design solutions so complex product logic becomes a clear, stable, and scalable interface.',
    },
    aboutOutside:
      'Before TopSports, I helped launch two startups for the construction industry. The first was a real-time platform for operational analytics, employee productivity tracking, process bottleneck detection, and early business-risk signals. The second was a remote construction monitoring system that brought together project data, work stages, deadlines, and documentation in one interface.',
  },
  ru: {
    navLabel: 'Разделы',
    languageSwitcherLabel: 'Переключатель языка',
    aboutIntro:
      'Frontend-разработчик с 4+ годами опыта в сложных B2B-продуктах. Моя зона ответственности — интерфейсы, где важны архитектура, работа с данными, устойчивое состояние приложения и точная реализация бизнес-логики.',
    aboutCurrent: {
      before: 'В ',
      company: 'TopSports',
      after:
        ' развиваю ключевые frontend-модули B2B-портала: каталог, корзину, оформление заказов, предзаказы, документы и пользовательские сценарии для разных ролей. Проектирую решения так, чтобы сложная логика продукта превращалась в понятный, стабильный и масштабируемый интерфейс.',
    },
    aboutOutside:
      'До TopSports участвовала в запуске двух стартапов для строительной отрасли. Первый — real-time платформа для операционной аналитики, контроля производительности сотрудников, выявления узких мест в процессах и ранних бизнес-рисков. Второй — система дистанционного контроля строительства, объединяющая данные по объектам, этапам работ, срокам и документации в одном интерфейсе.',
  },
}

export const socials = [
  {
    label: 'GitHub',
    url: 'https://github.com/lilyAbulkhanova',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lily-abulkhanova-9b69b83a5/',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: 'Telegram',
    url: 'https://t.me/Lily_Abulkhanova',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
  },
  {
    label: 'Email',
    url: 'mailto:lily.abulkhanova@bk.ru',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>`,
  },
]

export const jobsByLang = {
  en: [
    {
      period: 'May 2024 — Present',
      role: 'Middle Frontend Developer',
      company: 'TopSports',
      url: '#',
      desc: [
        'Developing a large B2B platform for corporate clients: a custom CRM for managers, a client account for orders and purchases, and interaction flows between clients, managers, and internal services.',
        'Responsible for designing and implementing a new client-side architecture, decomposing functionality, and developing key user scenarios.',
        'Designed and implemented frontend integration with backend APIs, worked with complex business logic and user flows.',
        'Optimized performance of key sections, covered critical business logic with unit tests, handled small backend tasks in Go, participated in code reviews, and mentored an intern.',
      ],
      tech: ['Vue', 'Composition API', 'Pinia', 'Vue Router', 'JavaScript ES6+', 'TypeScript', 'Axios', 'REST API', 'SCSS/CSS', 'Vite', 'Docker', 'Git', 'Unit Tests'],
    },
    {
      period: 'Feb 2023 — May 2024',
      role: 'Junior Frontend Developer',
      company: 'Business Process Network',
      url: '#',
      desc: 'Worked on two enterprise platforms for construction monitoring and business-process analytics.',
      details: [
        {
          title: 'Stroykapp',
          subtitle: 'Digital monitoring and construction site management platform',
          items: [
            'Prepared the frontend codebase for migration to Vue 3: refactored legacy code, decomposed modules, and updated the approach to reusable components.',
            'Reworked key modules for managing tasks and subtasks in business processes, improving performance and user experience.',
            'Developed dynamic UI components and widgets for visualizing KPIs and construction site statuses.',
            'Participated in designing the client-side architecture, including module structure, application state, and API interaction.',
            'Wrote unit tests, refactored code, and participated in code reviews.',
          ],
        },
        {
          title: 'DragonSoft',
          subtitle: 'Business process analytics platform',
          items: [
            'Prepared the frontend application for migration to Vue 3: refactored existing modules and adapted the client-side architecture for further product development.',
            'Implemented KPI monitoring and analytics interfaces, improving transparency of business processes for managers and operations teams.',
            'Integrated the client side with REST API and WebSocket, enabling real-time updates for analytics, statuses, and notifications.',
            'Developed reusable components for analytics screens, tables, filters, and dashboards.',
            'Wrote unit tests, improved code quality, and participated in frontend refactoring.',
          ],
        },
      ],
      tech: ['Vue', 'Vue 3', 'JavaScript ES6+', 'TypeScript', 'REST API', 'SCSS/CSS', 'Unit Tests', 'Git'],
    },
  ],
  ru: [
    {
      period: 'Май 2024 — наст. время',
      role: 'Middle Frontend Developer',
      company: 'TopSports',
      url: '#',
      desc: [
        'Развитие крупной B2B-платформы для корпоративных клиентов: кастомная CRM для менеджеров, личный кабинет клиента для заказов и закупок, сценарии взаимодействия между клиентами, менеджерами и внутренними сервисами.',
        'Отвечала за проектирование и внедрение новой клиентской архитектуры, декомпозицию функциональности и развитие ключевых пользовательских сценариев.',
        'Проектировала и реализовывала интеграцию frontend с backend API, работала со сложной бизнес-логикой и пользовательскими сценариями.',
        'Оптимизировала производительность ключевых разделов, покрывала критичную бизнес-логику Unit-тестами, выполняла небольшие backend-задачи на Go, участвовала в code review и менторила стажера.',
      ],
      tech: ['Vue', 'Composition API', 'Pinia', 'Vue Router', 'JavaScript ES6+', 'TypeScript', 'Axios', 'REST API', 'SCSS/CSS', 'Vite', 'Docker', 'Git', 'Unit Tests'],
    },
    {
      period: 'Февраль 2023 — май 2024',
      role: 'Junior Frontend Developer',
      company: 'Business Process Network',
      url: '#',
      desc: 'Работала над двумя enterprise-платформами для цифрового мониторинга строительства и аналитики бизнес-процессов.',
      details: [
        {
          title: 'Stroykapp',
          subtitle: 'Платформа для цифрового мониторинга и управления строительными объектами',
          items: [
            'Подготовила кодовую базу frontend-приложения к миграции на Vue 3: провела рефакторинг legacy-кода, декомпозировала модули и обновила подход к переиспользуемым компонентам.',
            'Переработала ключевые модули управления задачами и подзадачами бизнес-процессов, улучшив производительность и удобство работы пользователей.',
            'Разработала динамические UI-компоненты и виджеты для визуализации KPI и статусов строительных объектов.',
            'Участвовала в проектировании архитектуры клиентской части, прорабатывала структуру модулей, состояние приложения и взаимодействие с API.',
            'Писала Unit-тесты, проводила рефакторинг и участвовала в code review.',
          ],
        },
        {
          title: 'DragonSoft',
          subtitle: 'Платформа для аналитики бизнес-процессов',
          items: [
            'Подготовила frontend-приложение к миграции на Vue 3: рефакторила существующие модули и адаптировала клиентскую архитектуру под дальнейшее развитие продукта.',
            'Реализовала интерфейсы мониторинга KPI и аналитических показателей, повысив прозрачность бизнес-процессов для руководителей и операционных команд.',
            'Интегрировала клиентскую часть с REST API и WebSocket, реализовав обновление аналитики, статусов и уведомлений в реальном времени.',
            'Разрабатывала переиспользуемые компоненты для аналитических экранов, таблиц, фильтров и дашбордов.',
            'Писала Unit-тесты, улучшала качество кода и участвовала в рефакторинге frontend-части.',
          ],
        },
      ],
      tech: ['Vue', 'Vue 3', 'JavaScript ES6+', 'TypeScript', 'REST API', 'SCSS/CSS', 'Unit Tests', 'Git'],
    },
  ],
}

export const projectsByLang = {
  en: [
    {
      title: 'SpeakMate English AI',
      url: '',
      image: linguoBanner,
      sections: [
        {
          title: 'Description',
          paragraphs: [
            'SpeakMate English AI is an AI-powered English learning app that adapts to the user’s learning style. It identifies how a person learns English more comfortably: through writing, translation, theory, reading, listening, speaking practice, or role-play dialogues.',
            'After diagnostics, the app creates a personal daily plan and offers practice with AI characters: a supportive teacher, a strict interviewer, a conversation partner, or an IELTS examiner.',
          ],
        },
        {
          title: 'Core Idea',
          paragraphs: [
            'People do not learn in the same way. One person learns better by translating from Russian to English, another by writing sentences, another by studying theory first, and someone else by reading texts or speaking aloud.',
            'SpeakMate English AI builds the learning experience around that difference. Instead of giving everyone the same course, the app adapts tasks to the user.',
          ],
          items: [
            'If translation is easier, it gives more translation practice.',
            'If writing is easier, it gives writing tasks.',
            'If theory is needed, it explains grammar briefly and clearly.',
            'If the user wants to speak, it enables roleplay with AI characters.',
            'If the goal is a job interview, it trains interview answers.',
            'If the goal is IELTS, it gives exam-format tasks.',
          ],
        },
      ],
      tech: ['Vue 3', 'TypeScript', 'Pinia', 'Vue Router', 'OpenAI API', 'SCSS/CSS'],
    },
  ],
  ru: [
    {
      title: 'SpeakMate English AI',
      url: '',
      image: linguoBanner,
      sections: [
        {
          title: 'Описание',
          paragraphs: [
            'SpeakMate English AI — это AI-приложение для изучения английского языка, которое подстраивается под стиль обучения пользователя. Приложение определяет, как человеку легче учить английский: через письмо, перевод, теорию, чтение, аудирование, разговорную практику или ролевые диалоги.',
            'После диагностики приложение создаёт персональный ежедневный план и предлагает тренировки с AI-персонажами: поддерживающим преподавателем, строгим интервьюером, разговорным партнёром или IELTS-экзаменатором.',
          ],
        },
        {
          title: 'Главная идея',
          paragraphs: [
            'Не все люди учатся одинаково. Одному легче переводить с русского на английский, другому — писать предложения, третьему — сначала изучать теорию, четвёртому — читать тексты или говорить вслух.',
            'SpeakMate English AI строит обучение вокруг этого. Приложение не даёт всем один и тот же курс, а адаптирует задания под пользователя.',
          ],
          items: [
            'Если человеку легче переводить — даёт больше translation practice.',
            'Если легче писать — даёт writing tasks.',
            'Если нужна теория — объясняет грамматику коротко и понятно.',
            'Если хочется говорить — включает roleplay с AI-персонажами.',
            'Если цель — собеседование — тренирует ответы на интервью.',
            'Если цель — IELTS — даёт задания в формате экзамена.',
          ],
        },
      ],
      tech: ['Vue 3', 'TypeScript', 'Pinia', 'Vue Router', 'OpenAI API', 'SCSS/CSS'],
    },
  ],
}
