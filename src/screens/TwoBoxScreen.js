import React,{useRef,useMemo,useCallback,useState} from 'react'
import { StyleSheet, Text, View ,ImageBackground,Dimensions, SafeAreaView, Alert,ScrollView} from 'react-native'
import { MaterialIcons ,MaterialCommunityIcons,AntDesign,Feather,Fontisto,SimpleLineIcons,FontAwesome} from '@expo/vector-icons';

import { RadioButton } from 'react-native-paper';
import BottomSheet,{  BottomSheetFlatList,TouchableOpacity,BottomSheetScrollView} from '@gorhom/bottom-sheet';
import { showMessage, hideMessage } from "react-native-flash-message";

const WIDTH = Dimensions.get('window').width

import {  FlatList } from 'react-native-gesture-handler';

const silent = (<Feather name="moon" size={30} color="#B3C0D3" />)
const Auto = (<MaterialCommunityIcons name="alpha-a" size={50} color="#B3C0D3" />)
const standard =(<MaterialCommunityIcons name="vector-triangle" size={24} color="#B3C0D3" />)
const strong =(<Fontisto name="propeller-4" size={24} color="#B3C0D3" />)
const low = (<SimpleLineIcons name="drop" size={24} color="#B3C0D3" />)
const medium = (<Fontisto name="blood-drop" size={24} color="#B3C0D3" />)

const DATA = [
  {
    id: '1',
    icon:silent,
    subtitle:"Silent"
  },

  {
    id: '2',
    subtitle:"Standard",
    icon:standard
   
  },
  {
    id: '3',
    subtitle:"Strong",
    icon:strong

  },
  {
    id: '4',
    icon:Auto,
    subtitle:"Auto"
    
  },
  
];



const DATAPower = [
  {
    id: '5',
    iconp:low,
    subtitlep:"Low"
  },

  {
    id: '6',
    subtitlep:"Medium",
    iconp:medium
   
  },
  {
    id: '7',
    subtitlep:"Auto",
    iconp:Auto,

  },
  
];




export default function TwoBoxScreen({navigation,route}) {
    const [checked, setChecked] = React.useState('first');
    const [click, setClick] = useState(0);
    const [clickp, setClickp] = useState(0);

const [mode , setMode]= useState('Silent')
const [level , setLevel] = useState('Low')
    


      // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['20%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);





  const renderItem = ({item, index}) => {
    const OnClick = () => {
     
      setClick(index);
      if (index === 0) {
      setMode('Silent')
      }

      if (index === 1) {
        setMode('Standard')
        
      }

      if (index === 2) {
        setMode('Strong')
        
      }

      if (index === 3) {
        setMode('Auto')
      }
    

    };

    return (
      <View>

        <TouchableOpacity
        underlayColor="#fff"
        activeOpacity={0.7}
        onPress={()=>OnClick()}
        style={{...styles.colingBoxCircle,
          backgroundColor:
          index===click ? '#5398FD':'#fff',
        }}
        >
    <Text>{item.icon}</Text>
      
        </TouchableOpacity>
        
        <Text style={{fontSize:16,color:'#7F7F7F',textAlign:'center',alignSelf:'center',marginTop:10}}>{item.subtitle}</Text>

      </View>
    );
  };




  const renderItemPower = ({item, index}) => {
    const OnClickPower = () => {
     
      setClickp(index);
      if (index === 0) {
      setLevel('Low')
      }

      if (index === 1) {
        setLevel('Medium')
        
      }

      if (index === 2) {
        setLevel('Auto')
        
      }

     
    

    };

    return (
      <View>

        <TouchableOpacity
        
        onPress={()=>OnClickPower()}
        style={{...styles.colingBoxCircle,
          backgroundColor:
          index===clickp ? '#5398FD':'#fff',
          marginRight:40
        }}
        >
    <Text>{item.iconp}</Text>
      
        </TouchableOpacity>
        
        <Text style={{fontSize:16,color:'#7F7F7F',textAlign:'center',marginTop:10,marginRight:28}}>{item.subtitlep}</Text>

      </View>
    );
  };
    

  const { title} = route.params;
    return (
        <SafeAreaView style={styles.container}>
       
         
         <View style={styles.headerContainer}>

         <MaterialIcons 
         onPress={()=>navigation.goBack()}
         name="arrow-back-ios" size={30} color="#A0A0A0" />
         <Text style={styles.homeText}>{title}</Text>
         <MaterialCommunityIcons name="dots-vertical" size={28} color="#A0A0A0" />

         </View>


         <View style={styles.towerDetails}>
          
          <View>
              <Text style={styles.title}>9</Text>
              <Text style={styles.description}>Towers</Text>
          </View>

          <View>
              <Text style={styles.title}>49d</Text>
              <Text style={styles.description}>In Use</Text>
          </View>

          <View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={styles.title}>100</Text>
              <Text style={{...styles.title,fontSize:12,bottom:5,color:'#9D9D9D',}}> %</Text>

              </View>

              <Text style={styles.description}>Uptime</Text>
          </View>
        
        </View>

        <ScrollView
        contentContainerStyle={{paddingBottom:200,backgroundColor:"#E6E9EE"}}
        >
        <View style={styles.fotterContainer}>

            <View style={styles.addContainer}>
            <MaterialIcons name="addchart" size={28} color="#7F7F7F" />
            </View>


            <View>
             
             <ImageBackground
             resizeMode={'contain'}
             style={styles.asset2}
             source={require('../images/asset2.png')}
             >
              
              <View>

               <View style={{flexDirection:'row',alignItems:'center',
               marginBottom:22,justifyContent:'space-around',marginTop:16,marginRight:5}}>

                   <View>
                      
                      
                       <TouchableOpacity
                        onPress={() => 
                          {
                            setChecked('first')
                            showMessage({
                              animated:true,
                              floating:true,
                              message: "First Tower Clicked",
                              type: "success",
                              icon:'success'
                            });
                          }
                        }
                       style={{...styles.square,right:3}}/>
                       

                     <View style={{position:'absolute',bottom:39,left:-22}}>
                     <RadioButton.Android
                      color={'#000'}
                      
                        value={'first'}
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => 
                          {
                            setChecked('first')
                            showMessage({
                              animated:true,
                              floating:true,
                              message: "First Tower Clicked",
                              type: "success",
                              icon:'success'
                            });
                          }
                          }


                    />
                     </View>
                       </View>

                       <View>
                      
                      
                       <TouchableOpacity 
                          onPress={() => 
                            {
                              setChecked('second')
                              showMessage({
                                animated:true,
                                floating:true,
                                message: "Second Tower Clicked",
                                type: "success",
                                icon:'success'
                              });
                            }
                          }

                       style={{...styles.square,right:-0.5}}/>
                      

                    <View style={{position:'absolute',bottom:39,left:-22}}>
                    <RadioButton.Android
                     color={'#000'}
                     
                       value={'second'}
                       status={ checked === 'second' ? 'checked' : 'unchecked' }

                       onPress={() => 
                      
                        {
                          setChecked('second')
                          showMessage({
                            animated:true,
                            floating:true,
                            message: "Second Tower Clicked",
                            type: "success",
                            icon:'success'
                          });
                        }
                      }
                   />
                    </View>
                      </View>


                      <View>
                      
                      
                      <TouchableOpacity
                         onPress={() => 
                          {
                            setChecked('third')
                            showMessage({
                              animated:true,
                              floating:true,
                              message: "Third Tower Clicked",
                              type: "success",
                              icon:'success'
                            });
                          }
                        }
                      style={{...styles.square,left:4}}/>
                      

                    <View style={{position:'absolute',bottom:39,left:-22}}>
                    <RadioButton.Android
                     color={'#000'}
                     
                     value={'third'}
                     status={ checked === 'third' ? 'checked' : 'unchecked' }
                       onPress={() => 
                        {
                          setChecked('third')
                          showMessage({
                            animated:true,
                            floating:true,
                            message: "Third Tower Clicked",
                            type: "success",
                            icon:'success'
                          });
                        }
                      }
                   />
                    </View>
                      </View>
                                    

               </View>



               
               <View style={{flexDirection:'row',alignItems:'center',marginBottom:25,
               justifyContent:'space-around',marginTop:16,marginRight:5}}>

                   <View>
                      
                      
                   <TouchableOpacity
                      onPress={() => 
                        {
                          setChecked('fourth')
                          showMessage({
                            animated:true,
                            floating:true,
                            message: "Fourth Tower Clicked",
                            type: "success",
                            icon:'success'
                          });
                        }
                      }
                   style={{...styles.square,right:3.5}}/>
                       

                     <View style={{position:'absolute',bottom:39,left:-22}}>
                     <RadioButton.Android
                      color={'#000'}
                      
                        value={'fourth'}
                        status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                        onPress={() => 
                          {
                            setChecked('fourth')
                            showMessage({
                              animated:true,
                              floating:true,
                              message: "Fourth Tower Clicked",
                              type: "success",
                              icon:'success'
                            });
                          }
                        
                        }
                    />
                     </View>
                       </View>

                       <View>
                      
                      
                       <TouchableOpacity 
                           onPress={() => 
                            {
                              setChecked('fifth')
                              showMessage({
                                animated:true,
                                floating:true,
                                message: "Fifth Tower Clicked",
                                type: "success",
                                icon:'success'
                              });
                            }
                          }
                       
                       style={{...styles.square,right:-0.5}}/>
                      

                    <View
                   
                    style={{position:'absolute',bottom:39,left:-22}}>

                    <RadioButton.Android
                     color={'#000'}
                     
                       value={'fifth'}
                       status={ checked === 'fifth' ? 'checked' : 'unchecked' }

                       onPress={() => 
                      
                        {
                          setChecked('fifth')
                          showMessage({
                            animated:true,
                            floating:true,
                            message: "Fifth Tower Clicked",
                            type: "success",
                            icon:'success'
                          });
                        }
                      }
                   />
                    </View>
                      </View>


                      <View>
                      
                      
                      <TouchableOpacity 
                         onPress={() => 
                          {
                            setChecked('six')
                            showMessage({
                              animated:true,
                              floating:true,
                              message: "Sixth Tower Clicked",
                              type: "success",
                              icon:'success'
                            });
                          }
                        }
                      style={{...styles.square,left:5}}/>
                      

                    <View style={{position:'absolute',bottom:39,left:-22}}>
                    <RadioButton.Android
                     color={'#000'}
                     
                     value={'six'}
                     status={ checked === 'six' ? 'checked' : 'unchecked' }
                       onPress={() => 
                      
                        {
                          setChecked('six')
                          showMessage({
                            animated:true,
                            floating:true,
                            message: "Sixth Tower Clicked",
                            type: "success",
                            icon:'success'
                          });
                        }
                      }
                   />
                    </View>
                      </View>
                                    

               </View>



               
            
            
               <View
               
               
               style={{flexDirection:'row',alignItems:'center',
            
            justifyContent:'space-around',marginTop:16,marginRight:5
            }}>

                   <View>
                      
                      
                   <TouchableOpacity 
                   
                   onPress={() => 
                    {
                      setChecked('seven')
                      showMessage({
                        animated:true,
                        floating:true,
                        message: "Seventh Tower Clicked",
                        type: "success",
                        icon:'success'
                      });
                    }
                  }
                   style={{...styles.square,right:5,top:1,}}/>

                     <View style={{position:'absolute',bottom:39,left:-22}}>
                     <RadioButton.Android
                      color={'#000'}
                      
                        value={'seven'}
                        status={ checked === 'seven' ? 'checked' : 'unchecked' }
                        onPress={() => 
                        
                          {
                            setChecked('seven')
                            showMessage({
                              animated:true,
                              floating:true,
                              message: "Seventh Tower Clicked",
                              type: "success",
                              icon:'success'
                            });
                          }
                        
                        }
                    />
                     </View>
                       </View>

                       <View>
                      
                      
                       <TouchableOpacity
                          onPress={() => 
                            {
                              setChecked('eight')
                              showMessage({
                                animated:true,
                                floating:true,
                                message: "Eight Tower Clicked",
                                type: "success",
                                icon:'success'
                              });
                            }
                          }
                       style={{...styles.square,right:-0.5,top:1}}/>
                      

                    <View style={{position:'absolute',bottom:39,left:-22}}>
                    <RadioButton.Android
                     color={'#000'}
                     
                       value={'eight'}
                       status={ checked === 'eight' ? 'checked' : 'unchecked' }

                       onPress={() => 
                        {
                          setChecked('eight')
                          showMessage({
                            animated:true,
                            floating:true,
                            message: "Eighth Tower Clicked",
                            type: "success",
                            icon:'success'
                          });
                        }
                      
                      }
                   />
                    </View>
                      </View>


                      <View>
                      
                      
                      <TouchableOpacity
                         onPress={() => 
                          {
                            setChecked('nine')
                            showMessage({
                              animated:true,
                              floating:true,
                              message: "Ninth Tower Clicked",
                              type: "success",
                              icon:'success'
                            });
                          }
                        }
                      style={{...styles.square,left:6,top:1}}/>
                      

                    <View style={{position:'absolute',bottom:39,left:-22}}>
                    <RadioButton.Android
                
                     color={'#000'}
                     
                     value={'nine'}
                     status={ checked === 'nine' ? 'checked' : 'unchecked' }
                       onPress={() => 
                        {
                          setChecked('nine')
                          showMessage({
                            animated:true,
                            floating:true,
                            message: "Ninth Tower Clicked",
                            type: "success",
                            icon:'success'
                          });
                        }
                      
                      }
                   />
                    </View>
                      </View>
                                    

               </View>
               

              </View>



             </ImageBackground>

            </View>

        </View>
      
      </ScrollView>
        <BottomSheet
       handleComponent={() =>
        <View style={styles.closeLineContainer}>
          <View style={styles.closeLine}></View>
        </View>
      }
       backgroundComponent={() =>
        <View style={styles.contentContainer}/>
      }

      backdropComponent={() =>
        <View style={styles.backdrop}/>
      }
        
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:20}}
        >
        <View style={{...styles.bottomSheetContainer,}}>

            <View style={styles.onOffContainer}>

                <View style={styles.onlineBox}>

                    <View style={styles.onlineCircle}>
                    <MaterialCommunityIcons name="lightning-bolt" size={28} color="#fff" />
                    </View>

                    <Text style={{...styles.homeText,fontSize:20}}>Online</Text>
                </View>



                <View style={styles.onlineBox}>

                    <View style={styles.turnoffCircle}>
                    <AntDesign name="poweroff" size={20} color="#fff" />
                    </View>

                    <Text style={{...styles.homeText,fontSize:20}}>Online</Text>
                </View>
               
            
            </View>


            <View style={styles.coolingModeContainer}>

            <Text style={{...styles.homeText,fontSize:22,marginLeft:15}}>Cooling Mode <Text style={{...styles.homeText,fontSize:18,color:'#BBBBBB'}}>| {mode}</Text></Text>
              

            
        <FlatList
        nestedScrollEnabled
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop: 20,}}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />


      
              </View>



                          <View style={styles.coolingModeContainer}>

            <Text style={{...styles.homeText,fontSize:22,marginLeft:15}}>Power Level <Text style={{...styles.homeText,fontSize:18,color:'#BBBBBB'}}>| {level}</Text></Text>
              


            <FlatList
            nestedScrollEnabled
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{marginTop: 20,}}
            data={DATAPower}
            renderItem={renderItemPower}
            keyExtractor={item => item.id}
            />



              </View>







                          <View style={styles.coolingModeContainer}>

                          <View style={styles.scheduleTaskListContainer}>

                            <View style={{flexDirection:'row',alignItems:"center"}}>
                           
                           <View style={styles.taskscircle}>
                             
                           <FontAwesome name="clock-o" size={24} color="#fff" />
                            </View>


                            <View style={{marginLeft:15}}>
                  <Text style={{...styles.homeText,fontSize:21}}>Scheduled Tasks</Text>
                  <Text style={{...styles.homeText,fontSize:17,color:'#808080',lineHeight:30}}>No scheduled tasks</Text>
             
                              </View>

                              </View>

                              <SimpleLineIcons name="arrow-right" size={24} color="#B8B8B8" />

                            </View>

                            <View style={styles.seprator}/>





                   <View style={styles.scheduleTaskListContainer}>

                    <View style={{flexDirection:'row',alignItems:"center"}}>

                    <View style={styles.taskscircle}>
                    
                    <AntDesign name="calendar" size={22} color="#fff" />
                    </View>


                    <View style={{marginLeft:15}}>
                    <Text style={{...styles.homeText,fontSize:21}}>Tower Management</Text>
                    <Text style={{...styles.homeText,fontSize:18,color:'#808080',lineHeight:30}}>Custom vendor settings</Text>

                      </View>

                      </View>

                      <SimpleLineIcons name="arrow-right" size={24} color="#B8B8B8" />
                      

                    </View>

                    <View style={styles.seprator}/>


                                  <View style={styles.scheduleTaskListContainer}>

              <View style={{flexDirection:'row',alignItems:"center"}}>

              <View style={styles.taskscircle}>

              <SimpleLineIcons name="volume-1" size={24} color="#fff" />
              </View>


              <View style={{marginLeft:15}}>
              <Text style={{...styles.homeText,fontSize:21}}>Voice Alerts</Text>
                </View>

                </View>

                <SimpleLineIcons name="arrow-right" size={24} color="#B8B8B8" />
                

              </View>

              

                          </View> 

        </View>
        </BottomSheetScrollView>
      </BottomSheet>

           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({


    container:
    {
        flex:1,
        backgroundColor:"#fff",
        
    },

    homeText:
    {
        fontSize:26,
        color:'#000000',

    },

    headerContainer:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        paddingHorizontal:20,
        paddingTop:25,
    },

    title:
    {

        fontSize:26,
        color:'#000000',
        textAlign:'center'

    },

    description:
    {
        fontSize:18,
        color:'#9D9D9D',
        lineHeight:35
        

    },

    towerDetails:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginTop:30,
    },

    fotterContainer:
    {
        flex:1,
        backgroundColor:'#E6E9EE',
        marginTop:10,
        borderTopWidth:1,
        borderTopColor:'#E6E9EE',
    },

    addContainer:
    {
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginTop:16,
        alignSelf:'flex-end',
        marginRight:16,
    },

    asset2:
    {
       width:240,
       height:240,
       alignSelf:'center',
       marginTop:20,
       
    },

    square:
    {
        width:43,
        height:43,
        borderWidth:4,
        borderColor:'#3AFCFC',
    },
    bottomSheetContainer:
    {
        flex: 1,
        
        
   
    },
    
        contentContainer: {
          ...StyleSheet.absoluteFillObject,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
           backgroundColor: '#E6E9EE',
       
        },

        
        closeLineContainer: {
            alignSelf: 'center'
          },
          closeLine: {
            width: 40,
            height: 6,
            borderRadius: 3,
            backgroundColor: 'transparent',
            marginTop: 9,
          },

          onlineBox:
          {
              width:WIDTH/2.2,
              backgroundColor:'#fff',
              height:80,
              justifyContent:'space-evenly',
              alignItems:'center',
              flexDirection:'row',
              shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
             padding:8,
              elevation: 5,
              borderRadius:10

              
          },

          onlineCircle:
          {

            width:45,
            height:45,
            borderRadius:25,
            backgroundColor:'#3FD535',
            justifyContent:'center',
            alignItems:'center',
            

          },

          turnoffCircle:
          {
            width:45,
            height:45,
            borderRadius:25,
            backgroundColor:'#5199FD',
            justifyContent:'center',
            alignItems:'center',
            

          },

          onOffContainer:
          {
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-around'
          },

          coolingModeContainer:
          {
            width:WIDTH-20,
            alignSelf:'center',
            padding:10,
            marginTop:15,
            backgroundColor:'#fff',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderRadius:10,
            

          },

          colingBoxCircle:

          {
            width:65,
            height:65,
            borderRadius:35,
            borderWidth:1,
            borderColor:'#D2D2D2',
            marginLeft:15,
            marginRight:8,
            justifyContent:"center",
            alignItems:'center',

          },

          taskscircle:
          {
            width:45,
            height:45,
            borderRadius:25,
            backgroundColor:'#C2C6D1',
            justifyContent:'center',
            alignItems:'center',


          },

          scheduleTaskListContainer:
          {
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingHorizontal:10,
            marginBottom:5,
            marginTop:10
          },

          seprator:
          {
            width:WIDTH-20,
            height:1,
            backgroundColor:'#D4D4D4',
            marginTop:10,
            alignSelf:'center',
            opacity:0.7
          }

        

})
