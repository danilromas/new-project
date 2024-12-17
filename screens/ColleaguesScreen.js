import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function ColleaguesScreen() {
  const [colleagues, setColleagues] = useState([
    { id: '1', name: 'Алексей Иванов', role: 'Разработчик', status: 'В сети' },
    { id: '2', name: 'Мария Смирнова', role: 'Дизайнер', status: 'Не в сети' },
    { id: '3', name: 'Иван Петров', role: 'Менеджер', status: 'В сети' },
    { id: '4', name: 'Ольга Кузнецова', role: 'Тестировщик', status: 'Не в сети' },
  ]);

  const handleColleaguePress = (name) => {
    alert(`Вы выбрали коллегу: ${name}`);
  };

  const renderColleague = ({ item }) => (
    <TouchableOpacity
      style={styles.colleagueItem}
      onPress={() => handleColleaguePress(item.name)}
    >
      <Text style={styles.colleagueName}>{item.name}</Text>
      <Text style={styles.colleagueRole}>{item.role}</Text>
      <Text style={styles.colleagueStatus}>{item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Список коллег</Text>
      <FlatList
        data={colleagues}
        renderItem={renderColleague}
        keyExtractor={(item) => item.id}
        style={styles.colleagueList}
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
  colleagueList: {
    marginTop: 10,
  },
  colleagueItem: {
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
  colleagueName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  colleagueRole: {
    fontSize: 14,
    color: '#6c757d',
  },
  colleagueStatus: {
    fontSize: 14,
    color: '#28a745',
  },
});
