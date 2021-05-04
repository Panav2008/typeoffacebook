import {createDrawerNavigator} from "react-navigation-drawer"
import CustomSideBarMenu from "./CustomSideBarMenu"
import Home from "../Screens/HomeScreen"
export const AppDrawerNavigator=createDrawerNavigator({
    Home:{screen:Home},
},
{contentComponent:CustomSideBarMenu
},
{intialRouteName:"Home"})

