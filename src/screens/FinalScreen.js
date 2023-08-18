import {View, Text} from 'react-native';
import React from 'react';

export default function FinalScreen() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
      }}>
      <Text style={{fontSize: 20}}>Hoorey Your Booking has been confirmed</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fd5c63'}}>
        Airbnb
      </Text>
    </View>
  );
}
