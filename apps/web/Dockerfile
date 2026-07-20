FROM node:20-alpine AS base
ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
