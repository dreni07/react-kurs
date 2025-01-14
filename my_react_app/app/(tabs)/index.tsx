import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {Link} from 'expo-router';
import data from './data.json';

const default_view = () => {

  const the_array = Array.from(data);

  return (
    <View style={styles.container}>
      <FlatList data={the_array} keyExtractor={the_data => the_data.id.toString()} renderItem={({item})=>(
        <View>
          <Link href={`/productDetails?product_id=${item.id}`}>{item.product_name}</Link>
        </View>
  )}
      />
       
    </View>
  );
}

export default default_view;

const styles = StyleSheet.create({
  container:{
    flex:1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'#333',
    fontFamily:'sans-serif',
    fontWeight:'900',
    marginVertical:10
  }
})