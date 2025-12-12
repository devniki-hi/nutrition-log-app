#!/usr/bin/env bash
set -o errexit

echo "Installing Ruby dependencies..."
bundle install

echo "Installing JS dependencies..."
npm install --legacy-peer-deps

echo "Building frontend assets..."
npm run build

echo "Precompiling Rails assets..."
bundle exec rails assets:precompile

echo "Cleaning old assets..."
bundle exec rails assets:clean

echo "Running database migrations..."
bundle exec rails db:reset