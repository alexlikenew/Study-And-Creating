import {useState} from "react";

type Link = {
    id: number, url: string, text: string
}

const navLinks = [
    {
        id: 1, url: 'test', text: 'some text'
    }, {
        id: 2, url: 'test', text: 'some text'
    }
    , {
        id: 3, url: 'test', text: 'some text'
    }
]

function Component() {

    const [text, setText] = useState('shakeandbake');
    const [list, setList] = useState<string[]>([])
    const [links, setLinks] = useState<Link[]>(navLinks)


    return (
        <div>
            <h2>React & Typescript</h2>
            <button
                className = 'btn btn-center'
                onClick = {() => {
                    setText('typesctritp')
                    setList(['string', 'olek'])
                    setLinks([...links, {id: 4, url: 'hello', text: 'ok'}])
                }
                }
            >click me
            </button>
        </div>
    );
}

export default Component;
