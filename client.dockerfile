FROM nginx:alpine
COPY client/dist/ /usr/share/nginx/html/
EXPOSE 80