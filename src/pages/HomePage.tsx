import { useEffect } from "react"
//temp
import { book } from "../tempData"
//

type HomePageProps = {
    currentBook: book
}

function HomePage({ currentBook }: HomePageProps) {

    useEffect(() => {
        console.log(currentBook) 
    },[currentBook.isRead])

    function handleMarkAsRead() {
        // Will make a put request to changed isRead to true
        currentBook.isRead = true
    }

    interface isReadProp {
        isRead: boolean
    }

    function IsRead({ isRead }: isReadProp) {
        if (!isRead) {
            return (
                <button id="markAsRead" className="border-red-500 border-4 p-2" onClick={handleMarkAsRead}>Mark as read</button>
            )
        } else {
            return (
                <div id="overAllRating" className="flex-2 border-4 border-red-500 border-dotted ">
                    <button id="editreview" className="p-2 bg-green-500">Edit review</button>
                    <p id="bookReview" className="border-2 border-black">{currentBook.review}</p>
                    <br />
                    {/*Will change to a star component later*/}
                    <div>{currentBook.rating} Stars</div>
                </div>
            )
        }
    }

    return (
        <>
            <div id="bookTitle" className="text-6xl text-red-500">{currentBook.title}</div>
            <IsRead
                isRead={currentBook.isRead}
            />

            {/*<button className="text-blue-500 bg-black p-2 hover:bg-gray-600 hover:text-blue-300">Mark as Read</button>*/}
        </>
    )
}

export default HomePage;


