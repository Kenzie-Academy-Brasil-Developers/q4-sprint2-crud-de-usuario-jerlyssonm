FROM node:17

RUN apt-get update

ENV PORT=3000

EXPOSE 5432

WORKDIR /src

COPY [ "package.json", "yarn.lock"]

RUN yarn

COPY . .

USER node

CMD ["yarn", "dev"]