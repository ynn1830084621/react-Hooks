import React, { useRef, useState, useEffect } from 'react';

function Example8() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.value = 'hello world';
        console.log(inputEl);//输出获取到的DOM节点
    }

    const [ text, setText ] = useState('js');
    const textRef = useRef();
    useEffect(() => {
        textRef.current = text;
        console.log('textRef.current:', textRef.current);//useRef来保存变量
    })

    return (
        <>
            {/*保存input的ref到inputEl */}
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>在input上展现文字</button>
            <br/>
            <br/>
            <input value={text} onChange={(e) => {setText(e.target.value)}} />
        </>
    )
}

export default Example8;