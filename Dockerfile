 FROM node:26-alpine

 WORKDIR /express-docker

 COPY package*.json .

 RUN npm install

 COPY . .

 EXPOSE 3000

 CMD ["npm", "start"]