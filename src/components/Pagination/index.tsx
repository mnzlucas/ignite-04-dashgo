import { Stack,Box  } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return(
    <Stack
      direction={["column","row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack
        direction="row"
        spacing="2"
      >
        <PaginationItem pageNum={1} isCurrent />
        <PaginationItem pageNum={2}  />
        <PaginationItem pageNum={3}  />
        <PaginationItem pageNum={4}  />
        <PaginationItem pageNum={5}  />
      </Stack>
    </Stack>
  )
}