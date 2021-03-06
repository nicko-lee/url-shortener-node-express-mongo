# URL Shrinker

## A simple URL shortener built using:

- Node JS
- Express
- EJS
- Mongoose
- MongoDB

## Instructions to run

1. `git clone` repo
2. `npm install` to grab project dependencies
3. change start script in `package.json` - change "nodemon" to "node"
4. set DB environment variable locally by running the command `export MONGODB_URL=<YOUR MongoDB URL>`
5. `npm start`

## Instructions to run - using Docker

1. `git clone` repo
2. make a small change to the `src/index.js` file to alter `process.env.MONGODB_URL` to the raw string on your local machine. Note this is a workaround as I haven't been able to figure out how to pass a URL env variable using the `-e` flag of the `docker run` command. When I try doing it, it keeps complaining due to escaping characters...
3. from the project root dir run `docker build -t myprojects/url-shortener-mongo` - you can add whatever tag name you want.
4. now run `docker images` and you should be able to see the image you just built
5. now run `docker run -p 9080:8080 -d myprojects/url-shortener-mongo` - you can bind your port mappings to your local machine however you wish

## Screenshots

![App Screenshot #1](https://user-images.githubusercontent.com/37054216/90594236-4529e280-e22d-11ea-9734-2c81e082f133.png)

![App Screenshot #2](https://user-images.githubusercontent.com/37054216/90594237-4529e280-e22d-11ea-9fde-be649823350f.png)

![App Screenshot #3](https://user-images.githubusercontent.com/37054216/90594233-43601f00-e22d-11ea-8329-7b52c5b00832.png)
