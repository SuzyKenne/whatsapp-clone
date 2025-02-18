import { Platform } from 'react-native';

import colors from './colors';

export default {
  colors,
  text: {
    color: colors.white,
    fontSize: 18,
    flex: 1,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};
