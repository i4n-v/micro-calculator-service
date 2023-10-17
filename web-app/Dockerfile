FROM node:16-alpine

WORKDIR /web-app

COPY . .

RUN yarn global add serve

EXPOSE 3000

RUN chmod +x ./env-inject.sh

ENTRYPOINT ["/bin/sh", "./env-inject.sh"]

CMD ["serve", "-s", "."]
