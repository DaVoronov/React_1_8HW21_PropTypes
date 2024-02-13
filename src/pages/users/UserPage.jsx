import {
  Avatar,
  Button,
  ButtonGroup,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

function UserPage() {
  return (
    <div>
      <Stack alignItems="center" gap="12px">
        <Avatar
          src="https://avatars.githubusercontent.com/u/61051953?v=4"
          name="TU"
          size="xl"
        />

        <Stack gap="4px" textAlign="center">
          <Heading as="h1" size="md">
            Tester Undefined
          </Heading>
          <Text as="span" color="gray.500" fontWeight={500}>
            @testeru
          </Text>
          <Text>
            Voluptate adipisicing nostrud ex exercitation labore excepteur
            deserunt consectetur aliquip.
          </Text>
        </Stack>

        <ButtonGroup size="sm" variant="ghost">
          <Button>Followers 0</Button>
          <Button>Following 0</Button>
        </ButtonGroup>

        <Button colorScheme="blue">Follow</Button>
      </Stack>
    </div>
  );
}
export default UserPage;
