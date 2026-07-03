# TravelTrucks

Веб-застосунок для оренди кемперів: каталог із фільтрами, детальна сторінка транспорту з галереєю, відгуками та формою бронювання.

Проєкт реалізовано на **Next.js (App Router)** та **TypeScript** з використанням **TanStack Query** для роботи з API кемперів [campers-api.goit.study](https://campers-api.goit.study/docs).

🔗 **Демо:** https://project-travel-trucks-seven.vercel.app/

## Основні функції

- **Домашня сторінка (`/`)** — банер із основним закликом до дії.
- **Каталог кемперів (`/catalog`)**:
  - фільтрація за локацією, типом кузова, двигуном і трансмісією;
  - довантаження карток кемперів (пагінація через `useInfiniteQuery`);
  - стани завантаження та обробка помилок.
- **Сторінка кемпера (`/catalog/[camperId]`)**:
  - галерея зображень;
  - детальна інформація про транспорт (характеристики, зручності);
  - відгуки користувачів із рейтингом;
  - форма бронювання.

## Стек технологій

- [Next.js](https://nextjs.org/) 16 (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query/latest)
- CSS Modules
- [React Icons](https://react-icons.github.io/react-icons/)
- [Swiper](https://swiperjs.com/) — галерея зображень
- [React Hot Toast](https://react-hot-toast.com/) — сповіщення

## Встановлення та запуск

1. Клонуйте репозиторій і встановіть залежності:

   ```bash
   git clone git@github.com:Andross-s/project-TravelTrucks.git
   cd project-TravelTrucks
   npm install
   ```

2. Створіть файл `.env.local` у корені проєкту та вкажіть базову адресу API:

   ```
   NEXT_PUBLIC_API_BASE_URL=https://campers-api.goit.study
   ```

3. Запустіть застосунок у режимі розробки:

   ```bash
   npm run dev
   ```

   Застосунок буде доступний за адресою [http://localhost:3000](http://localhost:3000).

### Інші команди

| Команда         | Опис                                  |
| --------------- | ------------------------------------- |
| `npm run build` | Збірка production-версії застосунку   |
| `npm run start` | Запуск production-збірки              |
| `npm run lint`  | Перевірка коду лінтером (ESLint)      |

## Дизайн

Макет проєкту доступний у [Figma](https://www.figma.com/design/6RTcCBTbI1junoYu1itOy0/Campers--Copy-?node-id=48730-474&p=f&t=mqTeYCAX3s3t3AVn-0). Реалізовано десктопну версію інтерфейсу.

## Автор

**Andrij Skoropad** ([Andross-s](https://github.com/Andross-s))
