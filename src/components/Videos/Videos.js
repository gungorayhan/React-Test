import React from 'react'

const Videos = ({videos =[]}) => {
    if(videos.length <= 0){
        return <h2>Soryy, no videos found</h2>
    }

    return (
        <div>
            <h3>Videos</h3>
            {videos.map((video,index)=>(
                <h1 key={index}>{video}</h1>
            ))}
        </div>
    )
}

export default Videos