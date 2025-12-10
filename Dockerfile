# Use official Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose application port..
EXPOSE 9000

# Start the application
CMD ["npm", "start"]
