# intersections.io 2017

## Organisation

master is the current development branch
staging is the version of the code that is, generally, the same as the production version. Switch to that branch if you need to make changes on the current version to the website, without breaking changes on the work done on master
production is the version of the code currently on the server. There is a webhook that will pull any update to the production branch as soon as you commit/push on it, so make sure your code is working if you push on that branch. ALWAYS push to staging first, then from staging to production.