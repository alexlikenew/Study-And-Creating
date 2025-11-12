import {useState} from "react";

type Link = {
    id: number, url: string, text: string
}

const navLinks: Link[] = [
    {
        id: 1,
        url: 'https://reactjs.org',
        text: 'react docs',
    },
    {
        id: 2,
        url: 'https://reactrouter.com',
        text: 'react router docs',
    },
    {
        id: 3,
        url: 'https://reacttraining.com',
        // remove text property to see the error
        text: 'react training',
    },
];

function Component() {

    const [text, setText] = useState('shakeandbake')
    const [list, setList] = useState<string[]>([])
    const [links, setLinks] = useState<Link[]>(navLinks)

    return (
        <div>
            <h2 className = 'mb-1'>React & Typescript</h2>
            <button
                className = 'btn btn-center' onClick = {() => {
                setText('dsf')
            }}
            >Click me
            </button>
        </div>
    );
}

export default Component;
