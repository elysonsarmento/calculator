import {StyleSheet, Text, View} from 'react-native';
import React from 'react'

const style = StyleSheet.create({
    display:{
        flex: 1,
        padding: 12,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    displayValue:{
        fontSize: 60,
        color: '#fff',

    }
    
})  

export default props =>
<View style={style.display}>
    <Text style={style.displayValue}
    numberOfLines={1}>{props.value}</Text>
</View>