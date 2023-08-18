import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Explore() {
  const [places, setPlaces] = useState([]);
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      const exploreDatas = await fetch('https://www.jsonkeeper.com/b/4G1G');
      const datas = await exploreDatas.json();
      setPlaces(datas);
    };
    fetchData();
  }, []);

  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 18, fontWeight: '500'}}>Explore More</Text>
      <FlatList
        numColumns={columns}
        data={places}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', margin: 7}}>
            <Image style={{width: 50, height: 50}} source={{uri: item.img}} />
            <View
              style={{
                paddingLeft: 10,
                backgroundColor: '#72A0C1',
                paddingTop: 5,
                width: 120,
              }}>
              <Text style={{color: '#fff'}}>{item.location}</Text>
              <Text>{item.distance}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
