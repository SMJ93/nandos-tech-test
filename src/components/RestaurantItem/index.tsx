import React, {memo} from 'react';
import {TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {AppStackRoutesAndParams, Item} from '@app/types';
import {colors} from '@app/style-guide';
import {AppRoutes} from '@app/routes';

import Text from '../Text';
import styles from './styles';

type UseNavigation = StackNavigationProp<
  AppStackRoutesAndParams,
  AppRoutes.HOME
>;

interface Props {
  item: Item;
}

function RestaurantItem({item: {name, geo, url}}: Props) {
  const navigation = useNavigation<UseNavigation>();

  const onPress = () => navigation.navigate(AppRoutes.RESTAURANT, {url});

  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor={colors.greys.light}>
      <>
        <Text h3>{name}</Text>
        <Text>{geo.address.streetAddress}</Text>
        <Text>{geo.address.addressLocality}</Text>
        <Text>{geo.address.postalCode}</Text>
      </>
    </TouchableHighlight>
  );
}

export default memo(RestaurantItem);
