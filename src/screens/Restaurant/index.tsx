import React from 'react';
import {RouteProp} from '@react-navigation/native';

import {Screen, Webview} from '@app/components';
import {AppStackRoutesAndParams} from '@app/types';
import {AppRoutes} from '@app/routes';

interface Props {
  route: RouteProp<AppStackRoutesAndParams, AppRoutes.RESTAURANT>;
}

export default function Restaurant({route}: Props) {
  return (
    <Screen>
      <Webview uri={route.params.url} />
    </Screen>
  );
}
