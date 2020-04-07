# README
This repo is used as a starting point to create a web app with a Rails API and React frontend. This is also ready to deploy to Heroku if you wish.

### Pre-requisites
* [yarn 1.22.4](https://classic.yarnpkg.com/en/docs/install/#mac-stable) used for package management
* [node 12.16.1](https://treehouse.github.io/installation-guides/mac/node-mac.html)
* [ruby 2.6.3](https://www.ruby-lang.org/en/downloads/)
* [rails 6.0.2](https://gorails.com/setup/osx/10.15-catalina#rails)

## Setup
Create a new repo and point to this as a template

### Rails
* Make sure you have [setup postgres on your machine](https://postgresapp.com/)
* In your repo, run `bundle install`
* Create a new file called `.env` in the root directory of your repo
* Add the following settings to the file
```
POSTGRES_USER=''
POSTGRES_PASSWORD=''
POSTGRES_HOST='localhost'
POSTGRES_DB='your_database_name'
POSTGRES_TEST_DB='your_database_name_test'
```
* run `rake db:setup` to create your databases

### React
* Run `yarn --cwd client install`

### Heroku
If you want to deploy your app to Heroku:
* install the [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
* `heroku apps:create` to create your app
* run this command to have both frontend and backend served by Rails in heroku:
```
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
```
* finally, push to heroku
```
git add .
git commit -m "commit message"
git push heroku master
```

## Development
Start a local development server with frontend on port `3000` and backend on port `3001` by running the following command:

`yarn start`

## Testing
Rails rests are written in `Minitest`. You can run all Rails tests using the following command:

`ruby test/**.rb`

React tests are written in `jest` and `enzyme`. You can run all React tests using the following command:

`yarn test`

## Credit
Shoutout to [this blog post](https://blog.heroku.com/a-rock-solid-modern-web-stack) for helping with most of the setup
