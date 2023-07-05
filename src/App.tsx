import React from 'react';
// import './app.css';
import  {Layout} from './components/Layout/Layout';
// import styled from 'styled-components';
import { ChakraProvider, Input, Box, Center, Button } from '@chakra-ui/react';
import { login } from './services/login';


// export const Box = styled.div`
//   background-color: orange;
//   border-radius: 25px;
//   padding-left: 15px;
// `

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="rgb(30, 25, 44)" padding="25px" alignItems="center">
        <Box backgroundColor="#fff" borderRadius="25px" padding="15px" width="50%">
          <Center>
            <h1>Faça seu login</h1>
          </Center>  
          <Input placeholder="e-mail"/>
          <Input placeholder="password"/>
          <Center>
            <Button onClick={login} colorScheme='teal' size="sm" width="100%" marginTop="5px">
              Button
            </Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
