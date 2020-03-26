import React from 'react';
import NavBar from './NavBar';
import Picture from './Picture';
//시작할때 스코어와 탑 스코어는 0으로 시작. 
//1. 게임 페이지에서 처음 이미지를 눌렀을 때 이미지의 아이디가 저장된다. 양쪽 스코어가 1 올라가고 이미지가 섞임,
//2. 이미지를 눌렀을 때 만약 이미지의 아이디가 저장되어 있는경우 스코어는 0으로 리셋된다. 
//3. 이미지를 눌렀을 때 이미지의 아이디가 저장되어 있지 않은 경우 스코어와 탑 스코어 모두를 1씩 올려준다. 
//4. 탑스코어가 스코어보다 크면 스코어에만 1을 더한다. 탑스코어가 스코어보다 같거나 작으면 둘다 1을 더한다. 

const Board = () => {
    const images = [
        {id:0, src: "/assets/images/dog1.jpg"},
        {id:1, src: "/assets/images/dog2.jpg"},
        {id:2, src: "/assets/images/dog3.jpg"},
        {id:3, src: "/assets/images/dog4.jpg"},
        {id:4, src: "/assets/images/dog5.jpg"},
        {id:5, src: "/assets/images/dog6.jpg"},
        {id:6, src: "/assets/images/dog7.jpg"},
        {id:7, src: "/assets/images/dog8.jpg"},
        {id:8, src: "/assets/images/dog9.jpg"},
        {id:9, src: "/assets/images/dog10.jpg"},
        {id:10, src: "/assets/images/dog11.jpg"},
        {id:11, src: "/assets/images/dog12.jpg"}
    ];
// state
  // useState(0): [0, (newValue) => {this.state = newValue}];
  // const [score, setScore] = useState(0);
 
  // const useStateReturn = useState(0);
  // const score = useStateReturn[0];
  // const setScore = useStateReturn[1];
//앞이 var이름 뒤는 이 베리어블을 업데이트 할 때 사용하는 펑션이름
  const [score, setScore] = React.useState(0);
  const [highestScore, setHighestScore] = React.useState(0);
  const [cards, setCards] = React.useState(Array.from(images));
  const [clicked, setClicked] = React.useState([]);
  const [message, setMessage] = React.useState("Click an image to begin!");

  const checkIfScore = (id) => {
    const isScore = !clicked.includes(id);
    if (isScore) {
      // let clickedTemp = [];
      // for (let i = 0; i < clicked.length; i++) {
      //   clickedTemp.push(clicked[i]);
      // }
      // clickedTemp.push(id);
      // setClicked(clickedTemp);
     
      // setClicked: clicked variable

      // clicked = [1, 2, 3]
      // id = 0
      // [...clicked] = [1, 2, 3]
      // [...clicked, id] = [1, 2, 3, 0]
     
      setClicked([...clicked, id]);
    } else {
      setClicked([id]);
    }
    return isScore;
  };

  const shuffle = () => {
    // let numbers = [1, 3, 2];
    // numbers.sort((a, b) => (a - b));
    // numbers = [3, 2, 1];
    //images.sort(() => Math.random() - 0.5);
   
    //shuffle
    for (let i = 0; i < 100; i++) {
      // 0 ~ 3: Math.floor(Math.random() * 3);
      // 0 ~ images.length - 1
      let idx1 = Math.floor(Math.random() * images.length);
      let idx2 = Math.floor(Math.random() * images.length);
      let temp = images[idx1];
      images[idx1] = images[idx2];
      images[idx2] = temp;
    }
   
    setCards(images);
  };
 

const handleOnClick = (id) => {
    console.log(id + "clicked!");
   
    // check if score
    const isScore = checkIfScore(id);
    if(isScore){
      setMessage("You guessed correctly!");
    }else{
      setMessage("You guessed incorrectly!");
    }
    // update score & highest score
    if (isScore && highestScore < score + 1) {
      setHighestScore(score + 1);
    }
    setScore(isScore ? score + 1 : 1);
   
    shuffle();
  };  


  return (
    <div>
      <NavBar message={message} score={score} highestScore={highestScore} />
      
      <div className="container page-top">
        <div className="row">
        {cards.map(card => {
              console.log('card.map'+card);
              return (
                <Picture key= {card.id} imgSrc={card.src} onClick={handleOnClick} pictureId={card.id} />
                );
              })}
        </div>
      </div>

    </div>
  );
}

export default Board;