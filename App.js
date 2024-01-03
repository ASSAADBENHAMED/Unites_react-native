import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './Screens/HomeScreen';
import InputScreen from './Screens/InputScreen';
import ResultScreen from './Screens/ResultScreen';
import AboutScreen from "./Screens/AboutScreen";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Accueil" }}
        />
        <Stack.Screen
          name="GigabytesToMegabytes"
          component={InputScreen}
          options={{ title: "Gigabytes vers Megabytes" }}
        />
        <Stack.Screen
          name="MegabytesToGigabytes"
          component={InputScreen}
          options={{ title: "Megabytes vers Gigabytes" }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ title: "Résultat" }}
        />
      </Stack.Navigator>
      <AboutScreen />
    </NavigationContainer>
  );
};

export default App;
