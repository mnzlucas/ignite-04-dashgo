import { Flex, useBreakpointValue ,Icon ,IconButton} from "@chakra-ui/react";

import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { UseSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {

  const { onOpen } = UseSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
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
      {!isWideVersion && (
        <IconButton 
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine}/>}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          marginRight="2"
        >

        </IconButton>
      )}
      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}