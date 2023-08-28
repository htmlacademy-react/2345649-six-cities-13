import {createReducer} from '@reduxjs/toolkit';
import { offers } from '../mocks/offer';
import {cityChange, offersLoad } from './action';

const initialState = {
  city: 'Paris',
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(offersLoad, (state) => {
    state.offers = offers;
  });
  builder.addCase(cityChange, (state, action) => {
    state.city = action.payload;
  });
});
