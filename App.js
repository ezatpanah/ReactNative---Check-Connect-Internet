import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,NetInfo} from 'react-native';


export default class App extends Component<{}> {

  constructor(props){
    super(props);
    this.state={connected:null};
  }

  componentWillMount(){
    NetInfo.isConnected.addEventListener('connectionChange',this.handleconnectionChange);
    NetInfo.isConnected.fetch().done((isConnected)=>this.setState({connected:isConnected}));
  }

  componentWillUnmount(){
    NetInfo.isConnected.removeEventListener('connectionChange',this.handleconnectionChange);
  }

  handleconnectionChange=(isConnected)=>{
      this.setState({connected:isConnected})
  }

  render() {
    if(this.state.connected!==null && this.state.connected){
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Online</Text>
        </View>
      )
    }
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Offline</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
