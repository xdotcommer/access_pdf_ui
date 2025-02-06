source "https://rubygems.org"

gem "rails", "~> 8.0.1"
gem "propshaft"
gem "sqlite3", ">= 2.1"
gem "pg"
gem "puma", ">= 5.0"
gem "jsbundling-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "cssbundling-rails"
gem "jbuilder"

gem "tzinfo-data", platforms: %i[windows jruby]

gem "solid_cache"
gem "solid_queue"
gem "solid_cable"

gem "bootsnap", require: false
gem "kamal", require: false
gem "thruster", require: false
gem "redis"
gem "sidekiq", "~> 7.2"

gem "view_component", "~> 3.21"
gem "overcommit", "~> 0.66.0"
gem "kaminari", "~> 1.2"

group :development, :test do
  gem "brakeman", "~> 7.0", require: false
  gem "debug", platforms: %i[mri windows], require: "debug/prelude"
  gem "dotenv-rails", "~> 3.1"
  gem "standard"
  gem "rubocop-rails-omakase"
end

group :development do
  gem "better_errors", "~> 2.10.1"
  gem "ruby-lsp", "~> 0.23.8"
  gem "bullet", "~> 8.0"
  gem "web-console"
  gem "dockerfile-rails", ">= 1.7.2"
  gem "bundler-audit", "~> 0.9.2"
end

group :test do
  gem "rspec", "~> 3.13"
  gem "rspec-rails"
  gem "shoulda", "~> 4.0"
  gem "shoulda-matchers", "~> 4.5"
  gem "simplecov", require: false # Optional: for code coverage
  gem "rails-controller-testing"
  gem "factory_bot_rails", "~> 6.4"
end

gem "bcrypt", "~> 3.1"
gem "state_machines", "~> 0.6.0"
gem "aws-sdk-s3", "~> 1.141"  # For S3 versioning support
