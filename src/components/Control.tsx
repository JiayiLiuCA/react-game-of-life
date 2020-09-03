import React from 'react'
import { Button, ButtonGroup } from 'semantic-ui-react'

interface Prop {
    playing: boolean;
    onPlay: () => void;
    nextGen: ()=> void;
    onRandom: () => void;
    onClear: () => void;
}

const Control: React.FC<Prop> = ({ playing, onPlay, nextGen, onRandom, onClear }) => {
    return (
        <div className="control">
            <ButtonGroup>
                <Button
                    icon={playing ? "pause" : "play"}
                    onClick={() => onPlay()}
                />
                <Button
                    icon="arrow right"
                    onClick={() => nextGen()}
                />
                <Button
                    icon="random"
                    onClick={() => onRandom()}
                />
                <Button
                    icon="redo"
                    onClick={() => onClear()}
                />
            </ButtonGroup>
        </div>
    )
}

export default Control
