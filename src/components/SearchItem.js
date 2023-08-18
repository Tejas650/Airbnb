import {View, Text, Pressable, Image, ImageBackground} from 'react-native';
import Heart from 'react-native-vector-icons/Feather';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function SearchItem({data}) {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate('Reserve', {
            id: data.key,
            image: data.img,
            description: data.description,
            lat: data.lat,
            location: data.location,
            person: data.person,
            price: data.price,
            review: data.review,
            star: data.star,
            title: data.title,
            total: data.total,
            distance: data.distance,
            user: data.image,
          })
        }
        style={{marginTop: 10, margin: 10}}>
        <ImageBackground
          style={{width: '100%', height: 300, borderRadius: 10}}
          source={{uri: data.img}}>
          <Pressable style={{position: 'absolute', top: 20, right: 20}}>
            <Heart name="heart" size={24} color="#fff" />
          </Pressable>
        </ImageBackground>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 17}}>{data.location}</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{data.price}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'gray', fontSize: 16}}>
              {data.distance} Km away
            </Text>
            <Text style={{color: 'gray', fontSize: 14}}>dec 12 - 16</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
