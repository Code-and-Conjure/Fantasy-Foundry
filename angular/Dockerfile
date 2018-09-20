FROM node:9-alpine as node

RUN apk add --update \
  python \
  make \
  g++

WORKDIR /usr/src/app

COPY package.json ./

RUN npm cache verify && npm install

COPY . .

RUN npm run prod-build

# Stage 2
FROM nginx:1.13.12-alpine

COPY --from=node /usr/src/app/dist/angular /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
