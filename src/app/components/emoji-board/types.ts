export enum EmojiBoardTab {
  Gif = 'Gif',
  Sticker = 'Sticker',
  Emoji = 'Emoji',
}

export enum EmojiType {
  Emoji = 'emoji',
  CustomEmoji = 'customEmoji',
  Sticker = 'sticker',
}

export type EmojiItemInfo = {
  type: EmojiType;
  data: string;
  shortcode: string;
  label: string;
};
