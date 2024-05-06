import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { myAxiosGetRequest } from '../MyAxiosApisReq';

const TabViewExample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await myAxiosGetRequest('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={
        {marginLeft:12}
      }>Api Calls</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          {data.map((item) => (
            <View key={item.id} style={{ marginBottom: 10 ,margin:12}}>
              <Text style={{fontWeight:'bold'}}>Title: {item.title}</Text>
              <Text>Item: {item.body}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default TabViewExample;
