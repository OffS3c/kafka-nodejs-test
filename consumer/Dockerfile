FROM node:lts

RUN npm i -g npm

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4567

CMD [ "npm", "run", "start" ]
#CMD [ "npm", "run", "dev" ]
