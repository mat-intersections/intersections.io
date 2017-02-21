# intersections.io 2017 website

# How this works

It's a **static website** because we don't need no Wordpress for this. Content is in Markdown where possible, EJS (an HTML-like) for markup, CoffeeScript for script and Sass for styles. All of these are separately and automagically compiled/watched with [Harp](http://harpjs.com), so the final files are not visible in this repo.

The CSS is using [Skeleton](http://getskeleton.com), a simple grid/boilerplate, and Sass files are organised with the [7-1 architecture pattern](https://sass-guidelin.es/#architecture).

## Set up a development environment

Install Node.js and NPM. Install Harp: `npm install -g harp`. Clone this repository, and from inside it, run `harp server` to watch and serve your files as you edit them. Boom.

## Contributing & deployment

There's no strict guidelines for contributing as long as you comment and indent sensibly.

* **master** is the current development branch.
* **staging** is the version of the code that is, generally, the same as the production version. Switch to that branch if you need to make changes on the current version to the website, without breaking changes on the newer work done on master. The version on GitHub is mirrored and compiled at https://staging.intersections.io.
* **production** is the version of the code currently up, well, in prod. The version on GitHub is mirrored and compiled at https://intersections.io.

There is a webhook that will pull any update to the **staging** or **production** branches as soon as you push them to GitHub, and it will auto-compile it into the dist folder (`harp compile dist/`). This means **master** should always be the branch further ahead, and **staging** should never be behind **production** unless you are deploying or doing a hotfix, and **production should never ever be ahead of any other branch**. So to deploy:

* make sure it works locally (on the master branch)
* `git merge master staging`
* `git checkout staging && git push origin staging`
* Once it's done pushing, wait a few seconds for the server to compile, then test on https://staging.intersections.io
* If everything works on staging: `git merge staging production && git checkout production && git push origin production`

If something doesn't work, call Victor to the rescue ☎️

# Website organisation

See Trello for what needs to be done.
