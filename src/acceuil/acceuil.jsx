import Menu from "../menu/menu";
import Footer from "../footer/footer";
import Blocs from "../blocs/blocs";
import { useState, useEffect } from "react";
import { Container, Box, Text, Wrap, WrapItem, Flex } from "@chakra-ui/react";

function Acceuil() {
  const [newsData, setNewsData] = useState([]);
  const fetchUserData = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&from=2023-06-23&pageSize=4&apiKey=c224b6419233446e8d86d35bcd23d739"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let { articles } = data;
        setNewsData(articles);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const renderBloc = () => {
    return newsData.map((item, index) => {
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
    <Box>
      <Flex flexDirection={"column"} gap={"3em"}>
        <Menu />
        <Box display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="6xl">Flash Info</Text>
        </Box>
        ``
        <Box as="div" display={"flex"} flexWrap={"wrap"}>
          <Wrap spacing="10px">
            <WrapItem gap="2em">{renderBloc()}</WrapItem>
          </Wrap>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Flex>
    </Box>
  );
}

export default Acceuil;
