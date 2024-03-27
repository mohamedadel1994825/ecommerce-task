import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeScreen } from '../index';

// Mock the navigation prop
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('HomeScreen', () => {
  it('should match snapshot', () => {
    const navigation = { navigate: jest.fn() }; // Mock navigation object
    const { toJSON } = render(<HomeScreen navigation={navigation} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
