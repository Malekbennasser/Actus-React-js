import {
  Box,
  Card,
  Flex,
  Image,
  Heading,
  CardHeader,
  CardBody,
  Text,
  CardFooter,
  Button,
  HStack,
  Container,
  Divider,
} from "@chakra-ui/react";

function Blocs(props) {
  return (
    <Container>
      <Flex>
        <Card w="300px" bg={"gray.100"}>
          <CardHeader>
            <Box>
              <Image src={props.urlToImage} />
            </Box>
          </CardHeader>
          <CardBody>
            <Flex flexDirection="column" gap="5">
              <Box>
                <Heading as="h2" size="md">
                  {props.author}
                </Heading>
              </Box>

              <Box>
                <Heading as="h4" size="sm">
                  {props.title}
                </Heading>
              </Box>

              <Box>
                <Text>{props.content}</Text>
              </Box>
            </Flex>
          </CardBody>
          <Divider borderColor="gray.400" />
          <CardFooter>
            <HStack>
              <Button variant="ghost">
                <a href={props.url} target="blank">
                  Watch
                </a>
              </Button>
            </HStack>
          </CardFooter>
        </Card>
      </Flex>
    </Container>
  );
}

export default Blocs;
