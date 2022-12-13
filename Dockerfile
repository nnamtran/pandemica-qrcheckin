FROM node:alpine
COPY . /qrcheckin-server
WORKDIR /qrcheckin-server
CMD npm run start:checkin
EXPOSE 3003
