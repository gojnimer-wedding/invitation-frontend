FROM node:lts AS runtime
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

COPY . .

RUN yarn build

EXPOSE 4321