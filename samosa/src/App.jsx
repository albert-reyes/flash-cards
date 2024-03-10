import { useEffect, useState } from 'react';
import Card from './Card.jsx';

function App() {

  const [cards, setCards] = useState([
    { id: 1, initialText: "Where did the inspiration of Pikachu come from?", alternateText: "The inspiration for Pikachu's design came from a combination of a squirrel and a mouse. Additionally, its name is a portmanteau of the Japanese words 'pika' (spark) and 'chu' (squeak)." },
    { id: 2, initialText: "Why do some Pokemon never evolve?", alternateText: "While evolution is a core mechanic in the Pokemon universe, some Pokemon don't have evolved forms. This design choice can be due to various reasons, such as the Pokemon already being strong enough in its base form or representing a specific stage in a lifecycle (e.g., baby Pokemon)." },
    { id: 3, initialText: "Are Psychic powers diverse?", alternateText: "Not all Psychic-type Pokemon use their powers in the same way. Some, like Alakazam, focus on telekinesis and mental manipulation, while others, like Gardevoir, use their emotions to create powerful psychic attacks." }
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    console.log("Current card updated:", cards[currentCardIndex]);
  }, [currentCardIndex]);


  return (
    <div className="Frog">
            <div className="App">
        <Card key={cards[currentCardIndex].id} initialText={cards[currentCardIndex].initialText} alternateText={cards[currentCardIndex].alternateText} />
            </div>
        <div className="buttons">
            <button onClick={handlePrevCard}>← Back</button>
            <button onClick={handleNextCard}>Next →</button>
        </div>
    </div>
  );
}

export default App
