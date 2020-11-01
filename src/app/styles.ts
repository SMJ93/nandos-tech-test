import {StyleSheet, ViewStyle} from 'react-native';
import {colors} from '@app/style-guide';

interface Styles {
  container: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.greys.white,
    flex: 1,
  },
});
