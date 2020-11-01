import {colors, spacing} from '@app/style-guide';
import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.greys.light,
    marginHorizontal: spacing.small,
    marginBottom: spacing.small,
    padding: spacing.default,
  },
});
