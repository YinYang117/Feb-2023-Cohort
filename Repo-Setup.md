This is a helpful study tool. Also, it's important that we set it up properly. 

This repo contains a folder titled git-flow-guide. This contains a helpful readme that can give further guidance on git, github, commands, and also has some helpful images to guide the process.

An important thing to note is that you'll probably want to have 2 copies of this repo. 1 will only pull down solutions pushed up by staff. Dont work in this one because you will run into merge conflicts. 

Instead, clone down a second copy to work in. Create a new repo in your personal GitHub. Then change the remote url of this second 
copy to match your github repo. 

This guide will walk you through this process. 

## Step 1 Clone the Repo

* On your computer, create a folder to hold these repos. 
Make sure that this folder will not be nested in any other 
git repositories that you may have. 
Nested repos create a lot of extra work and confusion.

* Next, run the clone command from your terminal. This may look a little bit different than you have seen, because we are only pulling a specific branch. You will use one of the following commands based on how you set up your authentication with GitHub. 

    - **Recommended** Using SSH URL:

        - `git clone -b EST git@github.com:YinYang117/Feb-2023-Cohort.git`
        -   or
        - `git clone -b PST git@github.com:YinYang117/Feb-2023-Cohort.git`

    - If you are using a PAT you will need the HTTPS URL:

        - `git clone -b EST https://github.com/YinYang117/Feb-2023-Cohort.git`
        -   or
        - `git clone -b PST https://github.com/YinYang117/Feb-2023-Cohort.git`

    - What does this command mean?
        
        - The `git clone` part tells git "Hey, make me a copy of this repo"

        - The `-b` is short hand for `--branch`. So we are telling git to clone a specific branch. 

        - `EST` and `PST` are the specific branchs that we want to clone. 
        Without the `-b` and `EST / PST` you would clone the entire repo and be on the `main` branch. 
        So when you pull you wouldn't see the changes we make in class until you switched to the proper branch. 

        - The URL is the address of the entire repo, we just adjust based on our personal authentication settings. 

* This repo should be good to go now. 
The only thing you will do with the Aa copy of this repo is `git pull` 
to get notes, see solutions we add in class, etc. 

## Step 2 Create a personal copy of the Repo to work in

- This step will be very similar to what you did above. 
However, you will need to give this copy a different name. 
Otherwise Github will try to overwrite the file that already exists. 

- To get started, make sure you are in the folder you want this second copy to be created in.

- Next you will run the same command you did above:

SSH

    - `git clone -b EST git@github.com:YinYang117/Feb-2023-Cohort.git My-PT-Resources-Copy`
    -   or
    - `git clone -b PST git@github.com:YinYang117/Feb-2023-Cohort.git My-PT-Resources-Copy`

Pat

    - `git clone -b EST https://github.com/YinYang117/Feb-2023-Cohort.git My-PT-Resources-Copy`
    -   or
    - `git clone -b PST https://github.com/YinYang117/Feb-2023-Cohort.git My-PT-Resources-Copy`

Notice the difference? We added `My-PT-Resources-Copy` on the end. This will give our new clone the name `My-PT-Resources-Copy`

- Now, there are more instructions in the `README.md` file in this repo. This `README.md` will walk you through how to create your new repo on GitHub.

- Next, you'll need to change the remote URL for `My-PT-Resources-Copy` 

    - `cd` into `My-PT-Resources-Copy` 

    - Run `ls -a` in your terminal, and you should see a `.git` file hanging out. If you do, you're in the right place. 

    - Run the command `git remote set-url origin <your peronal repo url here>`

    - Replace "<your personal repo url here>" with the url from your newly created repo. 

    - Run `git remote -v` to make sure the remote URL has changed. 

- This is now your own working repo to change and work on as you please. 

# Important

Make sure you know which repo you are in before pushing or pulling! Remember, ONLY use the `Feb-2023-Cohort` to pull down solutions and notes. Use `My-PT-Resources-Copy` for working on and pushing up to your own private repo. 
