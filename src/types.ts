export type AcceptsNumberOrString = number | string;

export enum KonvaShapeKind {
  Ellipse = 'KONVA_ELLIPSE',
  Rect = 'KONVA_RECT',
  Star = 'KONVA_STAR',
};
export type KonvaCommonShapeProps = {
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  draggable?: boolean;
};
