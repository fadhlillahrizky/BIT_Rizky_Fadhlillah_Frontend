import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'
import {
  Container, Icon, Button,
  Header, Content, List, ListItem, Text, Left, Item,
  Input, Card, CardItem, Body, Picker, Right
} from 'native-base';
export default class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categoryData: [
        { id: 1, category: 'daily-activity' },
        { id: 2, category: 'work' },
      ],
      selected: this.props.navigation.state.params.datas.category,
      toDo: this.props.navigation.state.params.datas.activity

    }
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  handleEditBtn() {
    if (this.state.toDo === '') {
      alert('Masukan Input')
    } else {
      let data = {
        editId: this.props.navigation.state.params.datas.id,
        editList: this.state.toDo,
        editCategory: this.state.selected
      }
     // console.log('edit :', data);

      this.props.navigation.setParams({ isEdit: true }),
        this.props.navigation.navigate('Settings', { data, isEdit: true })
    }
  }


  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Card style={styles.form}>
            <Right>
              <Icon name='close'
                onPress={() => this.props.navigation.goBack(null)} />
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
              onPress={() => this.handleEditBtn()}>
              <Text> Edit Todo </Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').height * 0.50,
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