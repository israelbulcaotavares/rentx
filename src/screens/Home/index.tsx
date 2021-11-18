import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList
} from './styles';

export function Home() {

  const carData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',

  }

  const carDataTwo = {
    brand: 'porshe',
    name: 'Panamera',
    rent: {
      period: 'AO DIA',
      price: 340,
    },
    thumbnail: 'https://purepng.com/public/uploads/large/purepng.com-black-porsche-panamera-carcarvehicletransportporsche-961524660080ezwd4.png',

  }


  const carDataThree = {
    brand: 'chevrolet',
    name: 'Corvette Z06',
    rent: {
      period: 'AO DIA',
      price: 620,
    },
    thumbnail: 'https://purepng.com/public/uploads/large/purepng.com-chevrolet-corvettecarschevroletchevyautomobilechevrolet-corvette-1701527430033ikci0.png',

  }


  const carDataFour = {
    brand: 'lamborghini',
    name: 'Huracan',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://purepng.com/public/uploads/large/purepng.com-lamborghinilamborghinilamborghini-automobilelamborghini-carssports-car-1701527505192v52zi.png',

  }

  const carDataFive = {
    brand: 'lamborghini',
    name: 'Huracan',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://purepng.com/public/uploads/large/purepng.com-volvovolvovolvo-carsvolvo-automobilevolvo-stylish-carvolvo-trucks-1701527682773cx3hu.png',

  }




  return (

    <Container>

      <StatusBar
        barStyle="light-content" // PARA ANDROID
        backgroundColor="transparent"
        translucent //sobe mais p/ cima da status bar
      />
      <Header>

        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>
      <CarList
      data={[1,2,3,45,6,7,8]}
      keyExtractor={item => String(item)}
      renderItem={({ item }) => <Car data={carData} />}
      />
  

    </Container>

  )
}
