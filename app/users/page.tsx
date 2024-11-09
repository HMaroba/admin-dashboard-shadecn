'use client'

import React, { useState } from 'react'
import { FaUsers, FaFolder, FaCog, FaChevronDown, FaBars, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Simulated user data
const allUsers = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 5 === 0 ? 'Admin' : 'User'
}))

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('users')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 10

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  // Calculate pagination
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser)
  const totalPages = Math.ceil(allUsers.length / usersPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="flex h-screen flex-col bg-gray-100 md:flex-row">
      {/* Mobile Header */}
      <header className="flex items-center justify-between bg-white p-4 md:hidden">
        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-600">
          {isSidebarOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`${
        isSidebarOpen ? 'block' : 'hidden'
      } w-full bg-white shadow-md md:block md:w-64`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800 md:block">Admin Dashboard</h1>
        </div>
        <nav className="mt-6">
          <button
            className={`flex w-full items-center px-4 py-2 text-left ${
              activeTab === 'users' ? 'bg-gray-100' : ''
            }`}
            onClick={() => {
              setActiveTab('users')
              setIsSidebarOpen(false)
            }}
          >
            <FaUsers className="mr-2 h-5 w-5" />
            Users
          </button>
          <button
            className={`flex w-full items-center px-4 py-2 text-left ${
              activeTab === 'files' ? 'bg-gray-100' : ''
            }`}
            onClick={() => {
              setActiveTab('files')
              setIsSidebarOpen(false)
            }}
          >
            <FaFolder className="mr-2 h-5 w-5" />
            Files
          </button>
          <button className="flex w-full items-center px-4 py-2 text-left">
            <FaCog className="mr-2 h-5 w-5" />
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="mb-8 flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
            {activeTab === 'users' ? 'Manage Users' : 'Manage Files'}
          </h2>
          <div className="relative w-full md:w-auto">
            <button
              className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:w-auto"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Admin Actions
              <FaChevronDown className="ml-2 h-5 w-5" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Log out</a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
          {activeTab === 'users' ? (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Users</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6">Email</th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6">Role</th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {currentUsers.map((user) => (
                      <tr key={user.id}>
                        <td className="whitespace-nowrap px-4 py-4 md:px-6">{user.name}</td>
                        <td className="whitespace-nowrap px-4 py-4 md:px-6">{user.email}</td>
                        <td className="whitespace-nowrap px-4 py-4 md:px-6">{user.role}</td>
                        <td className="whitespace-nowrap px-4 py-4 md:px-6">
                          <button className="rounded bg-blue-500 px-2 py-1 text-sm font-bold text-white hover:bg-blue-700 md:px-4 md:py-2">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center rounded bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:opacity-50"
                >
                  <FaChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </button>
                <span className="text-sm text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center rounded bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:opacity-50"
                >
                  Next
                  <FaChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <button className="mt-4 w-full rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 md:w-auto">Add New User</button>
            </div>
          ) : (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Files</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6">File Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6">Size</th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6">Uploaded By</th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-nowrap px-4 py-4 md:px-6">document.pdf</td>
                      <td className="whitespace-nowrap px-4 py-4 md:px-6">2.5 MB</td>
                      <td className="whitespace-nowrap px-4 py-4 md:px-6">John Doe</td>
                      <td className="whitespace-nowrap px-4 py-4 md:px-6">
                        <button className="rounded bg-blue-500 px-2 py-1 text-sm font-bold text-white hover:bg-blue-700 md:px-4 md:py-2">Download</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-4 md:px-6">image.jpg</td>
                      <td className="whitespace-nowrap px-4 py-4 md:px-6">1.2 MB</td>
                      <td className="whitespace-nowrap px-4 py-4 md:px-6">Jane Smith</td>
                      <td className="whitespace-nowrap px-4 py-4 md:px-6">
                        <button className="rounded bg-blue-500 px-2 py-1 text-sm font-bold text-white hover:bg-blue-700 md:px-4 md:py-2">Download</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="mt-4 w-full rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 md:w-auto">Upload New File</button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}