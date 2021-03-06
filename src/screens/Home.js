import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'
import {
  Container, Icon, Button, Header, Content,
  List, ListItem, Text, Left, Item, Input, Fab, Card, CardItem, CheckBox, Title, Body
} from 'native-base';


export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data:
        [
          { id: 0, activity: 'Breakfast', category: 1, isDone: false },
          { id: 1, activity: 'Coding', category: 2, isDone: false },
          { id: 2, activity: 'Lunch', category: 1, isDone: false },
          { id: 3, activity: 'Prepare Presentation', category: 2, isDone: false },
          { id: 4, activity: 'Presentation', category: 2, isDone: false },
          { id: 5, activity: 'Exercise', category: 1, isDone: false },
          { id: 6, activity: 'Sleep', category: 1, isDone: false },
        ],
      newList: '',
      newCategory: '',
      doneCheckBox: false,
      arrayholder:[]

    }
  }

  handleAddBtn() {
    this.props.navigation.navigate('Add')
  }

  handleAddData(data) {
    const inText = {
      id: this.state.data.length + 1,
      activity: data.newList,
      category: data.newCategory
    };
    const newData = this.state.data.slice();
    newData.push(inText);
    this.setState({ data: newData })
    this.setState((data) => (data.newList))
    this.state.newList = ''
  }

  UNSAFE_componentWillMount() {
    this.props.navigation.setParams({ isAdd: false })
    this.props.navigation.setParams({ isEdit: false })
  }

  handleCheckBox(index) {
    const newArray = [...this.state.data];
    console.log(index);
    newArray[index].isDone = !newArray[index].isDone;
    this.setState({ data: newArray });
  }

  handleCheckBoxDone(state) {
    this.setState({doneCheckBox: !state})
    // const dataDone = this.state.arrayholder.filter((item) => {
    //   return item.isDone == true;
    // });
    //console.log(dataDone);
    
    // this.setState({ banners: newData }); 
    // const newArray = [...this.state.data];
    // console.log(index);
    // newArray[index].isDone = !newArray[index].isDone;
    // this.setState({ data: newArray });
  }

  handleupdate(data, index) {
    const newArray = [...this.state.data];
    console.log(index);

    newArray[index].id = data.id;
    newArray[index].activity = data.activity;
    newArray[index].category = data.category;
    this.setState({ data: newArray });
  }

  UNSAFE_componentWillReceiveProps(nexProps) {
    if (nexProps.navigation.state.params.isAdd == true) {
      this.props.navigation.setParams({ isAdd: false })
      let data = {
        newList: nexProps.navigation.state.params.newList,
        newCategory: nexProps.navigation.state.params.category
      }
      this.handleAddData(data);

    } else if (nexProps.navigation.state.params.isEdit == true) {
      let datas = {
        id: nexProps.navigation.state.params.data.editId,
        activity: nexProps.navigation.state.params.data.editList,
        category: nexProps.navigation.state.params.data.editCategory
      }
      let id = nexProps.navigation.state.params.editId
      this.handleupdate(datas, datas.id);
      this.props.navigation.setParams({ isEdit: false })
    }

  }
  render() {

    const doubled = this.state.data.map((datas, key) =>
      <Card style={styles.card}>
        <CardItem selected style={styles.card}
          onPress={() => this.props.navigation.navigate('Edit', { datas })}>
          <Left>
            <Text style={styles.text}
              key={datas.id}>{datas.activity}</Text>
          </Left>
          <CheckBox style={{ marginRight: 20 }}
            checked={datas.isDone}
            onPress={() => this.handleCheckBox(datas.id)} />
        </CardItem>
      </Card>);

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Title style={styles.title}>ToDo List</Title>
        </Header>
        <Content>
          <Item style={{marginVertical: '5%',}}>
            <Text> Already Done </Text>
            <CheckBox
              checked={this.state.doneCheckBox}
              onPress={() => this.handleCheckBoxDone(doneCheckBox)} />
          </Item>
          {doubled}
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#ffe2e2'
    //height: 500
  },
  header: {
    backgroundColor: '#99ddcc',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginVertical: 5,
  },
  card: {
    backgroundColor: '#bad7df'
  },
  text: {
    color: '#f6f6f6'
  },
  addText: {
    marginBottom: 20
  },
})