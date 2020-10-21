FROM node AS node
WORKDIR /tmp/
COPY client/ .


FROM nginx:alpine
COPY --from=node /tmp/client/dist/ /usr/share/nginx/html/
EXPOSE 80