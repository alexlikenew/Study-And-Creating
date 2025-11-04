import React, {useState} from "react";

type Person = {
    name: string
}


function Component() {
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // const formData = new FormData(e.currentTarget)
        const formData = new FormData(e.target as HTMLFormElement)

        const data = Object.fromEntries(formData)
        console.log(data)
        const text = formData.get('text') as string;
        const person: Person = {name: data.text as string}
    }


    return (
        <section>
            <h2>Events example</h2>
            <form onSubmit = {handleSubmit} action = "" className = 'form'>
                <input
                    className = 'form-input mb-1' type = "text" value = {text} name = 'text'
                    onChange = {(e) => setText(e.target.value)}
                />
                <input
                    className = 'form-input mb-1' type = "text" value = {email}
                    onChange = {handleChange} name = 'email'
                />
                <button type = 'submit' className = 'btn btn-block'>Submit</button>
            </form>
        </section>
    );
}

export default Component;
