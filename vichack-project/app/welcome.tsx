import { 
    Text, 
    TextInput, 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    ImageBackground, 
    Dimensions, 
    Animated, 
    Easing, 
    StatusBar 
} from "react-native";
import React, { useState, useRef } from 'react';
import DatePicker from 'react-native-date-picker'
import PhoneInput from "react-native-phone-number-input";
// import { TabView, SceneMap } from 'react-native-tab-view';


// LOL GLOBAL VARIABLE ill fix this (maybe not)
// cbs atm
const description = [
    {
        title: "Somebody new, everyday",
        desc: "Meet an active user everyday",
        imageURI: {uri: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"}
    },
    {
        title: "Effortlessly break the ice",
        desc: "We'll help start things off from your interests",
        imageURI: {uri: "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg"}
    }
];

export default function Welcome() {
    const [slideNumber, setSlideNumber] = useState(0);
    
    let viewable = true;
    function nextSlide(): void {
        switch(slideNumber) {
            case 1:
                fadeOut();
                setTimeout(() => {
                    viewable = false;
                }, 200);
            case 0:
                moveRL();
            case 2:
                setSlideNumber(slideNumber + 1);
                break;
        }
    }

    const translateX = useRef(new Animated.Value(0)).current;
    const fade = useRef(new Animated.Value(1)).current;

    const moveRL = () => {
        Animated.timing(translateX, {
            toValue: -Dimensions.get('window').width,
            duration: 200, // the duration of the animation
            easing: Easing.inOut(Easing.cubic), // the style of animation
            useNativeDriver: false
        }).start(); // starts this annimation once this method is called
    };

    const fadeIn = () => {
        Animated.timing(fade, {
            toValue: 1,
            duration: 200, // the duration of the animation
            easing: Easing.inOut(Easing.cubic), // the style of animation
            useNativeDriver: false
        }).start(); // starts this annimation once this method is called
    };
    const fadeOut = () => {
        Animated.timing(fade, {
            toValue: 0,
            duration: 400, // the duration of the animation
            easing: Easing.out(Easing.cubic), // the style of animation
            useNativeDriver: false
        }).start(); // starts this annimation once this method is called
    };

    function slideComponents() {
        if (viewable == true && slideNumber < 3) {
            return (
                <Animated.View style={[styles.largeContainer, {opacity: fade}]}>
                    <View style={styles.largeContainer}>
                        <Animated.View style={[styles.slide, {transform: [{ translateX }]}]} key={"slide1"}>
                            <ImageBackground source={description[0].imageURI} resizeMode="cover" style={styles.image} />
                        </Animated.View>
                        <Animated.View style={[styles.slide, {transform: [{ translateX }]}]} key={"slide2"}>
                            <ImageBackground source={description[1].imageURI} resizeMode="cover" style={styles.image} />
                        </Animated.View>
                    </View>
                    <View style={[styles.slideDescription]}>
                        <SlideDescription slideNumber={slideNumber} nextSlide={nextSlide} />
                    </View>
                </Animated.View>
            )
        }
    }

    return (
        <View style={styles.container}>
            {slideComponents()}
            <HouseKeeping slideNumber={slideNumber} nextSlide={nextSlide} />
            <Interests slideNumber={slideNumber} nextSlide={nextSlide} />
            <TouchableOpacity style={styles.button} onPress={nextSlide}>
                <Text style={{color: Colors.light.textlight}}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

// class TabViewExample extends React.Component {
//     state = {
//         index: 0,
//         routes: [
//             { key: 'first', title: 'Popular' },
//             { key: 'second', title: 'Search' },
//         ],
//     };

//     _handleIndexChange = (index: number) => this.setState({ index });

//     _renderTabBar = (props: any) => {
//         const inputRange = props.navigationState.routes.map((x: any, i: number) => i);

//         return (
//             <View style={tstyles.tabBar}>
//                 {props.navigationState.routes.map((route: any, i: number) => {
//                     const opacity = props.position.interpolate({
//                     inputRange,
//                     outputRange: inputRange.map((inputIndex: number) =>
//                             inputIndex === i ? 1 : 0.5
//                         ),
//                     });

//                     return (
//                     <TouchableOpacity
//                         style={tstyles.tabItem}
//                         onPress={() => this.setState({ index: i })}>
//                         <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
//                     </TouchableOpacity>
//                     );
//                 })}
//             </View>
//         );
//     };

//     _renderScene = SceneMap({
//         first: PopularPage,
//         second: SearchPage,
//     });

//     render() {
//         return (
//             <TabView
//             navigationState={this.state}
//             renderScene={this._renderScene}
//             renderTabBar={this._renderTabBar}
//             onIndexChange={this._handleIndexChange}
//             />
//         );
//     }
// }

// const PopularPage = () => (
//     <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
// );
// const SearchPage = () => (
//     <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
// );

function Interests({ slideNumber, nextSlide }: { slideNumber: number, nextSlide: () => void }) {
    type Topic = {
        imageURI: {uri: string};
        title: string;
    };

    const topics = [
        {
            imageURI: {uri: "https://i.pinimg.com/originals/1e/d2/9e/1ed29eca5273e2eea99f1b79cc52dee9.png"},
            title: "Swimming"
        },
        {
            imageURI: {uri: "https://t3.ftcdn.net/jpg/02/63/95/36/360_F_263953627_OkyyICDPFb1KGbX4CQkXSQ42rnIUoPP3.jpg"},
            title: "Tennis"
        }
    ]

    function TopicCard( {topic} : {topic: Topic}) {
        return (
            <View style={tstyles.card}>
                <View style={[tstyles.cardImgContainer, {backgroundColor: "#eee"}]}>
                    <ImageBackground source={topic.imageURI} resizeMode="cover" style={styles.image1} />
                </View>
                <View style={tstyles.cardDesc}>
                    <Text>
                        {topic.title}
                    </Text>
                </View>
            </View>
        )
    }
    
    if (slideNumber === 3) {
        return (
            <Animated.View style={[styles.leftContainer]} key={"slide4"}>
                <Text style={{ fontWeight: "normal", fontSize: 48, }}>Find your</Text>
                <Text style={{ fontWeight: "bold", fontSize: 48 }}>interests</Text>
                {topics.map((topic) => {
                    return <TopicCard topic={topic} key={topic.title}></TopicCard>;
                })}
            </Animated.View>
        )
    }
}

function HouseKeeping({ slideNumber, nextSlide }: { slideNumber: number, nextSlide: () => void }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [phoneNum, setphoneNum] = useState('');
    const [formattedphoneNum, setFormattedphoneNum] = useState("");
    const phoneInput = useRef<PhoneInput>(null);

    const fade = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(400)).current;

    const moveUp = () => {
        Animated.timing(translateY, {
            toValue: 0,
            duration: 200, // the duration of the animation
            easing: Easing.inOut(Easing.cubic), // the style of animation
            useNativeDriver: false
        }).start(); // starts this animation once this method is called
    };
    
    if (slideNumber === 2) {
        return (
            <Animated.View style={[styles.container, {alignItems: 'flex-start'}]} key={"slide3"}>
                <Text style={{ fontWeight: "bold", fontSize: 24, margin: 4 }}>Housekeeping.</Text>
                <Text style={{ fontSize: 16, margin: 4 }}>Before we start, we'll need to know a few things</Text>
                
                <View style={styles.infoContainer}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="E.g. Jane Smith"
                        value={name}
                        onChangeText={setName}
                    />
                    <Text style={styles.label}>Date of birth:</Text>
                    <TouchableOpacity style={styles.textInput} onPress={() => setOpenDatePicker(true)}>
                        <Text style={styles.placeHolder}>Tap to select a specific date</Text>
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        open={openDatePicker}
                        date={date}
                        onConfirm={(date) => {
                            setOpenDatePicker(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpenDatePicker(false)
                        }}
                    />

                    <Text style={styles.label}>Phone:</Text>
                    <PhoneInput
                        containerStyle={styles.textInput}
                        textContainerStyle={{
                            backgroundColor: Colors.light.backgroundFade,
                        }}
                        ref={phoneInput}
                        defaultCode="AU"
                        layout="first"
                        onChangeText={(text) => {
                            setphoneNum(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedphoneNum(text);
                        }}
                        withDarkTheme
                        withShadow
                        
                    />
                    
                </View>

            </Animated.View>
        )
    }
}

function SlideDescription({ slideNumber, nextSlide }: { slideNumber: number, nextSlide: () => void }) {
    return (
        <>
            <View style={styles.slideDescriptionSeparator} />
            <View style={styles.slideDescriptionBody}>
                <Text style={{ fontWeight: "bold", fontSize: 24, margin: 4 }}>{slideNumber === 2 ? description[1].title : description[slideNumber].title}</Text>
                <Text style={{ fontSize: 16, margin: 4, marginBottom: 18 }}>{slideNumber === 2 ? description[1].desc : description[slideNumber].desc}</Text>
            </View>
        </>
    );
}

const Colors = {
    light: {
      text: '#11181C',
      textlight: '#ebebeb',
      background: '#fff',
      backgroundLight: '#eeeeee',
      backgroundFade: '#dddde0',
      backgroundInput: '#d2d2df',
      borderInput: '#5f6169',
      buttonBlack: '#060606',
      buttonBorder: '#7d848c',
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    leftContainer: {
        flex: 1,
        width: '100%',
        padding: 32,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    maxContainer: {
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height,
        alignItems: "center",
        justifyContent: 'center',
    },
    wrapper: {
        backgroundColor: '#f00',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.backgroundFade,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: '100%',
    },
    image1: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    largeContainer: {
        width: Dimensions.get('window').width * 2, // MAGIC NUMBER LOOOOOOL
        height: Dimensions.get('window').height,
        position: 'absolute',
        left: 0,
        flexDirection: 'row',
    },

    slideDescriptionSeparator: {
        position: 'relative',
        top: -4,
        height: 4,
        backgroundColor: 'rgba(188, 188, 188, 0.5)',
    },
    slideDescriptionBody: {
        paddingBottom: 80,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light.backgroundLight,
    },
    slideDescription: {
        position: 'absolute',
        bottom: 0,
        height: '36%',
        width: '50%',
        backgroundColor: Colors.light.backgroundLight,
    },

    button: {
        position: 'absolute',
        top: Dimensions.get('window').height - 170,
        width: 144,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.buttonBlack,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: Colors.light.borderInput,
    },

    infoContainer: {
        width: '80%',
        height: 400,
        marginHorizontal: 'auto',
        marginVertical: 40,
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        shadowColor: "#001",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,

        elevation: 4,
    },
    label: {
        marginTop: 4,
        marginBottom: 8,
        marginHorizontal: 12
    },
    textInput: {
        width: Dimensions.get('window').width - 100,
        height: 48,
        marginBottom: 22,
        padding: 8,
        backgroundColor: Colors.light.backgroundFade,
        marginHorizontal: 'auto',
        borderRadius: 16,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        elevation: 0,
    },
    placeHolder: {
        color: '#666666',
        
    },
})

const tstyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBar: {
      flexDirection: 'row',
      
      paddingTop: StatusBar.currentHeight,
    },
    tabItem: {
        
      flex: 1,
      alignItems: 'center',
      padding: 16,
    },
    card: {
        width: '94%',
        height: 200,
        marginHorizontal: 'auto',
        marginVertical: 12,
        borderRadius: 12,
        backgroundColor: Colors.light.backgroundFade,
    },
    cardImgContainer: {
        flex: 3,
    },
    cardDesc: {
        flex: 2,
        padding: 16,
    }
});