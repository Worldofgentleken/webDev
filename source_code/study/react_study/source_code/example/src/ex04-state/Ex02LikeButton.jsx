import { useState } from 'react';

function Ex02LikeButton(){
  console.log('좋아요 렌더링');
  const [liked, setLiked] = useState(false);

  if(liked){
    return '좋아요';
  }
  return (
    <button onClick={() => setLiked(true)}>
      좋아요
    </button>
  )
}

export default Ex02LikeButton;