# Base Image
FROM node:10.15.0-alpine

# Create app folder
RUN mkdir -p /home/node/app
ENV HOME /home/node/app
WORKDIR $HOME

RUN mkdir $HOME/node_modules && \
  chown -R node:node $HOME

# Install dumb-init
RUN apk add dumb-init=1.2.1-r0

# Copy over package.json and package-lock.json to be able to install dependencies
COPY package*.json ./
RUN npm install --no-optional && \
  npm cache clean --force

COPY ./ ./

EXPOSE 3000

ENTRYPOINT ["/usr/bin/dumb-init", "--"] 

USER node

CMD ["npm", "run", "start"]
