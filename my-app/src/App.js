import React, { useState } from "react";
import "./index.css";

export default function App() {
  ": ";

  var emojiDatabase = {
    "😀": "Grinning Face",
    "😃": "Smiling Face With Open Mouth",
    "😄": "Smiling Face With Open Mouth And Smiling Eyes",
    "😁": "Grinning Face With Smiling Eyes",
    "😆": "Smiling Face With Open Mouth And Closed Eyes",
    "😅": "Smiling Face With Open Mouth & Cold Sweat",
    "😂": "Face With Tears of Joy",
    "🤣": "Rolling On The Floor, Laughing",
    "😊": "Smiling Face With Smiling Eyes",
    "😇": "Smiling Face With Halo",
    "🙂": "Slightly Smiling Face",
    "🙃": "Upside-Down Face",
    "😉": "Winking Face",
    "😌": "Relieved Face",
    "😍": "Smiling Face With Heart-Eyes",
    "🥰": "Smiling face with smiling eyes and three hearts",
    "😘": " Face Throwing a Kiss",
    "😗": " Kissing Face",
    "😋": "Face Savouring Delicious Food",
    "😛": " Face With Stuck-Out Tongue",
    "🧐": " Face With Monocle",
    "🤓 ": " Nerd Face   ",
    "😏": " Smirking/Whimsical Face",
    "😒": " Unamused Face",
    "😕 ": " Confused Face",
    "😣": " Suffering Face",
    "😭": " Loudly Crying Face",
    "🤬": "  Face With Symbols Over The Mouth",
    "🥵": " Overheated face",
    "😱": " Face Screaming in Fear",
    "😥": " Disappointed but Relieved Face",
    "🍑": " Peach",
    "🥑": " Avocado",
    "🥦": " Broccoli",
    "🍅": " Tomato",
    "🍆": " Eggplant",
    "🍞": " Bread",
    "🥨": " Pretzel",
    "🧀": " Chunk Of Cheese",
    "🍳": " Fried Egg in Frying Pan",
    "🍕": " Slice Of Pizza",
    "🥪": " Sandwich",
    "🌯": " Burrito",
    "🍰": "Piece Of Cake"
  };

  // To Handle userInput and output
  var [output, setOutput] = useState(
    "Put Your Emoji to detect or click on emoji"
  );
  function userInput(event) {
    var userEmoji = event.target.value;
    if (userEmoji in emojiDatabase) {
      var output = emojiDatabase[userEmoji];
      setOutput(output);
    }
    if (userEmoji === "") {
      output = "Put Your Emoji to detect";
      setOutput(output);
    }
    if (userEmoji !== "" && emojiDatabase[userEmoji] === undefined) {
      output = "Emoji not in our Database.";
      setOutput(output);
    }
  }

  // To Shows some list of emojis on display
  var list = Object.keys(emojiDatabase);
  function emojiClick(emoji) {
    var output = emojiDatabase[emoji];
    setOutput(output);
  }

  return (
    <div className="App">
      <h1> Emoji Detector </h1>
      <input placeholder="Put Your Emoji to detect" onChange={userInput} />

      <div className="output">{output} </div>

      <div className="emoji">
      {list.map(function (emoji, index) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            className="outputEmoji"
            key={emoji}
          >
            
            {emoji}
          </span>
        );
      })}
</div>
      <div> </div>
    </div>
  );
}
