import React from 'react'

interface Props {
    world: number [][];
    onGridClick: (row:number,col:number) => void;
}

const World:React.FC<Props> = ({world, onGridClick}) => {

    return (

        <div className="world">
            {world.map((row: Array<number>, i: number) =>
                row.map((col: number, j: number) =>
                    <div
                        key={`${i}-${j}`}
                        className="cell"
                        style={{
                            backgroundColor: world[i][j] ? "#424151" : "#ffffff",
                            border: "solid 1px rgba(0, 0, 0, 0.6)",
                            outline: "none",
                            width: "10px",
                            height: "10px"
                        }}
                        onClick={() => onGridClick(i,j)}
                    />
                )
            )}
        </div>
    )
}

export default World

