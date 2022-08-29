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
COPY . .
RUN npm ci --production
RUN npm run build
RUN npm install -g serve

CMD ["serve","-s", "build","-l", "3000"]