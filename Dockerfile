FROM nodejs:12.15.0-slim

RUN mkdir -p /usr/src/
WORKDIR /usr/src/
COPY . /usr/src/

RUN npm install .

EXPOSE 5000

CMD ["npm", "start"]