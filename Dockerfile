FROM node:16

WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
# RUN npm ci --only=production
COPY . .
CMD ["npm","start"]
EXPOSE 3001

