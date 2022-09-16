FROM node:16.15.1

WORKDIR /app

COPY package*.json ./

COPY tsconfig.build.json ./

COPY tsconfig.json ./

RUN npm install --location=global npm@8.19.2

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]