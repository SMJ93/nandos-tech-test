import {AppRoutes} from '@app/routes';

export interface Address {
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
}

export interface Item {
  name: string;
  url: string;
  geo: {
    address: Address;
  };
}

export interface RestaurantListSuccessResponse {
  data: {
    restaurant: {
      items: Item[];
    };
  };
}

export type ErrorResponse = any;

export type AppStackRoutesAndParams = {
  [AppRoutes.HOME]: undefined;
  [AppRoutes.RESTAURANT]: {
    url: string;
  };
};
