import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>This is Profile Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({


    container:
    {
        flex:1,
        backgroundColor:"#E5E5E5",
        justifyContent:"center",
        alignItems:'center',
        
    }

})
