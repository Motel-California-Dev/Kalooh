import React from 'react';
import { SafeAreaView } from "react-native";
import { createStackNavigator } from 'react-navigation';

import SearchScreen from './SearchScreen';
import ViewNoteScreen from '../home/ViewNoteScreen'

export default SearchNavigator = createStackNavigator(
	{
		SearchScreen: SearchScreen,
		ViewNoteScreen: ViewNoteScreen,
	},
	{
		initialRouteName: 'SearchScreen',
		headerMode: "none",
	    navigationOptions: {
	      headerVisible: false
	    },
	}
);
