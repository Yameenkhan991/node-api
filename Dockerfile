
FROM node:19-alpine

WORKDIR /app

copy package.json /app/

RUN npm install 

copy . .

ENV PORT=3000

EXPOSE 3000

CMD [ "node", "server.js"]
