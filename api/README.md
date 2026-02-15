# Bonfire API

Simple proxy server for Bonfire features that require server-side API keys.

## Features

- **GIF Search**: Proxies requests to Klipy API for GIF search functionality
- **Trending GIFs**: Fetches trending GIFs from Klipy

## About Klipy

Klipy is a GIF search API created by ex-Tenor employees after Tenor shut down in 2026. It's a drop-in replacement with the same API structure, making it easy to migrate from Tenor.

## Setup

### 1. Get a Klipy API Key

1. Go to [Klipy Developers](https://klipy.com/developers)
2. Sign up for an account
3. Create an API key

### 2. Configure Environment

Create a `.env` file in the project root:

```bash
KLIPY_API_KEY=your_api_key_here
```

### 3. Run Locally

```bash
cd api
npm install
npm start
```

The API will be available at `http://localhost:3001`

### 4. Run with Docker Compose

From the project root:

```bash
docker-compose up
```

This will start both the Bonfire client and API.

## API Endpoints

### GET /health

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "service": "bonfire-api"
}
```

### GET /gif/search

Search for GIFs.

**Query Parameters:**
- `q` (required): Search query
- `limit` (optional): Number of results (default: 20)

**Example:**
```
GET /gif/search?q=excited&limit=10
```

### GET /gif/trending

Get trending GIFs.

**Query Parameters:**
- `limit` (optional): Number of results (default: 20)

**Example:**
```
GET /gif/trending?limit=20
```

## Development

The server uses Node.js native `--watch` flag for auto-reload during development:

```bash
npm run dev
```
