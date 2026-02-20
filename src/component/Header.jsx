
export default function Header() {
    return (
        <header className="bg-linear-to-r from-purple-700 to-fuchsia-600 text-white p-5 rounded-t-xl flex items-center gap-3">
            <img 
                src='OIP.webp' 
                alt="Troll Face"
                className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold">Meme Generator</h1>
        </header>
    )
}