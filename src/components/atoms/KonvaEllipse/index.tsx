import { FC } from 'react';
import { Ellipse } from 'react-konva';

import * as T from 'types';

type KonvaEllipseProps = T.KonvaCommonShapeProps & {
  centerX: number;
  centerY: number;
  radiusX: number;
  radiusY: number;
};

const KonvaEllipse: FC<KonvaEllipseProps> = ({
  centerX,
  centerY,
  radiusX,
  radiusY,
  fill,
  stroke,
  strokeWidth,
  draggable,
}) => {
  return (
    <Ellipse
      x={centerX}
      y={centerY}
      radiusX={radiusX}
      radiusY={radiusY}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      draggable={draggable}
    />
  );
};

export default KonvaEllipse;
