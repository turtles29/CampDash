# Contributing
1. Fork this repo into your account.
    * On GitHub, navigate to the [turtles29/CampDash](https://github.com/turtles29) repository.
    * In the top-right corner of the page, click Fork.

2. Clone the Fork repo into your local machine
    * On GitHub, navigate to your fork of the CampDash repository.
    * Under the repository name, click Clone or download.
    * In the Clone with HTTPs section, click the copy icon to copy the clone URL for the repository.
    * Open Terminal.
    * Type `git clone`, and then paste the URL you copied in Step 2. It will look like this, with your GitHub username instead of `YOUR-USERNAME`:  
```$ git clone https://github.com/YOUR-USERNAME/CampDash```
    * Press Enter. Your local clone will be created.  

3. Add original Project Upstream
    * Set up an remote that points to the original repo so you can pull any chances to your local repo.  
```git remote add upstream https://github.com/turtles29/CampDash```

4. Create Branches for edits and push to your forked repo.
    * Make sure to first pull the upstream (original repo) and push it to your own forked repo to keep the changes that have already been made in the upstream repo:  
```git pull upstream master && git push origin master```
    * Make your own branch and fix an issue or add a feature.
    * Push the branch of the feature or fix your did. (Please branch one feature/fix at a time):  
```git push origin YOUR-BRANCH```

5. Submit a Pull request  
    *Go to your forked repo in the browser and switch to the branch you just pushed and create a pull request.
