FROM node:19-slim

WORKDIR /

COPY ./ /

RUN apt-get update && \
    apt-get install -y git && \
    apt-get clean

RUN npm install

EXPOSE 3000

CMD ["node", "src/server.js"]