import React, {memo} from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';

import {colors} from '@app/style-guide';

import styles from './styles';

interface Props {
  color?: string;
  style?: ViewStyle;
}

function LoadingSpinner({color = colors.greys.dark, style}: Props) {
  return (
    <View style={[styles.container, style && style]}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
}

export default memo(LoadingSpinner);
