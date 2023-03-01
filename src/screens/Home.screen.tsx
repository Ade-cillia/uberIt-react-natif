import {useEffect, useState} from 'react';
import React, {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {HStack, VStack} from '../shared/components/styles/layout.style';
import randomRestaurantsData, {
  IRestaurant,
} from '../shared/utils/generateRandomData';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RestaurantCard from '../shared/components/card/RestaurantCard.component';
import SearchBar from '../modules/Search/components/search-bar.component';

const fakeDataRestaurant: IRestaurant[] = randomRestaurantsData;

const HomeScreen = ({navigation}: any) => {
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [restaurantData, setRestaurantData] = useState(fakeDataRestaurant);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  };

  useEffect(() => {
    setRestaurantData(
      fakeDataRestaurant.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [searchQuery]);

  function onRefresh() {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }

  const renderingItem = ({item}: {item: IRestaurant}) => (
    <RestaurantCard restaurant={item} />
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <VStack>
        <HStack>
          <FlatList
            data={restaurantData}
            renderItem={renderingItem}
            refreshing={refreshing}
            onRefresh={onRefresh}
            ListHeaderComponent={SearchBar({searchQuery, setSearchQuery})}
            stickyHeaderIndices={[0]}
          />
        </HStack>
        <HStack>
          <Button
            title="Go to Jane's profile"
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
          />
        </HStack>
      </VStack>
    </SafeAreaView>
  );
};

export default HomeScreen;
