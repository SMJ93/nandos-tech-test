import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useQuery} from 'react-query';

import {LoadingSpinner, RestaurantItem, Screen, Text} from '@app/components';
import {ErrorResponse, Item, RestaurantListSuccessResponse} from '@app/types';
import {colors} from '@app/style-guide';

import styles from './styles';

export default function Home() {
  const {isLoading, data, refetch} = useQuery<
    RestaurantListSuccessResponse,
    ErrorResponse
  >('restaurant-list', () =>
    fetch(
      'https://storage.googleapis.com/nandos-engineering-public/coding-challenge-rn/restaurantlist.json',
    ).then((res) => res.json()),
  );

  const flatListData = data?.data.restaurant.items || [];

  const isRefreshing = !!(isLoading && data)

  return (
    <Screen>
      <FlatList
        scrollEventThrottle={1}
        keyExtractor={(_item: Item, index: number) => `${index}`}
        data={flatListData}
        ListHeaderComponent={
          <Text h1 style={styles.header}>
            Nandos Restaurants
          </Text>
        }
        ListFooterComponent={isLoading ? <LoadingSpinner /> : null}
        renderItem={({item}) => <RestaurantItem item={item} />}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refetch}
            tintColor={colors.greys.dark}
          />
        }
      />
    </Screen>
  );
}
