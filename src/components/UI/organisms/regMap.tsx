import { FC } from "react"
import styled from 'styled-components'


const Div = styled.div`
    border: 19px solid #ecf0f1;
    padding: 20px;
    margin: 2% 10%;
    border-radius: 4px;
`
const P = styled.p`
    text-align: justify;
    text-justify: inter-word
`

type Props = {
    title: string,
    [key: string]: any
}

function newLine(text: string) {
    return text.split('\n').map((str: string) => <p>{str}</p>)
}


const Regulation: FC<Props> = ({ title, obj }) => {

    return (
        <Div>
            <b>{title}</b>
            {obj.map((reg: any) =>
                <>
                    <p><b>§ {reg.id}</b></p>
                    <p><b>{reg.paragraph}</b></p>
                    <P>{newLine(reg.content)}</P>
                </>
            )}
        </Div >
    )
}

export default Regulation;