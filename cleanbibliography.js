#!/usr/bin/env node
fs = require('fs');
const regex = /,\n[ ]*file = \{.+\}/g;
const interviewNameRegex = /(@misc\{Vogel\.2020)(?:[a-z]*),([\s\S]+?)(title = \{Expert interview with )(\w*) (\w*)/gm;
const path = 'bibliography.bib';

const file = fs.readFileSync(path).toString();
const newFile = file.replace(/\r\n/g, '\n')
    .replace(regex, '')
    .replace(interviewNameRegex, "$1.$5,$2$3$4 $5");

fs.writeFileSync(path, newFile);