import moment from 'moment';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Diamond from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Location from 'react-native-vector-icons/EvilIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import DateRangePicker from 'rn-select-date-range';

export default function ReserveScreen() {
  const route = useRoute();

  const [selectedRange, setRange] = useState({});
  const navigation = useNavigation();
  const day = new Date(selectedRange.firstDate);
  const night = new Date(selectedRange.secondDate);
  const diffTime = Math.abs(day - night);

  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={{width: '100%', height: 190}}
          source={{uri: route.params.image}}
        />
        <View style={{padding: 10}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {route.params.title}
          </Text>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Ionicons name="star" size={22} color="#fd5c63" />
            <Text style={{paddingHorizontal: 10}}>{route.params.star}</Text>
            <Text style={{fontSize: 16, color: 'gray'}}>
              {route.params.location}
            </Text>
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
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontWeight: 'bold'}}>this is a rare find.</Text>
              <Text style={{fontSize: 15}}>
                {route.params.person}'s name on Airbnb is usually fully booked
              </Text>
            </View>
            <Diamond name="diamond" size={22} color="#fd5c63" />
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
              marginTop: 15,
              flexDirection: 'row',
              // justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                Hosted by {route.params.person}
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 14,
                  color: '#BA2BE2',
                  fontWeight: 'bold',
                }}>
                {route.params.description}
              </Text>
            </View>
            <Image
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                paddingBottom: 3,
              }}
              source={{uri: route.params.user}}
            />
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
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
            <AntDesign name="home" size={28} color="#111" />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Entire Home
              </Text>
              <Text style={{color: 'gray', fontSize: 16}}>
                You will have the treehouse to yourself
              </Text>
            </View>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
            <AntDesign name="smileo" size={28} color="#111" />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Enhanced Clean
              </Text>
              <Text style={{color: 'gray', fontSize: 16, width: 300}}>
                the host is commited to Airbnb's 5 step clening process
              </Text>
            </View>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
            <Location name="location" size={28} color="#111" />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Great Location
              </Text>
              <Text style={{color: 'gray', fontSize: 16}}>
                100% of the guests give a 5 star rating
              </Text>
            </View>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
            <AntDesign name="calendar" size={28} color="#111" />
            <View style={{marginLeft: 10}}>
              <Text style={{color: '#111', fontSize: 18}}>
                Free Cancellation Available
              </Text>
            </View>
          </View>
          <Text
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: '#D8D8D8',
              marginTop: 12,
            }}
          />

          <View style={{marginTop: 12}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Where You'll Sleep
            </Text>
            <View
              style={{
                marginTop: 8,
                borderColor: 'gray',
                borderWidth: 1,
                width: 130,
                height: 80,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons name="bed-outline" size={24} color="#111" />
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Bedroom</Text>
              <Text>1 double bed</Text>
            </View>
            <Text
              style={{
                height: 1,
                borderWidth: 1,
                borderColor: '#D8D8D8',
                marginTop: 12,
              }}
            />

            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                What this place Offers
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <MaterialIcons name="fastfood" size={24} color="#111" />
                <Text style={{marginLeft: 10, fontSize: 18, fontWeight: '500'}}>
                  Kitchen
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <AntDesign name="wifi" size={22} color="#111" />
                <Text style={{marginLeft: 10, fontSize: 18, fontWeight: '500'}}>
                  Wifi
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <AntDesign name="car" size={22} color="#111" />
                <Text style={{marginLeft: 10, fontSize: 18, fontWeight: '500'}}>
                  Free Parking On Premises
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <MaterialIcons name="pets" size={22} color="#111" />
                <Text style={{marginLeft: 10, fontSize: 18, fontWeight: '500'}}>
                  Pets
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <MaterialIcons
                  name="local-gas-station"
                  size={22}
                  color="#111"
                />
                <Text style={{marginLeft: 10, fontSize: 18, fontWeight: '500'}}>
                  Gas
                </Text>
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

            <DateRangePicker
              onSelectDateRange={range => {
                setRange(range);
              }}
              responseFormat="YYYY-MM-DD"
              minDate={moment()}
            />

            <View>
              {!selectedRange.firstDate && !selectedRange.secondDate ? null : (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    <Text style={{fontSize: 17}}>
                      {selectedRange.firstDate} -{' '}
                    </Text>
                    <Text style={{fontSize: 17}}>
                      {selectedRange.secondDate}
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </View>
      </ScrollView>

      <Pressable
        style={{
          backgroundColor: '#AFD8F5',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 13,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          {route.params.price}
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('Confirm', {
              img: route.params.image,
              title: route.params.title,
              location: route.params.location,
              description: route.params.description,
              price: route.params.price,
              no_of_days: days,
              startDate: selectedRange.firstDate,
              endDate: selectedRange.secondDate,
              star: route.params.star,
              persons: route.params.person,
            })
          }
          disabled={!selectedRange.firstDate && !selectedRange.secondDate}
          style={{backgroundColor: '#fd5c63', padding: 10}}>
          <Text style={{color: '#fff'}}>Reserve</Text>
        </Pressable>
      </Pressable>
    </>
  );
}
