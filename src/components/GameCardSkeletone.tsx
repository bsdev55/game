import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeletone = () => {
  return (
    <Card>
        <Skeleton height='300px' borderRadius={10} overflow='hidden' textAlign='left'/>
        <CardBody>
            <SkeletonText />
        </CardBody>
      
    </Card>
  )
}

export default GameCardSkeletone
