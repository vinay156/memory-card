import React, {useState, useEffect} from 'react'
import List from "./component/list"
import "./styles.css"

function App() {
  const [titles, setTitles] = useState([['Alpha', 'α'], ['Beta', 'β'], ['Gamma', 'γ'], ['Delta', 'δ'],
                                        ['Epsilon', 'ε'], ['Zeta', 'ζ'],  ['Eta', 'η'], ['Theta', 'θ'],]);
  const [scoreArray, setScoreArray] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(()=>{
    if(score > bestScore){
      setBestScore(score);
    }
  }, [score, bestScore])

  const shuffle = (arr) => {
    let l = arr.length, a,b,c;
    for(a=0; a<l; a++){
      b = Math.floor(Math.random() * l);
      c=arr[a];
      arr[a]=arr[b];
      arr[b]=c;
    }
    return arr;
  }

  const clickedCard = (e, arr) => {
    let shuffleArray = shuffle([['Alpha', 'α'], ['Beta', 'β'], ['Gamma', 'γ'],
                              ['Delta', 'δ'], ['Epsilon', 'ε'], ['Zeta', 'ζ'],
                              ['Eta', 'η'], ['Theta', 'θ'],  ['Iota', 'ι'],
                              ['Kappa', 'κ'], ['Lambda', 'λ'], ['Mu', 'μ'],
                              ['Heat', 'Q'], ['Mass', 'm'], ['Length', 'l'],
                               ['Breadth', 'b']]);
    let halfArray=[], i;
    for(i=0; i<8; i++){
      halfArray.push(shuffleArray[i]);
    }
    
    setTitles(halfArray);
    let editScoreArray = scoreArray;
    if(editScoreArray.indexOf(arr[0]) === -1){
      setScore(score+1);
      editScoreArray.push(arr[0]);
      setScoreArray(editScoreArray);
    }else{
      setScore(0);
      setScoreArray([]);
    }
  }

  return (
    <div className="App">
      <header className="header">Memory Card Game</header>
      <h3>Get points by clicking on a different card that you haven't clicked before !!</h3>
      <h4>Score: {score}</h4>
      <h4>BestScore: {bestScore}</h4>
      <div className="content-container">
        {titles.map((el) => 
          <List onclick={(e)=> {clickedCard(e, el)}} name={el[0]} letter={el[1]} />
        )}
      </div>
    </div>
  );
}

export default App;
