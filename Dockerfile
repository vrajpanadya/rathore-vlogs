# FROM node:20-bookworm-slim

# WORKDIR /app

# RUN apt-get update \
#     && apt-get install -y --no-install-recommends \
#        ca-certificates \
#        curl \
#     && rm -rf /var/lib/apt/lists/*

# COPY package*.json ./

# RUN npm install

# RUN npx playwright install --with-deps chromium

# RUN curl -L \
#     "https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp" \
#     -o /usr/local/bin/yt-dlp \
#     && chmod +x /usr/local/bin/yt-dlp

# COPY . .

# ENV NODE_ENV=production
# ENV YTDLP_PATH=/usr/local/bin/yt-dlp

# EXPOSE 4000

# CMD ["node", "server/index.js"]
FROM node:20-bookworm-slim

WORKDIR /app

# Basic packages
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       ca-certificates \
       curl \
       python3 \
    && rm -rf /var/lib/apt/lists/*

# Install Node dependencies
COPY package*.json ./

RUN npm install

# Install Chromium + required Linux dependencies
RUN npx playwright install --with-deps chromium

# Install yt-dlp for Linux
RUN curl -L \
    "https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp" \
    -o /usr/local/bin/yt-dlp \
    && chmod +x /usr/local/bin/yt-dlp

# Copy project
COPY . .

ENV NODE_ENV=production
ENV YTDLP_PATH=/usr/local/bin/yt-dlp

EXPOSE 4000

CMD ["node", "server/index.js"]