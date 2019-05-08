import React from 'react';
import { SafeAreaView } from "react-native";
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import CreateNoteScreen from './CreateNoteScreen';
import ChooseLocationScreen from './ChooseLocationScreen';
import ViewNoteScreen from './ViewNoteScreen'

export default HomeStackNavigator = createStackNavigator(
	{
		HomeScreen: HomeScreen,
		ViewNoteScreen: ViewNoteScreen,
		CreateNoteScreen: CreateNoteScreen,
		ChooseLocationScreen: ChooseLocationScreen,
	},
	{
		initialRouteName: 'HomeScreen',
		headerMode: "none",
	    navigationOptions: {
	      headerVisible: false
	    },
	}
);


