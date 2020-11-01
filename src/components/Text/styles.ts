import {StyleSheet, TextStyle} from 'react-native';

import {colors} from '@app/style-guide';

interface Styles {
  default: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  bold: TextStyle;
  center: TextStyle;
}

export default StyleSheet.create<Styles>({
  default: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.greys.black,
  },
  h1: {
    fontSize: 40,
    lineHeight: 50,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 16,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
  },
});
