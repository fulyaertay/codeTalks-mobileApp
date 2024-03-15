import 'react-native-gesture-handler/jestSetup';

import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});
