import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
//const { height } = Dimensions.get('window');
export default function YourApp() {
  return (
        <View style={styles.container}>
            <ImageBackground source={require('./img/bg2.png')} style={styles.image}>
                <View style={styles.logoDiv}>
                  <Image source={require('./img/Logo.png')} style={styles.logo}>
                  </Image>
                  <Image source={require('./img/GoodWay.png')} style={styles.logoText}></Image>
                </View>


                
             </ImageBackground>
        </View>
      );
};
const styles = StyleSheet.create({
  logoText: {
    width: 160,
    height: 160
  },
  container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      alignItems:'center'
    },
    logoDiv:{
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 70
    },
    logo:{
    display: 'flex',
    resizeMode: 'cover',
    width: 130,
    height: 130
    }
});