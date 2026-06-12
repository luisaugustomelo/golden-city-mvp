FROM node:18-alpine

RUN apk add --no-cache git python3 make g++

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev --legacy-peer-deps

COPY backend/ ./

EXPOSE 5001

CMD ["node", "app.js"]
