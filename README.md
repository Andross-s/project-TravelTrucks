# TravelTrucks

[Українська](README.md) | [English](README.en.md)

Веб-застосунок для оренди кемперів: домашня сторінка, каталог із фільтрами, детальна сторінка транспорту з галереєю, відгуками та формою бронювання.

Проєкт реалізовано на **Next.js App Router** та **TypeScript** з використанням **TanStack Query** для роботи з API кемперів [campers-api.goit.study](https://campers-api.goit.study/docs).

**Демо:** https://project-travel-trucks-seven.vercel.app/

## Скріншоти

![TravelTrucks home page](public/screenshots/travel-trucks.jpg)

![TravelTrucks catalog page](public/screenshots/travel-trucks-2.jpg)

![TravelTrucks camper details page](public/screenshots/travel-trucks-3.jpg)

## Основні функції

- **Домашня сторінка (`/`)** - hero banner із основним закликом до дії та переходом у каталог.
- **Каталог кемперів (`/catalog`)**:
  - фільтрація за локацією, типом кузова, двигуном і трансмісією;
  - отримання доступних опцій фільтрів з API;
  - довантаження карток кемперів через `useInfiniteQuery`;
  - кнопка `Load more` для пагінації;
  - очищення активних фільтрів;
  - стани завантаження, overlay під час refetch, no-results state та обробка помилок.
- **Картка кемпера**:
  - фото, назва, ціна, рейтинг, кількість відгуків і локація;
  - короткий опис;
  - бейджі характеристик: двигун, трансмісія, тип кузова;
  - перехід на сторінку деталей.
- **Сторінка кемпера (`/catalog/[camperId]`)**:
  - Swiper-галерея з головним зображенням і thumbnail-навігацією;
  - детальна інформація про транспорт;
  - список зручностей і технічних характеристик;
  - відгуки користувачів із рейтингом;
  - форма бронювання з валідацією і toast-сповіщеннями.

## Стек технологій

- [Next.js](https://nextjs.org/) 16, App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query/latest)
- CSS Modules
- [Swiper](https://swiperjs.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/)
- ESLint

## Технічні рішення

- API-логіка винесена в `src/services`: базовий `apiFetch`, обробка query params, `ApiError` і окремі функції для campers, reviews, filters та booking requests.
- Базова адреса API задається через `NEXT_PUBLIC_API_BASE_URL`, тому застосунок не прив'язаний до hardcoded endpoint.
- Для каталогу використано `useInfiniteQuery`, що дає контроль над сторінками, кешем, refetch і довантаженням результатів.
- Фільтри зберігаються в стані сторінки каталогу та стають частиною `queryKey`, тому TanStack Query автоматично синхронізує кеш із поточним набором фільтрів.
- Детальна сторінка розділена на незалежні компоненти: `CamperGallery`, `VehicleDetails`, `CamperReviews`, `BookingForm`.
- Галерея реалізована через Swiper із синхронізацією активного thumbnail та основного слайда.
- Booking form має client-side validation для імені та email, ARIA-атрибути для помилок і mutation-запит на створення booking request.
- UI-стани винесені в окремі компоненти: `Spinner`, `LoadingOverlay`, `NoResults`, `LoadMoreButton`.
- Для стилізації використано CSS Modules, щоб ізолювати стилі компонентів і уникнути конфліктів класів.

## Складнощі та результат

Основна складність полягала в роботі з асинхронними даними: каталог має реагувати на фільтри, підтримувати пагінацію, показувати проміжні стани завантаження й коректно обробляти помилки API.

Окремої уваги потребувала сторінка деталей кемпера: потрібно було поєднати галерею, характеристики, reviews і форму бронювання так, щоб кожен блок мав власну логіку, але сторінка залишалась цілісною та зручною для користувача.

У результаті створено production-ready застосунок для пошуку й бронювання кемперів із фільтрацією, довантаженням каталогу, детальними сторінками, відгуками, booking flow та деплоєм на Vercel.

## Структура проєкту

```text
src/
  app/          # App Router pages and layouts
  components/   # Reusable UI components
  hooks/        # TanStack Query hooks
  providers/    # QueryProvider and app-level providers
  services/     # API client and API functions
  types/        # TypeScript domain types
  utils/        # Label formatting and amenity icon helpers
public/
  campersImage/ # Static icons and images
  screenshots/  # README screenshots
```

## Встановлення та запуск

1. Клонуйте репозиторій і встановіть залежності:

   ```bash
   git clone git@github.com:Andross-s/project-TravelTrucks.git
   cd project-TravelTrucks
   npm install
   ```

2. Створіть файл `.env.local` у корені проєкту та вкажіть базову адресу API:

   ```env
   NEXT_PUBLIC_API_BASE_URL=https://campers-api.goit.study
   ```

3. Запустіть застосунок у режимі розробки:

   ```bash
   npm run dev
   ```

   Застосунок буде доступний за адресою [http://localhost:3000](http://localhost:3000).

## Доступні команди

| Команда         | Опис                                |
| --------------- | ----------------------------------- |
| `npm run dev`   | Запуск development server           |
| `npm run build` | Збірка production-версії застосунку |
| `npm run start` | Запуск production-збірки            |
| `npm run lint`  | Перевірка коду лінтером ESLint      |

## Дизайн

Макет проєкту доступний у [Figma](https://www.figma.com/design/6RTcCBTbI1junoYu1itOy0/Campers--Copy-?node-id=48730-474&p=f&t=mqTeYCAX3s3t3AVn-0). Реалізовано десктопну версію інтерфейсу.

## Автор

**Andrij Skoropad** ([Andross-s](https://github.com/Andross-s))
