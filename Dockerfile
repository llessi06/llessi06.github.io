FROM node:alpine3.19
WORKDIR /app
COPY package.json .
RUN npm install -g pnpm
RUN pnpm setup
RUN pnpm install
RUN pnpm i -g serve
COPY . .
RUN pnpm run build
EXPOSE 3000
CMD [ "serve", "-s", "dist" ]