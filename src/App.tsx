import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import "./App.css";

function App() {
  const [qoute, setQoute] = useState<string>("");
  const API_URL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
  useEffect(() => {
    axios.get<string>(API_URL).then((response) => {
      console.log(response.data[0]);
      setQoute(response.data[0]);
    });
  }, []);

  return (
    <div className="App">
      <Box w="100%" p={2} color="black" bg="teal">
        <Text as="em">{qoute}</Text>
      </Box>
      <Box w="100%" p={4}>
        <SimpleGrid columns={2} spacing={5}>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </Box>
    </div>
  );
}

export default App;
