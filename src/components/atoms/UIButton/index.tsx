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

const UIButton = styled.button<UIButtonProps>((props) => ({
  all: 'unset',
  margin: 0,

  paddingLeft: paddingHorizontal,
  paddingRight: paddingHorizontal,
  paddingTop: paddingVertical,
  paddingBottom: paddingVertical,

  width: props.width ?? 'auto',
  height: props.height ?? 40,
  fontSize: props.fontSize ?? 24,

  color: props.color ?? DefaultButtonColors.FONT_COLOR,
  borderWidth: 1,
  borderColor: props.color ?? DefaultButtonColors.BORDER_COLOR,
  borderStyle: 'solid',
  borderRadius: 20,

  background: props.backgroundColor ?? DefaultButtonColors.BACKGROUND_COLOR,

  transitionDuration: '50ms',
  transitionTimingFunction: 'linear',
  transitionProperty: 'all',

  ':hover': {
    color: props.fontColorOnHover ?? DefaultButtonColors.FONT_COLOR_HOVER,
    background: props.color ?? DefaultButtonColors.BACKGROUND_COLOR_HOVER,
    cursor: 'pointer',
  },

  ':disabled': {
    color: DefaultButtonColors.FONT_COLOR_DISABLED,
    background: DefaultButtonColors.BACKGROUND_COLOR_DISABLED,
    borderColor: DefaultButtonColors.BORDER_COLOR_DISABLED,
  },
}));

export default UIButton;
