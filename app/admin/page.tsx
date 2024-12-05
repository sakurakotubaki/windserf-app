'use client';

import { useState } from 'react';

interface Member {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  joinDate: string;
  lastLogin: string;
}

export default function AdminPage() {
  // サンプルデータ
  const [members] = useState<Member[]>([
    {
      id: 1,
      name: "山田 太郎",
      email: "yamada@example.com",
      status: "active",
      joinDate: "2024-01-15",
      lastLogin: "2024-03-20"
    },
    {
      id: 2,
      name: "佐藤 花子",
      email: "sato@example.com",
      status: "active",
      joinDate: "2024-02-01",
      lastLogin: "2024-03-19"
    },
    {
      id: 3,
      name: "鈴木 一郎",
      email: "suzuki@example.com",
      status: "inactive",
      joinDate: "2024-01-20",
      lastLogin: "2024-02-28"
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm h-16">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0" />
            <h1 className="text-xl font-bold">サロン管理画面</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">管理者：Admin</span>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm">
          <nav className="p-4 space-y-2">
            <div className="px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">
              メンバー管理
            </div>
            <div className="px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md">
              売上管理
            </div>
            <div className="px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md">
              コンテンツ管理
            </div>
            <div className="px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md">
              設定
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">メンバー一覧</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  新規メンバー追加
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      名前
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      メールアドレス
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ステータス
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      登録日
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      最終ログイン
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      アクション
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {members.map((member) => (
                    <tr key={member.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{member.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          member.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {member.status === 'active' ? '有効' : '無効'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {member.joinDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {member.lastLogin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          編集
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          削除
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2024 Online Salon Admin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}