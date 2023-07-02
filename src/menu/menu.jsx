import { NavLink } from "react-router-dom";
import { Container, Flex } from "@chakra-ui/react";

function Menu() {
  return (
    <Flex
      h={"100px"}
      as="nav"
      p="0px"
      mb="0px"
      fontSize="2em"
      spacing="1"
      justifyContent="space-around"
      alignItems="center"
      bg="gray.400"
    >
      <Container
        display={"flex"}
        justifyContent="flex-start"
        alignItems="center"
        gap={"3em"}
      >
        <NavLink to="/">Acceuil</NavLink>
        <NavLink to="/Recherche">Recherche</NavLink>
      </Container>
    </Flex>
  );
}

export default Menu;
