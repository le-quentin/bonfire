import { Room } from 'matrix-js-sdk';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { mDirectAtom } from '../state/mDirectList';

export const useIsDM = (room: Room): boolean => {
  const mDirects = useAtomValue(mDirectAtom);
  return useMemo(() => mDirects.has(room.roomId), [mDirects, room.roomId]);
};
