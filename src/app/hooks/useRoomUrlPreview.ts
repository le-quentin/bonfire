import { Room } from 'matrix-js-sdk';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { roomToParentsAtom } from '../state/room/roomToParents';
import { useMatrixClient } from './useMatrixClient';
import { useMatrixUrlPreviewEnabled } from './useMatrixUrlPreviewEnabled';
import { useIsDM } from './useIsDM';
import { useSetting } from '../state/hooks/settings';
import { settingsAtom } from '../state/settings';

export const useRoomUrlPreview = (room: Room): boolean => {
  const mx = useMatrixClient();
  const isDM = useIsDM(room);
  const isEncrypted = room.hasEncryptionStateEvent();
  const roomToParents = useAtomValue(roomToParentsAtom);
  const [encryptedDmUrlPreview] = useSetting(settingsAtom, 'encryptedDmUrlPreview');

  // Find parent space if this room is in a space
  const parentSpaceId = useMemo(() => {
    const parents = roomToParents.get(room.roomId);
    if (!parents || parents.size === 0) return null;
    return Array.from(parents)[0];
  }, [roomToParents, room.roomId]);

  const parentSpace = parentSpaceId ? mx.getRoom(parentSpaceId) : null;

  // Always fetch room's own setting
  const roomUrlPreview = useMatrixUrlPreviewEnabled(room);

  // Only fetch parent space setting if it exists
  // React hooks must be called unconditionally, so we use optional chaining in useMemo
  const spaceUrlPreview = parentSpace ? useMatrixUrlPreviewEnabled(parentSpace) : true;

  return useMemo(() => {
    // Priority 1: Encrypted DMs use user setting
    if (isDM && isEncrypted) {
      return encryptedDmUrlPreview;
    }

    // Priority 2: Rooms in spaces use space setting
    if (parentSpace) {
      return spaceUrlPreview;
    }

    // Priority 3: Standalone rooms use room setting
    return roomUrlPreview;
  }, [isDM, isEncrypted, encryptedDmUrlPreview, parentSpace, spaceUrlPreview, roomUrlPreview]);
};
