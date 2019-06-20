import {createAppContainer,createStackNavigator} from 'react-navigation'
import Home from './home'
import Test from './test'

const AppStack = createStackNavigator({
  Home:{
    screen:Home
  },
  Test:{
      screen:Test
  }
})
export default createAppContainer(AppStack)
