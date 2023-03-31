enum Question {
    LOVE = "LOVE",
    WORK = "WORK",
    HEALTH = "HEALTH",
    FINANCE = "FINANCE",
}

export interface IDeck {
    id: number;
    question: Question;
    description: string;
}

const decks: IDeck[] = [
    {
        id: 1,
        question: Question.LOVE,
        description: "",
    },
];
