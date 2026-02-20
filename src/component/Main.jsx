export default function Main() {
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
                    />
                </div>

                <button className="col-span-2 bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white py-3 rounded-md font-semibold hover:opacity-90 transition">
                    Get a new meme image 🖼
                </button>
            </div>

           
            <div className="relative">
                <img 
                    src="http://i.imgflip.com/1bij.jpg" 
                    alt="Meme"
                    className="w-full rounded-md"
                />

                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-3xl font-bold uppercase drop-shadow-lg">
                    One does not simply
                </span>

                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-3xl font-bold uppercase drop-shadow-lg">
                    Walk into Mordor
                </span>
            </div>

        </main>
    )
}