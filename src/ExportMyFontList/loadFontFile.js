git filter-branch --force --index-filter "git rm --cached --ignore-unmatch ./src/loadFontFile.js" --prune-empty --tag-name-filter cat -- --all
