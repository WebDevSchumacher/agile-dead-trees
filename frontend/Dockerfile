FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/agile-dead-trees /usr/share/nginx/html
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
