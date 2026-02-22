import React, { useRef } from 'react';
import axios from 'axios'
// import axiosClient from './api';


const App = () => {
    axios.defaults.baseURL = 'http://localhost:8000'; 
    axios.defaults.withCredentials = true;     
    axios.defaults.xsrfCookieName = 'XSRF-TOKEN';      
    axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';    

    // const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleChange = async (e) => {
        e.preventDefault();

        const data = {
            // name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        console.log(data);

        try {
            await axios.get('/sanctum/csrf-cookie')

            await axios.post('/api/user/login', data)

            await axios.get('/api/user/me')
            .then(response => console.log(response))
        } catch (error) {
            
        }
    }

    return (
        <div>
            {/* <form onSubmit={handleChange}>
                <input type="text" placeholder="name" ref={nameRef} />
                <input type="email" placeholder="email" ref={emailRef} />
                <input type="password" placeholder="password" ref={passwordRef} />
                <button type="submit">register</button>
            </form> */}

            <form onSubmit={handleChange}>
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











