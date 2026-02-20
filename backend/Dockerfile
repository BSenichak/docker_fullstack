FROM oven/bun:1.1.10

WORKDIR /app

# Спочатку залежності (для кешування)
COPY package.json bun.lock ./
RUN bun install

# КОПІЮЄМО код (це важливо для першого запуску)
COPY . .

# Bun сам вміє стежити за змінами
CMD ["bun", "--watch", "index.ts"]