import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, { multiply, divide, Extrapolate, interpolate } from "react-native-reanimated";

import Slide, {SLIDE_HEIGHT} from './Slide';
import Subslide from "./Subslide";
import Dot from "./Dot";
import { useTheme } from "../../components";
import { makeStyles, Theme } from "../../components/Theme";
import { AuthNavigationProps } from "../../components/Navigation";

const { width } = Dimensions.get("window");

const useStyles = makeStyles((theme: Theme) => ({
    container: { 
        flex: 1,
        backgroundColor: "white",
    },  
    underlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "flex-end",       
        borderBottomRightRadius: theme.borderRadii.xl,
        overflow: "hidden",
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: theme.borderRadii.xl,
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1,
        backgroundColor: "white", 
        borderBottomLeftRadius: theme.borderRadii.xl,
    },
    pagination: {
         ...StyleSheet.absoluteFillObject,
            height: theme.borderRadii.xl,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
    },
}));
const slides = [
    { 
        title: "Giyim", 
        subtitle: "Bayan Giyim", 
        description: "Bayan giyimde en iyi markalar", 
        color: "#BFEAF5",
        picture: {
            src: require("../../Authentication/assets/images/1.jpg"),
            width: 2513,
            height: 3583,
        },
    },
    { 
        title: "Kozmetik", 
        subtitle: "Parfüm", 
        description: "Parfümde en iyi markalar", 
        color: "#BEECC4",
        picture: {
            src: require("../../Authentication/assets/images/2.jpg"),
            width: 2791,
            height: 3744,
        },
    },
    { 
        title: "Aksesuar", 
        subtitle: "Takı", 
        description: "Aksesuar çeşitleri", 
        color: "#FFE4D9",
        picture: {
          src: require("../../Authentication/assets/images/3.jpg"),
          width: 2738,
          height: 3244,  
        },
    },
    { 
        title: "Butik", 
        subtitle: "Mağazalar", 
        description: "Yüzlerce mağaza seçeneği", 
        color: "#FFDDDD",
        picture: {
            src: require("../../Authentication/assets/images/4.jpg"),
            width: 1757,
            height: 2551,
        },
    },
];

export const assets = slides.map((slide) => slide.picture.src);

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding"> ) => {
    const styles = useStyles();
    const theme = useTheme();
    const scroll = useRef <Animated.ScrollView>(null);
    const {scrollHandler, x} = useScrollHandler ();
    const backgroundColor = interpolateColor (x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map((slide) => slide.color),
    });
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>               
            {slides.map(({ picture }, index) => {
                const opacity = interpolate(x, {
                    inputRange: [
                        (index - 0.5) * width,
                         index * width,
                         (index + 0.5) * width,
                        ],
                    outputRange: [0, 1, 0],
                    extrapolate: Extrapolate.CLAMP,
                });
                return (                    
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
            <Image 
            source={picture.src} 
            style={{ 
                width: width - theme.borderRadii.xl, 
                height: 
                ((width - theme.borderRadii.xl) * picture.height) /
                picture.width, 
                }} 
                />
            </Animated.View>
                );
            })}

                <Animated.ScrollView 
                ref={scroll}
                horizontal 
                snapToInterval={width} 
                decelerationRate="fast" 
                showsVerticalScrollIndicator={false} 
                bounces={false}
                {...scrollHandler}
                >
                    {slides.map(({ title, picture }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ title, picture }} /> //Üst renkli slider kısmı üzerindeki yazıların konumlandırılması
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View 
                style ={{ ...StyleSheet.absoluteFillObject }} // backgroundColor: "red" eklenirse Sol alt köşe rengi değişir
                 />

                 <View style= {styles.footerContent}>
             <View style={styles.pagination} >
                      {slides.map((_, index) => (
                      <Dot 
                      key={index} 
                      currentIndex={divide(x, width)} 
                      { ...{index }} 
                      />
                      ))}
                      </View>
                      <Animated.View style={{
                          flex: 1,
                          flexDirection: "row",
                          width: width * slides.length,
                          transform: [{ translateX: multiply(x, -1) }],
                      }}>

{slides.map(({ subtitle, description }, index) => {
    const last = index === slides.length - 1;
    return (
            <Subslide 
            key={index} 
            onPress={() => {
                if (last) {
                    navigation.navigate("Welcome");
                } else  {
                    scroll.current
                    ?.getNode()
                    .scrollTo({ x: width * (index + 1), animated: true }); // İleri butonuyla bölümü atlama
                }
            }}
            {...{ subtitle, description, last }} 
            />
        
    );
})}
                      </Animated.View>
                  </View>
               </View>
            </View>
    )
}

export default Onboarding;