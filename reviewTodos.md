# Review todos

- after each visual paragraph start with `textcite` and if the same author is used in the same paragraph again, then `citeauthor` --> `\n{2,*}.+\\citeauthor\{.+?\}.+?\n{2,*}`
- check, that all citations with a page rage, are correctly formatted `\[p.*?\d+(f?f.)?\]`
- check, that no citation is after a dot `\.[ |\n|\t]+?\\cite`
- check, that footnotes do not have any space before them `\w[ |\n|\t]+?\\footnote`
- make requirement names uniform. Either write all works in uppercase or only the first
- uniform Table and Figure to be capitalized
- check, that there is a space before a command, except for footnotemarks ` \w+\\\w+\b(?<!\bfootnotemark)`
- ensure that all `eigennamen` are written in pascal case with spaces
-- web components -> Web Components
- search for acronyms in thesis and replace with ac.
-- first check if ac was somewhere missing
-- second check if the long version is used somewhere