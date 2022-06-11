import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../navigator/AuthProvider';

import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../constants';
import { freeGames, paidGames, sliderData } from '../data/NewData';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import { COLORS } from '../constants';

const Home = ({ navigation }) => {

  const { logout } = useContext(AuthContext);
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            backgroundColor: COLORS.black,
            width: 800
          }}>
          <Text style={{ fontSize: 18, color: COLORS.white }}>
            Hello John Doe
          </Text>
          <TouchableOpacity >
            <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', }}>
          <Text style={{ fontSize: 18, color: COLORS.white }}>
            Latest
          </Text>
          <TouchableOpacity >
            <Text style={{ color: COLORS.white }} onPress={() => logout()}>Signout</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          // ref={c => { this._carousel = c; }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() => navigation.navigate('Quiz')}
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() => navigation.navigate('PhoneSignUp')}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
