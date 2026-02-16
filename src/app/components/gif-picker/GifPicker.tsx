import React, { useState, useEffect, useCallback } from 'react';
import { Box, Input, Scroll, Spinner, Text, config } from 'folds';
import * as css from './GifPicker.css';

const API_URL = import.meta.env.VITE_BONFIRE_API_URL || 'http://localhost:3001';

type GifResult = {
  id: string;
  media_formats: {
    gif: {
      url: string;
      dims: [number, number];
      size: number;
    };
  };
  content_description: string;
};

type GifPickerProps = {
  onGifSelect: (url: string) => void;
  requestClose: () => void;
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export function GifPicker({ onGifSelect, requestClose }: GifPickerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [gifs, setGifs] = useState<GifResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGifs = useCallback(async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const endpoint = query ? `/gif/search?q=${encodeURIComponent(query)}&limit=20` : '/gif/trending?limit=20';
      const response = await fetch(`${API_URL}${endpoint}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch GIFs: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Klipy API response:', data);

      // Filter out GIFs that are too large (>10MB)
      const validGifs = (data.results || []).filter(
        (gif: GifResult) => gif.media_formats?.gif?.size <= MAX_FILE_SIZE
      );
      setGifs(validGifs);
    } catch (err) {
      console.error('Error fetching GIFs:', err);
      setError('Failed to load GIFs. Please try again.');
      setGifs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGifs('');
  }, [fetchGifs]);

  useEffect(() => {
    if (searchQuery) {
      const timeoutId = setTimeout(() => {
        fetchGifs(searchQuery);
      }, 500);

      return () => clearTimeout(timeoutId);
    } else {
      fetchGifs('');
    }
  }, [searchQuery, fetchGifs]);

  const handleGifClick = (gif: GifResult) => {
    const gifUrl = gif.media_formats?.gif?.url;

    if (!gifUrl) {
      console.error('No GIF URL found');
      return;
    }

    onGifSelect(gifUrl);
    requestClose();
  };

  return (
    <Box className={css.GifPickerContainer} direction="Column">
      <Box className={css.SearchBox} shrink="No">
        <Input
          className={css.SearchInput}
          variant="Background"
          size="600"
          radii="400"
          placeholder="Search for GIFs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
      </Box>

      <Scroll className={css.GifGrid} hideTrack visibility="Hover">
        {loading && (
          <Box className={css.LoadingContainer} alignItems="Center" justifyContent="Center">
            <Spinner variant="Secondary" size="600" />
          </Box>
        )}

        {error && (
          <Box className={css.ErrorContainer} alignItems="Center" justifyContent="Center">
            <Text size="T300">{error}</Text>
          </Box>
        )}

        {!loading && !error && gifs.length === 0 && (
          <Box className={css.EmptyContainer} alignItems="Center" justifyContent="Center">
            <Text size="T300">No GIFs found</Text>
          </Box>
        )}

        {!loading && !error && gifs.length > 0 && (
          <div className={css.GridContent}>
            <div className={css.GridColumn}>
              {gifs.map((gif, index) => {
                if (index % 2 !== 0) return null;

                const previewUrl = gif.media_formats?.gif?.url;
                if (!previewUrl) return null;

                return (
                  <button
                    key={`${gif.id}-${index}`}
                    type="button"
                    className={css.GifButton}
                    onClick={() => handleGifClick(gif)}
                    aria-label={gif.content_description}
                  >
                    <img
                      src={previewUrl}
                      alt={gif.content_description}
                      className={css.GifImage}
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>
            <div className={css.GridColumn}>
              {gifs.map((gif, index) => {
                if (index % 2 === 0) return null;

                const previewUrl = gif.media_formats?.gif?.url;
                if (!previewUrl) return null;

                return (
                  <button
                    key={`${gif.id}-${index}`}
                    type="button"
                    className={css.GifButton}
                    onClick={() => handleGifClick(gif)}
                    aria-label={gif.content_description}
                  >
                    <img
                      src={previewUrl}
                      alt={gif.content_description}
                      className={css.GifImage}
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </Scroll>

      <Box className={css.Footer} shrink="No" justifyContent="End">
        <Text size="T200" priority="300">Powered by Klipy</Text>
      </Box>
    </Box>
  );
}
