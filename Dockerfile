# First stage: Build
FROM node:lts AS build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .

RUN ls -a
RUN printenv
# Check if .env exists, if not rename the first file starting with .env-* to .env
RUN if [ ! -f ".env" ]; then \
    file=$(find . -name ".env*" | head -n 1); \
    if [ -n "$file" ]; then \
        mv "$file" .env; \
    fi \
;fi
RUN ls -a
RUN cat .env
RUN yarn build

# Second stage: Runtime
FROM node:lts AS runtime
WORKDIR /app

COPY --from=build /app /app

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
