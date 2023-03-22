import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import styles from './welcome.style'

import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [actveJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
        <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
            placeholderTextColor="#c9c7c7"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
            <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
            <FlatList 
              data={jobTypes}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.tab(actveJobType, item)} onPress={() => {
                  setActiveJobType(item);
                  router.push(`/search/${item}`)
                }}>
                  <Text style={styles.tabText(actveJobType, item)}>{item}</Text>
                </TouchableOpacity>
              )}

              keyExtractor={item => item}
              contentContainerStyle={{ columnGap: SIZES.small }}
              horizontal
            />
      </View>
    </View>
  )
}

export default Welcome