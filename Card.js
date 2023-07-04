import React from 'react';
import Body from './Body';
import Header from './Header';

function Card(props){
  return (
    <div>
      <Header username = {props.commentObject.username} profileImg = {props.commentObject.profileImg}/>
      <Body comment={props.commentObject.comment}/>
    </div>
  )
}

export default Card
