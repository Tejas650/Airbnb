import {View, Text, Image, Pressable} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Diamond from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function ConfirmScreen() {
  const route = useRoute();
  console.log(route.params);
  const [add, setAdd] = useState(1);
  const serviceFee = 20;
  const taxes = 45;
  const price = route.params.price;
  const res = price.replace(/\D/g, '');
  const price_with_days = res * route.params.no_of_days;
  const totalPrice = (price_with_days + serviceFee + taxes) * add;
  console.log(totalPrice);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Confirm and Pay',
      headerStyle: {
        backgroundColor: '#fd5c63',
      },
      headerTintColor: '#fff',
    });
  }, []);

  return (
    <View>
      <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 100, height: 100, borderRadius: 10}}
          source={{uri: route.params.img}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{color: 'gray'}}>{route.params.location}</Text>
          <Text style={{marginVertical: 10, fontSize: 15, fontWeight: 'bold'}}>
            {route.params.title.substr(0, 30)}...
          </Text>
          <Text style={{width: 300}}>{route.params.description}</Text>
        </View>
      </View>

      <Text
        style={{
          height: 1,
          borderWidth: 1,
          borderColor: '#D8D8D8',
          marginTop: 7,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{fontWeight: 'bold'}}>this is a rare find.</Text>
          <Text style={{fontSize: 15}}>
            {route.params.persons}'s name on Airbnb is usually fully booked
          </Text>
        </View>
        <Diamond name="diamond" size={22} color="#fd5c63" />
      </View>
      <Text
        style={{
          height: 1,
          borderWidth: 2,
          borderColor: '#D8D8D8',
          marginTop: 7,
        }}
      />

      <View style={{padding: 10}}>
        <Text style={{fontSize: 22, fontWeight: '600'}}>Your Trips</Text>
        <View style={{marginTop: 14}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Dates</Text>
          <Text style={{color: 'gray', fontWeight: '500'}}>
            {route.params.startDate} - {route.params.endDate}
          </Text>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Guests</Text>

          <Text>{add} Guests</Text>

          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              right: 10,
              backgroundColor: '#fd5c63',
              borderRadius: 5,
            }}>
            <Pressable onPress={() => setAdd(Math.max(1, add - 1))}>
              <Text
                style={{
                  fontSize: 25,
                  color: 'white',
                  paddingHorizontal: 10,
                }}>
                -
              </Text>
            </Pressable>

            <Pressable>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  paddingHorizontal: 10,
                }}>
                {add}
              </Text>
            </Pressable>

            <Pressable onPress={() => setAdd(add + 1)}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  paddingHorizontal: 10,
                }}>
                +
              </Text>
            </Pressable>
          </Pressable>
        </View>
      </View>
      <Text
        style={{
          height: 1,
          borderWidth: 2,
          borderColor: '#D8D8D8',
          marginTop: 7,
        }}
      />

      <View style={{padding: 10}}>
        <Text style={{fontSize: 17}}>Price Details</Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            {route.params.price} x {route.params.no_of_days} Days
          </Text>
          <Text style={{color: 'gray', fontSize: 17}}>
            £{res * route.params.no_of_days}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>service fees</Text>
          <Text style={{color: 'gray', fontSize: 17}}>£{serviceFee}</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            Occupancy taxes and fees
          </Text>
          <Text style={{color: 'gray', fontSize: 17}}>£{taxes}</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Total(Pounds)</Text>
          <Text style={{color: 'gray', fontSize: 17}}>£{totalPrice}</Text>
        </View>
      </View>
      <Text
        style={{
          height: 1,
          borderWidth: 2,
          borderColor: '#D8D8D8',
          marginTop: 7,
        }}
      />
      <View style={{padding: 10}}>
        <Text style={{fontSize: 20}}>Cancellation Policy</Text>
        <Text style={{color: 'gray', fontSize: 17, marginTop: 10}}>
          Free Cancellation for 48 hours, refund minus the service fee
        </Text>
        <Text style={{color: 'gray', fontSize: 17, marginTop: 10}}>
          Our policy does not cover policy disruptions caused by COVID-19
        </Text>
      </View>
      <Text
        style={{
          height: 1,
          borderWidth: 2,
          borderColor: '#D8D8D8',
          marginTop: 7,
        }}
      />

      <Pressable
        onPress={() => navigation.navigate('Final')}
        style={{
          backgroundColor: '#fd5c63',
          width: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 10,
          padding: 10,
        }}>
        <Text style={{textAlign: 'center', color: '#fff'}}>
          Confirm and Pay
        </Text>
      </Pressable>
    </View>
  );
}
