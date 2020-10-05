FROM node:12.18.3-alpine3.12

LABEL maintainer "jhoijune"

ENV DOCKERIZE_VERSION v0.6.1

# dockerize setting
RUN apk add --no-cache openssl
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Copy source code
COPY . /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install --production && npm audit fix

# Expose API port to the outside
EXPOSE 80

# Launch application
RUN mv docker-entrypoint.sh /  && chmod +x /docker-entrypoint.sh
ENTRYPOINT /docker-entrypoint.sh
