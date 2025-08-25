import React, { useState, useEffect } from 'react'
import { ArrowLeftToLine, Menu, X } from 'lucide-react'
import LeftSidebar from '../components/dashboard/LeftSidebar'
import TopBar from '../components/dashboard/TopBar'
import Dashboard from '../screens/Dashboard'
import RightSidebar from '../components/dashboard/RightSidebar'

const DashboardLayout = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false)
  useEffect(() => {
  if (leftSidebarOpen || rightSidebarOpen) {
    document.body.style.overflow = "hidden"   // disable background scroll
  } else {
    document.body.style.overflow = "auto"     // restore scroll
  }
}, [leftSidebarOpen, rightSidebarOpen])


  return (
    <>
      <div className="flex h-[100dvh]  text-gray-800 relative">
        {/* Mobile Overlay */}
        {(leftSidebarOpen || rightSidebarOpen) && (
          <div
            className="fixed inset-0 bg-black/40 bg-opacity-50 z-40 lg:hidden"
            onClick={() => {
              setLeftSidebarOpen(false)
              setRightSidebarOpen(false)
            }}
          />
        )}

        {/* Left Sidebar */}
        <aside className={`
          fixed lg:static lg:translate-x-0 z-50 h-full w-56 border-gray-200 transition-transform duration-500 ease-in-out
          ${leftSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <LeftSidebar
            onClose={() => setLeftSidebarOpen(false)}
            showCloseButton={leftSidebarOpen}
          />
        </aside>

        {/* Main Area */}
        <div className="flex flex-col flex-1 lg:ml-0">
          {/* Top Bar with Mobile Toggle Buttons */}
          <header className="h-16 px-4 flex items-center justify-between lg:justify-center">
            {/* Mobile Left Sidebar Toggle */}
            <button
              onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
              className="lg:hidden mr-2 p-2 rounded-md bg-surface hover:bg-surface-secondary transition-colors"
              aria-label="Toggle left sidebar"
            >
              <Menu className="w-6 h-6 text-default" />
            </button>

            {/* Top Bar Content */}
            <div className="flex-1  w-full lg:flex-none">
              <TopBar />
            </div>

            {/* Mobile Right Sidebar Toggle */}
            <button
              onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
              className="lg:hidden mx-2 p-2 rounded-md bg-surface hover:bg-surface-secondary transition-colors"
              aria-label="Toggle right sidebar"
            >
              <ArrowLeftToLine className="w-6 h-6 text-default" />
            </button>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto px-2 scrollbar-hide">
            <Dashboard />
          </main>
        </div>

        {/* Right Sidebar */}
        <aside className={`
          fixed lg:static lg:translate-x-0 z-50 h-full w-72 p-2 right-0 duration-00 transition-transform  ease-in-out
          ${rightSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
          hidden lg:block
        `}>
          <RightSidebar
            onClose={() => setRightSidebarOpen(false)}
            showCloseButton={rightSidebarOpen}
          />
        </aside>

        {/* Mobile Right Sidebar */}
        <aside className={`
          fixed z-50 h-full w-72 p-2 right-0 transition-transform duration-500 ease-in-out lg:hidden
          ${rightSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <RightSidebar
            onClose={() => setRightSidebarOpen(false)}
            showCloseButton={rightSidebarOpen}
          />
        </aside>
      </div>
    </>
  )
}

export default DashboardLayout
