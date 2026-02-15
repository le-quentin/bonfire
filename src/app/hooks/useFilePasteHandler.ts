import { useCallback, ClipboardEventHandler } from 'react';
import { getDataTransferFiles, getImageUrlBlob } from '../utils/dom';

const IMAGE_URL_REGEX = /^https?:\/\/.+\.(gif|jpe?g|png|webp|avif|apng)(\?.*)?$/i;

const isImageUrl = (text: string): boolean => IMAGE_URL_REGEX.test(text.trim());

export const useFilePasteHandler = (onPaste: (file: File[]) => void): ClipboardEventHandler =>
  useCallback(
    (evt) => {
      const files = getDataTransferFiles(evt.clipboardData);
      if (files) {
        onPaste(files);
        return;
      }

      const text = evt.clipboardData?.getData('text/plain');
      if (text && isImageUrl(text)) {
        evt.preventDefault();

        const url = text.trim();
        getImageUrlBlob(url)
          .then((blob) => {
            const urlPath = new URL(url).pathname;
            const filename = urlPath.split('/').pop() || 'image';
            const file = new File([blob], filename, { type: blob.type });
            onPaste([file]);
          })
          .catch((error) => {
            console.error('Failed to fetch image from URL:', error);
          });
      }
    },
    [onPaste]
  );
