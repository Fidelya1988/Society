# 1. Використовуємо офіційний Node.js образ
FROM node:18-alpine

# 2. Встановлюємо робочу директорію
WORKDIR /app

# 3. Копіюємо package.json та package-lock.json
COPY package.json package-lock.json ./

# 4. Встановлюємо залежності
RUN npm install --production

# 5. Копіюємо весь код проєкту
COPY . .

# 6. Будуємо Next.js додаток
RUN npm run build

# 7. Вказуємо порт для контейнера
EXPOSE 3000

# 8. Запускаємо додаток
CMD ["npm", "start"]
