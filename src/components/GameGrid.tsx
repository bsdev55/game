import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
   const [games, setGames] = useState<Game[]>([]);
   const [error, setError] = useState();
   
   useEffect(() => {
    apiClient.get<FetchGamesResponse>('/games')
    .then(res => setGames(res.data.results))
    .catch(err => setError(err.message));
   })
  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={3} spacing={10}>
            {games.map((game) => (<GameCard key={game.id} game={game} />))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid
