export function StartScreen({numQuestion}) {
    return(

        <div className='start'>
            <h2>Welcome to react Quiz!</h2>
            <h3>{numQuestion} question to test your React mastery</h3>
            <button  className='btn btn-ui'>Let`s start</button>
        </div>

        )

}