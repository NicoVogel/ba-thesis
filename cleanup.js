
// regex for removing all comments

const removeAllComments = /\n?\\(unsure|info|change|improvement)\{[\w .,!?\[\]~\/:;-]+?(\\([\w.,!?\[\]~\/:;\-*]+)\{[\w .,!?\[\]~\/:;-]+?\}([\w .,!?\[\]~\/:;-]*))*?\}/g