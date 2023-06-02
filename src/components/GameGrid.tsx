import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import useGames from '../hooks/useGames';


const GameGrid = () => {
    const { data, error, isLoading } = useGames();
  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm: 1,md: 2, lg: 3 }} padding='10px' spacing={10}>
            {data.map((game) => (<GameCard key={game.id} game={game} />))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid
