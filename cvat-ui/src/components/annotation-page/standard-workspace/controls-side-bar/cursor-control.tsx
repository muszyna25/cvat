import React from 'react';

import {
    Icon,
    Tooltip,
} from 'antd';

import {
    CursorIcon,
} from 'icons';

import {
    ActiveControl,
} from 'reducers/interfaces';

import {
    Canvas,
} from 'cvat-canvas';

interface Props {
    canvasInstance: Canvas;
    activeControl: ActiveControl;
}

function CursorControl(props: Props): JSX.Element {
    const {
        canvasInstance,
        activeControl,
    } = props;

    return (
        <Tooltip overlay='Cursor' placement='right'>
            <Icon
                component={CursorIcon}
                className={activeControl === ActiveControl.CURSOR
                    ? 'cvat-active-canvas-control' : ''
                }
                onClick={(): void => {
                    if (activeControl !== ActiveControl.CURSOR) {
                        canvasInstance.cancel();
                    }
                }}
            />
        </Tooltip>
    );
}

export default React.memo(CursorControl);