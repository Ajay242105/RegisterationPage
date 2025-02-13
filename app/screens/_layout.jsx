// // import Entypo from '@expo/vector-icons/Entypo';
// // import { Ionicons } from '@expo/vector-icons';
// // import AntDesign from '@expo/vector-icons/AntDesign';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import HomeScreen from './HomeScreen';
// // import ProfileScreen from './ProfileScreen';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import { NavigationContainer } from '@react-navigation/native';

// // const Tab = createBottomTabNavigator();

// // function BottomTabs() {
// //   return (
// //     <Tab.Navigator
// //       screenOptions={{
// //         tabBarStyle: {
// //           backgroundColor: "rgba(0,0,0,0.5)",
// //           position: "absolute",
// //           bottom: 0,
// //           left: 0,
// //           right: 0,
// //           shadowOpacity: 2,
// //           shadowRadius: 2,
// //           elevation: 2,
// //           shadowOffset: {
// //             width: 0,
// //             height: -2
// //           },
// //           borderTopWidth: 0
// //         }


// //       }}


// //     >
// //       <Tab.Screen
// //         name="Home"
// //         component={HomeScreen}
// //         options={{
// //           tabBarLabel: "Home",
// //           headerShown: false,
// //           tabBarLabelStyle: { color: "black" },
// //           tabBarIcon: ({ focused }) =>
// //             focused ? (
// //               <Entypo name="home" size={24} color="black" />
// //             ) : (
// //               <AntDesign name="home" size={24} color="grey" /> 
// //             ),
// //         }}
// //       />
// //       <Tab.Screen
// //         name="Profile"
// //         component={ProfileScreen}
// //         options={{
// //           tabBarLabel: "Profile",
// //           headerShown: false,
// //           tabBarLabelStyle: { color: "black" },
// //           tabBarIcon: ({ focused }) =>
// //             focused ? (
// //               <Ionicons name="person" size={24} color="white" />
// //             ) : (
// //               <Ionicons name="person-outline" size={24} color="white" />
// //             ),
// //         }}
// //       />
// //     </Tab.Navigator>
// //   );
// // }

// // const Stack = createNativeStackNavigator();
// // function Navigation() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator>
// //         <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// // export default Navigation;

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons"; 
import { NavigationIndependentTree } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import UploadPhoto from "./UploadPhoto";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          shadowOpacity: 4,
          shadowRadius: 4,
          elevation: 4,
          shadowOffset: {
            width: 0,
            height: -4,
          },
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "HomeScreen",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="white" />
            ) : (
              <AntDesign name="home" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "ProfileScreen",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="white" />
            ) : (
              <Ionicons name="person-outline" size={24} color="white" />
            ),
        }}
      />

<Tab.Screen
        name="Image"
        component={UploadPhoto}
        options={{
          tabBarLabel: "UploadImage",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="white" />
            ) : (
              <Ionicons name="person-outline" size={24} color="white" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationIndependentTree>
      <BottomTabs /> {/* Use BottomTabs directly without a Stack */}
    </NavigationIndependentTree>
  );
}

export default Navigation;


