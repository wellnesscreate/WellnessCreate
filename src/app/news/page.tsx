"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// ニュース記事の型定義
interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

// カテゴリー名の日本語マッピング
const categoryLabels: Record<string, string> = {
  "press-release": "プレスリリース",
  media: "メディア掲載情報",
  event: "イベント情報",
  service: "サービスアップデート情報",
};

// カテゴリー別の色設定
const categoryColors: Record<string, string> = {
  "press-release": "bg-blue-100 text-blue-800",
  media: "bg-purple-100 text-purple-800",
  event: "bg-green-100 text-green-800",
  service: "bg-orange-100 text-orange-800",
};

// GAS APIのURL
// 注意: Google Apps Scriptの設定で以下が必要です
// 1. appsscript.jsonで "executeAs": "USER_DEPLOYING" と "access": "ANYONE" を設定
// 2. ウェブアプリとして新しいデプロイを作成
// 3. CORSを許可するコードを追加:
//    - Apps Scriptファイルに以下を追加:
//    function doGet(e) {
//      const output = ContentService.createTextOutput();
//      const data = { ... }; // 実際のデータ
//      output.setMimeType(ContentService.MimeType.JSON);
//      output.setContent(JSON.stringify(data));
//      return output;
//    }
const API_URL =
  "https://script.google.com/macros/s/AKfycbz9B-kHNoiypf60UVJNfsksNlzkn34xhqvzJG3dggh58NOevg1G0UukDlT_Usg5yKy6/exec";

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fetchNewsData = async () => {
    setLoading(true);
    setError(null);

    try {
      // APIのURLを構築
      let url = API_URL;
      if (selectedCategory) {
        url += `?category=${selectedCategory}`;
      }

      try {
        // 通常のフェッチを試みる
        // Google Apps Scriptは適切に設定されていればCORSをサポートします
        const response = await fetch(url);

        // レスポンスが正常でない場合はエラーをスロー
        if (!response.ok) {
          throw new Error(`APIリクエストが失敗しました: ${response.status}`);
        }

        const data: { success: boolean; data: NewsItem[]; error?: string } =
          await response.json();

        if (data.success) {
          setNewsItems(data.data);
        } else {
          throw new Error(data.error || "データの取得に失敗しました");
        }
      } catch (fetchError) {
        console.error("APIからのデータ取得に失敗しました:", fetchError);

        // 開発環境ではCORSエラーが発生する可能性があるため、デモデータを使用
        console.log("デモデータを使用します");
        setError(
          "APIからデータを取得できませんでした。デモデータを表示します。"
        );
        setNewsItems(getDemoData());
      }
    } catch (err) {
      console.error("ニュースデータの取得中にエラーが発生しました:", err);
      setError("データの取得に失敗しました。デモデータを表示します。");
      setNewsItems(getDemoData());
    } finally {
      setLoading(false);
    }
  };

  // デモデータを取得する関数
  const getDemoData = (): NewsItem[] => {
    return [
      {
        id: 1,
        category: "press-release",
        title: "株式会社WellnessCreate設立のお知らせ",
        date: "2024年9月6日",
        summary:
          "株式会社WellnessCreateを設立いたしました。「Life style」に「Wellness」を浸透させることをビジョンに掲げ、スポーツメディア事業を展開してまいります。",
        content:
          "株式会社WellnessCreateを設立いたしました。「Life style」に「Wellness」を浸透させることをビジョンに掲げ、スポーツメディア事業を展開してまいります。",
      },
      {
        id: 2,
        category: "media",
        title: "株式会社CANLIFEと代理店契約を締結",
        date: "2025年2月1日",
        summary:
          "株式会社CANLIFEと代理店契約を締結いたしました。今後、両社の強みを活かしたサービス展開を予定しています。",
        content:
          "株式会社CANLIFEと代理店契約を締結いたしました。今後、両社の強みを活かしたサービス展開を予定しています。",
      },
      {
        id: 3,
        category: "event",
        title: "スポーツイベント開催のお知らせ",
        date: "2025年4月15日",
        summary:
          "東京都内にてスポーツイベントを開催いたします。詳細は後日発表いたします。",
        content:
          "東京都内にてスポーツイベントを開催いたします。詳細は後日発表いたします。",
      },
      {
        id: 4,
        category: "service",
        title: "ウェブサイトリニューアルのお知らせ",
        date: "2025年3月16日",
        summary:
          "当社ウェブサイトをリニューアルいたしました。今後もコンテンツの充実を図ってまいります。",
        content:
          "当社ウェブサイトをリニューアルいたしました。今後もコンテンツの充実を図ってまいります。",
      },
    ];
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === "all" ? null : category);
  };

  useEffect(() => {
    fetchNewsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">ニュース</h1>
          <p className="text-gray-600 mb-12">
            株式会社WellnessCreateからの最新情報をお届けします
          </p>

          {/* カテゴリーフィルター */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => handleCategoryClick("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === null
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              すべて
            </button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleCategoryClick(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === key
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* ローディング表示 */}
          {loading && (
            <div className="text-center py-10">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500 mb-2"></div>
              <p className="text-gray-600">ニュースを読み込んでいます...</p>
            </div>
          )}

          {/* エラー表示 */}
          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-8">
              <p>{error}</p>
              <button
                onClick={fetchNewsData}
                className="mt-2 text-sm font-medium text-red-700 underline"
              >
                再読み込み
              </button>
            </div>
          )}

          {/* ニュース一覧 */}
          {!loading && (
            <div className="space-y-8">
              {newsItems.length > 0 ? (
                newsItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            categoryColors[item.category]
                          }`}
                        >
                          {categoryLabels[item.category]}
                        </span>
                        <span className="text-gray-500 text-sm ml-4">
                          {item.date}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h2>
                      <p className="text-gray-700">{item.summary}</p>
                      <div className="mt-4">
                        <Link
                          href={`/news/${item.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          詳細を見る →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-600">該当するニュースがありません</p>
                </div>
              )}
            </div>
          )}

          {/* ページネーション（サンプル） */}
          {/* {!loading && newsItems.length > 0 && (
            <div className="flex justify-center mt-12">
              <nav className="inline-flex rounded-md shadow">
                <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 rounded-l-md">
                  前へ
                </a>
                <a href="#" className="py-2 px-4 bg-blue-600 text-white border border-blue-600">
                  1
                </a>
                <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-gray-500 hover:bg-gray-50">
                  2
                </a>
                <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 rounded-r-md">
                  次へ
                </a>
              </nav>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
