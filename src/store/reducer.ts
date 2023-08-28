import {createReducer} from '@reduxjs/toolkit';
import { offers } from '../mocks/offer';
import {offersLoad } from './action';

const initialState = {
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 10,
    },
  },
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(offersLoad, (state) => {
    state.offers = offers;
  });
});
