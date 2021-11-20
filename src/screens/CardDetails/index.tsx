import React from 'react';
 import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../ImageSlider';


import {
  Container,
  Header,
  CarImages
} from './styles';

export function CardDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() =>{} }  />
      </Header>


      <CarImages>
       <ImageSlider imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}   />
       </CarImages>

    </Container>
  );
}
 