import React, {ReactNode} from 'react';
import {Text as RNText, TextStyle} from 'react-native';

import styles from './styles';

export interface Props {
  children?: ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  bold?: boolean;
  center?: boolean;
  style?: TextStyle;
}

function Text({
  children,
  h1 = false,
  h2 = false,
  h3 = false,
  bold = false,
  center = false,
  style,
}: Props) {
  return (
    <RNText
      textBreakStrategy="simple"
      style={[
        styles.default,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        bold && styles.bold,
        center && styles.center,
        style && style,
      ]}>
      {children}
    </RNText>
  );
}

export default Text;
