# Base de producción con Node.js
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Servidor estático con nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html