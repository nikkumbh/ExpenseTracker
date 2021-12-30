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

import Header from "./components/Header";
import ListItems from "./components/ListItems";
import Input from "./components/Input";

export default function App() {

  const [storeItems, setStoreItems] = useState([]);
  const [inc, setInc] = useState();
  const [exp, setExp] = useState();

 

  const handleExpenseClick = (amount , Desc) => {
    console.log("Expense is clicked");
    setStoreItems((currentState) => [
      ...currentState,
      { amount, Desc, category: "expense" },
    ]);
  };

  const handleIncomeClick = ( amount , Desc) => {
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
     
      <Header />
      <Text>Amount left : {inc - exp} </Text>
      <Text>Expenses : {exp} </Text>

      <Input handleExpenseButton={handleExpenseClick} handleIncomeButton={handleIncomeClick} />

      <Text>list</Text>
      <FlatList
        keyExtractor={(item, index) => index}
        data={storeItems}
        renderItem={(itemData) => (
          <ListItems amount={itemData.item.amount} Desc={itemData.item.Desc} category={itemData.item.category} />
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
