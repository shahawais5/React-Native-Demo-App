import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


const Screen1=()=>{
    return (
        <ScrollView>
            <View style={styles.container}>
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfs_OxsQcGueoTii3b4I5_efO_nhUxbXSFxN0-VXzkA&s' }} // Sample image URL
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.title}>Beautiful Nature Islamabad</Text>
              <Text style={styles.description}>
              These are the best places for kid-friendly 
              nature & parks in Islamabad Capital Territory: Margalla Hills 
              · Trail 5 · Rawal Lake · Lake View Park · Fatima Jinnah ....
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2MTYwNTUzNTI5MTI0MzU3/islamabad-the-beautiful.jpg' }} // Sample image URL
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.title}>Faisal Masjid Islamabad</Text>
              <Text style={styles.description}>
              These are the best places for kid-friendly 
              nature & parks in Islamabad Capital Territory: Margalla Hills 
              · Trail 5 · Rawal Lake · Lake View Park · Fatima Jinnah ....
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://www.thenews.com.pk/assets/uploads/akhbar/2022-01-17/925895_9539798_Islamabad2_akhbar.jpg' }} // Sample image URL
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.title}>Centaurus View Islamabad</Text>
              <Text style={styles.description}>
              These are the best places for kid-friendly 
              nature & parks in Islamabad Capital Territory: Margalla Hills 
              · Trail 5 · Rawal Lake · Lake View Park · Fatima Jinnah ....
              </Text>
            </View>
          </View>
        </View>
        </ScrollView>
        
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
      },
      card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom:12,
        elevation: 5,
      },
      image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      cardContent: {
        padding: 15,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      description: {
        fontSize: 16,
        lineHeight: 22,
      },
    });

export default Screen1;