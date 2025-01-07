'use client'

import { useState, useEffect } from 'react'
import { cn } from "../utils"
import { motion, AnimatePresence } from "framer-motion"

let notifications = [
  {
    name: "Payment received",
    description: "Stripe subscription",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Auth, simple and clean",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New Emails",
    description: "Create beautiful emails",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Easy Deploy",
    description: "Deploy your app with ease",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "New Order",
    description: "Someone purchased your product",
    time: "1m ago",
    icon: "🛍️",
    color: "#FF6B6B",
  },
  {
    name: "Server Status",
    description: "All systems operational",
    time: "30s ago",
    icon: "🚀",
    color: "#4CAF50",
  },
  {
    name: "Database Backup",
    description: "Backup completed successfully",
    time: "Just now",
    icon: "💾",
    color: "#9C27B0",
  },
]

function Notification({ name, description, icon, color, time, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex items-center space-x-4 rounded-lg border border-zinc-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: `${color}20` }}
      >
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
          {name}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{time}</p>
      </div>
    </motion.div>
  )
}

export function FeaturesCard() {
  const [visibleNotifications, setVisibleNotifications] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleNotifications((prev) => {
        const next = [...prev]
        if (next.length >= 4) {
          next.shift()
        }
        next.push(notifications[index])
        return next
      })
      setIndex((prev) => (prev + 1) % notifications.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [index])

  return (
    <div className="w-80">
      <div className="space-y-4 rounded-2xl border border-zinc-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
            Recent Activity
          </h2>
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
        </div>

        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {visibleNotifications.map((notification, i) => (
              <Notification key={i} index={i} {...notification} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
