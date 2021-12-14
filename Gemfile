source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.5"

gem "rails", "~> 7.0.0.rc1"
gem "sprockets-rails", ">= 3.4.1"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "importmap-rails", ">= 0.9.2"
gem "turbo-rails", ">= 0.9.0"
gem "stimulus-rails", ">= 0.7.3"
gem "slim-rails"
gem 'dotenv-rails'
gem 'redis', '~> 4.0'

gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "bootsnap", ">= 1.4.4", require: false

group :development, :test do
  gem "debug", ">= 1.0.0", platforms: %i[ mri mingw x64_mingw ]
  gem 'rspec-rails'
end

group :development do
  gem "web-console", ">= 4.1.0"
end
