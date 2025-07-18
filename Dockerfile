# Use official Node.js base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy dependencies and lockfile
COPY package.json yarn.lock ./
#COPY .env .env #just a dummy change for loom video

# Install dependencies
RUN yarn install
RUN yarn global add @medusajs/medusa-cli

# Patch zod/v3 (optional but safe inside container)
COPY patch-zod.js ./
RUN node patch-zod.js

# Copy rest of the source code
COPY . .

# medusa's default port
EXPOSE 9000

# Run Medusa
CMD ["yarn", "medusa", "start"]
RUN echo "🌍 DATABASE_URL is $DATABASE_URL"
