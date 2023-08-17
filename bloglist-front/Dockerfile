FROM node:16 AS build-stage
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
COPY . .
RUN npm ci


RUN npm run build
FROM nginx:1.20-alpine
ENV REACT_APP_BACKEND_URL = http://localhost:3003/
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html