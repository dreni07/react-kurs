import {View,Text,StyleSheet} from 'react-native';
import data from './data.json';

const product_details = ({route}) => {
    const to_array = Array.from(data);
    const {product_id} = route.query || route.params;
    const the_product = to_array.find((product) => product.id === product_id)
    return(
        <View>

        </View>
    )
}

export default product_details;