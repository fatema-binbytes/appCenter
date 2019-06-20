import {createAppContainer,createStackNavigator} from 'react-navigation'
import Home from './home'
import Test from './test'
import Test2 from './test2'

const AppStack = createStackNavigator({
  Home:{
    screen:Home
  },
  Test:{
      screen:Test
  },
  Test2:{
    screen:Test2
  }
})
export default createAppContainer(AppStack)
