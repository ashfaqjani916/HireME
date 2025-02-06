FROM node:20-alpine

WORKDIR /home/app

COPY package*.json . 

RUN npm install

EXPOSE 8080

COPY . .

CMD ["npm","run","dev"]

