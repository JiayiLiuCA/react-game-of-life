import React from 'react'
import { Button, ButtonGroup } from 'semantic-ui-react'

interface Prop {
    playing: boolean;
    onPlayClick: () => void;
    onRandomClick: () => void;
    onClearClick: () => void;
}

const Control: React.FC<Prop> = ({ playing, onPlayClick, onRandomClick, onClearClick }) => {
    return (
        <div className="control">
            <ButtonGroup>
                <Button
                    
                    icon={playing ? "pause" : "play"}
                    onClick={() => onPlayClick()}
                />
                <Button
                    icon="random"
                    onClick={() => onRandomClick()}
                />
                <Button
                    icon="redo"
                    onClick={() => onClearClick()}
                />>
            </ButtonGroup>
        </div>
    )
}

export default Control
