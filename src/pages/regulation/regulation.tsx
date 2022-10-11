import React from 'react';
import styled from 'styled-components'
import Regulation from '../../components/UI/organisms/regMap'
import {regulationData} from './data'


type Props = {
    id: number,
    paragraph: string,
    content: []
}

const title = 'Regulamin korzystania z Serwisu "Mapa Potrzeb Świecia"'


export default function RegulationPage() {

    return (
        <Regulation title={title} obj={regulationData}></Regulation>
    )
}

