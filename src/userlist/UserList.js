import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
} from 'react-native';
import UserItem from './UserItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default class UserList extends Component {

  props: {
    users: string[],
  }

  render() {
    const { users } = this.props;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows(users);

    return (
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderRow={(x => <UserItem name={x.name} status={x.status} />)}
      />
    );
  }
}
