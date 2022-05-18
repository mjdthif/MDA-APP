import { StatusBar} from 'expo-status-bar';
import { useState } from 'react';
import Task from './Components/Task';
import { 
   StyleSheet,
   Text, 
   View, 
   Alert, 
   SafeAreaView,
   ScrollView,
   RefreshControl,
   FlatList,

   
  } from 'react-native';


const App = () => {

      return(
        <SafeAreaView>
                <View>
                  <View style={styles.taskContainer}>
                       <Text style={styles.title}>Today's Task</Text>
                       <View style={styles.items}>
                          {/* {this is tasks will go} */}
                          <Task text={'task1'}/>
                          <Task text={'task2'}/>
                          <Task text={'task3'}/>
                       </View>
                  </View>
              </View>
        </SafeAreaView>
       
      )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  taskContainer:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  title:{
    fontSize:24,
    fontWeight:'bold',

  },
  items:{
    marginTop:30,

},
})
export default App;