import axios  from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4444'
})
//Делается для сокращения путей в дальнейшем (axios.get('http://localhost:4444/posts')) => (/posts)

export default instance;