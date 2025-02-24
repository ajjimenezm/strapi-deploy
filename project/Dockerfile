FROM node:18-bullseye
WORKDIR /app

RUN apt-get update && apt-get install -y python3 build-essential libvips

COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN npm install --omit=dev

COPY . . 
RUN npm run build

CMD ["npm", "start"]
