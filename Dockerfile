FROM node:slim

WORKDIR /app

COPY package*.json ./

# RUN npm install
RUN npm ci --only=production

COPY . .

EXPOSE 80
ENV NODE_ENV=production
CMD [ "node", "server.js" ]
