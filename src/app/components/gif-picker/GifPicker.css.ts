import { style } from '@vanilla-extract/css';
import { color, config } from 'folds';

export const GifPickerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflow: 'hidden',
});

export const GifGrid = style({
  flex: 1,
  overflow: 'auto',
});

export const GridContent = style({
  padding: config.space.S300,
  display: 'flex',
  flexDirection: 'row',
  gap: config.space.S300,
  flex: 1,
});

export const GridColumn = style({
  flex: 1,
  display: 'grid',
  gap: config.space.S300,
  gridTemplateColumns: '1fr',
  gridAutoRows: 'min-content',
});

export const GifButton = style({
  padding: 0,
  border: 'none',
  borderRadius: config.radii.R300,
  overflow: 'hidden',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  transition: 'box-shadow ease-in-out 0.15s',

  ':hover': {
    boxShadow: `0 0 0 2px ${color.Primary.Main}`,
  },
});

export const GifImage = style({
  width: '100%',
  height: '100%',
  display: 'block',
  borderRadius: config.radii.R300,
  objectFit: 'cover',
  backgroundColor: color.Surface.ContainerLow,
});

export const LoadingContainer = style({
  width: '100%',
  height: '300px',
  display: 'flex',
});

export const ErrorContainer = style({
  width: '100%',
  height: '300px',
  display: 'flex',
  padding: config.space.S400,
  textAlign: 'center',
  color: color.Critical.Main,
});

export const EmptyContainer = style({
  width: '100%',
  height: '300px',
  display: 'flex',
  color: color.Surface.OnSurfaceVariant,
});

export const Footer = style({
  padding: `${config.space.S100} ${config.space.S200}`,
  borderTop: `1px solid ${color.Surface.ContainerLine}`,
  backgroundColor: color.Surface.ContainerLow,
});
