export const NAVIGATION_ITEMS_SUCCESS = 'NAVIGATION_ITEMS_SUCCESS';

export const fetchNavigationItems = () => ({
  type: NAVIGATION_ITEMS_SUCCESS,
  payload: {
    1: {
      'id': 1,
      'name': 'Konpot',
    },
    2: {
      'id': 2,
      'name': 'Sponssit',
    },
  },
});
