import youtubeData from './data/youtubeData.json';
import React, {useState} from 'react';
function App3() {
  console.log('youtube data:', youtubeData);
  console.log('youtube data[data]:', youtubeData['data']);

  const data=youtubeData['data'][0];

  console.log('data[id] :',data['id'],'-> 영상의 링크 주소');
  console.log('data[title] :',data['title'],'-> 영상의 제목');
  console.log('data[date] :',data['date'],'-> 업로드 날짜');
  console.log('data[thumbnail] :',data['thumbnail'],'-> 썸네일 이미지');
  console.log('data[description] :',data['description'],'-> 영상 설명');
  console.log('data[category] :',data['category'],'-> 영상 분류');
  console.log('data[viewCount] :',data['viewCount'],'-> 조회 수');
  console.log('data[likeCount] :',data['likeCount'],'-> 좋아요 수');
  console.log('data[channelTitle] :',data['channelTitle'],'-> 채널 제목');
  console.log('data[channelUrl] :',data['channelUrl'],'-> 채널 url');
  console.log('data[channelThumbnail] :',data['channelThumbnail'],'-> 채널 썸네일');
  console.log('data[channelId] :',data['channelId'],'-> 채널 id');

  const [yn,setYn]=useState(false);
  function clickEventHandler(){
    setYn(!yn);
  }
  
  return (
    <div>
      <button onClick={clickEventHandler}>True?</button>
      {yn===true && <div>True!</div>}
    </div>
  );
}

export default App3;
