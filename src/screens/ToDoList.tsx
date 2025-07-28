import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput, Button, TouchableOpacity } from "react-native";

export default function ToDoList() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

const addTodo = () => {
  if (todo.trim() === '') return;
  const newId = Date.now().toString() ;
  setTodoList([...todoList, { id: newId, text: todo }]);
  setTodo('');
};

const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

 const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.text}</Text>
      <TouchableOpacity onPress={() => deleteTodo(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <TextInput 
        style = {styles.input}
        placeholder="Enter ToDo"
        value={todo}
        onChangeText={setTodo}
        />

       <Button 
       title="Add Todo"
       onPress={addTodo}
        />

      <FlatList style = {styles.list}
       data={todoList}
       keyExtractor={(item) => item}
       renderItem= { renderItem }
      />
    </View>
  );


}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
     marginTop: 10,
  },
  list: {
    marginTop: 20,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  todoText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});