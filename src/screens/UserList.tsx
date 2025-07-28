import React from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import useFetch from './useFetch';

const UserList = () => {
  const { loading, data: users, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error}</Text>;

  return (
     <SafeAreaView style={{ flex: 1 }}>
    <FlatList
      data={users}  
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
    />



    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontWeight: 'bold',
  },
});

export default UserList;
