import React from 'react'
import { SafeAreaView, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { Ionicons,AntDesign,FontAwesome } from '@expo/vector-icons';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

export default function AddTowerScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
            contentContainerStyle={{paddingBottom:20}}
            showsVerticalScrollIndicator={false}>


           <View style={styles.header}>
           <Ionicons 
           onPress={()=>navigation.goBack()}
           name="arrow-back" size={28} color="black" />

           <View style={styles.headerRight}>
            
           <AntDesign name="search1" size={22} color="black" />
           <AntDesign name="questioncircleo" size={20} color="black" />
            </View>
           </View>


           <View style={{marginTop:30,paddingHorizontal:24}}>
           <Text style={{...styles.homeText,fontSize:26}}>Add Tower</Text>
           <Text style={{...styles.homeText,fontSize:16,color:'#808080',lineHeight:50}}>Auto-detecting ...</Text>


           <View style={styles.outerCircle}>
           <View style={styles.backgroundCircle}>
            <View style={{width:15,height:15,backgroundColor:'#fff',borderRadius:8}}/>
            
            </View>
            </View>
            <Text style={{...styles.homeText,fontSize:13,color:'#7A7A7A'}}>Place the phone as close to the target device as possible</Text>
           
           <View style={styles.seprator}/>
           <Text style={{...styles.homeText,fontSize:16,color:'#808080',paddingHorizontal:10,paddingTop:40}}>Add manually</Text>


           <TouchableOpacity
           activeOpacity={0.5}
           style={styles.storageContainer}>
           <FontAwesome name="database" size={40} color="black" />
           <Text style={{...styles.homeText,fontSize:17}}>Storage</Text>
            </TouchableOpacity>
           </View>
           </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

container:
{
    flex:1,
    backgroundColor:"#FFFFFF",

},

header:
{
flexDirection:'row',
alignItems:"center",
justifyContent:'space-between',
paddingHorizontal:20,
paddingTop:25,
},

headerRight:
{
flexDirection:"row",
alignItems:'center',
width:65,
justifyContent:'space-between',

},
homeText:
{
    fontSize:26,
    color:'#000000',

},

backgroundCircle:
{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:'#90D8D5',
    justifyContent:"center",
    alignItems:'center',
  
},

outerCircle:
{
    width:170,
    height:170,
    borderRadius:100,
    backgroundColor:'#E5FFFE',
    justifyContent:"center",
    alignItems:"center",
    alignSelf:'center',
    marginTop:40,
},

seprator:
{
    width:widthPercentageToDP('85%'),
    height:1,
    backgroundColor:'#7A7A7A',
    alignSelf:'center',
    opacity:0.2,
    marginTop:heightPercentageToDP('15%')
},

storageContainer:
{
    width:widthPercentageToDP('45%'),
    padding:14,
   backgroundColor:'#F5F5F5',
   borderRadius:12,
   flexDirection:'row',
   alignItems:'center',
   justifyContent:"space-around",
   marginTop:heightPercentageToDP('4%')
}

})
