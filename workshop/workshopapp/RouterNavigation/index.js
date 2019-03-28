import { createBottomTabNavigator, createAppContainer,createStackNavigator } from "react-navigation";
import Main from "../Screen/Main"
import Page1 from "../Screen/Page1"
import Page2 from "../Screen/Page2"
import Page3 from "../Screen/Page3"

const stack = createStackNavigator({
    main :Main,
    page3:Page3,   
})
const navigation = createBottomTabNavigator({
    main :stack,
    page1:Page1,
    page2:Page2,
})

export default createAppContainer(navigation)

