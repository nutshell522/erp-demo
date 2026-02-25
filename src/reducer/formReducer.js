import { ACTION_TYPES } from '../constants/actionTypes';

export const initialState = {
  name: '',
  price: 0,
  quantity: 1,
  total: 0,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_FIELD: {
      const { name, value, type } = action.payload;

      let processedValue = value;
      if (type === 'number') {
        processedValue = value === '' ? 0 : +value;
      }

      const newState = {
        ...state,
        [name]: processedValue,
      };

      newState.total = newState.price * newState.quantity;

      return newState;
    }
    case ACTION_TYPES.RESET:
      return initialState;
    default:
      return state;
  }
};
