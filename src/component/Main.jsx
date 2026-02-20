 import { useState,useEffect } from "react"
export default function Main() {
    const [meme,setMeme] = useState({
        topText:"",
        bottomText:"",
        imageUrl:"/OIP.webp"
    })

    const [allMemes,setAllMemes]= useState([])

     useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeImg =allMemes[randomNumber].url
         setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl:newMemeImg
         }))
    }
    function handlechange(event){
        const {value}=event.currentTarget
        setMeme(prev =>({
            ...prev,
            topText:value
        }))
    }
     function handlechange2(event){
        const {value}=event.currentTarget
        setMeme(prev =>({
            ...prev,
            bottomText:value
        }))
    }
    return (
        <main className="bg-gray-100 p-6 rounded-b-xl">

          
            <div className="grid grid-cols-2 gap-4 mb-6">
                
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        Top Text
                    </label>
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onChange={handlechange}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        Bottom Text
                    </label>
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onChange={handlechange2}
                    />
                </div>

                <button 
                  onClick={getMemeImage}
                className="col-span-2 bg-linear-to-r from-purple-700 to-fuchsia-600 text-white py-3 rounded-md font-semibold hover:opacity-90 transition">
                    Get a new meme image 🖼
                </button>
            </div>

           
            <div className="relative">
                <img 
                    src={meme.imageUrl} 
                    alt="Meme"
                    className="w-full rounded-md"
                />

                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-red-500 text-3xl font-bold uppercase drop-shadow-lg">
                   {meme.topText}
                </span>

                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-red-500 text-3xl font-bold uppercase drop-shadow-lg">
                   {meme.bottomText}
                </span>
            </div>

        </main>
    )
}