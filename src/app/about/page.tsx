import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">会社概要</h1>

        {/* ビジョン・ミッションセクション */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              ビジョン・ミッション
            </h2>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                ビジョン
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                「～「Life style」に「Wellness」を浸透させる～」
              </p>
              <p className="text-gray-600">
                私たちは、健康とウェルネスを通じて、人々の生活の質向上に貢献し、
                すべての人が健康で幸せな生活を送れる社会の創造を目指しています。
              </p>
            </div>
          </div>
        </div>

        {/* 会社情報セクション */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">会社情報</h2>
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
                      設立
                    </th>
                    <td className="py-4 text-gray-800">2024年9月6日</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 text-left text-gray-600 font-semibold">
                      代表取締役
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
                      TEL: 080-3087-6970
                      <br />
                      Email: naoki.obara@wellnesscreate.co.jp
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 text-left text-gray-600 font-semibold">
                      事業内容
                    </th>
                    <td className="py-4 text-gray-800">
                      ・スポーツメディア事業
                      <br />
                      ・販売代理店事業
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 沿革セクション */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">沿革</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-green-500 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-2 top-0"></div>
              <div className="mb-4">
                <span className="text-lg font-bold text-green-600">
                  2024年9月
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  株式会社WellnessCreate設立
                </h3>
                <p className="text-gray-600 mt-2">
                  健康とウェルネスの普及を目的に東京都渋谷区に設立。
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-green-500 pl-8">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-2 top-0"></div>
              <div className="mb-4">
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

        {/* 経営陣セクション */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">経営陣</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
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
              <h3 className="text-xl font-bold text-gray-800">小原 直起</h3>
              <p className="text-gray-600">代表取締役</p>
              <p className="text-sm text-gray-500 mt-2">
                大学卒業後、消防士として活躍。その後、ITの世界に飛び込みトップ営業となり、様々な人脈を活かして、株式会社WellnessCreateを設立。
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image
                  src="/m3.png"
                  alt="/"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">星野 真吾</h3>
              <p className="text-gray-600">取締役</p>
              <p className="text-sm text-gray-500 mt-2">
                新卒で某大手ITメーカーに入社後、アパレル事業の立ち上げに成功。その後、ITの営業としてITベンチャー企業を2社経験し、株式会社WellnessCreateに取締役として参画。
              </p>
            </div>
            <div className="text-center">
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
              <h3 className="text-xl font-bold text-gray-800">大見謝 拓馬</h3>
              <p className="text-gray-600">取締役</p>
              <p className="text-sm text-gray-500 mt-2">
                新卒でITベンチャー企業に入社。エンジニア・Webディレクター・ITコンサルタントを経験した後、3社のITのベンチャー企業の設立に貢献し、株式会社WellnessCreateに取締役として参画。
              </p>
            </div>
          </div>
        </div>

        {/* パートナーシップセクション */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            パートナーシップ
          </h2>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
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

        {/* お問い合わせへのリンク */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            当社へのお問い合わせやサービスに関するご質問は、お問い合わせフォームよりお気軽にご連絡ください。
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition duration-300"
          >
            お問い合わせフォームへ
          </Link>
        </div>
      </div>
    </div>
  );
}
