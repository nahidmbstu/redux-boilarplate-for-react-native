
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Card,

} from 'react-native';

import { connect } from 'react-redux'

import { fetchPeopleFromAPI } from './actions'



class App extends Component {

  constructor(props){

    super(props);
     
    this.state = { name : ''  , height : '' , show : false  }

  }

  componentWillReceiveProps(newProps) {

    console.log('compsonentWillReceiveProps............ from Api');

     console.log(newProps)

     console.log(newProps.people.peopleReducer.people)

     let  arr = newProps.people.peopleReducer.people[0]

     this.setState( {
         
      name : arr.name ,

      height:arr.height,

      show: true,


     })

    
    console.log("new peoples state --------- ", this.state.name)
   
  }


  getpeople = () => {

    this.props.dispatch(fetchPeopleFromAPI())

  }

  render() {

    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
           React Native  with Redux 

         </Text>
        <TouchableHighlight style={styles.button} onPress={ this.getpeople } >
          <Text style={styles.buttonText}>Load People</Text>
        </TouchableHighlight>

        { this.state.show ? (

          <View>

          <Text style= {{fontSize :35 ,}} > Name : {this.state.name} </Text>
 
          <Text style={{ fontSize: 35, }}> Height : {this.state.height} </Text>

          </View>
       
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
