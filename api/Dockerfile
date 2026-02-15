FROM node:20.12.2-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY server.js ./

EXPOSE 3001

CMD ["node", "server.js"]
