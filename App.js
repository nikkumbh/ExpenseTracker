import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [amount, setAmount] = useState();
  const [Desc, setDesc] = useState("");
  // const [storeExpense, setStoreExpense] = useState([]);
  // const [storeIncome, setStoreIncome] = useState([]);
  const [storeItems, setStoreItems] = useState([]);
  const [inc, setInc] = useState();
  const [exp, setExp] = useState();

  const handleAmount = (inputedAmount) => {
    let num = Number(inputedAmount);
    setAmount(num);
  };

  const handleDesc = (inputedDesc) => {
    setDesc(inputedDesc);
  };

  const handleExpenseClick = () => {
    console.log("Expense is clicked");
    setStoreItems((currentState) => [
      ...currentState,
      { amount, Desc, category: "expense" },
    ]);
  };

  const handleIncomeClick = () => {
    console.log("Income is clicked");
    setStoreItems((currentState) => [
      ...currentState,
      { amount, Desc, category: "income" },
    ]);
  };

  useEffect(() => {
    let currExp = 0,
      currInc = 0;
    storeItems.forEach((obj) => {
      if (obj.category === "expense") currExp = currExp + obj.amount;
    });
    setExp(currExp);

    storeItems.forEach((obj) => {
      if (obj.category === "income") currInc = currInc + obj.amount;
    });
    setInc(currInc);
  });

  return (
    <View style={styles.container}>
      <Text>Expense Tracker</Text>

      <Text>Amount left : {inc - exp} </Text>
      <Text>Expenses : {exp} </Text>

      <TextInput
        placeholder="Enter Amount"
        onChangeText={handleAmount}
        value={amount}
      />
      <TextInput
        placeholder="Enter Description"
        onChangeText={handleDesc}
        value={Desc}
      />
      <Button title="Expense" onPress={handleExpenseClick} />
      <Button title="Income" onPress={handleIncomeClick} />
      <Text>list</Text>
      <FlatList
        keyExtractor={(item, index) => index}
        data={storeItems}
        renderItem={(itemData) => (
          <Text>
            {itemData.item.amount}
            {itemData.item.Desc}
            {itemData.item.category}
          </Text>
        )}
      />

      {/* <Text>income</Text>
      <FlatList
        keyExtractor={(item, index) => index}
        data={storeIncome}
        renderItem={(itemData) => (
          <Text>
            {itemData.item.amount}
            {itemData.item.Desc}
          </Text>
        )}
      /> */}
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
