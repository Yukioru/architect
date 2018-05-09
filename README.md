# Architect
Макетная архитектура проекта

### Пример структуры приложения
```
├── scripts                                     // Скрипты для работы с приложением
|  ├── config.js
|  ├── genTree.js
|  ├── modules.js
|  └── run.js
├── src
|  ├── ServerApp                                // Сервер приложение
|  |  ├── hooks
|  |  |  └── amazingHook.js
|  |  ├── middlewares
|  |  |  └── i18n.js
|  |  ├── server.js                             // Точка входа
|  |  └── services
|  |     └── offer
|  |        ├── index.js
|  |        ├── offer.model.js                  // Mongoose модель и схема
|  |        └── offer.router.js                 // API роуты
|  └── UniversalApp                             // Универсальное приложение
|     ├── shared                                // Универсальные объекты
|     |  ├── icons
|     |  ├── locales
|     |  ├── models                             // MobX модели
|     |  |  └── Offer.js
|     |  ├── pages                              // Страницы
|     |  |  ├── Activities
|     |  |  |  ├── Activities.jsx
|     |  |  |  └── index.js
|     |  |  ├── AdminDashboard
|     |  |  |  ├── AdminDashboard.jsx
|     |  |  |  └── index.js
|     |  |  ├── Auth
|     |  |  |  ├── Auth.jsx
|     |  |  |  └── index.js
|     |  |  ├── Feed
|     |  |  |  ├── Feed.jsx
|     |  |  |  └── index.js
|     |  |  ├── Landing
|     |  |  |  ├── index.js
|     |  |  |  └── Landing.jsx
|     |  |  ├── User
|     |  |  |  ├── index.js
|     |  |  |  └── User.jsx
|     |  |  ├── UserDashboard
|     |  |  |  ├── index.js
|     |  |  |  └── UserDashboard.jsx
|     |  |  └── Users
|     |  |     ├── index.js
|     |  |     └── Users.jsx
|     |  ├── routes                             // Роуты
|     |  |  ├── admin
|     |  |  |  ├── activities.js
|     |  |  |  ├── dashboard.js
|     |  |  |  ├── index.js
|     |  |  |  └── users.js
|     |  |  ├── cabinet
|     |  |  |  ├── dashboard.js
|     |  |  |  ├── feed.js
|     |  |  |  ├── index.js
|     |  |  |  └── user.js
|     |  |  ├── index.js
|     |  |  └── landing
|     |  |     ├── auth.js
|     |  |     └── index.js
|     |  ├── stores                             // MobX сторы
|     |  |  └── AppStore.js
|     |  ├── styles                             // Стили, глобальные, темы
|     |  |  ├── globals
|     |  |  |  ├── html.g.css
|     |  |  |  └── index.js
|     |  |  ├── index.js
|     |  |  ├── mixins
|     |  |  |  ├── index.js
|     |  |  |  └── transitions.js
|     |  |  ├── palette.js
|     |  |  └── theme.js                        // Тема emotion-theming
|     |  └── ui                                 // Компоненты UI
|     |     ├── atoms                           // Атомы (stateless примитивы)
|     |     ├── molecules                       // Молекулы (stateless компоненты из примитивов)
|     |     ├── organisms                       // Организмы (stateful компоненты)
|     |     └── templates                       // Шаблоны для страниц
|     |        ├── Auth
|     |        |  ├── Auth.jsx
|     |        |  ├── Auth.styles.js
|     |        |  └── index.js
|     |        ├── Error
|     |        |  ├── Error.jsx
|     |        |  ├── Error.styles.js
|     |        |  └── index.js
|     |        ├── Fuild
|     |        |  ├── Fuild.jsx
|     |        |  ├── Fuild.styles.js
|     |        |  └── index.js
|     |        └── Landing
|     |           ├── index.js
|     |           ├── Landing.jsx
|     |           └── Landing.styles.js
|     └── web                                   // Входные файлы для запуска приложения
|        ├── App.jsx
|        ├── client.js
|        └── server.js
├── utils                                       // Утилитарные скрипты 
|  ├── build-locales.sh
|  └── deploy.sh
├── README.md
├── webpack.config.js
├── package.json
└── yarn.lock
```