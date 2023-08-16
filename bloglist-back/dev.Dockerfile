FROM node:16

WORKDIR /usr/src/app

COPY . .

#install eikä ci koska dev
RUN npm install

ENV DOCKER_ENV = TRUE
CMD ["npm","run", "dev"]