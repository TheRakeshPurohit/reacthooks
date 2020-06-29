import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

const [post, setPost] = useState({ })
const [id, setId] = useState(1)
const [idFromButtonClick, setIdFromButtonClick] = useState(1)

const handleClick = () => {
    setIdFromButtonClick(id)
}
useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    return () => {
        
    }
},[idFromButtonClick])
    return (
        <div>
            <input type="number" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>
                { post.title } <br />
                { post.body }
            </div>

            {/* <ul>
                {
                    post.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
