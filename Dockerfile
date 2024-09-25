FROM node:18-slim

WORKDIR /app

COPY package*.json .

RUN yarn install --frozen-lockfile

CMD ["yarn", "start"]