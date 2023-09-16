FROM node:18-alpine

WORKDIR /multiplication-api

COPY . .

RUN yarn

RUN yarn build

EXPOSE 5000

CMD ["yarn", "start:build"]
