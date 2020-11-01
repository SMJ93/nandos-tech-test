import React, {ReactNode} from 'react';
import {View} from 'react-native';

import styles from './styles';

interface Props {
  children: ReactNode;
}

export default function Screen({children}: Props) {
  return <View style={styles.screen}>{children}</View>;
}
