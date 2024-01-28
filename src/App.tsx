import './App.css'
import "./pages/HomePage"
import "./index.css"
import { useState } from 'react'
import HomePage from './pages/HomePage'
import SideBar from './components/SideBar'
import { book, bookList } from './tempData'

function App() {
    const [currentBook, setCurrentBook] = useState<book>(bookList[0])
    const test = 3

    return (
        <>
            <SideBar setCurrentBook={setCurrentBook} />
            <HomePage currentBook={currentBook} />
        </>
    )
}

export default App
