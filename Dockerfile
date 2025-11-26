FROM ruby:3.4.6

# ============================
# 1️⃣ 環境変数 / ディレクトリ設定
# ============================
ARG APP_ROOT=/usr/src/nutrition-log-app
WORKDIR $APP_ROOT

# ============================
# 2️⃣ Node.js, Yarn, 必要パッケージのインストール
# 📦 開発環境（Ruby + Node + PostgreSQL）
# ├─ Ruby 3.4.6
# ├─ Bundler
# ├─ Node.js（LTS版）
# ├─ Yarn（npmの高速版）
# ├─ PostgreSQLクライアント（psqlコマンド）
# ├─ ビルドツール（C拡張gem対応）
# └─ vim / curl（開発補助）
# ============================
RUN apt-get update -qq \
  && apt-get install -y --no-install-recommends \
     curl vim build-essential libpq-dev postgresql-client \
  && curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
  && apt-get install -y --no-install-recommends nodejs \
  && npm install -g yarn \
  && rm -rf /var/lib/apt/lists/*

# ============================
# 3️⃣ Gemfile のコピー & bundle install
# （キャッシュ活用）
# ============================
COPY Gemfile Gemfile.lock ./
RUN bundle install

# ============================
# 4️⃣ アプリケーションコードをコピー
# ============================
COPY . .