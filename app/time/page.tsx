'use client';

import { useEffect, useState } from 'react';

export default function ClockPage() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // 時針、分針、秒針の角度を計算
  const hourDegrees = (hours % 12 + minutes / 60) * 30; // 360度 ÷ 12 = 30度
  const minuteDegrees = (minutes + seconds / 60) * 6; // 360度 ÷ 60 = 6度
  const secondDegrees = seconds * 6; // 360度 ÷ 60 = 6度

  // マウント前は何も表示しない
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="relative w-80 h-80 rounded-full bg-white shadow-xl border-8 border-gray-200">
        {/* 時間のマーカー */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-6 bg-gray-800"
            style={{
              transform: `rotate(${i * 30}deg)`,
              transformOrigin: '50% 150px',
              left: 'calc(50% - 2px)',
            }}
          />
        ))}

        {/* 分のマーカー */}
        {[...Array(60)].map((_, i) => {
          if (i % 5 !== 0) { // 時間のマーカーと重複しないように
            return (
              <div
                key={i}
                className="absolute w-0.5 h-3 bg-gray-400"
                style={{
                  transform: `rotate(${i * 6}deg)`,
                  transformOrigin: '50% 150px',
                  left: 'calc(50% - 1px)',
                }}
              />
            );
          }
        })}

        {/* 時針 */}
        <div
          className="absolute w-2 h-24 bg-black rounded-full origin-bottom"
          style={{
            bottom: '50%',
            left: 'calc(50% - 4px)',
            transform: `rotate(${hourDegrees}deg)`,
            transformOrigin: '50% 100%',
          }}
        />

        {/* 分針 */}
        <div
          className="absolute w-1.5 h-32 bg-black rounded-full origin-bottom"
          style={{
            bottom: '50%',
            left: 'calc(50% - 3px)',
            transform: `rotate(${minuteDegrees}deg)`,
            transformOrigin: '50% 100%',
          }}
        />

        {/* 秒針 */}
        <div
          className="absolute w-1 h-36 bg-red-500 rounded-full origin-bottom"
          style={{
            bottom: '50%',
            left: 'calc(50% - 2px)',
            transform: `rotate(${secondDegrees}deg)`,
            transformOrigin: '50% 100%',
          }}
        />

        {/* 中心の円 */}
        <div className="absolute w-4 h-4 bg-red-500 rounded-full"
          style={{
            top: 'calc(50% - 8px)',
            left: 'calc(50% - 8px)',
          }}
        />

        {/* デジタル時計表示（オプション） */}
        <div className="absolute w-full text-center text-gray-600 font-mono text-sm"
          style={{
            bottom: '25%',
          }}
        >
          {time.toLocaleTimeString('ja-JP', { hour12: false })}
        </div>
      </div>
    </div>
  );
}