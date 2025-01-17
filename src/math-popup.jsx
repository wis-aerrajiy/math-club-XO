import { useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'

const MAX_SECOND = 60;

const MathModal = ({ image, isOpen, onClose, setIsOpen, setImage }) => {
    const [timeLeft, setTimeLeft] = useState(MAX_SECOND)
    const [backgroundColor, setBackgroundColor] = useState('white')

    const handleClose = useCallback(() => {
        setIsOpen(false)
        setImage(null)
        onClose?.()
    }, [setIsOpen, setImage, onClose])

    useEffect(() => {
        if (!isOpen) {
            return
        }

        document.body.style.overflow = 'hidden'
        
        setTimeLeft(MAX_SECOND)

        
        const randomChance = Math.random() * 100
        setBackgroundColor(randomChance < 20 ? 'red' : 'white')

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    handleClose()
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => {
            clearInterval(timer)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, handleClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
            <div
                className="relative w-full max-w-md rounded-2xl shadow-xl overflow-hidden p-2"
                style={{ backgroundColor }}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-1"
                >
                    <X size={24} />
                </button>

                <div className="p-6 space-y-6">
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <img
                            src={image}
                            alt="Math concept visualization"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="text-6xl font-bold text-indigo-600">
                            {timeLeft}
                        </div>
                        <div className="text-xl font-semibold text-gray-700">
                            seconds remaining
                        </div>
                    </div>

                    <p className="text-center text-gray-600">
                        Quick! Solve the math problem before time runs out. Each second counts in the world of mathematics!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MathModal
