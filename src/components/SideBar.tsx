import React from "react"
// temp
import { book } from "../tempData"
import { bookList } from "../tempData"
//

type SideBarProps = {
    setCurrentBook: React.Dispatch<React.SetStateAction<book>>
}

function SideBar({setCurrentBook}: SideBarProps) {

    return (

        <>
            <div className="bg-red-500 border-4 border-black">
                <ul>
                    {bookList.map((x: book) => {
                        return <li onClick={() => {setCurrentBook(x)}} id={`${x.id}`}>{x.title}</li> 
                    })}
                </ul>
            </div>
        </>
    )
}

export default SideBar
