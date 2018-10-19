FROM node:10-alpine as angular

RUN apk add --update \
  python \
  make \
  g++

WORKDIR /usr/src/app

COPY angular/package.json ./

RUN npm cache verify && npm install

COPY ./angular .

RUN npm run build

# Stage 2
FROM nginx:1.13.12-alpine

COPY --from=node /usr/src/app/dist/angular /usr/share/nginx/html

COPY ./angular/nginx.conf /etc/nginx/conf.d/default.conf
