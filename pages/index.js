import React, { useState, useEffect } from 'react'
import { Box, Heading, Text, Button, Link } from 'rebass'

const Index = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`
  });

  return (
    <Box
      sx={{
        p: 4,
        color: 'text',
        bg: 'background',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
      }}>
      <Heading variant='display'>Hello</Heading>
      <Button onClick={() => setCount(count+1)}>Hello</Button>
      <Text>{count}</Text>

      <Link href='/new'>New</Link>
    </Box>
  )
}

export default Index
