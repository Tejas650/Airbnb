import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Explore from '../components/Explore';
import Experience from '../components/Experience';

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <Cards />
      <Explore />
      <Experience />
    </ScrollView>
  );
}
