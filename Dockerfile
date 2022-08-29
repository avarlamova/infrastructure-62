FROM node:current-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci --production
RUN npm run build
RUN npm install -g serve

CMD ["serve","-s", "build","-l", "3000"]