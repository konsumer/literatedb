
# test-runner docker image

FROM node:10
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm run build

COPY . .
CMD [ "./node_modules/.bin/jest" ]