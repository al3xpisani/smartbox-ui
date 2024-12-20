FROM node:18-alpine as builder
ENV BASE_URL localhost:8080
WORKDIR /usr/src/app
COPY ./package.json ./
RUN yarn install --prod
RUN yarn add webpack-cli
COPY . .
RUN yarn build:staging
FROM nginx:1.15
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
