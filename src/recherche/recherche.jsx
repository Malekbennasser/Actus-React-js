import Menu from "../menu/menu";
import Footer from "../footer/footer";
import { useState, useEffect } from "react";
import Blocs from "../blocs/blocs";
import {
  Box,
  Container,
  Button,
  Input,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";

function Recherche() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  function handleInput(e) {
    setInput(e.target.value);
  }

  async function Actus() {
    let responses = await fetch(
      `https://newsapi.org/v2/everything?q=${input}&from=2023-06-21&pageSize=10&sortBy=publishedAt&apiKey=c224b6419233446e8d86d35bcd23d739`
    );
    console.log(responses);
    let donnes = await responses.json();
    console.log(donnes);
    let { articles } = donnes;
    console.log("table", articles);
    setArray(articles);
    console.log(donnes);
  }
  useEffect(() => {}, []);
  const renderBloc = () => {
    return array.map((item, index) => {
      return (
        <div key={index}>
          <Blocs
            author={item.author}
            title={item.title}
            content={item.content}
            urlToImage={item.urlToImage}
            url={item.url}
          />
        </div>
      );
    });
  };

  return (
    <Box display="flex" flexDirection="column" gap="5em">
      <Menu />

      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        align="center"
      >
        <Input
          align="center"
          w="50%"
          htmlSize="5"
          type="text"
          placeholder="recherche d'actualité"
          onChange={handleInput}
        />

        <Button colorScheme="blue" onClick={Actus}>
          Valider
        </Button>
      </Stack>

      <Container display="flex" margin="0px" padding="0px" gap="2em">
        {renderBloc()}
      </Container>
      <Footer />
    </Box>
  );
}

export default Recherche;
