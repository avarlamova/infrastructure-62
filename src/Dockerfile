#FROM ubuntu:latest
#RUN mkdir /srv/example
#WORKDIR /srv/example
#COPY package.json ./
#RUN npm install
#ENV TAG_NAME = 'rc'
#process.env.TAG_NAME

FROM node:current-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","start"]