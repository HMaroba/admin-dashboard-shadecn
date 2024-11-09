'use client'

import React, { useState } from 'react'
import { BiUserPin } from 'react-icons/bi'
import { BiFolder } from 'react-icons/bi'
import { MdArrowDropDown } from 'react-icons/md'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('users')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        <nav className="mt-6">
          <button
            className={`flex w-full items-center px-4 py-2 text-left ${
              activeTab === 'users' ? 'bg-gray-100' : ''
            }`}
            onClick={() => setActiveTab('users')}
          >
            <BiUserPin className="mr-2 h-5 w-5" />
            Users
          </button>
          <button
            className={`flex w-full items-center px-4 py-2 text-left ${
              activeTab === 'files' ? 'bg-gray-100' : ''
            }`}
            onClick={() => setActiveTab('files')}
          >
            <BiFolder className="mr-2 h-5 w-5" />
            Files
          </button>
          <button className="flex w-full items-center px-4 py-2 text-left">
            <BiFolder className="mr-2 h-5 w-5" />
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">
            {activeTab === 'users' ? 'Manage Users' : 'Manage Files'}
          </h2>
          <div className="relative">
            <button
              className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Admin Actions
              <MdArrowDropDown className="ml-2 h-5 w-5" />
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

        <div className="rounded-lg bg-white p-6 shadow-md">
          {activeTab === 'users' ? (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Users</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4">John Doe</td>
                      <td className="whitespace-nowrap px-6 py-4">john@example.com</td>
                      <td className="whitespace-nowrap px-6 py-4">Admin</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Edit</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4">Jane Smith</td>
                      <td className="whitespace-nowrap px-6 py-4">jane@example.com</td>
                      <td className="whitespace-nowrap px-6 py-4">User</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="mt-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">Add New User</button>
            </div>
          ) : (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Files</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">File Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Size</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Uploaded By</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4">document.pdf</td>
                      <td className="whitespace-nowrap px-6 py-4">2.5 MB</td>
                      <td className="whitespace-nowrap px-6 py-4">John Doe</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Download</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4">image.jpg</td>
                      <td className="whitespace-nowrap px-6 py-4">1.2 MB</td>
                      <td className="whitespace-nowrap px-6 py-4">Jane Smith</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Download</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="mt-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">Upload New File</button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}