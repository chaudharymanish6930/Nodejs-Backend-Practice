import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts , setPosts] = useState([
        {
            _id:'1',
            image:"https://imgs.search.brave.com/WefN0Vnq1gMcORvvs9xUGME1LMt6FaOFBNwoH31P8s0/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMzUvOTQzNS0w/NTAtOEYyNDg0QTQv/TW91bnQtU2lyLURv/bmFsZC1zZWdtZW50/LVNlbGtpcmstTW91/bnRhaW5zLUJyaXRp/c2guanBn",
            caption:"Beautiful scenery"
        }
    ])

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            setPosts(res.data.posts)
        })

    },[])


  return (
    <section className='feed-section'>
        {
            posts.length>0?(
                posts.map((post)=>(
                <div key={post._id} 
                className='post-card'>
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))
        ):(
            <h1>No Posts Available</h1>
        )
    
}
</section>
)
}
export default Feed