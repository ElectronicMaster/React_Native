import {View,Text,Image,ImageBackground,ScrollView,Button, Pressable} from 'react-native'
const logoImg = require('./assets/adaptive-icon.png')

export default function App(){
  return (
    <View style={{flex:1, backgroundColor: "plum", padding: 60}}>
        <Button title="home" onPress={()=>{console.log("Button Pressed")}} color={"midnightblue"} disabled={false}/>
        <Pressable onPress={()=>{
            console.log("Text Pressed")
        }}>
            <Text style={{margin:20}}>Hello World</Text>
        </Pressable>
    </View>
  )
}