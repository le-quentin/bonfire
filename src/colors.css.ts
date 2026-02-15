import { createTheme } from '@vanilla-extract/css';
import { color } from 'folds';

export const silverTheme = createTheme(color, {
  Background: {
    Container: '#DEDEDE',
    ContainerHover: '#D3D3D3',
    ContainerActive: '#C7C7C7',
    ContainerLine: '#BBBBBB',
    OnContainer: '#000000',
  },

  Surface: {
    Container: '#EAEAEA',
    ContainerHover: '#DEDEDE',
    ContainerActive: '#D3D3D3',
    ContainerLine: '#C7C7C7',
    OnContainer: '#000000',
  },

  SurfaceVariant: {
    Container: '#DEDEDE',
    ContainerHover: '#D3D3D3',
    ContainerActive: '#C7C7C7',
    ContainerLine: '#BBBBBB',
    OnContainer: '#000000',
  },

  Primary: {
    Main: '#1245A8',
    MainHover: '#103E97',
    MainActive: '#0F3B8F',
    MainLine: '#0E3786',
    OnMain: '#FFFFFF',
    Container: '#C4D0E9',
    ContainerHover: '#B8C7E5',
    ContainerActive: '#ACBEE1',
    ContainerLine: '#A0B5DC',
    OnContainer: '#0D3076',
  },

  Secondary: {
    Main: '#000000',
    MainHover: '#171717',
    MainActive: '#232323',
    MainLine: '#2F2F2F',
    OnMain: '#EAEAEA',
    Container: '#C7C7C7',
    ContainerHover: '#BBBBBB',
    ContainerActive: '#AFAFAF',
    ContainerLine: '#A4A4A4',
    OnContainer: '#0C0C0C',
  },

  Success: {
    Main: '#017343',
    MainHover: '#01683C',
    MainActive: '#016239',
    MainLine: '#015C36',
    OnMain: '#FFFFFF',
    Container: '#BFDCD0',
    ContainerHover: '#B3D5C7',
    ContainerActive: '#A6CEBD',
    ContainerLine: '#99C7B4',
    OnContainer: '#01512F',
  },

  Warning: {
    Main: '#864300',
    MainHover: '#793C00',
    MainActive: '#723900',
    MainLine: '#6B3600',
    OnMain: '#FFFFFF',
    Container: '#E1D0BF',
    ContainerHover: '#DBC7B2',
    ContainerActive: '#D5BDA6',
    ContainerLine: '#CFB499',
    OnContainer: '#5E2F00',
  },

  Critical: {
    Main: '#9D0F0F',
    MainHover: '#8D0E0E',
    MainActive: '#850D0D',
    MainLine: '#7E0C0C',
    OnMain: '#FFFFFF',
    Container: '#E7C3C3',
    ContainerHover: '#E2B7B7',
    ContainerActive: '#DDABAB',
    ContainerLine: '#D89F9F',
    OnContainer: '#6E0B0B',
  },

  Other: {
    FocusRing: 'rgba(0 0 0 / 50%)',
    Shadow: 'rgba(0 0 0 / 20%)',
    Overlay: 'rgba(0 0 0 / 50%)',
  },
});

const discordSharedColors = {
  Primary: {
    Main: '#5865F2',
    MainHover: '#4752C4',
    MainActive: '#3c45a5',
    MainLine: '#4752C4',
    OnMain: '#ffffff',
    Container: '#4752C4',
    ContainerHover: '#3c45a5',
    ContainerActive: '#343b8f',
    ContainerLine: '#2e3482',
    OnContainer: '#dee0fc',
  },

  Secondary: {
    Main: '#ffffff',
    MainHover: '#dcddde',
    MainActive: '#b9bbbe',
    MainLine: '#99aab5',
    OnMain: '#202225',
    Container: '#4f545c',
    ContainerHover: '#5d6269',
    ContainerActive: '#6a6f76',
    ContainerLine: '#72767d',
    OnContainer: '#dcddde',
  },

  Success: {
    Main: '#3ba55d',
    MainHover: '#2d7d46',
    MainActive: '#26703f',
    MainLine: '#1f6338',
    OnMain: '#ffffff',
    Container: '#2d7d46',
    ContainerHover: '#26703f',
    ContainerActive: '#1f6338',
    ContainerLine: '#1a5630',
    OnContainer: '#a7f3d0',
  },

  Warning: {
    Main: '#faa81a',
    MainHover: '#e09219',
    MainActive: '#c97f15',
    MainLine: '#b36d12',
    OnMain: '#1f1a14',
    Container: '#c97f15',
    ContainerHover: '#b36d12',
    ContainerActive: '#9d5e0f',
    ContainerLine: '#874f0d',
    OnContainer: '#fde68a',
  },

  Critical: {
    Main: '#ed4245',
    MainHover: '#c73739',
    MainActive: '#b02f31',
    MainLine: '#9a2829',
    OnMain: '#ffffff',
    Container: '#b02f31',
    ContainerHover: '#9a2829',
    ContainerActive: '#852022',
    ContainerLine: '#6f191a',
    OnContainer: '#fecaca',
  },

  Other: {
    FocusRing: 'rgba(88, 101, 242, 0.6)',
    Shadow: 'rgba(0, 0, 0, 0.3)',
    Overlay: 'rgba(0, 0, 0, 0.85)',
  },
};

const ashThemeData = {
  Background: {
    Container: '#2b2d31',
    ContainerHover: '#32353b',
    ContainerActive: '#383a40',
    ContainerLine: '#3f4147',
    OnContainer: '#f2f3f5',
  },

  Surface: {
    Container: '#313338',
    ContainerHover: '#383a40',
    ContainerActive: '#404249',
    ContainerLine: '#4e5058',
    OnContainer: '#dbdee1',
  },

  SurfaceVariant: {
    Container: '#313338',
    ContainerHover: '#383a40',
    ContainerActive: '#404249',
    ContainerLine: '#4e5058',
    OnContainer: '#dbdee1',
  },

  ...discordSharedColors,
};

const darkThemeData = {
  Background: {
    Container: '#1e1f22',
    ContainerHover: '#232428',
    ContainerActive: '#2b2d31',
    ContainerLine: '#3f4147',
    OnContainer: '#f2f3f5',
  },

  Surface: {
    Container: '#282a2e',
    ContainerHover: '#2e3035',
    ContainerActive: '#35373c',
    ContainerLine: '#3c3e43',
    OnContainer: '#e3e5e8',
  },

  SurfaceVariant: {
    Container: '#2e3035',
    ContainerHover: '#35373c',
    ContainerActive: '#3c3e43',
    ContainerLine: '#43454a',
    OnContainer: '#e3e5e8',
  },

  ...discordSharedColors,
};

export const ashTheme = createTheme(color, ashThemeData);
export const darkTheme = createTheme(color, darkThemeData);

export const butterTheme = createTheme(color, {
  ...darkThemeData,
  Background: {
    Container: '#1A1916',
    ContainerHover: '#262621',
    ContainerActive: '#33322C',
    ContainerLine: '#403F38',
    OnContainer: '#FFFBDE',
  },

  Surface: {
    Container: '#262621',
    ContainerHover: '#33322C',
    ContainerActive: '#403F38',
    ContainerLine: '#4D4B43',
    OnContainer: '#FFFBDE',
  },

  SurfaceVariant: {
    Container: '#33322C',
    ContainerHover: '#403F38',
    ContainerActive: '#4D4B43',
    ContainerLine: '#59584E',
    OnContainer: '#FFFBDE',
  },

  Secondary: {
    Main: '#FFFBDE',
    MainHover: '#E5E2C8',
    MainActive: '#D9D5BD',
    MainLine: '#CCC9B2',
    OnMain: '#1A1916',
    Container: '#403F38',
    ContainerHover: '#4D4B43',
    ContainerActive: '#59584E',
    ContainerLine: '#666459',
    OnContainer: '#F2EED3',
  },
});
