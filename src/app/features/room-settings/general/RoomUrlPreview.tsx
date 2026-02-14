import React, { useCallback } from 'react';
import { Box, Spinner, Switch, Text, color } from 'folds';
import { MatrixError } from 'matrix-js-sdk';
import { useRoom } from '../../../hooks/useRoom';
import { useMatrixClient } from '../../../hooks/useMatrixClient';
import { useMatrixUrlPreviewEnabled } from '../../../hooks/useMatrixUrlPreviewEnabled';
import { StateEvent } from '../../../../types/matrix/room';
import { SequenceCard } from '../../../components/sequence-card';
import { SequenceCardStyle } from '../styles.css';
import { SettingTile } from '../../../components/setting-tile';
import { RoomPermissionsAPI } from '../../../hooks/useRoomPermissions';
import { AsyncStatus, useAsyncCallback } from '../../../hooks/useAsyncCallback';

type RoomUrlPreviewProps = {
  permissions: RoomPermissionsAPI;
};

export function RoomUrlPreview({ permissions }: RoomUrlPreviewProps) {
  const mx = useMatrixClient();
  const room = useRoom();
  const currentSetting = useMatrixUrlPreviewEnabled(room);

  const canEdit = permissions.stateEvent(StateEvent.BonfireUrlPreviewEnabled, mx.getSafeUserId());

  const [submitState, submit] = useAsyncCallback(
    useCallback(
      async (enabled: boolean) => {
        await mx.sendStateEvent(room.roomId, StateEvent.BonfireUrlPreviewEnabled as any, {
          enabled,
        });
      },
      [mx, room.roomId]
    )
  );

  const handleChange = (value: boolean) => {
    submit(value);
  };

  const submitting = submitState.status === AsyncStatus.Loading;

  return (
    <Box direction="Column" gap="100">
      <Text size="L400">URL Previews</Text>
      <SequenceCard className={SequenceCardStyle} variant="SurfaceVariant" direction="Column">
        <SettingTile
          title="Enable URL Previews"
          description="Show link previews for URLs posted in this room. URLs are sent to your server for preview generation."
          after={
            <Box gap="200" alignItems="Center">
              {submitting && <Spinner variant="Secondary" />}
              {!submitting && (
                <Switch
                  variant="Primary"
                  value={currentSetting}
                  onChange={handleChange}
                  disabled={!canEdit}
                />
              )}
            </Box>
          }
        >
          {submitState.status === AsyncStatus.Error && (
            <Text style={{ color: color.Critical.Main }} size="T200">
              {(submitState.error as MatrixError).message || 'Failed to update setting'}
            </Text>
          )}
        </SettingTile>
      </SequenceCard>
    </Box>
  );
}
