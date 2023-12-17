import { useState } from "react";
import "../styles/emoji.css"

function Emoji() {
    const [mood, setMood] = useState('😁');

    console.log('MoodChanger.jsx line 6', mood)

    const emojiChanger = () => {
        let newMood = '😁';
        if (mood === '😁') {
            newMood = '😒'
        } else if (mood === '😒') {
            newMood = '🤔';
        } else if (mood === '🤔') {
            newMood = '🤨';
        }else if (mood === '🤨') {
            newMood = '😫';
        } setMood(newMood)
    }

    return (
        <div className="emojiBox">
        Current Mood: 

        <button onClick={emojiChanger}>{mood}</button>

        </div>
    )
}

export default Emoji;