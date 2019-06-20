import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'


class Test2 extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>The Third screen ^_^</Text>
        <Button title={"Go Back"} onPress={()=>this.props.navigation.goBack()}/>
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50
  },

  messages: {
    marginTop: 30,
    textAlign: 'center'
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  }
})

/**
 * Configured with a MANUAL check frequency for easy testing. For production apps, it is recommended to configure a
 * different check frequency, such as ON_APP_START, for a 'hands-off' approach where CodePush.sync() does not
 * need to be explicitly called. All options of CodePush.sync() are also available in this decorator.
 */

export default Test2