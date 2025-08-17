# Use lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ../app/package.json .
RUN npm install

# Copy app source code
COPY ../app/src ./src

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
