import React from 'react';
import NavBar from './Body/NavBar';
//시작할때 스코어와 탑 스코어는 0으로 시작. 
//1. 게임 페이지에서 처음 이미지를 눌렀을 때 이미지의 아이디가 저장된다. 양쪽 스코어가 1 올라가고 이미지가 섞임,
//2. 이미지를 눌렀을 때 만약 이미지의 아이디가 저장되어 있는경우 스코어는 0으로 리셋된다. 
//3. 이미지를 눌렀을 때 이미지의 아이디가 저장되어 있지 않은 경우 스코어와 탑 스코어 모두를 1씩 올려준다. 
//4. 탑스코어가 스코어보다 크면 스코어에만 1을 더한다. 탑스코어가 스코어보다 같거나 작으면 둘다 1을 더한다. 

class Board extends React.Component {
    state = {clickedImg:[],
             score: 0,
             topScore: 0,
             imgList:[]};

    componentDidMount() {
        this.setState({data: this.shuffle(this.state.data)});
    }
    
    shuffle=() => {
       
       } 
    }
} 
export default Board;