import React, {useState} from 'react';
import {ViewStyle, View} from 'react-native';
import {WebView as RNWebview} from 'react-native-webview';

import LoadingSpinner from '../LoadingSpinner';
import styles from './styles';

interface Props {
  uri: string;
  style?: ViewStyle;
}

export default function Webview({uri, style}: Props) {
  const [loading, setLoading] = useState(true);

  const onLoad = () => setLoading(false);

  return (
    <>
      <RNWebview onLoad={onLoad} source={{uri}} style={style} />
      {loading && (
        <View style={styles.loadingSpinnerContainer}>
          <LoadingSpinner />
        </View>
      )}
    </>
  );
}
