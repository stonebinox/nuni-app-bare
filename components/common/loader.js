import React from 'react';
import {ActivityIndicator} from 'react-native';

export const Loader = () => (
  <ActivityIndicator
    size="small"
    color="#ccc"
    style={{
      marginTop: 16,
    }}
  />
);
