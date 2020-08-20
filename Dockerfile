# Instructions: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# This image comes with Node.js and NPM already installed
FROM node:12

# Create app directory to hold the application code inside the image, this will be the working directory for your app
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app/

RUN npm install

# Bundle app source. This copies from your local filesystem to your image
COPY . /app/

# Binds to port 8080. Use the EXPOSE instruction to have it mapped by the docker daemon
# Not sure if this is inside the container or on your machine? I think it is inside the container
EXPOSE 8080

# Define command to run app using CMD which defines your runtime
CMD [ "node", "src/index.js" ]