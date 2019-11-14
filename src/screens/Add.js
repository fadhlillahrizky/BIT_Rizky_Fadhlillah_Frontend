import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'
import {
  Container, Icon, Button,
  Header, Content, List, ListItem, Text, Left, Item,
  Input, Card, CardItem, Body, Picker, Right
} from 'native-base';

export default class Add extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data:
        [
          { id: 1, value: 'breakfast', category: 'daily-activity' },
          { id: 2, value: 'coding', category: 'work' },
          { id: 3, value: 'lunch', category: 'daily-activity' },
          { id: 4, value: 'Prepare Presentation', category: 'work' },
          { id: 5, value: 'Presentation', category: 'work' },
          { id: 6, value: 'run', category: 'daily-activity' },
          { id: 7, value: 'sleep', category: 'daily-activity' },
        ],
      categoryData: [
        { id: 1, category: 'work' },
        { id: 2, category: 'daily-activity' },
      ],
      selected: 2,
      toDo: ''

    }
  }
handleAddBtn(){
  this.props.navigation.setParams({isAdd:true}),
  this.props.navigation.navigate('Settings', {
    newList: this.state.toDo,
    category: this.state.selected,
    isAdd: true
    })
}
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  

  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.innerContainer}>
          <Card style={styles.form}>
            <Right>
              <Icon name='close' 
              onPress={()=> this.props.navigation.goBack(null)}/>
            </Right>
            <CardItem
              style={styles.formItem}>
              <Body>
                <Item regular
                  style={styles.formItem}>
                  <Input
                    placeholder='Input Todo'
                    value={this.state.toDo}
                    onChangeText={(text) => this.setState({ toDo: text })} />
                </Item>
                <Item regular
                  style={styles.formItem}>
                  <Picker
                    mode="dropdown"
                    style={{ width: 100, height: 40 }}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    {this.state.categoryData.map((data, i) => {
                      return (
                        <Picker.Item
                          label={data.category} value={data.id} key={i} />
                      );
                    }
                    )}
                  </Picker>
                </Item>
              </Body>
            </CardItem>
            <Button small block
              style={styles.button}
              onPress={() => this.handleAddBtn()}>
              <Text> Add Todo </Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // width: Dimensions.get('window').width * 0.75,
    // height: Dimensions.get('window').height * 0.50,
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  innerContainer: {
    alignSelf: 'center',
    width: 320,
    height: 370,
    paddingHorizontal: 10
  },
  form: {
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').height * 0.40,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  formItem: {
    marginBottom: 20
  },
  button: {
    width: Dimensions.get('window').width * 0.30,
    alignSelf: 'center',
    alignItems: 'center'
  }
})