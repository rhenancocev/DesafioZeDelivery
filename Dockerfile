FROM node:latest

WORKDIR /node_api

COPY . .

RUN npm install

EXPOSE 8080

ENTRYPOINT ["node", "app.js"]