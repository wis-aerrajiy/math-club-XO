import { useState } from 'react'
import { Calculator, Plus, Divide, Minus, X, Sigma, Pi, Radical, Omega } from 'lucide-react'
import { useEffect } from 'react'
import MathModal from './math-popup'
import myImage from './assets/qrcode.png';

const Images = [
    [
        
        "q2.jpg",
        "q12.jpg",
        "q17.jpg",
        "q21.jpg",
        "q26.jpg",
        "q30.jpg"
        
    ],
    [
        "q24.jpg",
        "q9.jpg",
        "q15.jpg",
        "q14.jpg",
        "q13.jpg",
        "q32.jpg",
        "q30.jpg"

    ],
    [
        "q16.jpg",
        "q29.jpg",
        "q8.jpg",
        "q31.jpg",
        "q22.jpg",
        "q1.jpg",
    ],
    [
        "q33.jpg",
        "q20.jpg",
        "q5.jpg",
        "q10.jpg",
        "q7.jpg",

    ],
    [
        "q4.jpg",
        "q19.jpg",
        "q3.jpg",
        "q6.jpg",
        "q18.jpg",
    ],
    [
        "q11.jpg",
        "q25.jpg",
        "q30.jpg",
        "q23.jpg",
        "q27.jpg",
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 gap-14">
            <div>
                <img src={myImage} alt="" style={{ width: '330px', height: 'auto'}}/>
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 text-white/10 animate-float">
                    <Plus size={40} />
                </div>
                <div className="absolute top-40 right-32 text-white/10 animate-float-delayed">
                    <Divide size={44} />
                </div>
                <div className="absolute bottom-32 left-40 text-white/10 animate-float">
                    <X size={44} />
                </div>
                <div className="absolute bottom-20 right-20 text-white/10 animate-float-delayed">
                    <Minus size={44} />
                </div>
                <div className="absolute top-1/2 right-0 text-white/10 animate-float-delayed -translate-y-1/2">
                    <Sigma size={40} />
                </div>
                <div className="absolute top-1/4 right-1/2 text-white/10 animate-float-delayed -translate-y-1/2">
                    <Pi size={50} />
                </div>         
                <div className="absolute bottom-0 left-1/4 text-white/10 animate-float-delayed -translate-y-1/2">
                    <Radical size={60} />
                </div>     
                <div className="absolute top-1/3 right-1/4 text-white/10 animate-float-delayed -translate-y-1/2">
                    <Omega size={120} />
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