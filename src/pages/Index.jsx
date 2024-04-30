import React from "react";
import { ChakraProvider, Box, VStack, Text, Button, Input, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
  },
});

const Login = () => {
  return (
    <VStack spacing={4}>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button leftIcon={<FaSignInAlt />} colorScheme="blue">
        Login
      </Button>
      <Text>Or</Text>
      <Button leftIcon={<FaUserPlus />} variant="outline">
        Register
      </Button>
    </VStack>
  );
};

const ChatList = () => {
  return (
    <VStack>
      <Text fontSize="2xl" fontWeight="bold">
        Chats
      </Text>
      {/* Placeholder for chat list */}
      <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
        <Link to="/chat/123">Chat 1</Link>
      </Box>
      <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
        <Link to="/chat/456">Chat 2</Link>
      </Box>
    </VStack>
  );
};

const ChatView = ({ chatId }) => {
  return (
    <VStack>
      <Text fontSize="2xl" fontWeight="bold">
        Chat {chatId}
      </Text>
      {/* Placeholder for chat messages */}
      <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
        Message 1
      </Box>
      <Input placeholder="Type a message..." />
    </VStack>
  );
};

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chats" element={<ChatList />} />
          <Route path="/chat/:chatId" element={({ match }) => <ChatView chatId={match.params.chatId} />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
