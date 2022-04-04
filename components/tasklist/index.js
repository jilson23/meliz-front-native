import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import styles from '../../style';

function TaskList() {
  const dataUser = useSelector(state => state.dataUser);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.name} />;

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingBottom: 100, alignItems: 'center' }}>
  <FlatList
    data={dataUser?.activities}
    renderItem={renderItem}
    keyExtractor={item => item._id}
  />

    </View>
  );
}


export default TaskList