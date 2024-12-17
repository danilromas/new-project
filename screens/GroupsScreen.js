import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function GroupsScreen() {
  const [groups, setGroups] = useState([
    { id: '1', name: 'Группа разработки', members: 10 },
    { id: '2', name: 'Маркетинговая команда', members: 8 },
    { id: '3', name: 'Менеджеры проектов', members: 5 },
    { id: '4', name: 'HR и рекрутинг', members: 4 },
  ]);

  const handleGroupPress = (name) => {
    alert(`Вы выбрали группу: ${name}`);
  };

  const renderGroup = ({ item }) => (
    <TouchableOpacity
      style={styles.groupItem}
      onPress={() => handleGroupPress(item.name)}
    >
      <Text style={styles.groupName}>{item.name}</Text>
      <Text style={styles.groupMembers}>{item.members} участников</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Группы</Text>
      <FlatList
        data={groups}
        renderItem={renderGroup}
        keyExtractor={(item) => item.id}
        style={styles.groupList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  groupList: {
    marginTop: 10,
  },
  groupItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  groupMembers: {
    fontSize: 14,
    color: '#6c757d',
  },
});
