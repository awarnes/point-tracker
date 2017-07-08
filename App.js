import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginUsername: '',
      loginPassword: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Point Tracker!</Text>
        <Text>Please Log In or Create an Account!</Text>
        <TextInput
          autoFocus={true}
          style={{height: 40}}
          placeholder='Username'
          onChange={(loginUsername) => this.setState({loginUsername})}
          value={this.state.loginUsername}/>
        <TextInput
          style={{height: 40}}
          secureTextEntry={true}
          placeholder='Password'
          onChange={(loginPassword) => this.setState({loginPassword})}
          value={this.state.loginPassword}/>
        <Button
          onPress={() => {Alert.alert('This will let you log in eventually!')}} title="Log In!"/>
        <Button
          onPress={() => {Alert.alert('This will let you create an account eventually!')}} title="Create Account"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
