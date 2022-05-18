import React from 'react'

const toto = () => {
 
  
    const [Items, setItems] = useState([
        {key:1,item:'Item 1',},
        {key:2,item:'Item 2',},
        {key:3,item:'Item 3',},
        {key:4,item:'Item 4',},
        {key:5,item:'Item 5',},
        {key:6,item:'Item 6',},
        {key:7,item:'Item 6',},
        {key:8,item:'Item 6',},
        {key:9,item:'Item 6',},
        {key:11,item:'Item 6',},
        {key:12,item:'Item 6',},
        {key:13,item:'Item 6',},
        {key:14,item:'Item 6',},
        {key:15,item:'Item 6',},
      ]);
    const [FlatItems, setFlatItem] = useState([
        {key:1,name:'Item 1',},
        {key:2,name:'Item 2',},
        {key:3,name:'Item 3',},
        {key:4,name:'Item 4',},
        {key:5,name:'Item 5',},
        {key:6,name:'Item 6',},
        {key:7,name:'Item 6',},
        {key:8,name:'Item 6',},
        {key:9,name:'Item 6',},
        {key:11,name:'Item 6',},
        {key:12,name:'Item 6',},
        {key:13,name:'Item 6',},
        {key:14,name:'Item 6',},
        {key:15,name:'Item 6',},
      ]);
  
      const [Refreshing, setRefreshing] = useState(false)
      const onRefresh = () =>{
        setRefreshing(true);
        setItems( [...Items, {key:1, item:'myitem'}] )
        setRefreshing('false')
      }
  
    return (
  
      <SafeAreaView style={styles.container}>
                <ScrollView style={styles.body}>
  
  
              
  
  
  {/* refreshControl={
                  <RefreshControl 
                  refreshing={Refreshing}
                   onRefresh={onRefresh}
                   colors={['blue']}
                  />
                }  */}
  
  
  
                  
  
  
  
                      {/* <FlatList
                        data = {FlatItems}
                        renderItem={item => (
                                <View style={styles.item} key= {FlatItems.key}>
                                    <Text style = {styles.item}> {FlatItems.item}  </Text>
                                </View>
                      )}
                      /> */}
  
  
  
                      {/* {Items.map((object)=>{
                                return(
                                  <View style={styles.item}>
                                      <Text key= {object.key}  style = {styles.item}> {object.item} </Text>
                                  </View>
                                  )
                              })} */}
                </ScrollView>   
  
  
  
  
  
      </SafeAreaView>
    );
  }


  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: 'white',
    },
  
  
  
    // view1:{
    //     flex:1,
    //     backgroundColor:'yellow',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
  
  
    // view2:{
    //     flex:1,
    //     alignItems: 'center',
    //     backgroundColor:'red',
    //     justifyContent: 'center',
    // },
  
  
    // view3:{
    //     flex:1,
    //     alignItems: 'center',
    //     backgroundColor:'black',
    //     justifyContent: 'center',
    // },
  
  
    text:{
      alignItems : 'center',
      fontSize:30,
    },
    item:{
        backgroundColor:'blue',
        margin:5,
        justifyContent: 'center',
        alignItems:'center',
        padding:20,
    },
    body:{
      backgroundColor:'white',
    }
  
}


export default toto;