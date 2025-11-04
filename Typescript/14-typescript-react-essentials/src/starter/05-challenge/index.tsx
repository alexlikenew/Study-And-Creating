type Basic = {
    type: 'basic',
    name: string
}
type Advanced = {
    type: 'advanced',
    name: string,
    email: string,
}

type Person = Basic | Advanced

function Component(props: Person) {
    // type === 'basic' ? let person as Basic : let person as Advanced
    const {type, name} = props

    if (type === 'basic') {
        return <div>
            <p>Type is {type}</p>
            <p>Name is {name}</p>
        </div>
    }

    return <div>
        <p>Type is {type}</p>
        <p>Name is {name}</p>
        <p>email is {props.email}</p>
    </div>


}

export default Component;
