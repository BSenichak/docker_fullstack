FROM oven/bun:1.1.10

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

COPY . .

CMD ["bun", "--watch", "index.ts"]