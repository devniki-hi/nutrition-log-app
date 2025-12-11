import { Button } from "@/components/ui/button.jsx";
import { Card } from "@/components/ui/card.jsx";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { ArrowRight, BarChart3, Camera, Zap } from "lucide-react";

export default function WelcomePage({ title }) {
  const page = usePage();
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900">
                食事ログで
                <br className="sm:block md:hidden lg:block" />
                カロリー管理
              </h1>
              <p className="text-lg text-slate-500">
                ChatGPTのように画像を入力すれば、食品のカロリーがわかる。手軽に入力してダイエット！
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button className=" bg-slate-600 text-white text-base px-8 py-3">
                  サインアップ
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  className=" bg-white text-black text-base px-8 py-3 border-sky-300 "
                >
                  ログイン
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-200/40 to-blue-200/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-sky-50 border border-sky-200 rounded-3xl p-8 shadow-xl">
              <div className="aspect-video bg-sky-100 rounded-2xl flex items-center justify-center">
                <Camera className="w-16 h-16 text-sky-400" />
              </div>
              <p className="text-sm text-sky-600 text-center mt-4">
                写真を撮ってAIがカロリーを分析
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
