"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"


const menuItems = [
  { title: "Home", href: "/" },
  { title: "Brochures", href: "/brochures" },
  { title: "Workshops", href: "/workshops" },
  { title: "Events", href: "/events" },
  { title: "Accommodation", href: "#accommodation" },
]

export default function NavMenu() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="fixed left-0 top-0 z-50 w-full">
      <nav className="relative flex h-24 items-center justify-between p-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex lg:size-16 size-10 flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <img src="/nav.svg" alt="logo" width={200} height={200} />
        </button>

      

      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#1E0E03]"
          >
            <motion.button
              className="absolute left-4 top-4 text-white"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <X className="h-6 w-6" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex h-full flex-col items-center justify-center gap-8 p-4"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="text-4xl font-light text-transparent hover:text-white/90 md:text-6xl"
                  style={{
                    WebkitTextStroke: "1px white",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-8 left-8 text-sm text-white/60"
            >
              NATIONAL INSTITUTE OF
              <br />
              TECHNOLOGY KARNATAKA, NITK
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

