FROM node:16
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN npm install -g npm
RUN npm install -g typescript
RUN npm install --omit=dev
RUN npm run build
COPY --from=0 /usr/build/src .
EXPOSE 3000
CMD ["npm", "start"]