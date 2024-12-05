'use client';

import { useState } from 'react';

export default function BlogPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0" />
            <h1 className="text-xl font-bold">My Blog</h1>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsDrawerOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium">Menu</h2>
                <button onClick={() => setIsDrawerOpen(false)} className="p-2">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="space-y-4">
                <a href="#" className="block hover:text-blue-500">Home</a>
                <a href="#" className="block hover:text-blue-500">About</a>
                <a href="#" className="block hover:text-blue-500">Contact</a>
              </nav>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Main Content */}
          <main className="lg:col-span-8">
            <article className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">公園でのお散歩日記</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  今日は天気が良かったので、近所の公園へお散歩に行ってきました。
                  桜の木々が美しく咲き誇り、春の訪れを感じる素敵な一日でした。
                </p>
                <p className="text-gray-600 mb-4">
                  公園では、たくさんの家族連れや犬の散歩をする人々を見かけました。
                  子供たちは元気に遊具で遊び、その笑顔が印象的でした。
                </p>
                <p className="text-gray-600">
                  季節の変わり目を感じながらの散歩は、心が癒される素敵な時間となりました。
                  また明日も、違う公園に行ってみようと思います。
                </p>
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold mb-4">最近の投稿</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-500 hover:underline">公園でのお散歩日記</a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">春の花々を見に行った日</a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">新しいカメラで撮影した写真</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2024 My Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}