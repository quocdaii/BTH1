import React from "react";
import {StyleSheet,
    View,
    Text
} from 'react-native'

const App = ()=>
{
    return (
        <View style={
            {
                width: 100,
                height: 100,
                backgroundColor:'#f18973',
                alignItems:'center',
                justifyContent:'center',
                alignSelf:"center",
                
            }
        }>
            <Text style={{color:'#fff'}}> Hello </Text>
        </View>
    );
}
export default App;