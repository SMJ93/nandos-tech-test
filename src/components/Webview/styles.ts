import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  loadingSpinnerContainer: ViewStyle;
}

export default StyleSheet.create<Styles>({
  loadingSpinnerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
