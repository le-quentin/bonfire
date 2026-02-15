import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;
const KLIPY_API_KEY = process.env.KLIPY_API_KEY;

if (!KLIPY_API_KEY) {
  console.error('ERROR: KLIPY_API_KEY environment variable is required');
  process.exit(1);
}

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'bonfire-api' });
});

app.get('/gif/search', async (req, res) => {
  try {
    const query = req.query.q;
    const limit = req.query.limit || 20;

    if (!query) {
      return res.status(400).json({ error: 'Missing query parameter "q"' });
    }

    const url = new URL('https://api.klipy.com/v2/search');
    url.searchParams.set('q', query);
    url.searchParams.set('key', KLIPY_API_KEY);
    url.searchParams.set('limit', limit);
    url.searchParams.set('media_filter', 'gif');

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Klipy API responded with status ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error proxying Klipy search:', error);
    res.status(500).json({ error: 'Failed to fetch GIFs from Klipy' });
  }
});

app.get('/gif/trending', async (req, res) => {
  try {
    const limit = req.query.limit || 20;

    const url = new URL('https://api.klipy.com/v2/featured');
    url.searchParams.set('key', KLIPY_API_KEY);
    url.searchParams.set('limit', limit);
    url.searchParams.set('media_filter', 'gif');

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Klipy API responded with status ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error proxying Klipy trending:', error);
    res.status(500).json({ error: 'Failed to fetch trending GIFs from Klipy' });
  }
});

app.listen(PORT, () => {
  console.log(`Bonfire API listening on port ${PORT}`);
  console.log(`Klipy API key configured: ${KLIPY_API_KEY.substring(0, 10)}...`);
});
