import {View, Text, ImageBackground, TextInput, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={{width: '100%', height: 540}}
        source={{
          uri: 'https://wallpapersmug.com/download/1280x900/3126d4/outing-campfire-tent-night.jpg',
        }}>
        <View>
          <View
            style={{
              backgroundColor: '#fff',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
              width: 220,
              padding: 6,
              borderRadius: 16,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <Icon name="search" size={18} color="#C71585" />
            <TextInput
              style={{fontSize: 16, color: '#C71585', paddingHorizontal: 10}}
              placeholder="where you want to go?"
            />
          </View>

          <Pressable
            onPress={() => navigation.navigate('Search')}
            style={{
              backgroundColor: '#fff',
              padding: 6,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '50%',
              borderRadius: 23,
              overflow: 'hidden',
            }}>
            <Text
              style={{
                color: '#C71585',
                backgroundColor: '#fff',
                padding: 10,
                textAlign: 'center',
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              I'm flexible
            </Text>
          </Pressable>

          <View
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '40%',
              marginBottom: 20,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 26,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Not Sure where to Go?
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 26,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Perfect
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
