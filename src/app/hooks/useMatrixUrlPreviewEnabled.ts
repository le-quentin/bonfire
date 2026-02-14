import { Room } from 'matrix-js-sdk';
import { useMemo } from 'react';
import { useStateEvent } from './useStateEvent';
import { BonfireUrlPreviewEnabledContent, StateEvent } from '../../types/matrix/room';

export const useMatrixUrlPreviewEnabled = (room: Room): boolean => {
  const urlPreviewEvent = useStateEvent(room, StateEvent.BonfireUrlPreviewEnabled);

  return useMemo(() => {
    if (!urlPreviewEvent) return true;
    const content = urlPreviewEvent.getContent<BonfireUrlPreviewEnabledContent>();
    return content.enabled ?? true;
  }, [urlPreviewEvent]);
};
