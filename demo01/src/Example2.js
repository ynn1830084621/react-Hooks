import React, { useState } from 'react';

function Example2(){
    const [ age , setAge ] = useState(18)
    const [ sex , setSex ] = useState('女')
    const [ work , setWork ] = useState('程序员')
    return (
        <div>
            <p>今年:{age}岁</p>
            <p>性别:{sex}</p>
            <p>工作是:{work}</p>
            <button onClick={() => {setAge(age + 1)}}>click</button>
        </div>
    )
}
export default Example2;
