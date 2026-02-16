import React from 'react';
import { Box, Text } from 'folds';

type GifIconProps = {
  filled?: boolean;
};

export function GifIcon({ filled }: GifIconProps) {
  return (
    <Box
      as="span"
      alignItems="Center"
      justifyContent="Center"
      style={{
        width: '1em',
        height: '1em',
        border: filled ? 'none' : '0.1em solid currentColor',
        backgroundColor: filled ? 'currentColor' : 'transparent',
        borderRadius: '0.15em',
        display: 'inline-flex',
      }}
    >
      <Text
        as="span"
        style={{
          fontSize: '0.5em',
          fontWeight: 700,
          color: filled ? 'var(--bg-surface-variant-container)' : 'currentColor',
          lineHeight: 1,
        }}
      >
        GIF
      </Text>
    </Box>
  );
}
