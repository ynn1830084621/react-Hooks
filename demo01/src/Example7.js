import React, { useState, useMemo } from 'react';

function Example7() {
    const [tea, setTea] = useState('客人是否要一杯茶');
    const [coffee, setCoffee] = useState('客人是否要一杯咖啡');
    return (
        <>
            <button onClick={() => {setTea(new Date().getTime())}}>茶</button>
            <button onClick={() => {setCoffee(new Date().getTime()+'，咖啡加糖')}}>咖啡</button>
            <ChildComponent name={tea}>{coffee}</ChildComponent>
        </>
    )
}

//子组件
function ChildComponent({name, children}) {
    function changeTea(name) {
        console.log('一杯茶');
        return name + '，客人喜欢茶';
    }
    const actionTea = useMemo(() => changeTea(name),[name]);
    return (
        <>
            <div>{actionTea}</div>
            <div>{children}</div>
        </>
    )
}
export default Example7;