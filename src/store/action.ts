import { createAction } from '@reduxjs/toolkit';

export const cityChange = createAction<string>('city/change');
export const offersLoad = createAction('offers/load');
