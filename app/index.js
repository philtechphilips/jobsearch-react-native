import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";
import { ActivityIndicator } from "react-native";
import styles from '../components/home/nearby/nearbyjobs.style'

const Home = () => { 
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const [delay, setDelay] = useState(true);

  setTimeout(() => {
    setDelay(false)
  }, 5000);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"></ScreenHeaderBtn>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"></ScreenHeaderBtn>
          ),

        }}
      >
      </Stack.Screen>

      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: SIZES.medium }}>
              <Welcome 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleClick={() => {
                  if(searchTerm){
                    router.push(`/search/${searchTerm}`)
                  }
                }}
              />
              <Popularjobs />
              {delay ? (
                <View style={styles.container}>
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Nearby jobs</Text>
                  <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                  </TouchableOpacity>
                </View>
          
                <ActivityIndicator size="large" color={COLORS.primary} />
              </View>
              ): (
                <Nearbyjobs />
              ) 

              }
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
