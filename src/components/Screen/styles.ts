import {StyleSheet, ViewStyle} from 'react-native';
import {colors} from '@app/style-guide';

interface Styles {
  screen: ViewStyle;
}

export default StyleSheet.create<Styles>({
  screen: {
    backgroundColor: colors.greys.white,
    flex: 1,
  },
});
