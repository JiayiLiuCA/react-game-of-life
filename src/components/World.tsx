import React from 'react'

const World:React.FC<{world: number[][]}> = ({ world }) => {
    console.log(world);
    return (
        
        <div className="world">
            {world.map((row:Array<number>,i:number) => 
                row.map((col:number,j:number) => 
                <div
                key={`${i}-${j}`}
                className="cell"
                style= {{ backgroundColor: world[i][j] ? "#424151" : "#ffffff", 
                        border: "solid 1px rgba(0, 0, 0, 0.6)", 
                        width: "10px", 
                        height: "10px"}}
            />
                )
                
                
            )}
        </div>
    )
}

export default World
