FROM oven/bun:1.4.4
WORKDIR /app

COPY package.json bun.lock ./
COPY apps/api/package.json apps/api/
COPY packages/typescript-config packages/typescript-config
RUN bun install --frozen-lockfile --filter=api

COPY apps/api apps/api
WORKDIR /app/apps/api

EXPOSE 3001
CMD ["bun", "run", "dev"]
