import { Flex } from "@chakra-ui/react";

import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
    >
      <Logo />
      <SearchBox />
  
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}