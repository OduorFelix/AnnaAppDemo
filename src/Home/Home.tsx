import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, ImageBackground } from "react-native";
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Annanas from "../../assets/images/lets-go.png";
import CardImage from "../../assets/images/canyon.png";
import theme from "../../theme";

import data from "../../assets/data/dummyData";

interface HomeProps {
  navigation: any,
 }

const Home = ({ navigation }: HomeProps) => { 
    
  const renderDiscoverItem = ({item}: {item: any}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Applications', {
            item: item.form_response
          })
        }>
        <ImageBackground
          source={CardImage}
          style={[ styles.discoverItem ]}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.restaurant.label}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            {/*Image Pin Location Here */}
            <Text style={styles.discoverItemLocationText}>U.S.A</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };


    return (
        <FlatList
          ListHeaderComponent={
          <>
            <SafeAreaView>
                  <View style={styles.menuWrapper}>
                      <Image source={Annanas} style={styles.profileImage} />
                      <Text style={styles.barTitle}>Anna</Text>
                    <Image source={Annanas} style={styles.profileImage} />
              </View>
            </SafeAreaView>
            <View style={styles.discoverWrapper}>
              <Text style={styles.discoverTitle}>Restaurants</Text>
            </View>
          </>}
            data={data}
            renderItem={renderDiscoverItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
    );
 };

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: theme.palette.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 10,
  },
  barTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  discoverWrapper: {
    // marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontSize: 25,
  },
   discoverItemsWrapper: {
    paddingVertical: 20,
  }, 
  discoverItem: {
    width: 340,
    height: 130,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    margin: 8,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: theme.palette.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 14,
    color: theme.palette.white,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 25,
    color: theme.palette.black,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
});