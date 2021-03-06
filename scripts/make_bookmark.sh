#!/bin/bash
#
# Minify giveBackControl.js to create giveBackControlBookmark.js
#

printf 'javascript:' > giveBackControlBookmark.js

# Remove leading spaces, empty lines, then replace line endings with spaces
sed -e '/^[[:space:]]*$/d' \
    -e 's/^[ \t]*//' \
    src/giveBackControl.js | tr '\n' ' ' >> giveBackControlBookmark.js
