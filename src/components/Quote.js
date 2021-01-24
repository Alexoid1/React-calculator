import React from 'react';
import './Quote.css';

function Quote() {
  const quotes = [{ quote: '“Mathematics expresses values that reflect the cosmos, including orderliness, balance, harmony, logic, and abstract beauty.”', author: 'Deepak Chopra' },
    { quote: '“I had a polynomial once. My doctor removed it.”', author: 'Michael Grant, Gone' },
    { quote: '“The difference between the poet and the mathematician is that the poet tries to get his head into the heavens while the mathematician tries to get the heavens into his head.”', author: 'G.K. Chesterton' },
    { quote: '“My first feeling was that there was no way to continue. Writing isnt like math;in math, two plus two always equals four no matter what your mood is like. With writing, the way you feel changes everything.”', author: 'Stephenie Meyer' },
    { quote: '“I am sorry to say that the subject I most disliked was mathematics. I have thought about it. I think the reason was that mathematics leaves no room for argument. If you made a mistake, that was all there was to it.”', author: 'Malcolm X' },
    { quote: '“The ‘Muse’ is not an artistic mystery, but a mathematical equation. The gift are those ideas you think of as you drift to sleep. The giver is that one you think of when you first awake.”', author: 'Roman Payne' },
    { quote: '“I know that two and two make four - and should be glad to prove it too if I could - though I must say if by any sort of process I could convert 2 and 2 into five it would give me much greater pleasure.”', author: 'Lord George Gordon Byron' },
    { quote: '“I couldnt claim that I was smarter than sixty-five other guys--but the average of sixty-five other guys, certainly!”', author: 'Richard P. Feynman' },
    { quote: '“Solving a problem for which you know there’s an answer is like climbing a mountain with a guide, along a trail someone else has laid. In mathematics, the truth is somewhere out there in a place no one knows, beyond all the beaten paths. And it’s not always at the top of the mountain. It might be in a crack on the smoothest cliff or somewhere deep in the valley.”', author: 'Yoko Ogawa' },
    { quote: '“It is the story that matters not just the ending.”', author: 'Paul Lockhart' },
    { quote: '“But in my opinion, all things in nature occur mathematically.”', author: 'Rene Decartes' },
    { quote: '“Since the mathematicians have invaded the theory of relativity I do not understand it myself any more.”', author: 'Albert Einstein' }];
  const xval = Math.floor(Math.random() * 12);
  return (
    <>
      <div className="quoteCont">
        <p>
          <i>
          “Since the mathematicians have invaded the theory of relativity I do not understand it myself any more.”
          </i>
        </p>
        <p>
          <strong>
          Albert Einstein
          </strong>
        </p>
      </div>
    </>
  );
}

export default Quote;
