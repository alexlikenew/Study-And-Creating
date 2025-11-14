import {ThemeProvider, useTheme} from "./contex.tsx";

function ParentComponent() {
    return <ThemeProvider>
        <Component/>
    </ThemeProvider>
}


function Component() {
    const context = useTheme()
    return (
        <div>
            <h2>React & Typescript</h2>
            <button
                onClick = {() => {
                    if (context.theme === 'dark') {
                        context.setTheme('system')
                        console.log(context.theme)
                        return
                    }
                    context.setTheme('dark')
                    console.log(context.theme)

                }}
                className = 'btn btn-center'
            >Toggle theme
            </button>
        </div>
    );
}

export default ParentComponent;
