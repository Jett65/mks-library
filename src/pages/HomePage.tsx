//temp
import { book } from "../tempData"
//
import StarRating from "../components/StarRating"


type HomePageProps = {
    currentBook: book
}

function HomePage({ currentBook }: HomePageProps) {

    return (
        <>
            <div id="bookTitle" className="text-6xl text-red-500">{currentBook.title}</div>
            <div id="OverAllRating" className="flex-2 border-4 border-red-500 border-dotted ">
            <button id="editreview" className="p-2 bg-green-500">Edit review</button> 
                <p id="bookReview" className="border-2 border-black">{currentBook.review}</p> 
                <br/>
                {/*Will change to a star component later*/}
                <StarRating currentBook={currentBook} />
            </div>
            {console.log(currentBook.review)}

            {/*<button className="text-blue-500 bg-black p-2 hover:bg-gray-600 hover:text-blue-300">Mark as Read</button>*/}
        </>
    )
}

export default HomePage


