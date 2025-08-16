import {useState} from 'react'
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";
import Heading from "./ui/Heading.jsx";
import Row from "./ui/Row.jsx";


const StyledApp = styled.div`
	padding: 1rem;
`


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <GlobalStyles/>

            <StyledApp>
                <Row type="">

                    <Row type="horizontal">
                        <Heading as="h1">Wild Oasis</Heading>
                        <div>
                            <Heading as="h2">Check In and out</Heading>
                            <Button variation="primary" size="medium" onClick={() => alert('UWAGA')}>Check out</Button>
                            <Button variation="secondary" size="small" onClick={() => alert('UWAGA')}>Check out</Button>
                        </div>
                    </Row>
                    <Row type="">
                        <Heading as="h3">Form</Heading>
                        <Input type="number" placeholder="Number fo guests"/>
                        <Input type="number" placeholder="Number fo guests"/>
                    </Row>
                </Row>

            </StyledApp>
        </>
    )
}

export default App
