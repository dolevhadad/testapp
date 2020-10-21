#
FROM node:latest AS build
COPY . /tmp/client/
WORKDIR /tmp/client
RUN ls && pwd
RUN echo N | npm i -g @angular/cli && \
npm install && \
ls -l && \
ng build

#
FROM nginx:alpine
COPY --from=build /tmp/client/dist /usr/share/nginx/html
