import {View, Text, ImageBackground, Pressable} from 'react-native';
import React from 'react';

export default function Experience() {
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 17, fontWeight: 'bold'}}>
        discover Airbnb Experiences
      </Text>
      <ImageBackground
        style={{
          width: 350,
          resizeMode: 'contain',
          height: 450,
          marginLeft: 10,
          marginTop: 20,
          borderRadius: 10,
        }}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcIhhZoVAOPiN5Mggdz1NdjW-5nvZvTzFog&usqp=CAU',
        }}>
        <View style={{padding: 10}}>
          <Text
            style={{
              fontSize: 30,
              color: '#fff',
              fontWeight: 'bold',
              width: 260,
            }}>
            Things to do on your Trips
          </Text>
          <Pressable
            style={{
              backgroundColor: '#fff',
              padding: 10,
              marginTop: 30,
              width: 150,
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
              Experiences
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
