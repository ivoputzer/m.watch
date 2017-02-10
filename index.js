#!/usr/bin/env node

const {watch} = require('fs')
const {spawn} = require('child_process')

const [cmd, ...args] = process.argv.slice(2)
const notify = spawn.bind(null, cmd, args, {stdio: 'inherit'})

watch(process.cwd(), {recursive: true, process.env}, notify)
