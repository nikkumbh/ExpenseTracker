import React , {useState} from "react";
import { StyleSheet, Text, View , TextInput , Button } from "react-native";

const Input = (props) => {
    const [amount, setAmount] = useState();
    const [Desc, setDesc] = useState("");

    const handleAmount = (inputedAmount) => {
        let num = Number(inputedAmount);
        setAmount(num);
      };
    
      const handleDesc = (inputedDesc) => {
        setDesc(inputedDesc);
      };
  return (
    <View>
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
      <Button title="Expense" onPress={() => props.handleExpenseButton(amount,Desc)} />
      <Button title="Income" onPress={() => props.handleIncomeButton(amount,Desc)} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
