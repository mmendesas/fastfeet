import React from 'react';
import { ActivityIndicator } from 'react-native';
import { string, bool } from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ children, loading, ...props }) {
  return (
    <Container {...props}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.defaultProps = {
  loading: false,
};

Button.propTypes = {
  children: string.isRequired,
  loading: bool,
};
