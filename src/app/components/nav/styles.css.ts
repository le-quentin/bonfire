import { ComplexStyleRule, createVar, style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { ContainerColor, DefaultReset, Disabled, RadiiVariant, color, config, toRem } from 'folds';

export const NavCategory = style([
  DefaultReset,
  {
    position: 'relative',
  },
]);

export const NavCategoryHeader = style({
  gap: config.space.S100,
});

export const NavLink = style({
  color: 'inherit',
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  flexGrow: 1,
  ':hover': {
    textDecoration: 'unset',
  },
  ':focus': {
    outline: 'none',
  },
});

const Container = createVar();
const ContainerHover = createVar();
const ContainerActive = createVar();
const ContainerLine = createVar();
const OnContainer = createVar();

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  vars: {
    [Container]: color[variant].Container,
    [ContainerHover]: color[variant].ContainerHover,
    [ContainerActive]: color[variant].ContainerActive,
    [ContainerLine]: color[variant].ContainerLine,
    [OnContainer]: color[variant].OnContainer,
  },
});

const NavItemBase = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: '#949ba4',
  outline: 'none',
  minHeight: toRem(34),
  borderRadius: toRem(4),
  margin: `${toRem(1)} ${toRem(8)}`,
  padding: `${toRem(1)} ${toRem(8)}`,

  selectors: {
    '&:hover, &:focus-visible': {
      backgroundColor: '#35373c',
      color: '#dbdee1',
    },
    '&[data-hover=true]': {
      backgroundColor: '#35373c',
      color: '#dbdee1',
    },
    [`&:has(.${NavLink}:active)`]: {
      backgroundColor: '#404249',
      color: '#f2f3f5',
    },
    '&[aria-selected=true]': {
      backgroundColor: '#404249',
      color: '#f2f3f5',
    },
    [`&:has(.${NavLink}:focus-visible)`]: {
      outline: `${config.borderWidth.B600} solid ${ContainerLine}`,
      outlineOffset: `calc(-1 * ${config.borderWidth.B600})`,
    },
  },
  '@supports': {
    [`not selector(:has(.${NavLink}:focus-visible))`]: {
      ':focus-within': {
        outline: `${config.borderWidth.B600} solid ${ContainerLine}`,
        outlineOffset: `calc(-1 * ${config.borderWidth.B600})`,
      },
    },
  },
});
export const NavItem = recipe({
  base: [DefaultReset, NavItemBase, Disabled],
  variants: {
    variant: {
      Background: getVariant('Background'),
      Surface: getVariant('Surface'),
      SurfaceVariant: getVariant('SurfaceVariant'),
      Primary: getVariant('Primary'),
      Secondary: getVariant('Secondary'),
      Success: getVariant('Success'),
      Warning: getVariant('Warning'),
      Critical: getVariant('Critical'),
    },
    radii: RadiiVariant,
  },
  defaultVariants: {
    variant: 'Surface',
    radii: '400',
  },
});

export type RoomSelectorVariants = RecipeVariants<typeof NavItem>;
export const NavItemContent = style({
  paddingLeft: config.space.S100,
  paddingRight: config.space.S200,
  height: 'inherit',
  minWidth: 0,
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  fontWeight: config.fontWeight.W500,
  fontSize: toRem(16),

  selectors: {
    '&:hover': {
      textDecoration: 'unset',
    },
    [`.${NavItemBase}[data-highlight=true] &`]: {
      fontWeight: config.fontWeight.W600,
      color: '#ffffff',
    },
  },
});

export const NavItemOptions = style({
  paddingRight: config.space.S200,
});
