import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/views/home/home';
import { RegisterScreen } from './src/views/register/register';
import { StackNavigationProp } from '@react-navigation/stack';

export type ListaPaginas={
  HomeScreen: undefined,
  RegisterScreen: undefined
  
}
const Stack = createNativeStackNavigator<ListaPaginas>();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:true}}>        

        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'BIENVENIDOS', headerTitleAlign: 'center',}} 
          
        />
        
        {<Stack.Screen name="Registro de usuario" component={RegisterScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;