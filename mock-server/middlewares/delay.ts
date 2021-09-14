// Simulate server side delay
export const delay = (req, res, next) => {
    const randomOutcome = Math.random();
    const delayProbability = 0.03; // 3%
    if (randomOutcome < delayProbability) {
        const minDelay = 100;
        const maxDelay = 10000;
        setTimeout(next, Math.floor((Math.random() * maxDelay) + minDelay));
    } else {
        setTimeout(next, 1);
    }
};
