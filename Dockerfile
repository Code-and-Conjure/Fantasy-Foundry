# Stage 1
FROM node:10-alpine as angular

RUN apk add --update \
  python \
  make \
  g++

WORKDIR /usr/src/app

COPY angular/package.json ./
COPY angular/package-lock.json ./

RUN npm ci
RUN npm rebuild node-sass

COPY ./angular .

RUN npm run prod-build

# Stage 2
FROM nginx:1.13.12-alpine as webhost

RUN rm -rf /usr/share/nginx/html/*

COPY --from=angular /usr/src/app/dist/angular /usr/share/nginx/html

COPY ./angular/nginx.conf /etc/nginx/conf.d/default.conf
