import { motion } from "framer-motion"
import { Book } from "../../lib/books"

interface BookSpineProps {
  book: Book
  onClick: () => void
}

export function BookSpine({ book, onClick }: BookSpineProps) {
  return (
    <motion.div
      className={`h-[200px] w-[40px] ${book.color} cursor-pointer
        flex items-center justify-center shadow-lg
        transform transition-all duration-300 hover:scale-105`}
      onClick={onClick}
      whileHover={{ scale: 2.5 }}
    >
      <div 
        className="rotate-[-90deg] whitespace-nowrap text-white font-medium"
      >
        {book.title}
      </div>
    </motion.div>
  )
}