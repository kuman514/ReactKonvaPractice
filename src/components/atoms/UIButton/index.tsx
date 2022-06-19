import styled from 'styled-components';

import * as T from 'types';
import { DefaultButtonColors } from 'palette';

type UIButtonProps = {
  color?: string;
  width?: T.AcceptsNumberOrString;
  height?: T.AcceptsNumberOrString;
  backgroundColor?: string;
  fontSize?: T.AcceptsNumberOrString;
  fontColorOnHover?: string;
};

const paddingHorizontal: number = 12;
const paddingVertical: number = 3;

const UIButton = styled.button<UIButtonProps>(({
  color,
  width,
  height,
  backgroundColor,
  fontSize,
  fontColorOnHover,
}) => ({
  all: 'unset',
  margin: 0,

  paddingLeft: paddingHorizontal,
  paddingRight: paddingHorizontal,
  paddingTop: paddingVertical,
  paddingBottom: paddingVertical,

  width: width ?? 'auto',
  height: height ?? 40,
  fontSize: fontSize ?? 24,

  color: color ?? DefaultButtonColors.FONT_COLOR,
  borderWidth: 1,
  borderColor: color ?? DefaultButtonColors.BORDER_COLOR,
  borderStyle: 'solid',
  borderRadius: 20,

  background: backgroundColor ?? DefaultButtonColors.BACKGROUND_COLOR,

  transitionDuration: '50ms',
  transitionTimingFunction: 'linear',
  transitionProperty: 'all',

  ':hover': {
    color: fontColorOnHover ?? DefaultButtonColors.FONT_COLOR_HOVER,
    background: color ?? DefaultButtonColors.BACKGROUND_COLOR_HOVER,
    cursor: 'pointer',
  },

  ':disabled': {
    color: DefaultButtonColors.FONT_COLOR_DISABLED,
    background: DefaultButtonColors.BACKGROUND_COLOR_DISABLED,
    borderColor: DefaultButtonColors.BORDER_COLOR_DISABLED,
  },
}));

export default UIButton;
