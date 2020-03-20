FROM node:11-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "prod"]