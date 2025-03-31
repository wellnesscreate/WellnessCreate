import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative h-[80vh] bg-gradient-to-r from-green-500 to-blue-500">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              株式会社WellnessCreate
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              ～「Life style」に「Wellness」を浸透させる～
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="bg-white text-green-600 px-6 py-3 rounded-full font-bold text-center hover:bg-gray-100 transition duration-300"
              >
                会社概要
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold text-center hover:bg-white/10 transition duration-300"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 企業理念セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">企業理念</h2>
            <p className="text-xl text-gray-600">
              私たちは、「Life style」に「Wellness」を浸透させることを目指し、
              健康とウェルネスを通じて、人々の生活の質向上に貢献します。
            </p>
          </div>
        </div>
      </section>

      {/* 事業内容セクション */}
      <section id="business" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            事業内容
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
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
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                スポーツメディア事業
              </h3>
              <p className="text-gray-600 text-center">
                マイナースポーツに関する情報を発信するメディア運営を行っています。
                マイナースポーツ以外にも健康情報を提供し、人々の健康的な生活もサポートします。
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
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
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                販売代理店事業
              </h3>
              <p className="text-gray-600 text-center">
                健康関連商品の販売代理店として、厳選された商品を提供しています。
                ウェルネスに関連した商品をご提案します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 会社情報セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            会社情報
          </h2>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 text-left text-gray-600 font-semibold w-1/3">
                        会社名
                      </th>
                      <td className="py-4 text-gray-800">
                        株式会社WellnessCreate
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 text-left text-gray-600 font-semibold">
                        設立年月日
                      </th>
                      <td className="py-4 text-gray-800">2024年9月6日</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 text-left text-gray-600 font-semibold">
                        代表者名
                      </th>
                      <td className="py-4 text-gray-800">小原 直起</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 text-left text-gray-600 font-semibold w-1/3">
                        事業内容
                      </th>
                      <td className="py-4 text-gray-800">
                        ・スポーツメディア事業
                        <br />
                        ・販売代理店事業
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 text-left text-gray-600 font-semibold">
                        所在地
                      </th>
                      <td className="py-4 text-gray-800">
                        〒150-0021
                        <br />
                        東京都渋谷区恵比寿西二丁目8番4号
                        <br />
                        EX恵比寿西ビル5階
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 text-left text-gray-600 font-semibold">
                        連絡先
                      </th>
                      <td className="py-4 text-gray-800">
                        080-3087-6970
                        <br />
                        naoki.obara@wellnesscreate.co.jp
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 経営陣セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            経営陣
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image
                  src="/m1.png"
                  alt="小原 直起"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                小原 直起
              </h3>
              <p className="text-gray-600 text-center font-semibold mb-2">
                代表取締役
              </p>
              <p className="text-sm text-gray-500 text-center">
                大学卒業後、消防士として活躍。その後、ITの世界に飛び込みトップ営業となり、様々な人脈を活かして、株式会社WellnessCreateを設立。
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image
                  src="/m3.png"
                  alt="星野 真吾"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                星野 真吾
              </h3>
              <p className="text-gray-600 text-center font-semibold mb-2">
                取締役
              </p>
              <p className="text-sm text-gray-500 text-center">
                新卒で某大手ITメーカーに入社後、アパレル事業の立ち上げに成功。その後、ITの営業としてITベンチャー企業を2社経験し、株式会社WellnessCreateに取締役として参画。
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image
                  src="/m2.png"
                  alt="大見謝 拓馬"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                大見謝 拓馬
              </h3>
              <p className="text-gray-600 text-center font-semibold mb-2">
                取締役
              </p>
              <p className="text-sm text-gray-500 text-center">
                新卒でITベンチャー企業に入社。エンジニア・Webディレクター・ITコンサルタントを経験した後、3社のITのベンチャー企業の設立に貢献し、株式会社WellnessCreateに取締役として参画。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 沿革セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            沿革
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-green-500 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-2 top-0"></div>
              <div className="mb-4">
                <span className="text-lg font-bold text-green-600">
                  2024年9月
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  会社設立
                </h3>
                <p className="text-gray-600 mt-2">
                  株式会社WellnessCreateを設立
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-green-500 pl-8">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-2 top-0"></div>
              <div>
                <span className="text-lg font-bold text-green-600">
                  2025年3月
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  パートナーシップ契約
                </h3>
                <p className="text-gray-600 mt-2">
                  株式会社CANLIFEとのパートナーシップ契約を締結。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* パートナーシップセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            パートナーシップ
          </h2>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:ml-8 flex-1">
                <h3 className="text-xl font-bold mb-2 text-center md:text-left text-gray-800">
                  株式会社CANLIFE
                </h3>
                <p className="text-gray-600 mb-4 text-center md:text-left">
                  スポーツメディア事業、ならびに健康関連商品・サービスを提供する企業とのパートナーシップ契約を締結。
                  <br />
                  お客様に最適な健康ソリューションをお届けしています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            お問い合わせ
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            サービスに関するご質問やお見積もりのご依頼など、お気軽にお問い合わせください。
            担当者が丁寧にご対応いたします。
          </p>
          <Link
            href="/contact"
            className="bg-green-600 text-white px-8 py-3 rounded-full font-bold text-center hover:bg-green-700 transition duration-300 inline-block"
          >
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </div>
  );
}
