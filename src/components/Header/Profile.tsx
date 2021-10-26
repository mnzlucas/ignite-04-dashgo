import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center" >
      { showProfileData && (<Box mr="4" textAlign="right" >
        <Text>Lucas Almeida</Text>
        <Text color="gray.300" fontSize="small">
          lucal.almeida@fatec.sp.gov.br
        </Text>
      </Box>
      )}
      <Avatar size="md" name="Lucas" src="https://github.com/mnzlucas.png" />
    </Flex>
  );
}