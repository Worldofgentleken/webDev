import { useState } from "react";

function Ex05onChange() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    // checknox
    const [checked, setChecked] = useState(false);

    const handle1 = (event) => {
        //이벤트가 발생된 객체 참조(event)
        if (event.target.name === 'input1') {
            setValue1(event.target.value)
        } else if (event.target.name === 'input2') {
            setValue2(event.target.value);
        }
    }
    // radio
    const [radio, setRadio] = useState("I");

    // dropdown
    const [option, setOption] = useState("");

    const handle2 = (event) => {
        setChecked(event.target.checked);
    }

    const handle3 =(event) => {
        setRadio(event.target.value);
    }
    const handle4 = (event) =>{
        setOption(event.target.value);
    }
    return (
        <div>
            <h1>onChange Example</h1>
            <input name="input1" type="text" value={value1} onChange={handle1} />
            <input name="input2" type="text" value={value2} onChange={handle1} />
            <p>현재 값 : {value1}, {value2}</p>
            <hr></hr>
            <label>
                동의
                <input type="checkbox" checked={checked} onChange={handle2} />
            </label>
            <p>{checked ? "동의함" : "비동의"}</p>
            <hr></hr>
            {/* 같은 이름의 라디오 버튼은 한개만 선택됨 */}
            E<input checked={radio === 'E'} type="radio" value="E" name="mbti" onChange={handle3}/>
            I<input checked={radio === 'I'} type="radio" value="I" name="mbti" onChange={handle3}/>
            <p>선택한 값 : {radio}</p>
            <hr></hr>
            <select value={option} onChange={handle4}>
                <option value="a">옵션1</option>
                <option value="b">옵션2</option>
                <option value="c">옵션3</option>
            </select>
            <p>선택한 옵션: {option}</p>
        </div>
    )
}

export default Ex05onChange;