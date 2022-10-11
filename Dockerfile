FROM node:lts-alpine3.15
ENV NODE_VERSION 16.17.1

WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
# RUN npm ci --only=production
COPY . .
CMD ["npm","start"]
EXPOSE 3001

