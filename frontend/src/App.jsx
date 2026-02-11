import React, { useRef } from 'react';
import axios from 'axios'


const App = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleChange = async (e) => {
        e.preventDefault();

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        console.log(data);

        // await axios.get('http://127.0.0.1:8000/api/sanctum/csrf-cookie')
        // await axios.post('http://127.0.0.1:8000/user/register', data);
    }





    return (
        <div>
            <form onSubmit={handleChange}>
                <input type="text" placeholder="name" ref={nameRef} />
                <input type="email" placeholder="email" ref={emailRef} />
                <input type="password" placeholder="password" ref={passwordRef} />
                <button type="submit">register</button>
            </form>
        </div>
    )

}

export default App









// const [posts, setPosts] = React.useState([]);


// function getPosts() {
//     axios('http://127.0.0.1:8000/api/post')
//     .then(response => {
//         setPosts(response.data.posts)
//     })
// }

// React.useEffect(() => {
//     getPosts();
// },[])



//     <div>
//     {
//         posts.map(post => (
//             <div key={post.id}>
//                 <p>title: {post.title}</p>
//                 <p>description: {post.description}</p>
//             </div>
//         ))
//     }
//     </div>











