import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import useGames from '../hooks/useGames';
import GameCardContainer from './GameCardContainer';
import GameCardSkeletone from './GameCardSkeletone';


const GameGrid = () => {
    const { data, error, isLoading } = useGames();
    const skeletons = [1,2,3,4,5,6]; 
  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm: 1,md: 2, lg: 3 }} padding='10px' spacing={10}>
          {isLoading && skeletons.map(skeleton=> 
            <GameCardContainer>
              <GameCardSkeletone key={skeleton} />
            </GameCardContainer>
            )}
            {data.map((game) => (
              <GameCardContainer> 
                <GameCard key={game.id} game={game} />
              </GameCardContainer>
            ))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid
