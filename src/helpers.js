export const generateRandomNumber = (fromNumber ,toNumber) => {
    const randomNumber = Math.floor(Math.random() * toNumber) + fromNumber;
    return randomNumber
}