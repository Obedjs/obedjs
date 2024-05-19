export const dockerfileTemplate = (projectName: string) => `
# Stage 1: Build the project
FROM node:14 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Stage 2: Create the final image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Install pm2 to run the application
RUN npm install pm2 -g

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["pm2-runtime", "dist/app.js"]
`;
