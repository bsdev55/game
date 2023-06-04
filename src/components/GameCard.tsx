import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden' textAlign='left'>
       <Image src={getCroppedImageUrl(game.background_image)} />
       <CardBody>
        <Heading fontSize='1xl' marginBottom={2}>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic}/>
        </HStack>
       </CardBody>
    </Card>
  )
}

export default GameCard
