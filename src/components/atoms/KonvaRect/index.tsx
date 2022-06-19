import { FC } from 'react';
import { Rect } from 'react-konva';

import * as T from 'types';

type KonvaRectProps = T.KonvaCommonShapeProps & {
  leftX: number;
  topY: number;
  width: number;
  height: number;
};

const KonvaRect: FC<KonvaRectProps> = ({
  leftX,
  topY,
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  draggable,
}) => {
  return (
    <Rect
      x={leftX}
      y={topY}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      draggable={draggable}
    />
  );
};

export default KonvaRect;
