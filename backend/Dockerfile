# Use an official Node runtime as a parent image
FROM node:16

# Set environment variables
ENV NODE_ENV=production

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json /app/

# Install any dependencies
RUN npm install

# Copy the rest of your app's source code from host to image filesystem.
COPY . /app/

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime. Here we will use node to run the app.js file.
CMD ["npm", "start"] 

