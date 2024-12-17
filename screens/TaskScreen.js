import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

export default function TaskScreen() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Сделать утреннюю зарядку', completed: true },
    { id: '2', title: 'Подготовить отчет для команды', completed: false },
    { id: '3', title: 'Позвонить клиенту', completed: true },
    { id: '4', title: 'Заполнить таблицу по проекту', completed: false },
    { id: '5', title: 'Пройти курс React Native', completed: false },
  ]);

  const [achievements, setAchievements] = useState([
    { id: '1', title: 'Новичок', description: 'Выполните первую задачу', unlocked: true },
    { id: '2', title: 'Серийный исполнитель', description: 'Выполните 10 задач подряд', unlocked: false },
    { id: '3', title: 'Ранний подъем', description: 'Завершите задачу до 9 утра', unlocked: true },
  ]);

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

    // Простая проверка для разблокировки "Серийного исполнителя"
    const completedTasks = tasks.filter((task) => task.completed).length;
    if (completedTasks + 1 === 10) {
      setAchievements((prevAchievements) =>
        prevAchievements.map((ach) =>
          ach.id === '2' ? { ...ach, unlocked: true } : ach
        )
      );
      Alert.alert('Поздравляем!', 'Вы разблокировали достижение: Серийный исполнитель!');
    }
  };

  const renderTask = ({ item }) => (
    <TouchableOpacity
      style={[styles.taskItem, item.completed && styles.taskItemCompleted]}
      onPress={() => toggleTask(item.id)}
    >
      <Text style={[styles.taskText, item.completed && styles.taskTextCompleted]}>
        {item.title}
      </Text>
      <Text style={styles.taskStatus}>{item.completed ? 'Выполнено' : 'Не выполнено'}</Text>
    </TouchableOpacity>
  );

  const renderAchievement = ({ item }) => (
    <View style={[styles.achievementItem, item.unlocked && styles.achievementUnlocked]}>
      <View style={styles.achievementIconPlaceholder} />
      <View>
        <Text style={styles.achievementTitle}>{item.title}</Text>
        <Text style={styles.achievementDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ваши задачи</Text>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />

      <Text style={styles.header}>Ачивки</Text>
      <FlatList
        data={achievements}
        renderItem={renderAchievement}
        keyExtractor={(item) => item.id}
        horizontal
        style={styles.achievementList}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginVertical: 10, textAlign: 'center' },
  taskList: { marginVertical: 20 },
  taskItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  taskItemCompleted: { backgroundColor: '#d4edda' },
  taskText: { fontSize: 16, color: '#333' },
  taskTextCompleted: { textDecorationLine: 'line-through', color: '#6c757d' },
  taskStatus: { fontSize: 14, color: '#6c757d' },

  achievementList: { marginVertical: 20 },
  achievementItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  achievementUnlocked: { backgroundColor: '#ffd700' },
  achievementIconPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 25,
    marginRight: 10,
  },
  achievementTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  achievementDescription: { fontSize: 14, color: '#6c757d' },
});
