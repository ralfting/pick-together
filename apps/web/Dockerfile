FROM oven/bun:1.4.4
WORKDIR /app

COPY package.json bun.lock ./
COPY apps/web/package.json apps/web/
COPY packages/typescript-config packages/typescript-config
COPY packages/eslint-config packages/eslint-config
RUN bun install --frozen-lockfile --filter=web

COPY apps/web apps/web
WORKDIR /app/apps/web

EXPOSE 3000
CMD ["bun", "run", "dev"]
