/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { AccessCheckoutTextInput } from '@worldpay/access-worldpay-checkout-react-native-sdk';

function App() {
  return (
    <SafeAreaProvider>
      <Text>Android problem</Text>
      <View>
        <AccessCheckoutTextInput nativeID="cvcInput" placeholder="CVC" />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
