import React from 'react'

const PodcastDetails = ({params}: {params: { podcastId: string}}) => {
  return (
    <p className='text-white-1'>PodcastDetails for {params.podcastId}</p>
  )
}

export default PodcastDetails

//next.js example
/*export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
  }*/