import {HomeScreenState, HomeSection} from './interfaces';
import {ActionType} from '@interfaces';

const homeReducer = (
  state: HomeScreenState,
  action: ActionType<HomeSection[]>,
): HomeScreenState => {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'SUCCESS':
      if (action.payload) {
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      }
      return state;
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default homeReducer;
