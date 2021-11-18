import React from 'react';
import { View } from 'react-native';
import { BackButton } from '../../components/BackButton';


import {
  Container,
  Header
} from './styles';

export function CardDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() =>{} }  />
      </Header>

    </Container>
  );
}
