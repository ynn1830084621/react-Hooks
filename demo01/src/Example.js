import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Index() {
    useEffect(() => {
        console.log('useEffect => 老弟，你来了！Index页面');
        return () => {
            console.log('老弟，你走了！Index');
        }
    },[])
    return <h2> JS </h2>;
}
function List() {
    useEffect(() => {
        console.log('useEffect => 老弟，你来了！List页面');
        return () => {
            console.log('老弟，你走了！List')
        }
    })
    return <h2> List-page </h2>;
}

function Example() {
    const [ count, setCount ] = useState(0);
    useEffect(() => {
        console.log(`useEffect => You clicked ${count} times`);//表示(componentDidMonut)和(componentDidUpdate)
        return (() => {
            console.log('================');
        })
    },[count])
    return (
        <div>
            <p> You clicked {count} times! </p>
            <button onClick={() => {setCount(count + 1)}}>Clink me</button>
            
            <Router>
                <ul>
                    <li><Link to="/"> 首页 </Link></li>
                    <li><Link to="/list/"> 列表 </Link></li>
                </ul>
                <Routes>
                    <Route path="/" exact element={<Index/>} />
                    <Route path="/list/" element={<List/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default Example;