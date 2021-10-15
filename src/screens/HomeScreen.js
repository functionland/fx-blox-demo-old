import React from 'react'
import { StyleSheet, Text, View ,Dimensions, Image, TouchableOpacity} from 'react-native'
import { AntDesign ,Ionicons,Entypo,FontAwesome} from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height


import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            
            
            <View style={styles.headerContainer}>

                <View style={styles.headerLeft}>

                    <Text style={styles.mybox}>My Box</Text>
                    <AntDesign name="caretdown" size={9} color="black" />

                </View>

                <View style={styles.headerRight}>

                <Ionicons name="notifications-outline" size={24} color="black" />
                <Menu >
      <MenuTrigger>
      <Entypo name="plus" size={28} color="black" />
        </MenuTrigger>
        <MenuOptions
      optionsContainerStyle ={{marginTop:0,borderRadius:16,}}
      >
        <MenuOption onSelect={()=>navigation.navigate('AddTowerScreen')}>
        <Text style={{color:"#404040",fontSize:14*1.1,marginLeft:16,marginBottom:20,marginTop:20,fontWeight:'bold'}}>Add a tower
</Text>
        <View style ={{borderBottomWidth:0.5,borderBottomColor:'#D9D7D7',width:200,alignSelf:'center'}}/>
        </MenuOption>
        <MenuOption   onSelect={()=>navigation.navigate('QrScanScreen')}>

        <Text style={{color:"#404040",fontSize:14*1.1,
        marginBottom:20,marginTop:20,marginLeft:16,fontWeight:'bold'}}>Scan</Text>
       
        </MenuOption>
        
      </MenuOptions>
    </Menu>
               

                </View>

            </View>

            <View style={styles.mainContentContainer}>

                <View style={styles.myfavCotainer}>

                <Text style={styles.favorites}>Favorites</Text>
                <View style={styles.menuContainer}>

                <Entypo name="menu" size={30} color="black" />
                </View>

                </View>

                <View style={styles.boxesCntainer}>

                <TouchableOpacity
                onPress={()=>navigation.navigate('TwoBoxScreen',
                {
                    title:'Home'
                }
                )}
                activeOpacity={0.7}
                style={styles.boxContainer}>

                    <View style={styles.boxUperContainer}>
                        <Image
                        style={styles.imagebox}
                        source={require('../images/homebox-min.png')}/>

                        <View style={styles.iConatiner}>
                         
                        <FontAwesome name="info" size={24} color="#9B9B9B" />

                        </View>
                    </View>

                    <Text style={styles.homeText}>Home</Text>

                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>navigation.navigate('TwoBoxScreen',{
                   
                    title:'Parents'
                
                })}
                activeOpacity={0.7}
                style={styles.boxContainer}>

                    <View style={styles.boxUperContainer}>
                        <Image
                        style={styles.imagebox}
                        source={require('../images/homebox-min.png')}/>

                        <View style={styles.iConatiner}>
                         
                        <FontAwesome name="info" size={24} color="#9B9B9B" />

                        </View>
                    </View>

                    <Text style={styles.homeText}>Parents</Text>

                </TouchableOpacity>
            

                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({


    container:
    {
        flex:1,
        backgroundColor:"#E5E5E5",
      
        
    },

    headerContainer:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginTop:26,

    },

    mybox:
    {
        fontWeight:'bold',
        fontSize:16,
        color:'#323232'

    },

    headerLeft:
    {
        flexDirection:'row',
        alignItems:'center',
        width:'32%',
        justifyContent:'space-between'

    },

    headerRight:
    {
        flexDirection:'row',
        alignItems:'center',
        width:'21%',
        justifyContent:'space-between'

    },

    favorites:
    {
        fontWeight:'bold',
        fontSize:24,
        color:'#494949'
    },

    menuContainer:
    {
        width:65,
        height:42,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#DBDBDB',
        borderRadius:18,
    },
    myfavCotainer:
    {
        flexDirection:'row',
       justifyContent:'space-between',
       paddingHorizontal:20,
       alignItems:'center',
       marginTop:20,
       marginBottom:16,

    },

    boxContainer:
    {
        width:WIDTH/2.2,
        padding:0,
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
       padding:8,
        elevation: 5,
        marginBottom:16,

    },

    imagebox:
    {
        width:65,
        height:65,
        resizeMode:'contain'
    },

    iConatiner:
    {
        width:40,
        height:40,
        borderRadius:25,
        backgroundColor:'#F4F4F4',
        justifyContent:'center',
        alignItems:'center',
        marginRight:5
        


    },
    boxUperContainer:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },

    homeText:
    {
        color:'#B4B4B4',
        fontSize:15,
        marginTop:15,
        paddingHorizontal:10,

    },
    boxesCntainer:
    {
        paddingHorizontal:20,
    },

    mainContentContainer:
    {

  
    flex:0.85,
    justifyContent:'center'

    }

})
