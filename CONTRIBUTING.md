# Contributing Guidelines
1. Fork this repo into your account.
    * On GitHub, navigate to the [turtles29/CampDash](https://github.com/turtles29/campdash) repository.
    * In the top-right corner of the page, click "Fork".

2. Clone the Fork repo into your local machine
    * On GitHub, navigate to your fork of the CampDash repository.
    * Under the repository name, click "Clone or download".
    * Do one of the following:
        * Clone with the command line
            1. In the "Clone with HTTPS" section, click the copy icon to copy the clone URL for the repository.
            2. Open the application you use for git (e.g. "Terminal.app", cmd.exe", "PowerShell", etc).
            3. Type `git clone`, and then paste the URL you copied in Step 2. It will look like this, with your GitHub username instead of `YOUR-USERNAME`:  
```$ git clone https://github.com/YOUR-USERNAME/CampDash```
            4. Press Enter and your local clone will be created.
        * Clone with GitHub Desktop
            1. Download [GitHub Desktop](https://desktop.github.com).
            2. Click "Open in Desktop" from the "Clone or download" box.
            3. Click the blue "Clone" button in GitHub Desktop.

3. Add original project upstream
    * Set up a remote that points to the original repo so you can pull any chances to your local repo.  
```git remote add upstream https://github.com/turtles29/CampDash```

4. Create branches for edits and push to your forked repo
    * Make sure to first pull the upstream (original repo) and push it to your own forked repo to keep the changes that have already been made in the upstream repo:  
```git pull upstream master && git push origin master```
    * Make your own branch and fix an issue or add a feature.
    * Push the branch of the feature or fix your did. (Please branch one feature/fix at a time):  
```git push origin YOUR-BRANCH```

5. Submit a pull request  
    * Go to your forked repo in the browser and switch to the branch you just pushed and create a pull request.
