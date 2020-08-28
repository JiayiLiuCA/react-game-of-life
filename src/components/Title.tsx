import React from 'react'
import { Header, Divider } from 'semantic-ui-react'


const Title: React.FC = () => {
    return (
        <div className="title">
            <Header as='h2' inverted>
                Game of Life
                <Header.Subheader>
                    A turing complete cellular automaton by John Conway
                </Header.Subheader>
            </Header>
            <Divider />
        </div>
    )
}

export default Title
