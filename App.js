
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Card,
  ActivityIndicator

} from 'react-native';

import { connect } from 'react-redux'

import { fetchPeopleFromAPI } from './actions'



class App extends Component {

  constructor(props){

    super(props);
     
    this.state = { people: [] , show : false , activity : null  }

  }

  componentWillReceiveProps(newProps) {

    console.log('compsonentWillReceiveProps............ from Api');

     let  arr = newProps.people.peopleReducer.people

     this.setState( {
      activity: false,
      show: true,
      people : [ ...this.state.people , ...arr ],
     })
   
  }


  getpeople = () => {

    this.setState({
      activity: true,
    })

    this.props.dispatch(fetchPeopleFromAPI())

  }

  render() {

    console.log("dddddddddddddddddddddddddd",this.state.people)

    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
           React Native  with Redux 

         </Text>
        <TouchableHighlight style={styles.button} onPress={ this.getpeople } >
          <Text style={styles.buttonText}>Load People</Text>
        </TouchableHighlight>

        {this.state.activity ? ( 
 
          <ActivityIndicator />

        ) : null }

        { this.state.show ? (

          this.state.people.map((data,i) => (
           
            <View>
            <Text key= {i}>{ data.name } </Text>
            </View>

          
           ))

        ) : null}

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    height: 60,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
});


function mapStateToProps(state) {
  return {
    people: state
  }
}

export default connect(mapStateToProps)(App)
