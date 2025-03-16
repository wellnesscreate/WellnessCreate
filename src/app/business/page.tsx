import Link from "next/link";

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">事業内容</h1>

        {/* 事業概要セクション */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              事業概要
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              株式会社WellnessCreateは、「～「Life
              style」に「Wellness」を浸透させる～」というビジョンのもと、
              健康とウェルネスを通じて、人々の生活の質向上に貢献しています。
              私たちは主に「販売代理店事業」と「Sportsメディア事業」の2つの事業を展開しています。
            </p>
          </div>
        </div>

        {/* 販売代理店事業セクション */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                販売代理店事業
              </h2>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                事業モデル
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>
                  メーカーからの業務委託により商品を仕入れ、顧客に販売するフロー
                </li>
                <li>
                  メーカーは製造・納品を担当し、WellnessCreateは販売を担当する連携構造
                </li>
                <li>
                  お客様の健康と身体づくりというWellnessの理念に合致した商品を厳選
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                主な提供商品
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>セラピー商品：顧客のリラックスや健康を促進する商品</li>
                <li>「Wellness」の理念に沿った製品ラインナップ</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                販売チャネル
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>ToC（個人消費者向け）販売</li>
                <li>ToB（企業・法人向け）販売</li>
                <li>オンラインおよび実店舗での展開</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sportsメディア事業セクション */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                Sportsメディア事業
              </h2>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                メディア構成
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>
                  マイナースポーツ専門のオウンドメディア「M Sports」を運営
                </li>
                <li>記事配信と動画配信の2本柱でコンテンツを展開</li>
                <li>有料コンテンツと無料コンテンツの二層構造</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                コンテンツ内容
              </h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                <li>マイナースポーツに関するニュースの配信</li>
                <li>マイナースポーツの試合結果の配信</li>
                <li>マイナースポーツの試合観戦感想記事の配信</li>
                <li>アスリート向けの健康に関する情報の配信</li>
                <li>アスリート向けの健康商品紹介</li>
                <li>試合の生中継動画配信（計画中）</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                機能と特徴
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>ユーザー登録・管理機能</li>
                <li>記事・動画の登録・編集・削除機能</li>
                <li>コメント機能</li>
                <li>SNSシェア機能（Instagram/TikTok/X等）</li>
                <li>有料会員制度と決済システム</li>
                <li>有料コンテンツ制御機能</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                グロース戦略
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>
                  AARRRモデルを採用（Acquisition、Activation、Retention、Referral、Revenue）
                </li>
                <li>
                  ユーザー獲得→活性化→継続利用→紹介拡散→収益最大化の段階的成長
                </li>
                <li>マイナースポーツの認知度向上と人口増加の好循環を創出</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                マネタイズポイント
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>ユーザー（無料/有料）からの月額課金収入</li>
                <li>マイナースポーツ団体（無料/有料）からの月額課金収入</li>
                <li>
                  パートナー企業（アスリート向け商品企業、広告出店企業）からの広告収入
                </li>
                <li>機能追加による月額プラン価格の段階的アップグレード</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                期待される効果
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>マイナースポーツの認知拡大</li>
                <li>
                  「かっこいいプレイ」の共有によるユーザーのスポーツ参加意欲向上
                </li>
                <li>コミュニティ形成によるマイナースポーツ人口の増加</li>
                <li>アスリートの健康・疲労回復支援を通じたWellnessの実現</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 事業理念セクション */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">事業理念</h2>
            <p className="text-lg text-gray-600 italic">
              両事業は「Wellness」を軸に展開され、健康を手段として身体的・精神的・社会的に充実した「Life
              style」の確立と自己実現を支援することを目的としています。
            </p>
          </div>
        </div>

        {/* CTAセクション */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-md p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">お問い合わせ</h2>
            <p className="text-lg text-white mb-8">
              私たちの事業や商品についてのお問い合わせは、以下のボタンからお気軽にどうぞ。
            </p>
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-bold inline-block hover:bg-gray-100 transition duration-300"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
