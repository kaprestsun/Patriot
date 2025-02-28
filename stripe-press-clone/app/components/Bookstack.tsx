"use client"
import { books } from "../../lib/books"
import { Card } from "./ui/card"
import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { BookSpine } from "../components/BookSpine"
import { Book3DView } from "../components/3D/Book3D"


export default function BookStack() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const bookRefs = useRef<Array<HTMLDivElement | null>>([])
  
    const handleBookClick = (index: number) => {
      if (selectedIndex === index) {
        setSelectedIndex(null)
      } else {
        setSelectedIndex(index)
        requestAnimationFrame(() => {
          const selectedBookRef = bookRefs.current[index]
          if (selectedBookRef) {
            selectedBookRef.scrollIntoView({ behavior: "instant" })
          }
        })
      }
    }
  
    useEffect(() => {
      bookRefs.current = bookRefs.current.slice(0, books.length)
    }, [])
  
    return (
      <div className="relative min-h-screen w-full max-w-[1800px] mx-auto px-12">
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto"
              ref={containerRef}
            >
              <button 
                onClick={() => setSelectedIndex(null)}
                className="fixed top-8 right-8 text-white hover:opacity-75 transition-opacity z-50"
              >
                <X size={24} />
              </button>
  
              <div>
                {books.map((book, index) => (
                  <div 
                    key={book.id}
                    ref={(element) => {
                      bookRefs.current[index] = element
                    }}
                    className={`${book.lightColor} transition-colors duration-500`}
                  >
                    <div className="flex min-h-screen">
                      <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center">
                        <div className="w-full max-w-4xl px-16">
                          <div className="h-[700px]">
                            <Book3DView 
                              color={book.color.replace("bg-[", "").replace("]", "")}
                              coverImage={book.coverImage} 
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-1/2 h-screen">
                        <div className="max-w-xl p-16 h-screen overflow-y-auto">
                          <h1 className="text-6xl font-bold mb-4 leading-tight text-white">
                            {book.title}
                          </h1>
                          <p className="text-2xl italic opacity-90 mb-8 text-white">
                            by {book.author}
                          </p>
                          <p className="text-xl leading-relaxed mb-12 text-white/90">
                            {book.description}
                          </p>
                          
                          <div className="border-t border-white/20 pt-8">
                            <div className="grid grid-cols-2 gap-8">
                              <div>
                                <div className="text-sm text-white/60">ISBN</div>
                                <div className="text-lg mt-1 text-white">{book.isbn}</div>
                              </div>
                              <div>
                                <div className="text-sm text-white/60">Published</div>
                                <div className="text-lg mt-1 text-white">{book.year}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="min-h-screen px-16 py-32">
                      <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold mb-16 text-white">Praise</h2>
                        <div className="grid grid-cols-3 grid-rows-2 gap-x-12 gap-y-24">
                          {book.quotes.map((quote, quoteIndex) => (
                            <div key={quoteIndex} className="flex flex-col">
                              <p className="text-xl font-serif italic mb-6 text-white/90">
                                &ldquo;{quote.text}&rdquo;
                              </p>
                              <div className="mt-auto">
                                <div className="font-medium text-white">{quote.author}</div>
                                <div className="text-white/60">{quote.title}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
  
        {selectedIndex === null && (
          <div className="flex flex-col items-center gap-8 py-16">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleBookClick(index)}
                className={`${book.color} h-[250px] w-[1600px] cursor-pointer
                  relative overflow-hidden shadow-lg transform 
                  transition-all duration-300 hover:scale-105 rounded-lg`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full">
                    <Book3DView 
                      color={book.color.replace("bg-[", "").replace("]", "")} 
                      isSpine={true}
                      coverImage={book.coverImage}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    )
  }