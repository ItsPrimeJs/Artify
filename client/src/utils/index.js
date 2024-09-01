import { prompts } from "../constants";

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * prompts.length);

    const randomPrompt = prompts[randomIndex];

    if(prompt === randomPrompt) return getRandomPrompt(prompt);

    return randomPrompt;
}