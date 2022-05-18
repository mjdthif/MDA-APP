import React from 'react';
import{
        View, 
        Text, 
        StyleSheet,
        TouchableOpacity, 
        
}from 'react-native';

export const Task = (props) => {
  return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}/>
      </View>
  )
}

const styles = StyleSheet.create({
item:{
  backgroundColor: 'grey',
  padding: 15,
  borderRadius: 10,
  flexDirection: 'row',
  alignItems:'center',
  justifyContent: 'space-between',
  marginBottom: 20,
},
itemLeft:{
  flexDirection:'row',
  alignItems:'center',
  flexWrap:'wrap',
},
square:{
width:24,
height:24,
backgroundColor:'red',
opacity:0.4,
marginRight:15,
borderRadius:5,
},
itemText:{
 maxWidth: '80%', 
},
circular:{
  width:12, 
  height: 12, 
  borderColor: 'blue',  
  borderWidth:2, 
  borderRadius:5,
},


})
export default Task;
