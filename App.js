import { StyleSheet, Text, View, TextInput, Button, FlatList} from "react-native";
import React , {useState} from "react";

export default function App() {
  
  const [amount, setAmount] = useState();
  const [Desc, setDesc] = useState("");
  const [storeExpense, setStoreExpense] = useState([]);
  const [storeIncome, setStoreIncome] = useState([]);


  const handleAmount = (inputedAmount) => {
    setAmount(inputedAmount);
  }

  const handleDesc = (inputedDesc) => {
    setDesc(inputedDesc);
  }

  const handleExpenseClick = () => {
    console.log("Expense is clicked");
    setStoreExpense((currentState) => [...currentState , {amount , Desc}]);
  }

  const handleIncomeClick = () => {
    console.log("Income is clicked");
    setStoreIncome((currentState) => [...currentState , {amount, Desc}]);
  }


  return (
    <View style={styles.container}>
      <Text>Expense Tracker</Text>
      <TextInput placeholder="Enter Amount"  onChangeText={handleAmount} value={amount} />
      <TextInput placeholder="Enter Description" onChangeText={handleDesc} value={Desc}/>
      <Button title="Expense" onPress={handleExpenseClick} />
      <Button title="Income" onPress={handleIncomeClick} />
      <Text>expense</Text>
      <FlatList 
        keyExtractor={(item, index)=> index}
        data={storeExpense}
        renderItem={(itemData) => (
          <Text>
            {itemData.item.amount}
            {itemData.item.Desc}
          </Text>
        )}
      /> 

      <Text>income</Text>
      <FlatList 
        keyExtractor={(item, index)=> index}
        data={storeIncome}
        renderItem={(itemData) => (
          <Text>
            {itemData.item.amount}
            {itemData.item.Desc}
          </Text>
        )}
      /> 
      
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
