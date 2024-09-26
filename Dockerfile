# First stage: Build
FROM node:lts AS build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN printenv
RUN yarn build

# Second stage: Runtime
FROM node:lts AS runtime
WORKDIR /app

COPY --from=build /app /app

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
