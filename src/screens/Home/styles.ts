import {colors, spacing} from '@app/style-guide';
import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  header: ViewStyle;
}

export default StyleSheet.create<Styles>({
  header: {
    margin: spacing.default,
    color: colors.reds.default,
  },
});
