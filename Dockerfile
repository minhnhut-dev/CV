# Sử dụng Node.js 18 image làm base image
FROM node:18-alpine

# Thiết lập thư mục làm việc
WORKDIR /minhnhut-portfolio

# Copy package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt dependencies
RUN npm install --force

# Copy toàn bộ source code vào thư mục làm việc
COPY . .

# Build ReactJS app
RUN npm run build


