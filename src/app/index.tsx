import React from 'react';
import {View} from 'react-native';
import {QueryCache, ReactQueryCacheProvider} from 'react-query';

import AppStack from '@app/stack';

import styles from './styles';

const queryCache = new QueryCache();

export default function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <View style={styles.container}>
        <AppStack />
      </View>
    </ReactQueryCacheProvider>
  );
}
