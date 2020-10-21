FROM node AS node
WORKDIR /tmp/
COPY client/ .
RUN npm i -g @angular/cli && \
ng build


FROM nginx:alpine
COPY --from=node /tmp/client/dist/ /usr/share/nginx/html/
EXPOSE 80