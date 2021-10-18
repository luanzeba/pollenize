# README
This is the source code for a mentoring web app called Pollenize.
This is a work-in-progress side project.
Pollenize is meant to be a place where anyone can search for people working in different fields and get a chance to schedule a conversation with them to learn more about that specific line of work.

![demo](https://media.giphy.com/media/Gzy0QyC88914i7LncP/giphy-downsized-large.gif)

### Pre-requisites
* [yarn 1.22.4](https://classic.yarnpkg.com/en/docs/install/#mac-stable) used for package management
* [node 12.16.1](https://treehouse.github.io/installation-guides/mac/node-mac.html)
* [ruby 2.6.3](https://www.ruby-lang.org/en/downloads/)
* [rails 6.0.2](https://gorails.com/setup/osx/10.15-catalina#rails)

## Development
Start a local development server with frontend on port `3000` and backend on port `3001` by running the following command:

`yarn start`

## Testing
Rails rests are written in `Minitest`. You can run all Rails tests using the following command:

`ruby test/**.rb`

React tests are written in `jest` and `enzyme`. You can run all React tests using the following command:

`yarn test`

