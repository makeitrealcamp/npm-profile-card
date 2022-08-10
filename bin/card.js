#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

// Pull in our modules
import chalk from 'chalk'
import boxen from 'boxen'

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Make It Real'),
  handle: chalk.white('@makeitreal'),
  shorthandle: chalk.white('MIR'),
  work: chalk.white('Academia de Desarrollo de Software'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('makeitreal'),
  github: chalk.gray('https://github.com/') + chalk.green('makeitreal'),
  // change the linkedin url to your own
  // https://www.linkedin.com/in/khriztianmoreno/
  linkedin: chalk.gray('https://www.linkedin.com/school/') + chalk.blue('make-it-real-camp'),
  web: chalk.cyan('https://makeitreal.camp'),
  npx: chalk.red('npx') + ' ' + chalk.white('makeitreal'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

const content = chalk.green(boxen(output, options))

console.log(content)
