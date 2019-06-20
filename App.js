import React,{Component} from 'react'
import AppStack from './src/navigation'

import CodePush from 'react-native-code-push'

class App extends Component {
 
  componentDidMount() {
   
    this.sync()
  }
  codePushStatusDidChange(syncStatus) {
   
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.setState({ syncMessage: 'Checking for update.' })
        break
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setState({ syncMessage: 'Downloading package.' })
        break
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        this.setState({ syncMessage: 'Awaiting user action.' })
        break
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        this.setState({ syncMessage: 'Installing update.' })
        break
      case CodePush.SyncStatus.UP_TO_DATE:
        this.setState({ syncMessage: 'App is updated.' })
        break
      case CodePush.SyncStatus.UPDATE_IGNORED:
        this.setState({
          syncMessage: 'Update cancelled by user.',
          progress: false
        })
        break
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({
          syncMessage: 'Update installed and will be applied on restart.',
          progress: false
        })
        break
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        this.setState({
          syncMessage: 'An unknown error occurred.',
          progress: false
        })
        break
    }
  }

  /** Update is downloaded silently, and applied on restart (recommended) */
  async sync() {
    CodePush.sync(
      { installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: true },
      this.codePushStatusDidChange()
    )
  }
  render(){
    return( 
      <AppStack/>
    )
  }
 
}
let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL }

App = CodePush(codePushOptions)(App)

export default App

