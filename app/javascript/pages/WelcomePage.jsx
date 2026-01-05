import { Button } from "@/components/ui/button.jsx";
import { Card } from "@/components/ui/card.jsx";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { ArrowRight, BarChart3, Camera, Gift } from "lucide-react";

export default function WelcomePage({ title }) {
  const page = usePage();
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900">
                努力が
                <br className="sm:block md:hidden lg:block" />
                報われる食事管理
              </h1>
              <p className="text-lg text-slate-500">
                写真やチャットで記録するだけ。
                <br />
                毎日の食事が「数字」「進捗」「ご褒美」として見えるから、自然と続く。
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

          <div className="relative bg-sky-50 border border-sky-200 rounded-3xl p-8 shadow-xl">
            <div className="aspect-video bg-sky-100 rounded-2xl flex items-center justify-center">
              <Camera className="w-16 h-16 text-sky-400" />
            </div>
            <p className="text-sm text-sky-600 text-center mt-4">
              写真を撮ってAIがカロリーを分析
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="bg-sky-100/30 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-sky-900">
              3つの特徴
            </h2>
            <p className="text-lg text-sky-700">
              面倒を減らし、成果を見せ、努力を報酬に変える
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 border-sky-200 bg-white hover:shadow-lg transition-shadow hover:border-sky-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-sky-100 mb-4">
                <Camera className="w-6 h-6 text-sky-500" />
              </div>
              <h3 className="text-xl font-semibold text-sky-900 mb-2">
                AIで簡単入力
              </h3>
              <p className="text-sky-700">
                写真やチャットで入力するだけ。
                <br />
                栄養素ラベルや食品名から、カロリーとPFCを自動で推定します。
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 border-sky-200 bg-white hover:shadow-lg transition-shadow hover:border-sky-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-sky-100 mb-4">
                <BarChart3 className="w-6 h-6 text-sky-500" />
              </div>
              <h3 className="text-xl font-semibold text-sky-900 mb-2">
                数字で見える化
              </h3>
              <p className="text-sky-700">
                摂取カロリーやPFC、体重の変化をグラフで可視化。
                今どこにいて、目標まで何が足りないのかが一目でわかります。
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 border-sky-200 bg-white hover:shadow-lg transition-shadow hover:border-sky-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-sky-100 mb-4">
                <Gift className="w-6 h-6 text-sky-500" />
              </div>
              <h3 className="text-xl font-semibold text-sky-900 mb-2">
                報酬でモチベーション維持
              </h3>
              <p className="text-sky-700">
                記録を続けるとスタンプやチートデイ券が貯まります。
                <br />
                我慢だけのダイエットではなく、「続けてよかった」と思える体験を用意しています。
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-sky-400 to-sky-500 rounded-3xl p-12 lg:p-16 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              今日から始めよう
            </h2>
            <p className="text-lg text-sky-50">
              無料でアカウントを作成して、ダイエットを始めましょう
            </p>
          </div>
          <Link href="/signup">
            <Button className="bg-white hover:bg-sky-50 text-sky-600 px-8 py-3 text-base font-semibold">
              無料サインアップ
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
