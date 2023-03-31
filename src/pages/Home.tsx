import React, { useState } from "react";
import DeckBg from "../assets/deckback.jpg";
import { images, ITarotImage } from "../utils/images";
import { shuffle } from "../utils/shuffle";
interface IProps {}

// const decks = [...Array(79).keys()];
const Home: React.FC<IProps> = () => {
    const [decks, setDecks] = useState<ITarotImage[]>(images);
    const [picked, setPicked] = useState<ITarotImage[]>([]);
    const shuffleDeckHandler = (e: React.MouseEvent<HTMLElement>) => {
        // decks.
        e.preventDefault();

        const deckShuffle = shuffle<ITarotImage>(decks);
        console.log(deckShuffle);
        setDecks(deckShuffle);
    };

    const pickDeckHandler = (item: ITarotImage) => {
        setPicked((prevState) => [...prevState, item]);
    };
    return (
        <div className="py-12">
            <div className="relative h-44">
                {decks.map((deck, idx) => (
                    <div
                        key={deck.deckId}
                        className="absolute top-0 border-card cursor-pointer w-[80px]  hover:translate-y-[-10px]"
                        style={{ left: `${idx * 10}px` }}
                    >
                        <img
                            src={DeckBg}
                            alt="deckback"
                            onClick={(e) => pickDeckHandler(deck)}
                        />
                    </div>
                ))}
            </div>
            <div>
                <button onClick={(e) => shuffleDeckHandler(e)}>Xáo bài</button>
            </div>
            <div>
                <h3>Picked</h3>
                <div className="flex">
                    {picked.map((deck, idx) => (
                        <div
                            key={deck.deckId}
                            style={{ left: `${idx * 10}px` }}
                        >
                            <img src={deck.imageUrl} alt="deckback" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
