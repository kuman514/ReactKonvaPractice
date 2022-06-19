import { FC } from 'react';
import { Star } from 'react-konva';

import * as T from 'types';

type KonvaStarProps = T.KonvaCommonShapeProps & {
  centerX: number;
  centerY: number;
  innerRadius: number;
  outerRadius: number;
  points: number;
};

const KonvaStar: FC<KonvaStarProps> = ({
  centerX,
  centerY,
  innerRadius,
  outerRadius,
  points,
  fill,
  stroke,
  strokeWidth,
  draggable,
}) => {
  return (
    <Star
      x={centerX}
      y={centerY}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      numPoints={points}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      draggable={draggable}
    />
  );
};

export default KonvaStar;
