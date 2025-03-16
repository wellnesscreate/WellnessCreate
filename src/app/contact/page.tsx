"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [agreedToPrivacyPolicy, setAgreedToPrivacyPolicy] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // プライバシーポリシーに同意していない場合はエラーを表示
    if (!agreedToPrivacyPolicy) {
      setSubmitStatus("error");
      setErrorMessage("プライバシーポリシーに同意してください。");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Google Apps ScriptのAPIエンドポイント
      const apiUrl =
        "https://script.google.com/macros/s/AKfycbxKLfj-6QA1NoG6L4jFLGvke_unQEjdNIrYRAAe6H2945xHer2WJK-JUjWqkX1h54iv/exec";

      // no-corsモードではレスポンスの内容を読み取れないため、
      // fetchのみを実行し、成功したと仮定して処理を続行
      await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "no-cors", // CORS制限に対応
      });

      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        type: "general",
      });
    } catch (err) {
      console.error("お問い合わせ送信エラー:", err);
      setIsSubmitting(false);
      setSubmitStatus("error");
      setErrorMessage(
        "送信中にエラーが発生しました。後ほど再度お試しください。"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">お問い合わせ</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    お問い合わせありがとうございます
                  </h2>
                  <p className="text-gray-600 mb-6">
                    内容を確認の上、担当者より折り返しご連絡いたします。
                    <br />
                    通常、営業日3日以内にご返信いたします。
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition duration-300"
                  >
                    新しいお問い合わせ
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    お問い合わせフォーム
                  </h2>
                  {errorMessage && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                      <p>{errorMessage}</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label
                        htmlFor="type"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        お問い合わせ種別
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      >
                        <option value="general">一般的なお問い合わせ</option>
                        <option value="service">サービスについて</option>
                        <option value="membership">会員について</option>
                        <option value="media">取材・メディア掲載</option>
                        <option value="business">業務提携・協業</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        お名前
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="例：健康 太郎"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        メールアドレス
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="例：example@email.com"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        件名
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="お問い合わせの件名"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        お問い合わせ内容
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="お問い合わせ内容をご記入ください"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="privacy-policy"
                            type="checkbox"
                            checked={agreedToPrivacyPolicy}
                            onChange={(e) =>
                              setAgreedToPrivacyPolicy(e.target.checked)
                            }
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            required
                          />
                        </div>
                        <label
                          htmlFor="privacy-policy"
                          className="ml-2 text-sm font-medium text-gray-900"
                        >
                          <Link
                            href="/privacy-policy"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                          >
                            プライバシーポリシー
                          </Link>
                          に同意します
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition duration-300 flex items-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            送信中...
                          </>
                        ) : (
                          "送信する"
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                お問い合わせ先
              </h3>
              <address className="not-italic text-gray-600">
                <p className="mb-2">株式会社WellnessCreate</p>
                <p className="mb-2">〒150-0021</p>
                <p className="mb-2">東京都渋谷区恵比寿西二丁目8番4号</p>
                <p className="mb-2">EX恵比寿西ビル5階</p>
                <p className="mb-2">
                  <span className="block">TEL: 080-3087-6970</span>
                  <span className="block">（平日 9:00-18:00）</span>
                </p>
                <p>
                  <a
                    href="mailto:naoki.obara@wellnesscreate.co.jp"
                    className="text-green-600 hover:text-green-700 transition duration-300"
                  >
                    naoki.obara@wellnesscreate.co.jp
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
