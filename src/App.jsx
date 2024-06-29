import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [winner, setWinner] = useState("none");
  const [breaks, setBreaks] = useState("hello");
  const [compboard, setCompboard] = useState(["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"])
  const [board, setBoard] = useState({
    one: ".",
    two: ".",
    three: ".",
    four: ".",
    five: ".",
    six: ".",
    seven: ".",
    eight: ".",
    nine: "."
  })
  // function isetboard(y, z) {
  //   setBoard({ ...board, [y]: z });
  // }

  // function isetcompboard(y, z) {
  //   setCompboard([...compboard.slice(0, y), z, ...compboard.slice(y + 1)]);
  // }
  function knowWinner() {
    //for computer
      //for rows
    if (compboard[0] == compboard[1] && compboard[1] == compboard[2] && compboard[2] == "computer" && winner=="none") {
      setBreaks("false");
      setBreaks("false");
      setWinner("comp");
      alert("comp won, Refresh the page to start over");
    } else if (compboard[3] == compboard[4] && compboard[4] == compboard[5] && compboard[5] == "computer" && winner=="none") {
      setBreaks("false");
      setBreaks("false");
      setWinner("comp");
      alert("comp won, Refresh the page to start over");
    } else if (compboard[6] == compboard[7] && compboard[7] == compboard[8] && compboard[8] == "computer" && winner=="none") {
      setBreaks("false");
      setBreaks("false");
      setWinner("comp");
      alert("comp won, Refresh the page to start over");
    }
      //for columns
    if (compboard[0] == compboard[3] && compboard[3] == compboard[6] && compboard[6] == "computer" && winner=="none") {
      setBreaks("false");
      setBreaks("false");
      setWinner("comp");
      alert("comp won, Refresh the page to start over");
    } else if (compboard[1] == compboard[4] && compboard[4] == compboard[7] && compboard[7] == "computer" && winner=="none") {
      setBreaks("false");
      setWinner("comp");
      alert("comp won, Refresh the page to start over");
    } else if (compboard[2] == compboard[5] && compboard[5] == compboard[8] && compboard[8] == "computer" && winner=="none") {
      setBreaks("false");
      setWinner("comp");
      alert("comp won, Refresh the page to start over");
    }
      //for diagonals
    if (compboard[0] == compboard[4] && compboard[4] == compboard[8] && compboard[8] == "computer" && winner=="none") {
      setBreaks("false");
      setWinner("comp");
      alert("comp won, Refresh the page to start over");
    } else if (compboard[2] == compboard[4] && compboard[4] == compboard[6] && compboard[6] == "computer" && winner=="none") {
      setBreaks("false");
      setWinner("comp");
      alert("comp won, Refresh the page to start over");
    }

    //for player
      //for rows
    if (compboard[0] == compboard[1] && compboard[1] == compboard[2] && compboard[2] == "player" && winner=="none") {
      setBreaks("false");
      setWinner("you");
      alert("you won, Refresh the page to start over");
    } else if (compboard[3] == compboard[4] && compboard[4] == compboard[5] && compboard[5] == "player" && winner=="none") {
      setBreaks("false");
      setWinner("you");
      alert("you won, Refresh the page to start over");
    } else if (compboard[6] == compboard[7] && compboard[7] == compboard[8] && compboard[8] == "player" && winner=="none") {
      setBreaks("false");
      setWinner("you");
      alert("you won, Refresh the page to start over");
    }
      //for columns
    if (compboard[0] == compboard[3] && compboard[3] == compboard[6] && compboard[6] == "player") {
      setBreaks("false");
      setWinner("you");
      alert("you won, Refresh the page to start over");
    } else if (compboard[1] == compboard[4] && compboard[4] == compboard[7] && compboard[7] == "player" && winner=="none") {
      setBreaks("false");
      setWinner("you");
      alert("you won, Refresh the page to start over");
    } else if (compboard[2] == compboard[5] && compboard[5] == compboard[8] && compboard[8] == "player" && winner=="none") {
      setBreaks("false");
      setWinner("you");
      alert("you won, Refresh the page to start over");
    }
      //for diagonals
    if (compboard[0] == compboard[4] && compboard[4] == compboard[8] && compboard[8] == "player" && winner=="none") {
      setBreaks("false");
      setWinner("you");
      alert("you won, Refresh the page to start over");
    } else if (compboard[2] == compboard[4] && compboard[4] == compboard[6] && compboard[6] == "player" && winner=="none") {
      setBreaks("false");
      setWinner("you");
      alert("you won, Refresh the page to start over");
    }
  }

  useEffect(() => {
    knowWinner();
    //for columns
    if (breaks == "true" && compboard[0] == compboard[3] && compboard[3] == "player" && compboard[6] != "computer" && compboard[6] != "player") {
      setBoard({ ...board, [compboard[6]]: "o" });
      setCompboard([...compboard.slice(0, 6), "computer", ...compboard.slice(7)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[1] == compboard[4] && compboard[4] == "player" && compboard[7] != "computer" && compboard[7] != "player") {
      setBoard({ ...board, [compboard[7]]: "o" });
      setCompboard([...compboard.slice(0, 7), "computer", ...compboard.slice(8)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[2] == compboard[5] && compboard[5] == "player" && compboard[8] != "computer" && compboard[8] != "player") {
      setBoard({ ...board, [compboard[8]]: "o" });
      setCompboard([...compboard.slice(0, 8), "computer", ...compboard.slice(9)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[0] == compboard[6] && compboard[6] == "player" && compboard[3] != "computer" && compboard[3] != "player") {
      setBoard({ ...board, [compboard[3]]: "o" });
      setCompboard([...compboard.slice(0, 3), "computer", ...compboard.slice(4)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[1] == compboard[7] && compboard[7] == "player" && compboard[4] != "computer" && compboard[4] != "player") {
      setBoard({ ...board, [compboard[4]]: "o" });
      setCompboard([...compboard.slice(0, 4), "computer", ...compboard.slice(5)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[2] == compboard[8] && compboard[8] == "player" && compboard[5] != "computer" && compboard[5] != "player") {
      setBoard({ ...board, [compboard[5]]: "o" });
      setCompboard([...compboard.slice(0, 5), "computer", ...compboard.slice(6)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[3] == compboard[6] && compboard[6] == "player" && compboard[0] != "computer" && compboard[0] != "player") {
      setBoard({ ...board, [compboard[0]]: "o" });
      setCompboard([...compboard.slice(0, 0), "computer", ...compboard.slice(1)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[4] == compboard[7] && compboard[7] == "player" && compboard[1] != "computer" && compboard[1] != "player") {
      setBoard({ ...board, [compboard[1]]: "o" });
      setCompboard([...compboard.slice(0, 1), "computer", ...compboard.slice(2)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[5] == compboard[8] && compboard[8] == "player" && compboard[2] != "computer" && compboard[2] != "player") {
      setBoard({ ...board, [compboard[2]]: "o" });
      setCompboard([...compboard.slice(0, 2), "computer", ...compboard.slice(3)]);
      setBreaks("false");
      return;
    }

    //for rows
    if (breaks == "true" && compboard[0] == compboard[1] && compboard[1] == "player" && compboard[2] != "computer" && compboard[2] != "player") {
      setBoard({ ...board, [compboard[2]]: "o" });
      setCompboard([...compboard.slice(0, 2), "computer", ...compboard.slice(3)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[3] == compboard[4] && compboard[4] == "player" && compboard[5] != "computer" && compboard[5] != "player") {
      setBoard({ ...board, [compboard[5]]: "o" });
      setCompboard([...compboard.slice(0, 5), "computer", ...compboard.slice(6)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[6] == compboard[7] && compboard[7] == "player" && compboard[8] != "computer" && compboard[8] != "player") {
      setBoard({ ...board, [compboard[8]]: "o" });
      setCompboard([...compboard.slice(0, 8), "computer", ...compboard.slice(9)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[0] == compboard[2] && compboard[2] == "player" && compboard[1] != "computer" && compboard[1] != "player") {
      setBoard({ ...board, [compboard[1]]: "o" });
      setCompboard([...compboard.slice(0, 1), "computer", ...compboard.slice(2)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[3] == compboard[5] && compboard[5] == "player" && compboard[4] != "computer" && compboard[4] != "player") {
      setBoard({ ...board, [compboard[4]]: "o" });
      setCompboard([...compboard.slice(0, 4), "computer", ...compboard.slice(5)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[6] == compboard[8] && compboard[8] == "player" && compboard[7] != "computer" && compboard[7] != "player") {
      setBoard({ ...board, [compboard[7]]: "o" });
      setCompboard([...compboard.slice(0, 7), "computer", ...compboard.slice(8)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[1] == compboard[2] && compboard[2] == "player" && compboard[0] != "computer" && compboard[0] != "player") {
      setBoard({ ...board, [compboard[0]]: "o" });
      setCompboard([...compboard.slice(0, 0), "computer", ...compboard.slice(1)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[4] == compboard[5] && compboard[5] == "player" && compboard[3] != "computer" && compboard[3] != "player") {
      setBoard({ ...board, [compboard[3]]: "o" });
      setCompboard([...compboard.slice(0, 3), "computer", ...compboard.slice(4)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[7] == compboard[8] && compboard[8] == "player" && compboard[6] != "computer" && compboard[6] != "player") {
      setBoard({ ...board, [compboard[6]]: "o" });
      setCompboard([...compboard.slice(0, 6), "computer", ...compboard.slice(7)]);
      setBreaks("false");
      return;
    }

    //for diagonals
    if (breaks == "true" && compboard[0] == compboard[4] && compboard[4] == "player" && compboard[8] != "computer" && compboard[8] != "player") {
      setBoard({ ...board, [compboard[8]]: "o" });
      setCompboard([...compboard.slice(0, 8), "computer", ...compboard.slice(9)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[0] == compboard[8] && compboard[8] == "player" && compboard[4] != "computer" && compboard[4] != "player") {
      setBoard({ ...board, [compboard[4]]: "o" });
      setCompboard([...compboard.slice(0, 4), "computer", ...compboard.slice(5)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[4] == compboard[8] && compboard[8] == "player" && compboard[0] != "computer" && compboard[0] != "player") {
      setBoard({ ...board, [compboard[0]]: "o" });
      setCompboard([...compboard.slice(0, 0), "computer", ...compboard.slice(1)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[2] == compboard[4] && compboard[4] == "player" && compboard[6] != "computer" && compboard[6] != "player") {
      setBoard({ ...board, [compboard[6]]: "o" });
      setCompboard([...compboard.slice(0, 6), "computer", ...compboard.slice(7)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[2] == compboard[6] && compboard[6] == "player" && compboard[4] != "computer" && compboard[4] != "player") {
      setBoard({ ...board, [compboard[4]]: "o" });
      setCompboard([...compboard.slice(0, 4), "computer", ...compboard.slice(5)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[4] == compboard[6] && compboard[6] == "player" && compboard[2] != "computer" && compboard[2] != "player") {
      setBoard({ ...board, [compboard[2]]: "o" });
      setCompboard([...compboard.slice(0, 2), "computer", ...compboard.slice(3)]);
      setBreaks("false");
      return;
    }

    //for starting
    if (breaks == "true" && compboard[4] != "player" && compboard[4] != "computer") {
      setBoard({ ...board, [compboard[4]]: "o" });
      setCompboard([...compboard.slice(0, 4), "computer", ...compboard.slice(5)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[1] != "player" && compboard[1] != "computer") {
      setBoard({ ...board, [compboard[1]]: "o" });
      setCompboard([...compboard.slice(0, 1), "computer", ...compboard.slice(2)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[0] != "player" && compboard[0] != "computer") {
      setBoard({ ...board, [compboard[0]]: "o" });
      setCompboard([...compboard.slice(0, 0), "computer", ...compboard.slice(1)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[5] != "player" && compboard[5] != "computer") {
      setBoard({ ...board, [compboard[5]]: "o" });
      setCompboard([...compboard.slice(0, 5), "computer", ...compboard.slice(6)]);
      setBreaks("false");
      return;
    } else if (breaks == "true" && compboard[6] != "player" && compboard[6] != "computer") {
      setBoard({ ...board, [compboard[6]]: "o" });
      setCompboard([...compboard.slice(0, 6), "computer", ...compboard.slice(7)]);
      setBreaks("false");
      return;
    }
    // knowWinner()
    // }
  }, [compboard])

  // function ComputerMove() {
  //   console.log("hello")
  // for (let i = 0; i < 7; i++) {      
  // if (compboard[i] == compboard[i + 3]) {
  // setBoard({ ...board, [compboard[i + 6]]: "o" });
  // isetboard(compboard[i + 6],"o")
  // setCompboard([...compboard.slice(0, i+6), "computer", ...compboard.slice(i + 7)]);
  // isetcompboard(i+6,"computer")
  // }
  // if (compboard[i] == compboard[i + 6]) {
  // setBoard({ ...board, [compboard[i + 3]]: "o" });
  // isetboard(compboard[i + 3],"o")
  // setCompboard([...compboard.slice(0, i+3), "computer", ...compboard.slice(i + 4)]);
  // isetcompboard(i+3,"computer")
  // }
  // if (compboard[i+3] == compboard[i + 6]) {
  // setBoard({ ...board, [compboard[i]]: "o" });
  // isetboard(compboard[i],"o")
  // setCompboard([...compboard.slice(0, i), "computer", ...compboard.slice(i + 1)]);
  // isetcompboard(i,"computer")
  // }
  // }

  function show(event) {
    let index = compboard.indexOf(event.target.name);
    console.log(index)
    setBreaks("true");
    if (index != -1) {
      setCompboard([...compboard.slice(0, index), "player", ...compboard.slice(index + 1)])
      setBoard({ ...board, [event.target.name]: "x" });
      event.target.style.backgroundColor = "#888";
      // ComputerMove();
    }
    // knowWinner();
  }

  return (
    <>
      {/* {console.log(board)} */}
      <div className='gameBoard'>
        <div className='boardRow'>
          <button onClick={show} name='one'>{board.one}</button>
          <button onClick={show} name='two'>{board.two}</button>
          <button onClick={show} name='three'>{board.three}</button>
        </div>
        <div className='boardRow'>
          <button onClick={show} name='four'>{board.four}</button>
          <button onClick={show} name='five'>{board.five}</button>
          <button onClick={show} name='six'>{board.six}</button>
        </div>
        <div className='boardRow'>
          <button onClick={show} name='seven'>{board.seven}</button>
          <button onClick={show} name='eight'>{board.eight}</button>
          <button onClick={show} name='nine'>{board.nine}</button>
        </div>
      </div>
    </>
  )
}

export default App