import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../app/home_screen';
import { Settings } from 'react-native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Feed"
        component={HomeScreen}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Settings}
        options={{ drawerLabel: 'Updates' }}
      />
    </Drawer.Navigator>
  );
}