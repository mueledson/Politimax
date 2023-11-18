import Home from './pages/Home';
import Login from './pages/Login';
import Gestor from './pages/RegisterGest';
import Afiliado from './pages/RegisterFili';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Afiliados' component={Afiliado} options={{ headerShown: false }}  />
        <Stack.Screen name='Gestor' component={Gestor} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}