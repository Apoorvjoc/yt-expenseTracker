import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
export default function App() {
  const [exp, setExp] = useState();
  const [inc, setInc] = useState();
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState("");
  const [storeIncome, setStoreIncome] = useState([]);
  const [storeExpense, setStoreExpense] = useState([]);

  const handleAmount = (inputedAmount) => {
    let num = Number(inputedAmount);
    setAmount(num);
  };

  const handleDesc = (inputedDesc) => {
    setDesc(inputedDesc);
  };

  const handleIncomeClick = () => {
    console.log("Income Clicked!");
    setStoreIncome((currentState) => [...currentState, { amount, desc }]);
  };

  const handleExpenseClick = () => {
    console.log("Expense Clicked!");
    setStoreExpense((currentState) => [...currentState, { amount, desc }]);
  };

  useEffect(() => {
    let currExp = 0,
      currInc = 0;
    storeExpense.forEach((obj) => {
      currExp = currExp + obj.amount;
    });
    setExp(currExp);

    storeIncome.forEach((obj) => {
      currInc = currInc + obj.amount;
    });
    setInc(currInc);
  });
  //rendering components
  return (
    <View style={styles.container}>
      <Text>-----------Expense Tracker---------</Text>

      <Text>Amount Left:{inc - exp} </Text>
      <Text>Expenses: {exp}</Text>

      <TextInput
        placeholder="Enter Amount"
        onChangeText={handleAmount}
        value={amount}
      />
      <TextInput
        placeholder="Enter Description"
        onChangeText={handleDesc}
        value={desc}
      />
      <Button title="Expense" onPress={handleExpenseClick} />
      <Button title="Income" onPress={handleIncomeClick} />

      <Text>-------Income---------</Text>
      <FlatList
        keyExtractor={(item, index) => index}
        data={storeIncome}
        renderItem={(itemData) => (
          <Text>
            {itemData.item.amount}
            {itemData.item.desc}
          </Text>
        )}
      />
      <Text>----------Expense------------</Text>
      <FlatList
        keyExtractor={(item, index) => index}
        data={storeExpense}
        renderItem={(itemData) => (
          <Text>
            {itemData.item.amount}
            {itemData.item.desc}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
