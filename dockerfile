FROM node:11.3.0-alpine

ENV PORT 3001

EXPOSE 3001

COPY package.json package.json
RUN npm install -g typescript
RUN npm install

COPY . .
RUN npm run build

CMD ["node", "dist/"]