import { Button  } from "@chakra-ui/react";

interface PagItemProps {
  pageNum: number;
  isCurrent?: boolean;
}

export function PaginationItem({isCurrent=false, pageNum} : PagItemProps) {
  if(isCurrent) {
    return(
      <Button 
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      disabled
      _disabled={{
        bg: 'pink.500',
        cursor: 'default',
      }}
    >
      {pageNum}
    </Button>
    );
  }

  return(
    <Button 
    size="sm"
    fontSize="xs"
    width="4"
    bg="gray.700"
    _hover={{
      bg: 'gray.500'
    }}
  >
    {pageNum}
  </Button>
  );
}