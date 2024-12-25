# Étape 1 : Construire l'application Angular
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Étape 2 : Servir l'application avec NGINX
FROM nginx:1.23-alpine
COPY --from=build /app/dist/nom-du-projet /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
