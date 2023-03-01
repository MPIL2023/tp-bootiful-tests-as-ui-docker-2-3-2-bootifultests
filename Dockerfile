# Base image
FROM node:14.17.6-alpine3.14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose port 4200 (default port for Angular applications)
EXPOSE 4200

# Start the application
CMD ["npm", "run", "serve"]
