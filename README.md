# Notion page creator

A cli tool to create notes pages in [Notion](https://www.notion.so/). Creates a skeleton notes page from structured markdown outlines. Originally used with rwxrob's [old beginner boost outline](https://github.com/rwxrob/boost/tree/old-20210722) written in markdown.

Built with Notion's [JavaScript API](https://developers.notion.com/) and shell scripts.


## Todo items
- [x] Create new page in Notion db with correc title
- [x] Add property values into newly created page including video link
- [x] Add page content (home page link, day title)
- [x] fix `shellcheck` errors
- [ ] Copy outlines from GitHub repo to page
- [x] Get Materials attachment working
- [ ] Add proper emoji (waiting on Notion API support)
- [ ] Make this more generic (work with my Notion Zettlekasten DB)
- [ ] Clean up CLI interface (-h, add options properly)
