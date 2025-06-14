# Use an official Node.js runtime as the base image
FROM node:23-alpine AS base

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the container
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Development stage
FROM base AS development
# Expose the port the app runs on
EXPOSE 5173
# Command to run the application in development mode
CMD ["pnpm", "dev"]

# Production stage
FROM base AS production
# Build the application
RUN pnpm run build
# Expose the port the app runs on
EXPOSE 4173
# Command to run the application in production mode
CMD ["pnpm", "preview"]
