import { useState } from 'react'
import { Calculator, Plus, Divide, Minus, X } from 'lucide-react'
import { useEffect } from 'react'
import MathModal from './math-popup'

const Images = [
    [
        "arrow.png",
        "arrow.png"
    ],
    [
        "arrow.png",
        "arrow.png"
    ],
]

const MathNumberForm = () => {
    const [number, setNumber] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [Image, setImage] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!number && number == 0) return
        
        const arrayIndex = (number - 1) % Images.length;
        
        const randomIndex = Math.floor(Math.random() * Images[arrayIndex].length)
        
        setImage(Images[arrayIndex][randomIndex])

        setIsModalOpen(true)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 text-white/10 animate-float">
                    <Plus size={40} />
                </div>
                <div className="absolute top-40 right-32 text-white/10 animate-float-delayed">
                    <Divide size={48} />
                </div>
                <div className="absolute bottom-32 left-40 text-white/10 animate-float">
                    <X size={36} />
                </div>
                <div className="absolute bottom-20 right-20 text-white/10 animate-float-delayed">
                    <Minus size={44} />
                </div>
            </div>

            <div className="w-[90%] md:w-full max-w-lg p-8 space-y-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
                <div className="text-center bg-white/0 r">
                    <div className="mx-auto h-20 w-20 flex items-center justify-center  bg-white/0 rounded-xl shadow-lg transform transition-transform hover:scale-105">
                        <img src="https://cdn.discordapp.com/attachments/1243566531460464671/1329545379502358599/IMG-20241230-WA0006.jpg?ex=678abb20&is=678969a0&hm=5576232bea1e048c8c207cd7ae3b9a2f8d3ed4da9c573875f4c7cc904e614dd0&" alt="Math Club Logo" className="h-20 w-20 rounded-full" />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-center text-white">
                            Enter Your Number
                        </h2>
                        <p className="text-center text-white/80 text-sm">
                            Explore the fascinating world of mathematics
                        </p>

                        <div className="relative group">
                            <input
                                type="number"
                                value={number}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (!isNaN(value)) {
                                        setNumber(value);
                                    }
                                }}
                                placeholder="Enter a number"
                                className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/50 border-2 border-white/20 rounded-xl focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-sm"
                                required
                                min="0"
                                step="any"
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-sm font-semibold hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <MathModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} setIsOpen={setIsModalOpen} image={Image} setImage={setImage} />
        </div>
    )
}



export default function App() {
    return (
        <MathNumberForm />
    )
}