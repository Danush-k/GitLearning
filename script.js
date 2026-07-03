/* ============================================
   GitLearning — JavaScript Interactivity
   ============================================ */

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const conceptsData = [
  {
    icon: "📦",
    title: "Repository (Repo)",
    desc: "A repository is like a project folder that Git tracks. It stores all your files and their entire revision history.",
    example: "git init my-project",
    category: "local",
    analogy: "Think of a repository as a secure, digital vault for your project. Unlike a normal folder, it remembers every single file change, who made it, and when, allowing you to travel back in time to any previous state.",
    checkpoint: {
      q: "Which file or directory marks a folder as a local Git repository?",
      options: [".gitconfig", ".gitignore", ".git folder", "README.md"],
      answer: 2,
      explanation: "The hidden `.git` folder contains all the metadata, object databases, and revision history that power the repository. Never delete it!"
    }
  },
  {
    icon: "📋",
    title: "Staging Area (Index)",
    desc: "The staging area is a prep zone where you choose which changes to include in your next commit.",
    example: "git add index.html",
    category: "local",
    analogy: "Think of the staging area as a shipping box. Before sealing the box and shipping it (committing), you selectively place items inside it. This allows you to choose exactly which changes are ready to be saved together, leaving others as drafts.",
    checkpoint: {
      q: "What command stages all modified and new files in the current folder?",
      options: ["git commit -a", "git stage-all", "git add .", "git push --all"],
      answer: 2,
      explanation: "Running `git add .` stages all modifications, additions, and deletions in the current directory and its subdirectories."
    }
  },
  {
    icon: "📸",
    title: "Commit",
    desc: "A commit is a snapshot of your changes. Every commit has a unique ID and a message describing what changed.",
    example: "git commit -m 'Add login page'",
    category: "local",
    analogy: "A commit is a permanent snapshot of your staging area box. It's like taking a photo and stamping it with a unique barcode (hash), an author name, and a note describing what changed. Once committed, it becomes a permanent part of your project history.",
    checkpoint: {
      q: "What does the -m flag in 'git commit -m' represent?",
      options: ["modification", "message", "main branch", "merge"],
      answer: 1,
      explanation: "The `-m` flag stands for 'message', allowing you to provide a short, description inline without opening a terminal text editor."
    }
  },
  {
    icon: "🌿",
    title: "Branch",
    desc: "A branch is an independent line of development. You can create branches to work on features without affecting the main code.",
    example: "git branch feature/login",
    category: "local",
    analogy: "A branch is a parallel universe for your code. If you want to experiment with a new feature or fix a bug without breaking the stable project, you split off on a branch. You can work freely, and later merge it back or discard it.",
    checkpoint: {
      q: "Which command lists all local branches in the current repository?",
      options: ["git branch", "git list-branches", "git show-branch", "git status"],
      answer: 0,
      explanation: "Running `git branch` (with no arguments) lists all local branches and puts an asterisk (*) next to the one you are currently on."
    }
  },
  {
    icon: "🔀",
    title: "Checkout / Switch",
    desc: "Checking out allows you to navigate between different branches or view specific commits in history.",
    example: "git checkout -b feature/login",
    category: "local",
    analogy: "Checking out is like teleporting between parallel universes (branches). When you checkout a branch, Git swaps the files in your directory to match that branch's latest state instantly, letting you jump between tasks.",
    checkpoint: {
      q: "How do you create AND switch to a new branch in a single command?",
      options: ["git branch -n <name>", "git checkout -b <name>", "git switch-to <name>", "git checkout <name>"],
      answer: 1,
      explanation: "The `-b` flag tells checkout to create the branch first, then switch your working directory to it immediately."
    }
  },
  {
    icon: "🤝",
    title: "Merge",
    desc: "Merging combines changes from one branch into another. This is how features get integrated into the main codebase.",
    example: "git merge feature/login",
    category: "local",
    analogy: "Merging is combining two parallel universes back together. When your feature branch is tested and ready, you merge it back into the main branch, integrating all your additions seamlessly.",
    checkpoint: {
      q: "If two branches modify the same line of a file, what does Git produce?",
      options: ["Auto-merge success", "Delete branch warning", "Merge conflict", "A new commit error"],
      answer: 2,
      explanation: "When Git cannot automatically merge conflicting changes, it creates a Merge Conflict and asks you to manually choose which code to keep."
    }
  },
  {
    icon: "☁️",
    title: "Remote (Origin)",
    desc: "A remote is a version of your repo hosted on the internet (like GitHub). It lets you share code and collaborate.",
    example: "git remote add origin <url>",
    category: "remote",
    analogy: "A remote is a copy of your vault stored in the cloud (like GitHub or GitLab). It acts as a central hub. Instead of copying files on USB drives, everyone pushes to and pulls from this cloud origin to keep in sync.",
    checkpoint: {
      q: "What is the standard default name given to the primary remote repository URL?",
      options: ["source", "main", "origin", "cloud"],
      answer: 2,
      explanation: "Git conventionally names the primary upstream remote repository 'origin' when cloning or manually linking a remote URL."
    }
  },
  {
    icon: "⬇️",
    title: "Pull & Push",
    desc: "Push sends your local commits to the remote. Pull downloads remote changes and merges them into your local branch.",
    example: "git push origin main",
    category: "remote",
    analogy: "Push is shipping your local snapshots up to the cloud vault. Pull is downloading the latest cloud snapshots and merging them into your local vault. They are the breathing in and out of collaborative coding.",
    checkpoint: {
      q: "What does 'git pull' actually do under the hood?",
      options: ["git push + git fetch", "git fetch + git merge", "git init + git clone", "git status + git checkout"],
      answer: 1,
      explanation: "Running `git pull` is a shortcut that performs a `git fetch` (downloads changes) followed immediately by a `git merge` (integrates them)."
    }
  },
  {
    icon: "📥",
    title: "Fetch",
    desc: "Fetching downloads new data from a remote repository without merging or modifying your local working files.",
    example: "git fetch",
    category: "remote",
    analogy: "Fetching is checking the mailbox without opening the letters. It downloads all the latest branch updates from the remote repo so you can see what your teammates did, but it does NOT touch or merge with your local working code.",
    checkpoint: {
      q: "How does 'git fetch' differ from 'git pull'?",
      options: ["It uploads changes instead of downloading", "It deletes local branches", "It doesn't automatically merge changes", "It resets the staging area"],
      answer: 2,
      explanation: "Fetch only downloads the remote updates/metadata into remote-tracking branches. It does not touch your active branch or modify files in your working directory."
    }
  },
  {
    icon: "📢",
    title: "Pull Request (PR)",
    desc: "A Pull Request is a collaborative review process on platforms like GitHub to propose and merge branch changes.",
    example: "PR on GitHub UI",
    category: "remote",
    analogy: "A Pull Request (PR) is a formal request to merge your changes into the main project. It's like submitting a paper for peer review. Teammates inspect your code diffs, run automated tests, comment, request edits, and finally approve and merge it.",
    checkpoint: {
      q: "Where do you create and manage a Pull Request (PR)?",
      options: ["In your local terminal", "On a hosting service like GitHub", "Inside the .gitconfig file", "In a local text editor"],
      answer: 1,
      explanation: "Pull Requests are a collaborative platform feature (GitHub, GitLab, Bitbucket) rather than a built-in feature of core Git itself."
    }
  }
];

const commandsData = {
  setup: [
    { cmd: "git config --global user.name 'Name'", desc: "Set your Git username globally" },
    { cmd: "git config --global user.email 'email@x.com'", desc: "Set your Git email globally" },
    { cmd: "git init", desc: "Initialize a new Git repository" },
    { cmd: "git clone <url>", desc: "Clone a remote repository locally" },
    { cmd: "git config --list", desc: "View all Git configuration" },
    { cmd: "git help <command>", desc: "Get help info for a specific git command" },
  ],
  basic: [
    { cmd: "git status", desc: "Show the working tree status" },
    { cmd: "git status -s", desc: "Show working tree status in a short format" },
    { cmd: "git add .", desc: "Stage all changed files for commit" },
    { cmd: "git add <file>", desc: "Stage a specific file" },
    { cmd: "git commit -m 'message'", desc: "Commit staged changes with a message" },
    { cmd: "git log --oneline", desc: "View compact commit history" },
    { cmd: "git diff", desc: "Show unstaged changes" },
    { cmd: "git diff --staged", desc: "Show differences between staged files and last commit" },
  ],
  branch: [
    { cmd: "git branch", desc: "List all local branches" },
    { cmd: "git branch -a", desc: "List all local and remote-tracking branches" },
    { cmd: "git branch <name>", desc: "Create a new branch" },
    { cmd: "git checkout <branch>", desc: "Switch to an existing branch" },
    { cmd: "git checkout -b <name>", desc: "Create and switch to a new branch" },
    { cmd: "git checkout -", desc: "Switch to the previously checked out branch" },
    { cmd: "git merge <branch>", desc: "Merge a branch into current branch" },
    { cmd: "git branch -d <name>", desc: "Delete a local branch" },
  ],
  remote: [
    { cmd: "git remote -v", desc: "List all remote connections" },
    { cmd: "git remote add origin <url>", desc: "Add a remote named 'origin'" },
    { cmd: "git remote show origin", desc: "Show detailed information about origin remote" },
    { cmd: "git push origin main", desc: "Push main branch to remote" },
    { cmd: "git pull origin main", desc: "Pull latest from remote main" },
    { cmd: "git fetch", desc: "Download remote changes (without merge)" },
    { cmd: "git push -u origin main", desc: "Push and set upstream tracking" },
    { cmd: "git push origin --delete <branch>", desc: "Delete a branch on the remote repository" },
  ],
  advanced: [
    { cmd: "git stash", desc: "Temporarily shelve (stash) changes made to your working directory" },
    { cmd: "git stash pop", desc: "Restore the most recently stashed files and remove from stash list" },
    { cmd: "git cherry-pick <commit>", desc: "Apply the changes introduced by an existing commit" },
    { cmd: "git reflog", desc: "Show a log of all reference updates (recovery tool)" },
    { cmd: "git reset --hard HEAD~1", desc: "Discard commits and local modifications permanently" },
    { cmd: "git clean -fd", desc: "Remove untracked files and directories from the working tree" },
    { cmd: "git rebase <branch>", desc: "Reapply commits on top of another base tip" },
    { cmd: "git revert <commit>", desc: "Create a new commit that undoes the changes of a previous commit" }
  ]
};

const workflowSteps = [
  { id: "wf-working", icon: "💻", name: "Working Directory", subtitle: "Your local files", cls: "wf-working" },
  { arrow: true, cmd: "git add" },
  { id: "wf-staging", icon: "📋", name: "Staging Area", subtitle: "Prepared changes", cls: "wf-staging" },
  { arrow: true, cmd: "git commit" },
  { id: "wf-repo", icon: "🗄️", name: "Local Repo", subtitle: "Version history", cls: "wf-repo" },
  { arrow: true, cmd: "git push" },
  { id: "wf-remote", icon: "☁️", name: "Remote Repo", subtitle: "GitHub / GitLab", cls: "wf-remote" },
];

const cheatsheetData = [
  {
    title: "Getting Started",
    rows: [
      { cmd: "git init", label: "Init new repo" },
      { cmd: "git clone <url>", label: "Clone repo" },
      { cmd: "git status", label: "Check status" },
      { cmd: "git log", label: "View history" },
    ]
  },
  {
    title: "Staging & Committing",
    rows: [
      { cmd: "git add .", label: "Stage all files" },
      { cmd: "git add <file>", label: "Stage one file" },
      { cmd: "git commit -m ''", label: "Commit with message" },
      { cmd: "git commit --amend", label: "Edit last commit" },
    ]
  },
  {
    title: "Branching",
    rows: [
      { cmd: "git branch", label: "List branches" },
      { cmd: "git checkout -b", label: "New branch" },
      { cmd: "git merge <branch>", label: "Merge branch" },
      { cmd: "git branch -d", label: "Delete branch" },
    ]
  },
  {
    title: "Remote",
    rows: [
      { cmd: "git push", label: "Push to remote" },
      { cmd: "git pull", label: "Pull from remote" },
      { cmd: "git fetch", label: "Fetch changes" },
      { cmd: "git remote -v", label: "List remotes" },
    ]
  },
  {
    title: "Undoing Changes",
    rows: [
      { cmd: "git restore <file>", label: "Discard changes" },
      { cmd: "git reset HEAD~1", label: "Undo last commit" },
      { cmd: "git revert <hash>", label: "Revert a commit" },
      { cmd: "git stash", label: "Stash changes" },
    ]
  },
  {
    title: "Useful Extras",
    rows: [
      { cmd: "git diff", label: "Show changes" },
      { cmd: "git tag <name>", label: "Create a tag" },
      { cmd: "git stash pop", label: "Apply stash" },
      { cmd: "git cherry-pick", label: "Apply a commit" },
    ]
  }
];

const quizData = [
  {
    q: "What command initializes a new Git repository?",
    options: ["git start", "git init", "git new", "git create"],
    answer: 1,
    explanation: "✅ `git init` creates a new local Git repository in the current directory."
  },
  {
    q: "Which command stages all modified files for a commit?",
    options: ["git commit .", "git stage all", "git add .", "git push ."],
    answer: 2,
    explanation: "✅ `git add .` stages all changes in the current directory."
  },
  {
    q: "What does 'git clone' do?",
    options: ["Creates a new branch", "Copies a remote repository to your machine", "Merges two branches", "Deletes a remote"],
    answer: 1,
    explanation: "✅ `git clone <url>` copies a remote repo (with its history) to your local machine."
  },
  {
    q: "What is the correct command to create and switch to a new branch?",
    options: ["git branch new-feature", "git switch new-feature", "git checkout -b new-feature", "git new branch"],
    answer: 2,
    explanation: "✅ `git checkout -b <name>` creates a new branch AND switches to it."
  },
  {
    q: "What does 'git push origin main' do?",
    options: ["Downloads changes from remote", "Merges main into origin", "Uploads local commits to the remote", "Deletes main branch"],
    answer: 2,
    explanation: "✅ `git push origin main` sends your local commits on `main` to the remote named `origin`."
  },
  {
    q: "Where are changes stored after running 'git add'?",
    options: ["Remote repository", "Staging area", "Working directory", "Commit history"],
    answer: 1,
    explanation: "✅ `git add` moves changes to the Staging Area, ready to be committed."
  },
  {
    q: "What command shows your recent commit history?",
    options: ["git history", "git show", "git log", "git track"],
    answer: 2,
    explanation: "✅ `git log` (or `git log --oneline` for compact view) shows commit history."
  },
  {
    q: "Which command downloads remote changes WITHOUT merging?",
    options: ["git pull", "git download", "git sync", "git fetch"],
    answer: 3,
    explanation: "✅ `git fetch` downloads remote changes but does NOT merge them automatically."
  },
  {
    q: "What is a 'merge conflict'?",
    options: [
      "When two people have the same username",
      "When Git can't automatically combine conflicting changes",
      "When a push is rejected",
      "When a branch is deleted"
    ],
    answer: 1,
    explanation: "✅ A merge conflict happens when two branches have conflicting changes to the same lines."
  },
  {
    q: "What does 'git stash' do?",
    options: [
      "Permanently deletes changes",
      "Commits all staged files",
      "Temporarily saves uncommitted changes",
      "Creates a backup branch"
    ],
    answer: 2,
    explanation: "✅ `git stash` saves your uncommitted changes so you can work on something else."
  },
  {
    q: "Which command is used to apply a specific commit from one branch onto the current branch?",
    options: ["git merge", "git cherry-pick", "git pull", "git checkout"],
    answer: 1,
    explanation: "✅ `git cherry-pick <commit-hash>` applies the changes introduced by an existing commit onto your current branch."
  },
  {
    q: "What is the primary purpose of 'git rebase'?",
    options: [
      "Reapplies commits on top of another base tip to maintain a linear history",
      "Deletes the entire commit history",
      "Creates a remote copy of the repository",
      "Undoes the staging area changes"
    ],
    answer: 0,
    explanation: "✅ `git rebase` integrates changes from one branch into another by moving the base of your branch to the tip of the target branch, keeping commits clean and linear."
  },
  {
    q: "What does the command 'git reset --hard HEAD' do?",
    options: [
      "Undoes the last commit but keeps staged changes",
      "Resets the branch to match origin/main",
      "Discards all unstaged, staged, and local changes since the last commit",
      "Deletes the .git directory"
    ],
    answer: 2,
    explanation: "✅ `git reset --hard HEAD` resets the staging area and working directory to the state of the last commit, discarding all uncommitted changes."
  },
  {
    q: "Which command lists the log of all local actions taken in your repository (including resets, checkouts, and commits)?",
    options: ["git history", "git reflog", "git log --all", "git status"],
    answer: 1,
    explanation: "✅ `git reflog` tracks every change made to references (HEAD, branch tips, etc.), allowing you to recover lost commits or branches."
  },
  {
    q: "What is the key difference between 'git revert' and 'git reset'?",
    options: [
      "Revert creates a new commit that undoes changes; reset moves the branch pointer back in history",
      "Revert deletes history; reset preserves it",
      "Revert is only for remote repos; reset is only for local repos",
      "There is no difference between them"
    ],
    answer: 0,
    explanation: "✅ `git revert` safely creates a new commit that records the exact opposite changes, making it ideal for shared branches. `git reset` alters the commit history by moving branch tips backward."
  },
  {
    q: "Which command allows you to temporarily save your working directory changes without committing them, so you can work on something else?",
    options: ["git commit --amend", "git stash", "git checkout -b", "git reset --soft"],
    answer: 1,
    explanation: "✅ `git stash` temporarily shelves (stashes) changes made to your working directory so you can work on a clean branch, and you can apply them back later with `git stash pop`."
  }
];

const arenaProblemsData = [
  {
    id: 1,
    title: "Sanitize Branch Name",
    category: "Git Basics",
    difficulty: "easy",
    desc: `<div class="problem-desc-rich">
<p>You are building a tool to automate branch creation from task titles. Sanitize a user-provided branch name string using the following rules:</p>
<ul>
  <li>Convert the entire string to lowercase.</li>
  <li>Replace all spaces with a single hyphen (<code>-</code>).</li>
  <li>Remove any characters that are NOT lowercase letters, numbers, hyphens (<code>-</code>), or forward slashes (<code>/</code>).</li>
  <li>Ensure there are no consecutive hyphens (e.g. <code>--</code> becomes <code>-</code>).</li>
  <li>Trim any leading or trailing hyphens from the final string.</li>
</ul>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong> name = "feature/Add login screen!"<br/>
  <strong>Output:</strong> "feature/add-login-screen"
</div>

<h4>Example 2</h4>
<div class="example-block">
  <strong>Input:</strong> name = "Fix_Bug#102--now"<br/>
  <strong>Output:</strong> "fixbug102-now"
</div>

<h4>Constraints</h4>
<ul class="constraint-list">
  <li><code>1 &lt;= name.length &lt;= 100</code></li>
</ul>
</div>`,
    template: `function sanitizeBranchName(name) {
  // Write your code here
  
}`,
    testCases: [
      { input: ["feature/Add login screen!"], expected: "feature/add-login-screen" },
      { input: ["Fix_Bug#102--now"], expected: "fixbug102-now" },
      { input: ["  main-branch--name  "], expected: "main-branch-name" }
    ],
    solutionApproach: "To sanitize the branch name, use regex replacements sequentially:\n1. Convert the string to lowercase.\n2. Replace spaces with single hyphens (`-`).\n3. Remove characters that are not letters, digits, hyphens, or forward slashes.\n4. Replace multiple hyphens `---+` with a single hyphen `-`.\n5. Remove leading/trailing hyphens.",
    solutionCode: `function sanitizeBranchName(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\\s+/g, '-')
    .replace(/[^a-z0-9\\-\\/]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}`
  },
  {
    id: 2,
    title: "Commit Message Validator",
    category: "Git Basics",
    difficulty: "easy",
    desc: `<div class="problem-desc-rich">
<p>Write a function to check if a commit message complies with the Conventional Commits specification.</p>
<p>A message is valid if it matches the format: <code>type(scope): description</code> or <code>type: description</code> where:</p>
<ul>
  <li><code>type</code> must be one of: <code>feat</code>, <code>fix</code>, <code>docs</code>, <code>style</code>, <code>refactor</code>, <code>test</code>, <code>chore</code>.</li>
  <li>The optional <code>(scope)</code> can contain only letters, numbers, and hyphens.</li>
  <li>The type (and optional scope) must be followed by a colon and a space (<code>: </code>).</li>
  <li>The <code>description</code> must be at least 3 characters long.</li>
</ul>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong> msg = "feat(auth): add google sign-in"<br/>
  <strong>Output:</strong> true
</div>

<h4>Example 2</h4>
<div class="example-block">
  <strong>Input:</strong> msg = "fix bug"<br/>
  <strong>Output:</strong> false
</div>

<h4>Constraints</h4>
<ul class="constraint-list">
  <li><code>1 &lt;= msg.length &lt;= 200</code></li>
</ul>
</div>`,
    template: `function isValidCommitMessage(msg) {
  // Write your code here
  
}`,
    testCases: [
      { input: ["feat(auth): add google sign-in"], expected: true },
      { input: ["fix bug"], expected: false },
      { input: ["chore: update dependencies"], expected: true },
      { input: ["docs: a"], expected: false }
    ],
    solutionApproach: "Use a regular expression to match the structured type, optional scope, and description:\n- Regex: `/^(feat|fix|docs|style|refactor|test|chore)(\\([a-zA-Z0-9-]+\\))?: (.+)$/`\n- If matched, check if the description group length is at least 3 characters.",
    solutionCode: `function isValidCommitMessage(msg) {
  const regex = /^(feat|fix|docs|style|refactor|test|chore)(\\([a-zA-Z0-9-]+\\))?: (.+)$/;
  const match = msg.match(regex);
  if (!match) return false;
  return match[3].length >= 3;
}`
  },
  {
    id: 3,
    title: "Git Init Commands Generator",
    category: "Git Basics",
    difficulty: "easy",
    desc: `<div class="problem-desc-rich">
<p>Generate the shell commands required to initialize a local Git repository and set its default branch name to the given parameter.</p>
<p>Return the commands as an array of strings in order. The sequence of commands should be:</p>
<ol>
  <li>Initialize a repository (<code>git init</code>).</li>
  <li>Rename the default branch tip to the provided name (<code>git branch -M &lt;branch-name&gt;</code>).</li>
</ol>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong> defaultBranch = "main"<br/>
  <strong>Output:</strong> ["git init", "git branch -M main"]
</div>

<h4>Constraints</h4>
<ul class="constraint-list">
  <li><code>defaultBranch</code> is a non-empty alphanumeric string.</li>
</ul>
</div>`,
    template: `function getGitInitCommands(defaultBranch) {
  // Write your code here
  
}`,
    testCases: [
      { input: ["main"], expected: ["git init", "git branch -M main"] },
      { input: ["dev"], expected: ["git init", "git branch -M dev"] }
    ],
    solutionApproach: "Return a static string array mapping the required commands: `['git init', 'git branch -M ' + defaultBranch]`. This initializes the repository and creates/renames the primary pointer.",
    solutionCode: `function getGitInitCommands(defaultBranch) {
  return ["git init", "git branch -M " + defaultBranch];
}`
  },
  {
    id: 4,
    title: "Git Log Parser",
    category: "JSON Parsing",
    difficulty: "medium",
    desc: `<div class="problem-desc-rich">
<p>Parse a simple git log history string. Each commit record in the log is on its own line, formatted as:</p>
<pre>commit_hash | author_name | commit_message</pre>
<p>Parse this log string and return an array of parsed commit objects. Each object should have keys <code>hash</code>, <code>author</code>, and <code>message</code>.</p>
<p>Skip any empty or whitespace-only lines.</p>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong> logString = "a1b2c3d | Danush K | feat: add sso\\ne5f6g7h | Alex | fix: typo"<br/>
  <strong>Output:</strong> [<br/>
  &nbsp;&nbsp;{ hash: "a1b2c3d", author: "Danush K", message: "feat: add sso" },<br/>
  &nbsp;&nbsp;{ hash: "e5f6g7h", author: "Alex", message: "fix: typo" }<br/>
  ]
</div>

<h4>Constraints</h4>
<ul class="constraint-list">
  <li>Input log string can contain up to 50 lines.</li>
</ul>
</div>`,
    template: `function parseGitLog(logString) {
  // Write your code here
  
}`,
    testCases: [
      {
        input: ["a1b2c3d | Danush K | feat: add sso\ne5f6g7h | Alex | fix: typo"],
        expected: [
          { hash: "a1b2c3d", author: "Danush K", message: "feat: add sso" },
          { hash: "e5f6g7h", author: "Alex", message: "fix: typo" }
        ]
      },
      { input: [""], expected: [] }
    ],
    solutionApproach: "1. Split the inputs by newline `\\n`.\n2. Filter out empty lines.\n3. Map lines by splitting on ` | ` (space-pipe-space).\n4. Return objects with trimmed values: `{ hash, author, message }`.",
    solutionCode: `function parseGitLog(logString) {
  if (!logString.trim()) return [];
  return logString.split('\\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => {
      const parts = line.split(' | ');
      return {
        hash: parts[0] ? parts[0].trim() : '',
        author: parts[1] ? parts[1].trim() : '',
        message: parts[2] ? parts[2].trim() : ''
      };
    });
}`
  },
  {
    id: 5,
    title: "Semantic Version Parser",
    category: "SemVer",
    difficulty: "medium",
    desc: `<div class="problem-desc-rich">
<p>Parse a Semantic Version (SemVer) string in the format <code>major.minor.patch[-prerelease]</code>.</p>
<p>Return an object with the integer values for <code>major</code>, <code>minor</code>, and <code>patch</code>, and a string for <code>prerelease</code> (or <code>null</code> if there is no prerelease tag).</p>
<p>If the version string does not conform to the digits format (e.g. is missing numbers or contains non-alphanumeric pre-releases), return <code>null</code>.</p>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong> version = "1.4.12-alpha.1"<br/>
  <strong>Output:</strong> { major: 1, minor: 4, patch: 12, prerelease: "alpha.1" }
</div>

<h4>Example 2</h4>
<div class="example-block">
  <strong>Input:</strong> version = "2.0.0"<br/>
  <strong>Output:</strong> { major: 2, minor: 0, patch: 0, prerelease: null }
</div>

<h4>Constraints</h4>
<ul class="constraint-list">
  <li>Version string fits <code>major.minor.patch</code> pattern, optionally ending with a hyphen and tag.</li>
</ul>
</div>`,
    template: `function parseSemVer(version) {
  // Write your code here
  
}`,
    testCases: [
      { input: ["1.4.12-alpha.1"], expected: { major: 1, minor: 4, patch: 12, prerelease: "alpha.1" } },
      { input: ["2.0.0"], expected: { major: 2, minor: 0, patch: 0, prerelease: null } },
      { input: ["invalid-version"], expected: null }
    ],
    solutionApproach: "Use regex with capture groups matching digits and optional trailing hyphenated letters:\n- Regex: `/^(\\d+)\\.(\\d+)\\.(\\d+)(?:-([a-zA-Z0-9.]+))?$/`\n- Check match; parse integers for major, minor, patch and return object.",
    solutionCode: `function parseSemVer(version) {
  const regex = /^(\\d+)\\.(\\d+)\\.(\\d+)(?:-([a-zA-Z0-9.]+))?$/;
  const match = version.match(regex);
  if (!match) return null;
  return {
    major: parseInt(match[1], 10),
    minor: parseInt(match[2], 10),
    patch: parseInt(match[3], 10),
    prerelease: match[4] || null
  };
}`
  },
  {
    id: 6,
    title: "Merge Conflict Resolver",
    category: "Git Basics",
    difficulty: "medium",
    desc: `<div class="problem-desc-rich">
<p>Resolve a standard git merge conflict block inside a text file.</p>
<p>The conflict block is enclosed as follows:</p>
<pre>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
current changes
=======
incoming changes
&gt;&gt;&gt;&gt;&gt;&gt;&gt; branch-name</pre>
<p>Given the full file content string <code>conflictText</code> and a <code>preference</code> string (either <code>"current"</code> or <code>"incoming"</code>), return the resolved content with the conflict markers and the un-preferred side removed.</p>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong><br/>
  conflictText = "Line 1\n&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\nHello main\n=======\nHello feature\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-branch\nLine 3"<br/>
  preference = "current"<br/>
  <strong>Output:</strong> "Line 1\nHello main\nLine 3"
</div>

<h4>Constraints</h4>
<ul class="constraint-list">
  <li>Assume there is exactly one conflict block in the text.</li>
</ul>
</div>`,
    template: `function resolveConflict(conflictText, preference) {
  // Write your code here
  
}`,
    testCases: [
      {
        input: [`Line 1
<<<<<<< HEAD
Hello main
=======
Hello feature
>>>>>>> feature-branch
Line 3`, "current"],
        expected: `Line 1
Hello main
Line 3`
      },
      {
        input: [`Line 1
<<<<<<< HEAD
Hello main
=======
Hello feature
>>>>>>> feature-branch
Line 3`, "incoming"],
        expected: `Line 1
Hello feature
Line 3`
      }
    ],
    solutionApproach: "Use a regular expression matching multi-line blocks starting with `<<<<<<< HEAD` up to `>>>>>>> [name]`:\n- Regex: `/<<<<<<< HEAD\\n([\\s\\S]*?)\\n=======\\n([\\s\\S]*?)\\n>>>>>>> .+/`\n- Replace this matched region with either the first group (current) or the second group (incoming) based on preference.",
    solutionCode: `function resolveConflict(conflictText, preference) {
  const regex = /<<<<<<< HEAD\\n([\\s\\S]*?)\\n=======\\n([\\s\\S]*?)\\n>>>>>>> .+/;
  return conflictText.replace(regex, (match, current, incoming) => {
    return preference === 'current' ? current : incoming;
  });
}`
  },
  {
    id: 7,
    title: "Find Stale Branches",
    category: "Git Basics",
    difficulty: "medium",
    desc: `<div class="problem-desc-rich">
<p>Identify stale local branches in a git repository to help developers clean up local storage.</p>
<p>You are given an array of branch objects: <code>{ name: string, lastCommitDaysAgo: number }</code> and a threshold limit in days <code>thresholdDays</code>.</p>
<p>Return an array of the names of stale branches. A branch is stale if its <code>lastCommitDaysAgo</code> is strictly greater than <code>thresholdDays</code>.</p>
<p><strong>Note:</strong> Primary branches (named exactly <code>"main"</code> or <code>"master"</code>) are critical and can never be considered stale, regardless of age.</p>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong><br/>
  branches = [<br/>
  &nbsp;&nbsp;{ name: "main", lastCommitDaysAgo: 45 },<br/>
  &nbsp;&nbsp;{ name: "feat/login", lastCommitDaysAgo: 40 },<br/>
  &nbsp;&nbsp;{ name: "bug/typo", lastCommitDaysAgo: 10 }<br/>
  ]<br/>
  thresholdDays = 30<br/>
  <strong>Output:</strong> ["feat/login"]
</div>
</div>`,
    template: `function findStaleBranches(branches, thresholdDays) {
  // Write your code here
  
}`,
    testCases: [
      {
        input: [
          [
            { name: "main", lastCommitDaysAgo: 45 },
            { name: "feat/login", lastCommitDaysAgo: 40 },
            { name: "bug/typo", lastCommitDaysAgo: 10 }
          ],
          30
        ],
        expected: ["feat/login"]
      }
    ],
    solutionApproach: "Use array filtering. Check if `b.lastCommitDaysAgo > thresholdDays`, and filter out any branches whose name is `'main'` or `'master'`. Map the resulting array to their names.",
    solutionCode: `function findStaleBranches(branches, thresholdDays) {
  return branches
    .filter(b => b.lastCommitDaysAgo > thresholdDays && b.name !== 'main' && b.name !== 'master')
    .map(b => b.name);
}`
  },
  {
    id: 8,
    title: "Git Status Diff Parser",
    category: "Git Basics",
    difficulty: "medium",
    desc: `<div class="problem-desc-rich">
<p>Parse a simulated output from a short git status command (<code>git status -s</code>).</p>
<p>Each line in the input starts with a two-character code indicating state, followed by a space, and the filename. We only care about:</p>
<ul>
  <li><code>M</code> - Modified (add file to <code>modified</code> array)</li>
  <li><code>A</code> - Added (add file to <code>added</code> array)</li>
  <li><code>D</code> - Deleted (add file to <code>deleted</code> array)</li>
</ul>
<p>Return an object formatted as: <code>{ modified: string[], added: string[], deleted: string[] }</code>. File lists should be in the order they appear.</p>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong> statusOutput = "M index.html\nA style.css\nD old_file.js\nM script.js"<br/>
  <strong>Output:</strong> { modified: ["index.html", "script.js"], added: ["style.css"], deleted: ["old_file.js"] }
</div>
</div>`,
    template: `function parseGitStatus(statusOutput) {
  // Write your code here
  
}`,
    testCases: [
      {
        input: [`M index.html
A style.css
D old_file.js
M script.js`],
        expected: { modified: ["index.html", "script.js"], added: ["style.css"], deleted: ["old_file.js"] }
      }
    ],
    solutionApproach: "Split output by lines, trim boundaries, split lines on spaces to isolate the state character and file path, and group files into arrays: modified (state `M`), added (state `A`), and deleted (state `D`).",
    solutionCode: `function parseGitStatus(statusOutput) {
  const result = { modified: [], added: [], deleted: [] };
  if (!statusOutput) return result;
  statusOutput.split('\\n').forEach(line => {
    const clean = line.trim();
    if (!clean) return;
    const spaceIndex = clean.indexOf(' ');
    if (spaceIndex === -1) return;
    const state = clean.substring(0, spaceIndex);
    const file = clean.substring(spaceIndex + 1).trim();
    if (state === 'M') result.modified.push(file);
    else if (state === 'A') result.added.push(file);
    else if (state === 'D') result.deleted.push(file);
  });
  return result;
}`
  },
  {
    id: 9,
    title: "Two Sum: Git Version",
    category: "Algorithmic",
    difficulty: "easy",
    desc: `<div class="problem-desc-rich">
<p>Verify your JavaScript execution runtime. Given an array of integers <code>commitSizes</code> representing the memory size of commits in MB, and a target memory size <code>targetSize</code>, return the indices of the two commits that add up to the target.</p>
<p>Assume exactly one solution exists, and you cannot use the same element twice. Return the indices sorted in ascending order.</p>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong> commitSizes = [2, 7, 11, 15], targetSize = 9<br/>
  <strong>Output:</strong> [0, 1]
</div>
</div>`,
    template: `function twoSum(commitSizes, targetSize) {
  // Write your code here
  
}`,
    testCases: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { input: [[3, 2, 4], 6], expected: [1, 2] }
    ],
    solutionApproach: "Use a hash map to search elements in $O(N)$ runtime. Maintain a map storing values to indices. For each element `commitSizes[i]`, verify if `targetSize - commitSizes[i]` exists in the map.",
    solutionCode: `function twoSum(commitSizes, targetSize) {
  const map = new Map();
  for (let i = 0; i < commitSizes.length; i++) {
    const diff = targetSize - commitSizes[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(commitSizes[i], i);
  }
  return [];
}`
  },
  {
    id: 10,
    title: "Merge Dev Intervals",
    category: "Algorithmic",
    difficulty: "hard",
    desc: `<div class="problem-desc-rich">
<p>Merge overlapping sprint development windows. Given an array of interval pairs <code>intervals</code> where <code>intervals[i] = [start_i, end_i]</code> represent time slots in hours, merge all overlapping intervals.</p>
<p>Return an array of the non-overlapping intervals, sorted in ascending order by their start time.</p>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong> intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]<br/>
  <strong>Output:</strong> [[1, 6], [8, 10], [15, 18]]
</div>
</div>`,
    template: `function mergeIntervals(intervals) {
  // Write your code here
  
}`,
    testCases: [
      { input: [[[1, 3], [2, 6], [8, 10], [15, 18]]], expected: [[1, 6], [8, 10], [15, 18]] },
      { input: [[[1, 4], [4, 5]]], expected: [[1, 5]] }
    ],
    solutionApproach: "1. Sort the intervals by start time.\n2. Iterate through sorting, checking if the current interval overlaps with the last added interval in our results array.\n3. If it overlaps (`current[0] <= last[1]`), merge them by extending `last[1] = max(last[1], current[1])`.\n4. Otherwise, push the interval as non-overlapping.",
    solutionCode: `function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = result[result.length - 1];
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }
  return result;
}`
  },
  {
    id: 11,
    title: "Git Branch Name Matcher",
    category: "Git Advanced",
    difficulty: "easy",
    desc: `<div class="problem-desc-rich">
<p>Implement a glob-like wildcard matcher for branch protection rules. Determine if a branch name matches a search pattern containing wildcard characters (<code>*</code>).</p>
<ul>
  <li><code>*</code> matches any sequence of characters (including an empty sequence).</li>
  <li>All other characters must match exactly.</li>
</ul>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong> branch = "feature/login-screen", pattern = "feature/*"<br/>
  <strong>Output:</strong> true
</div>

<h4>Example 2</h4>
<div class="example-block">
  <strong>Input:</strong> branch = "main", pattern = "feature/*"<br/>
  <strong>Output:</strong> false
</div>
</div>`,
    template: `function matchBranchPattern(branch, pattern) {
  // Write your code here
  
}`,
    testCases: [
      { input: ["feature/login-screen", "feature/*"], expected: true },
      { input: ["main", "feature/*"], expected: false },
      { input: ["release/v1.0.2", "release/v1.*"], expected: true },
      { input: ["hotfix/bug-12", "hotfix/bug-*"], expected: true }
    ],
    solutionApproach: "To match simple globs, convert the glob pattern into a regular expression:\n1. Escape regex special characters except `*`.\n2. Convert `*` to `.*`.\n3. Wrap the regex with `^` and `$` to match the entire string.",
    solutionCode: `function matchBranchPattern(branch, pattern) {
  const regexPattern = "^" + pattern.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, m => m === '*' ? '.*' : '\\\\' + m) + "$";
  const regex = new RegExp(regexPattern);
  return regex.test(branch);
}`
  },
  {
    id: 12,
    title: "Git Squash Commits Simulator",
    category: "Git Advanced",
    difficulty: "medium",
    desc: `<div class="problem-desc-rich">
<p>Simulate a Git Squash operation. You are given an array of commit objects, each containing an <code>author</code>, <code>category</code> (like "feat", "fix"), and <code>message</code>.</p>
<p>Squash consecutive commits from the same author and category into a single commit. The squashed commit should have:</p>
<ul>
  <li>The same author and category.</li>
  <li>The combined messages joined by <code>" & "</code>.</li>
</ul>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong> commits = [<br/>
    &nbsp;&nbsp;{ author: "bob", category: "feat", message: "add login UI" },<br/>
    &nbsp;&nbsp;{ author: "bob", category: "feat", message: "add oauth support" },<br/>
    &nbsp;&nbsp;{ author: "alice", category: "fix", message: "fix crash" }<br/>
  ]<br/>
  <strong>Output:</strong> [<br/>
    &nbsp;&nbsp;{ author: "bob", category: "feat", message: "add login UI & add oauth support" },<br/>
    &nbsp;&nbsp;{ author: "alice", category: "fix", message: "fix crash" }<br/>
  ]
</div>
</div>`,
    template: `function squashCommits(commits) {
  // Write your code here
  
}`,
    testCases: [
      {
        input: [[
          { author: "bob", category: "feat", message: "add login UI" },
          { author: "bob", category: "feat", message: "add oauth support" },
          { author: "alice", category: "fix", message: "fix crash" }
        ]],
        expected: [
          { author: "bob", category: "feat", message: "add login UI & add oauth support" },
          { author: "alice", category: "fix", message: "fix crash" }
        ]
      },
      {
        input: [[
          { author: "bob", category: "feat", message: "first" },
          { author: "alice", category: "feat", message: "second" },
          { author: "bob", category: "feat", message: "third" }
        ]],
        expected: [
          { author: "bob", category: "feat", message: "first" },
          { author: "alice", category: "feat", message: "second" },
          { author: "bob", category: "feat", message: "third" }
        ]
      }
    ],
    solutionApproach: "1. Return the array if empty.\n2. Initialize a result array containing the first commit.\n3. Iterate from the second commit: if the current commit has the same author and category as the last element of the result array, append its message with `\" & \"`.\n4. Otherwise, push a clone of the current commit.",
    solutionCode: `function squashCommits(commits) {
  if (commits.length === 0) return [];
  const result = [JSON.parse(JSON.stringify(commits[0]))];
  for (let i = 1; i < commits.length; i++) {
    const current = commits[i];
    const last = result[result.length - 1];
    if (last.author === current.author && last.category === current.category) {
      last.message += " & " + current.message;
    } else {
      result.push(JSON.parse(JSON.stringify(current)));
    }
  }
  return result;
}`
  },
  {
    id: 13,
    title: "Git Commit Log Filter",
    category: "Git Advanced",
    difficulty: "medium",
    desc: `<div class="problem-desc-rich">
<p>Implement a parser to filter commit logs. Given an array of commit objects <code>commits</code> containing <code>hash</code>, <code>author</code>, and <code>message</code>, filter the logs matching the requirements:</p>
<ul>
  <li>If <code>author</code> is specified (non-empty), match commits written by that author (case-insensitive).</li>
  <li>If <code>query</code> is specified (non-empty), match commits whose message contains the query as a substring (case-insensitive).</li>
</ul>
<p>Return an array of matching commit hashes.</p>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong> commits = [<br/>
    &nbsp;&nbsp;{ hash: "abc12", author: "Bob", message: "feat: add payment gateway" },<br/>
    &nbsp;&nbsp;{ hash: "def34", author: "Alice", message: "fix: fix auth bug" }<br/>
  ], author = "Bob", query = "payment"<br/>
  <strong>Output:</strong> ["abc12"]
</div>
</div>`,
    template: `function filterCommitLogs(commits, author, query) {
  // Write your code here
  
}`,
    testCases: [
      {
        input: [
          [
            { hash: "abc12", author: "Bob", message: "feat: add payment gateway" },
            { hash: "def34", author: "Alice", message: "fix: fix auth bug" },
            { hash: "ghi56", author: "Bob", message: "chore: update readmes" }
          ],
          "bob",
          "readme"
        ],
        expected: ["ghi56"]
      },
      {
        input: [
          [
            { hash: "abc12", author: "Bob", message: "feat: add payment gateway" },
            { hash: "def34", author: "Alice", message: "fix: fix auth bug" }
          ],
          "",
          "auth"
        ],
        expected: ["def34"]
      }
    ],
    solutionApproach: "Iterate through commits, matching rules:\n1. Check if commit.author matches author parameter (if author is non-empty) case-insensitively.\n2. Check if commit.message contains query parameter (if query is non-empty) case-insensitively.\n3. Return the mapped list of matched commit hashes.",
    solutionCode: `function filterCommitLogs(commits, author, query) {
  return commits
    .filter(c => {
      const matchAuthor = !author || c.author.toLowerCase() === author.toLowerCase();
      const matchQuery = !query || c.message.toLowerCase().includes(query.toLowerCase());
      return matchAuthor && matchQuery;
    })
    .map(c => c.hash);
}`
  },
  {
    id: 14,
    title: "Git Squash Log Analyzer",
    category: "Git Advanced",
    difficulty: "medium",
    desc: `<div class="problem-desc-rich">
<p>Implement a parser to analyze a git squash merge commit message. When merging a branch using squash, Git aggregates the individual commit messages into a single message starting with <code>Squash commit of branch '&lt;branch-name&gt;'</code>, followed by the commit messages prefixed with a hyphen (<code>- </code>).</p>
<p>Write a function <code>parseSquashMergeMessage(message)</code> that parses this string and returns an object containing:</p>
<ul>
  <li><code>branch</code>: The name of the squash-merged branch (e.g. <code>feature/auth</code>).</li>
  <li><code>commitsCount</code>: The number of commit messages inside the body.</li>
  <li><code>prs</code>: An array of numbers representing any Pull Request ID numbers extracted from the commits (formatted as <code>(#ID)</code> at the end of a commit line, e.g. <code>(#102)</code>).</li>
</ul>
<p>If the message is empty or does not start with the standard <code>Squash commit of branch '&lt;branch-name&gt;'</code> line, return <code>null</code>.</p>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong> message = "Squash commit of branch 'feature/auth'\\n\\n- Implement login flow (#12)\\n- Add Google SSO integration (#13)\\n- Resolve routing bugs (#14)"<br/>
  <strong>Output:</strong> { branch: "feature/auth", commitsCount: 3, prs: [12, 13, 14] }
</div>

<h4>Example 2</h4>
<div class="example-block">
  <strong>Input:</strong> message = "Merge branch 'main' into dev"<br/>
  <strong>Output:</strong> null
</div>

<h4>Constraints</h4>
<ul class="constraint-list">
  <li>The message string can be up to 1000 characters long.</li>
</ul>
</div>`,
    template: `function parseSquashMergeMessage(message) {
  // Write your code here
  
}`,
    testCases: [
      {
        input: ["Squash commit of branch 'feature/auth'\n\n- Implement login flow (#12)\n- Add Google SSO integration (#13)\n- Resolve routing bugs (#14)"],
        expected: { branch: "feature/auth", commitsCount: 3, prs: [12, 13, 14] }
      },
      {
        input: ["Squash commit of branch 'bugfix/routing'\n\n- Fix navbar issues (#45)"],
        expected: { branch: "bugfix/routing", commitsCount: 1, prs: [45] }
      },
      {
        input: ["Squash commit of branch 'main'"],
        expected: { branch: "main", commitsCount: 0, prs: [] }
      },
      {
        input: ["Merge branch 'main' into dev"],
        expected: null
      }
    ],
    solutionApproach: "1. Split the message into lines, trim each line, and remove empty lines.\n2. Verify the first line starts with 'Squash commit of branch ' and matches the expected regex /\\^Squash commit of branch '([^']+)'$/.\n3. Extract the branch name from the first match group.\n4. Loop through the subsequent lines and check if they start with '- '.\n5. If a line matches, increment commitsCount, and check if it ends with a PR match like /\\(#(\\d+)\\)$/. Extract and parse the PR number to integer.\n6. Return the resulting object.",
    solutionCode: `function parseSquashMergeMessage(message) {
  const lines = message.split('\\n').map(l => l.trim()).filter(l => l.length > 0);
  if (lines.length === 0) return null;
  const headerMatch = lines[0].match(/^Squash commit of branch '([^']+)'$/);
  if (!headerMatch) return null;
  const branchName = headerMatch[1];
  let commitsCount = 0;
  const prs = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('- ')) {
      commitsCount++;
      const prMatch = line.match(/\\(#(\\d+)\\)$/);
      if (prMatch) {
        prs.push(parseInt(prMatch[1], 10));
      }
    }
  }
  return {
    branch: branchName,
    commitsCount: commitsCount,
    prs: prs
  };
}`
  }
  },
  {
    id: 15,
    title: "Git Revert Message Parser",
    category: "Git Basics",
    difficulty: "easy",
    desc: `<div class="problem-desc-rich">
<p>When you revert a commit in Git, the default commit message starts with <code>Revert "original commit subject"</code>. If the reverted commit was a Pull Request merge, it might also have a PR reference at the end of the subject line (e.g. <code>(#42)</code>).</p>
<p>Write a function <code>parseRevertMessage(message)</code> that parses a revert commit message and returns an object with details. If it is NOT a revert commit message, return <code>null</code>.</p>
<p>Returned object structure:</p>
<ul>
  <li><code>isRevert</code>: <code>true</code></li>
  <li><code>originalSubject</code>: The subject of the reverted commit.</li>
  <li><code>prId</code>: The numerical PR ID if present at the end of the subject, otherwise <code>null</code>.</li>
</ul>

<h4>Example 1</h4>
<div class="example-block">
  <strong>Input:</strong> message = 'Revert "feat: add payment gateway (#102)"'<br/>
  <strong>Output:</strong> { isRevert: true, originalSubject: "feat: add payment gateway (#102)", prId: 102 }
</div>

<h4>Example 2</h4>
<div class="example-block">
  <strong>Input:</strong> message = 'fix: routing issues'<br/>
  <strong>Output:</strong> null
</div>
</div>`,
    template: `function parseRevertMessage(message) {
  // Write your code here
  
}`,
    testCases: [
      {
        input: ['Revert "feat: add payment gateway (#102)"'],
        expected: { isRevert: true, originalSubject: "feat: add payment gateway (#102)", prId: 102 }
      },
      {
        input: ['Revert "fix: homepage layout error"'],
        expected: { isRevert: true, originalSubject: "fix: homepage layout error", prId: null }
      },
      {
        input: ['initial commit'],
        expected: null
      }
    ],
    solutionApproach: "1. Check if the message starts with 'Revert \"' and ends with '\"'.\n2. Extract the inner content between the double quotes.\n3. Search for PR ID pattern like `(#123)` at the end of that inner content.\n4. Return the parsed fields.",
    solutionCode: `function parseRevertMessage(message) {
  const match = message.match(/^Revert "(.+)"$/);
  if (!match) return null;
  const originalSubject = match[1];
  const prMatch = originalSubject.match(/\\(#(\\d+)\\)$/);
  return {
    isRevert: true,
    originalSubject: originalSubject,
    prId: prMatch ? parseInt(prMatch[1], 10) : null
  };
}`
  }
];

// ─────────────────────────────────────────────
// RENDER FUNCTIONS
// ─────────────────────────────────────────────

function renderConcepts(tab = 'all', filterQuery = '') {
  const grid = document.getElementById('concepts-grid');
  if (!grid) return;
  let concepts = conceptsData;

  // Filter by category tab
  if (tab !== 'all') {
    concepts = concepts.filter(c => c.category === tab);
  }

  // Filter by search query
  if (filterQuery) {
    const query = filterQuery.toLowerCase().trim();
    concepts = concepts.filter(c => 
      c.title.toLowerCase().includes(query) || 
      c.desc.toLowerCase().includes(query) || 
      (c.analogy && c.analogy.toLowerCase().includes(query)) ||
      c.example.toLowerCase().includes(query)
    );
  }

  if (concepts.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--clr-text-muted);">
        🔍 No basic concepts found matching "${escapeHtml(filterQuery)}"
      </div>
    `;
    return;
  }

  grid.innerHTML = concepts.map(c => {
    let titleDisplay = escapeHtml(c.title);
    let descDisplay = escapeHtml(c.desc);
    let exampleDisplay = escapeHtml(c.example);

    if (filterQuery) {
      const regex = new RegExp(`(${escapeHtml(filterQuery)})`, 'gi');
      titleDisplay = titleDisplay.replace(regex, '<mark class="search-highlight">$1</mark>');
      descDisplay = descDisplay.replace(regex, '<mark class="search-highlight">$1</mark>');
      exampleDisplay = exampleDisplay.replace(regex, '<mark class="search-highlight">$1</mark>');
    }

    return `
      <div class="concept-card" data-concept-title="${escapeHtml(c.title)}" role="button" tabindex="0">
        <span class="card-icon">${escapeHtml(c.icon)}</span>
        <div class="card-title">${titleDisplay}</div>
        <div class="card-desc">${descDisplay}</div>
        <div class="card-example">${exampleDisplay}</div>
        <div class="card-action-hint">Click to learn more & practice ➔</div>
      </div>
    `;
  }).join('');
}

function setupBasicsFilter() {
  const searchInput = document.getElementById('basics-search');
  const clearBtn = document.getElementById('basics-clear-search-btn');
  const tabBtns = document.querySelectorAll('.basics-tab-btn');

  let activeTab = 'all';
  let searchQuery = '';

  if (!searchInput) return;

  function updateBasicsUI() {
    renderConcepts(activeTab, searchQuery);
    if (clearBtn) {
      clearBtn.style.display = searchQuery ? 'flex' : 'none';
    }
  }

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    updateBasicsUI();
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      updateBasicsUI();
      searchInput.focus();
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.dataset.basicsTab || 'all';
      updateBasicsUI();
    });
  });
}

function renderConceptDetail(concept) {
  const body = document.getElementById('basics-modal-body');
  if (!body) return;

  const categoryLabel = concept.category === 'local' ? 'Local Core 💻' : 'Remote & Collaboration ☁️';
  const categoryClass = concept.category === 'local' ? 'cat-local' : 'cat-remote';

  body.innerHTML = `
    <div class="basics-modal-header">
      <div style="display: flex; align-items: center; gap: 14px;">
        <span class="basics-modal-icon">${escapeHtml(concept.icon)}</span>
        <div>
          <h2 class="basics-modal-title">${escapeHtml(concept.title)}</h2>
          <span class="basics-modal-badge ${categoryClass}">${categoryLabel}</span>
        </div>
      </div>
    </div>
    
    <div class="basics-modal-scroll-content">
      <div class="basics-modal-section desc-section">
        <h4 class="section-subtitle">What is it?</h4>
        <p class="basics-modal-desc">${escapeHtml(concept.desc)}</p>
      </div>

      <div class="basics-modal-section analogy-section">
        <h4 class="section-subtitle">💡 Real-World Analogy</h4>
        <div class="analogy-card">
          <p>${escapeHtml(concept.analogy || 'No analogy available.')}</p>
        </div>
      </div>

      <div class="basics-modal-section example-section">
        <h4 class="section-subtitle">💻 Command Example</h4>
        <div class="basics-modal-code-wrapper">
          <code class="basics-modal-code">${escapeHtml(concept.example)}</code>
          <button class="basics-copy-code-btn btn btn-sm btn-outline" data-code="${escapeHtml(concept.example)}">Copy 📋</button>
        </div>
      </div>

      <!-- Sandbox section placeholder (Commit 7) -->
      <div id="basics-modal-sandbox-placeholder"></div>

      <!-- Checkpoint section placeholder (Commit 8) -->
      <div id="basics-modal-checkpoint-placeholder"></div>
    </div>
  `;

  // Attach copy button handler inside modal
  const copyBtn = body.querySelector('.basics-copy-code-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = copyBtn.dataset.code;
      navigator.clipboard.writeText(code).then(() => {
        copyBtn.textContent = 'Copied! ✓';
        copyBtn.style.borderColor = 'var(--clr-accent-3)';
        copyBtn.style.color = 'var(--clr-accent-3)';
        setTimeout(() => {
          copyBtn.textContent = 'Copy 📋';
          copyBtn.style.borderColor = '';
          copyBtn.style.color = '';
        }, 1500);
      });
    });
  }

  // Populate Sandbox Action Section
  const sandboxPlaceholder = body.querySelector('#basics-modal-sandbox-placeholder');
  if (sandboxPlaceholder) {
    let toolTarget = 'visualizer';
    let actionTarget = '';
    let btnText = 'Try in Sandbox Visualizer 🎨';
    let btnClass = 'btn-primary';

    if (concept.title === 'Repository (Repo)') {
      toolTarget = 'generator';
      actionTarget = 'init';
      btnText = 'Open Command Generator ⚙️';
      btnClass = 'btn-outline';
    } else if (concept.title === 'Remote (Origin)') {
      toolTarget = 'generator';
      actionTarget = 'remote-add';
      btnText = 'Open Command Generator ⚙️';
      btnClass = 'btn-outline';
    } else if (concept.title === 'Pull & Push') {
      toolTarget = 'generator';
      actionTarget = 'push';
      btnText = 'Open Command Generator ⚙️';
      btnClass = 'btn-outline';
    } else if (concept.title === 'Fetch') {
      toolTarget = 'generator';
      actionTarget = 'pull';
      btnText = 'Open Command Generator ⚙️';
      btnClass = 'btn-outline';
    } else if (concept.title === 'Pull Request (PR)') {
      toolTarget = 'generator';
      actionTarget = 'remote-add';
      btnText = 'Open Command Generator ⚙️';
      btnClass = 'btn-outline';
    }

    sandboxPlaceholder.innerHTML = `
      <div class="basics-modal-section sandbox-section">
        <h4 class="section-subtitle">Hands-on Practice</h4>
        <button class="basics-sandbox-btn btn ${btnClass}" style="width: 100%; justify-content: center;" data-tool="${toolTarget}" data-action="${actionTarget}">
          ${btnText}
        </button>
      </div>
    `;

    const sandboxBtn = sandboxPlaceholder.querySelector('.basics-sandbox-btn');
    if (sandboxBtn) {
      sandboxBtn.addEventListener('click', () => {
        handleSandboxRedirect(sandboxBtn.dataset.tool, sandboxBtn.dataset.action);
      });
    }
  }

  // Populate Checkpoint Quiz Section
  const checkpointPlaceholder = body.querySelector('#basics-modal-checkpoint-placeholder');
  if (checkpointPlaceholder && concept.checkpoint) {
    const cp = concept.checkpoint;
    checkpointPlaceholder.innerHTML = `
      <div class="basics-modal-section checkpoint-section" style="border-top: 1px solid var(--clr-border); padding-top: 24px; margin-top: 8px;">
        <h4 class="section-subtitle">🎯 Quick Check-in</h4>
        <p class="basics-cp-question" style="font-weight: 600; font-size: 0.95rem; margin-bottom: 12px; color: #fff;">${escapeHtml(cp.q)}</p>
        <div class="basics-cp-options" style="display: flex; flex-direction: column; gap: 8px;">
          ${cp.options.map((opt, idx) => `
            <button class="basics-cp-option-btn" data-index="${idx}">${escapeHtml(opt)}</button>
          `).join('')}
        </div>
        <div class="basics-cp-feedback" style="display: none; margin-top: 12px; padding: 12px; border-radius: var(--radius-sm); font-size: 0.88rem; line-height: 1.5;"></div>
      </div>
    `;

    const optionBtns = checkpointPlaceholder.querySelectorAll('.basics-cp-option-btn');
    const feedbackDiv = checkpointPlaceholder.querySelector('.basics-cp-feedback');

    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedIdx = parseInt(btn.dataset.index, 10);
        
        optionBtns.forEach(b => {
          b.disabled = true;
          const idx = parseInt(b.dataset.index, 10);
          if (idx === cp.answer) {
            b.classList.add('correct');
          } else if (idx === selectedIdx) {
            b.classList.add('wrong');
          }
        });

        feedbackDiv.style.display = 'block';
        if (selectedIdx === cp.answer) {
          feedbackDiv.className = 'basics-cp-feedback correct-feedback';
          feedbackDiv.innerHTML = `<strong>🎉 Correct!</strong> ${escapeHtml(cp.explanation)}`;
          feedbackDiv.classList.add('arena-success-animate');
        } else {
          feedbackDiv.className = 'basics-cp-feedback wrong-feedback';
          feedbackDiv.innerHTML = `<strong>❌ Incorrect.</strong> ${escapeHtml(cp.explanation)}`;
          feedbackDiv.classList.add('arena-shake');
        }
      });
    });
  }
}

function handleSandboxRedirect(tool, action = '') {
  // Close modal
  const modal = document.getElementById('basics-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (tool === 'generator') {
    const generatorSection = document.getElementById('generator');
    if (generatorSection) {
      generatorSection.scrollIntoView({ behavior: 'smooth' });
      const actionSelect = document.getElementById('generator-action');
      if (actionSelect && action) {
        actionSelect.value = action;
        actionSelect.dispatchEvent(new Event('change'));
      }
    }
  } else if (tool === 'visualizer') {
    const visualizerSection = document.getElementById('visualizer');
    if (visualizerSection) {
      visualizerSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function setupBasicsModal() {
  const grid = document.getElementById('concepts-grid');
  const modal = document.getElementById('basics-modal');
  const closeBtn = document.getElementById('close-basics-modal-btn');
  const overlay = document.getElementById('basics-modal-overlay');

  if (!grid || !modal) return;
  let lastFocusedElement = null;

  function openModal(title) {
    const concept = conceptsData.find(c => c.title === title);
    if (!concept) return;

    lastFocusedElement = document.activeElement;
    renderConceptDetail(concept);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Shift focus to close button for keyboard navigation accessibility
    setTimeout(() => {
      if (closeBtn) closeBtn.focus();
    }, 50);
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Restore focus
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.concept-card');
    if (card) {
      const title = card.dataset.conceptTitle;
      openModal(title);
    }
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.concept-card');
      if (card) {
        e.preventDefault();
        const title = card.dataset.conceptTitle;
        openModal(title);
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  // Close on Escape keypress
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function renderCommands(tab = 'setup', filterQuery = '') {
  const grid = document.getElementById('commands-grid');
  let cmds = commandsData[tab] || [];

  if (filterQuery) {
    const query = filterQuery.toLowerCase();
    cmds = cmds.filter(c => c.cmd.toLowerCase().includes(query) || c.desc.toLowerCase().includes(query));
  }

  if (cmds.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--clr-text-muted);">
        🔍 No commands found matching "${escapeHtml(filterQuery)}"
      </div>
    `;
    return;
  }

  grid.innerHTML = cmds.map(c => {
    let cmdDisplay = escapeHtml(c.cmd);
    let descDisplay = escapeHtml(c.desc);

    if (filterQuery) {
      const regex = new RegExp(`(${escapeHtml(filterQuery)})`, 'gi');
      cmdDisplay = cmdDisplay.replace(regex, '<mark class="search-highlight">$1</mark>');
      descDisplay = descDisplay.replace(regex, '<mark class="search-highlight">$1</mark>');
    }

    return `
      <div class="cmd-card" onclick="copyCommand(this, '${c.cmd.replace(/'/g, "\\'")}')" title="Click to copy">
        <div class="cmd-command">${cmdDisplay}</div>
        <div class="cmd-desc">${descDisplay}</div>
        <span class="copy-hint">📋 Click to copy</span>
      </div>
    `;
  }).join('');
}

function renderWorkflow() {
  const container = document.getElementById('workflow-diagram');
  container.innerHTML = workflowSteps.map(step => {
    if (step.arrow) {
      return `
        <div class="workflow-arrow">
          <span class="arrow-cmd">${step.cmd}</span>
          <span class="arrow-line">→</span>
        </div>`;
    }
    return `
      <div class="workflow-step">
        <div class="workflow-box ${step.cls}">
          <div class="workflow-icon">${step.icon}</div>
          <div class="workflow-name">${step.name}</div>
          <div class="workflow-subtitle">${step.subtitle}</div>
        </div>
      </div>`;
  }).join('');
}

function renderCheatsheet() {
  const grid = document.getElementById('cheatsheet-grid');
  grid.innerHTML = cheatsheetData.map(group => `
    <div class="cheat-group">
      <div class="cheat-group-title">${group.title}</div>
      ${group.rows.map(row => `
        <div class="cheat-row" onclick="copyCommand(this, '${row.cmd.replace(/'/g, "\\'")}')" title="Click to copy command">
          <span class="cheat-cmd" data-orig="${escapeHtml(row.cmd)}">${escapeHtml(row.cmd)}</span>
          <span class="cheat-label" data-orig="${escapeHtml(row.label)}">${escapeHtml(row.label)}</span>
        </div>
      `).join('')}
    </div>
  `).join('');
}


// ─────────────────────────────────────────────
// QUIZ ENGINE
// ─────────────────────────────────────────────

let quizState = { current: 0, score: 0, answered: false, selectedAnswer: undefined };

function saveQuizState() {
  localStorage.setItem('quiz-state', JSON.stringify(quizState));
}

function loadQuizState() {
  const saved = localStorage.getItem('quiz-state');
  if (saved) {
    try {
      quizState = JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse quiz state', e);
    }
  }
}

function clearQuizState() {
  localStorage.removeItem('quiz-state');
}

function renderQuiz() {
  const container = document.getElementById('quiz-container');

  // Try to load saved state on first render
  if (quizState.current === 0 && quizState.score === 0 && !quizState.answered) {
    loadQuizState();
  }

  const { current } = quizState;

  if (current >= quizData.length) {
    renderQuizResult(container);
    return;
  }

  const q = quizData[current];
  const pct = Math.round((current / quizData.length) * 100);
  const highScore = localStorage.getItem('quiz-highscore') || 0;

  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-progress">
        <div class="quiz-bar"><div class="quiz-bar-fill" style="width:${pct}%"></div></div>
        <span class="quiz-counter">Q: ${current + 1} / ${quizData.length} | 🏆 Best: ${highScore}</span>
      </div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options" id="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" id="quiz-opt-${i}" onclick="selectAnswer(${i})">${opt}</button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
      <button class="quiz-next" id="quiz-next" onclick="nextQuestion()">
        ${current + 1 < quizData.length ? 'Next Question →' : 'See Results 🎉'}
      </button>
    </div>
  `;

  // If already answered (loaded from localStorage), restore visual state
  if (quizState.answered) {
    const nextBtn = document.getElementById('quiz-next');
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quiz-feedback');
    
    options.forEach(btn => btn.disabled = true);
    options[q.answer].classList.add('correct');
    
    const index = quizState.selectedAnswer;
    if (index === q.answer) {
      feedback.textContent = q.explanation;
      feedback.className = 'quiz-feedback show correct-fb';
    } else if (index !== undefined) {
      if (options[index]) options[index].classList.add('wrong');
      feedback.textContent = '❌ Not quite. ' + q.explanation.replace('✅ ', '');
      feedback.className = 'quiz-feedback show wrong-fb';
    }
    if (nextBtn) nextBtn.classList.add('show');
  }
}

function selectAnswer(index) {
  if (quizState.answered) return;
  quizState.answered = true;
  quizState.selectedAnswer = index;

  const q = quizData[quizState.current];
  const options = document.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quiz-feedback');
  const nextBtn = document.getElementById('quiz-next');

  options.forEach(btn => btn.disabled = true);
  options[q.answer].classList.add('correct');

  if (index === q.answer) {
    quizState.score++;
    feedback.textContent = q.explanation;
    feedback.className = 'quiz-feedback show correct-fb';
  } else {
    options[index].classList.add('wrong');
    feedback.textContent = '❌ Not quite. ' + q.explanation.replace('✅ ', '');
    feedback.className = 'quiz-feedback show wrong-fb';
  }

  nextBtn.classList.add('show');
  saveQuizState();
}

function nextQuestion() {
  quizState.current++;
  quizState.answered = false;
  quizState.selectedAnswer = undefined;
  saveQuizState();
  renderQuiz();
}

function renderQuizResult(container) {
  clearQuizState();
  const { score } = quizState;
  const total = quizData.length;
  const pct = Math.round((score / total) * 100);
  
  let oldHighScore = parseInt(localStorage.getItem('quiz-highscore') || '0', 10);
  let isNewHighScore = false;
  
  if (score > oldHighScore) {
    localStorage.setItem('quiz-highscore', score);
    isNewHighScore = true;
  }
  
  const highScore = localStorage.getItem('quiz-highscore') || score;
  
  let emoji, msg;
  if (isNewHighScore) {
    emoji = '👑';
    msg = `New Personal Best! You got ${score} out of ${total}!`;
  } else if (pct === 100) { emoji = '🏆'; msg = "Perfect score! You're a Git master!"; }
  else if (pct >= 80) { emoji = '🎉'; msg = "Great job! You know your Git well!"; }
  else if (pct >= 60) { emoji = '👍'; msg = "Good effort! Keep practicing!"; }
  else { emoji = '📚'; msg = "Keep learning — you'll get there!"; }

  let certificateClaimBox = '';
  if (score >= 8) {
    const savedName = localStorage.getItem('cert-name') || '';
    certificateClaimBox = `
      <div class="result-certificate-claim" style="margin-top: 24px; padding: 20px; border: 1px dashed var(--clr-accent); border-radius: var(--radius-md); background: rgba(88, 166, 255, 0.05);">
        <div style="font-size: 1.15rem; font-weight: 700; margin-bottom: 8px;">🎓 Claim Your Assessment Certificate</div>
        <p style="font-size: 0.85rem; color: var(--clr-text-muted); margin-bottom: 12px;">You passed the test! Enter your name below to generate your personalized Certificate of Completion.</p>
        <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; max-width: 400px; margin: 0 auto;">
          <input type="text" id="cert-name-input" class="form-input" style="flex: 1; min-width: 200px; padding: 8px 12px; font-size: 0.9rem;" placeholder="Enter your full name" value="${escapeHtml(savedName)}" />
          <button class="btn btn-primary btn-sm" onclick="generateCertificate(${score}, ${total})">Get Certificate 📜</button>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-result">
        <div style="font-size:3rem;">${emoji}</div>
        <div class="result-score" style="background:var(--gradient-main);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; margin: 8px 0;">
          ${score}/${total}
        </div>
        <div class="result-msg">${msg}</div>
        <div class="result-highscore" style="font-size: 0.95rem; color: var(--clr-text-muted); margin-bottom: 16px;">
          🏆 Personal Best: ${highScore} / ${total}
          ${highScore > 0 ? `<button class="btn btn-sm btn-outline" style="margin-left:12px; padding: 4px 10px; font-size:0.75rem; vertical-align: middle;" onclick="confirmResetHighScore()">Reset 🔄</button>` : ''}
        </div>
        <button class="btn btn-primary" onclick="restartQuiz()">Try Again 🔄</button>
        ${certificateClaimBox}
      </div>
    </div>
  `;
}

function confirmResetHighScore() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  const btnContainer = container.querySelector('.result-highscore');
  if (!btnContainer) return;

  const savedScore = quizState.score;
  const savedTotal = quizData.length;

  btnContainer.innerHTML = `
    <div style="margin-top: 12px; padding: 14px; border: 1px dashed var(--clr-accent-warm); border-radius: var(--radius-md); background: rgba(207, 34, 46, 0.05); display: inline-block; text-align: center;">
      <span style="font-size: 0.85rem; display: block; margin-bottom: 10px; color: var(--clr-text); font-weight: 500;">Are you sure you want to reset your high score?</span>
      <div style="display: flex; gap: 8px; justify-content: center;">
        <button class="btn btn-sm" style="background: var(--clr-accent-warm); color: #fff; padding: 6px 12px; font-size: 0.75rem; border: none;" onclick="executeResetHighScore()">Yes, Reset 🔄</button>
        <button class="btn btn-sm btn-outline" style="padding: 6px 12px; font-size: 0.75rem; border-color: var(--clr-border);" onclick="cancelResetHighScore()">Cancel</button>
      </div>
    </div>
  `;
}

function executeResetHighScore() {
  localStorage.removeItem('quiz-highscore');
  showToast('High score reset! 🔄');
  const container = document.getElementById('quiz-container');
  renderQuizResult(container);
}

function cancelResetHighScore() {
  const container = document.getElementById('quiz-container');
  renderQuizResult(container);
}

function restartQuiz() {
  quizState = { current: 0, score: 0, answered: false, selectedAnswer: undefined };
  clearQuizState();
  renderQuiz();
}


// ─────────────────────────────────────────────
// UTILITY FUNCTIONS
// ─────────────────────────────────────────────

function copyCommand(card, cmd) {
  navigator.clipboard.writeText(cmd).then(() => {
    card.classList.add('copied');
    showToast('Copied to clipboard! 📋');
    setTimeout(() => card.classList.remove('copied'), 1500);
  }).catch(() => {
    showToast('Copy failed — try manually.');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────

function setupNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementById('nav-links');
  const menuToggle = document.getElementById('menu-toggle');

  // Mobile menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      menuToggle.querySelector('.menu-toggle-icon').textContent = isExpanded ? '✕' : '☰';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && e.target !== menuToggle) {
        navLinks.classList.remove('active');
        menuToggle.querySelector('.menu-toggle-icon').textContent = '☰';
      }
    });
  }

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY || window.pageYOffset;
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollPos > 50);
    }
  });

  const logo = document.getElementById('nav-logo');
  const btnDashboard = document.getElementById('nav-btn-dashboard');
  const btnWorkspace = document.getElementById('nav-btn-workspace');

  function showDashboardView() {
    if (arenaState.activeProblem) {
      const editor = document.getElementById('arena-code-editor');
      if (editor) {
        arenaState.drafts[arenaState.activeProblem.id] = editor.value;
        localStorage.setItem('arena-drafts', JSON.stringify(arenaState.drafts));
      }
    }
    arenaState.activeProblem = null;
    document.getElementById('arena-workspace').style.display = 'none';
    document.getElementById('arena-dashboard').style.display = 'block';
    if (btnDashboard) btnDashboard.classList.add('active');
    if (btnWorkspace) btnWorkspace.classList.remove('active');
    renderArenaDashboard();
  }

  function showWorkspaceView() {
    if (!arenaState.activeProblem) {
      // Load the first problem or last solved if available
      const lastSolved = arenaState.solved[0] || (arenaProblemsData && arenaProblemsData.length > 0 ? arenaProblemsData[0].id : 1);
      loadProblem(lastSolved);
    } else {
      document.getElementById('arena-dashboard').style.display = 'none';
      document.getElementById('arena-workspace').style.display = 'block';
    }
    if (btnDashboard) btnDashboard.classList.remove('active');
    if (btnWorkspace) btnWorkspace.classList.add('active');
  }

  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      showDashboardView();
    });
  }
  if (btnDashboard) {
    btnDashboard.addEventListener('click', (e) => {
      e.preventDefault();
      showDashboardView();
    });
  }
  if (btnWorkspace) {
    btnWorkspace.addEventListener('click', (e) => {
      e.preventDefault();
      showWorkspaceView();
    });
  }
}

function setupCommandTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const searchInput = document.getElementById('commands-search');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      if (searchInput) searchInput.value = '';
      renderCommands(btn.dataset.tab);
      filterCheatsheet('');
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById('commands-search');
  const clearBtn = document.getElementById('clear-search-btn');
  if (!searchInput) return;

  function updateSearchUI(query) {
    const activeTabBtn = document.querySelector('.tab-btn.active');
    const activeTab = activeTabBtn ? activeTabBtn.dataset.tab : 'setup';
    renderCommands(activeTab, query);
    filterCheatsheet(query);
    if (clearBtn) {
      clearBtn.style.display = query ? 'flex' : 'none';
    }
  }

  searchInput.addEventListener('input', (e) => {
    updateSearchUI(e.target.value);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      updateSearchUI('');
      searchInput.focus();
    });
  }
}

function filterCheatsheet(query) {
  const cleanQuery = query.toLowerCase().trim();
  const cheatGroups = document.querySelectorAll('.cheat-group');

  cheatGroups.forEach(group => {
    const rows = group.querySelectorAll('.cheat-row');
    let visibleRows = 0;

    rows.forEach(row => {
      const cmdSpan = row.querySelector('.cheat-cmd');
      const labelSpan = row.querySelector('.cheat-label');
      
      const origCmd = cmdSpan ? cmdSpan.dataset.orig : '';
      const origLabel = labelSpan ? labelSpan.dataset.orig : '';

      const cmdText = origCmd.toLowerCase();
      const labelText = origLabel.toLowerCase();

      if (cmdText.includes(cleanQuery) || labelText.includes(cleanQuery)) {
        row.style.display = '';
        visibleRows++;

        if (cleanQuery) {
          // Escape regex characters in cleanQuery before creating RegExp
          const escapedCleanQuery = escapeHtml(cleanQuery).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          const regex = new RegExp(`(${escapedCleanQuery})`, 'gi');
          
          if (cmdSpan) {
            cmdSpan.innerHTML = escapeHtml(origCmd).replace(regex, '<mark class="search-highlight">$1</mark>');
          }
          if (labelSpan) {
            labelSpan.innerHTML = escapeHtml(origLabel).replace(regex, '<mark class="search-highlight">$1</mark>');
          }
        } else {
          if (cmdSpan) cmdSpan.textContent = origCmd;
          if (labelSpan) labelSpan.textContent = origLabel;
        }
      } else {
        row.style.display = 'none';
      }
    });

    if (visibleRows > 0 || cleanQuery === '') {
      group.style.display = '';
    } else {
      group.style.display = 'none';
    }
  });
}

// ─────────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────────

function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.5s ease both';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.concept-card, .cmd-card, .cheat-group, .workflow-step').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// ─────────────────────────────────────────────
// COMMAND GENERATOR DATA
// ─────────────────────────────────────────────

const generatorActions = {
  init: {
    command: () => 'git init',
    explanation: 'This initializes a new local Git repository in your current working directory, creating a hidden <code>.git</code> folder.',
    params: []
  },
  clone: {
    command: (params) => `git clone ${params.url || 'https://github.com/username/repo.git'}`,
    explanation: 'This downloads a complete copy of an existing remote repository from the specified URL to your local machine.',
    params: [
      { id: 'url', label: 'Repository URL', type: 'text', placeholder: 'https://github.com/username/repo.git' }
    ]
  },
  commit: {
    command: (params) => {
      const msg = params.message ? params.message.replace(/'/g, "'\\''") : 'Initial commit';
      return `git add .\ngit commit -m '${msg}'`;
    },
    explanation: 'This stages all current changes in the directory (<code>git add .</code>) and commits them (<code>git commit</code>) with a descriptive message to your local version history.',
    params: [
      { id: 'message', label: 'Commit Message', type: 'text', placeholder: 'Add new awesome feature' }
    ]
  },
  branch: {
    command: (params) => {
      const name = params.name || 'feature-branch';
      if (params.actionType === 'create-switch') {
        return `git checkout -b ${name}`;
      } else if (params.actionType === 'switch') {
        return `git checkout ${name}`;
      } else {
        return `git branch -d ${name}`;
      }
    },
    explanation: 'Branches let you work on a new feature isolated from the main code. You can switch to a branch, create a branch and switch immediately, or delete a branch when finished.',
    params: [
      {
        id: 'actionType',
        label: 'Action',
        type: 'select',
        options: [
          { value: 'create-switch', label: 'Create new branch and switch to it' },
          { value: 'switch', label: 'Switch to an existing branch' },
          { value: 'delete', label: 'Delete a branch locally' }
        ]
      },
      { id: 'name', label: 'Branch Name', type: 'text', placeholder: 'feature/login-system' }
    ]
  },
  'remote-add': {
    command: (params) => `git remote add origin ${params.url || 'https://github.com/username/repo.git'}`,
    explanation: 'This establishes a remote connection between your local repository and a server (like GitHub) under the shortcut name "origin".',
    params: [
      { id: 'url', label: 'GitHub Repository URL', type: 'text', placeholder: 'https://github.com/username/repo.git' }
    ]
  },
  push: {
    command: (params) => {
      const branch = params.branch || 'main';
      const isUpstream = params.upstream === 'true';
      return isUpstream ? `git push -u origin ${branch}` : `git push origin ${branch}`;
    },
    explanation: 'This uploads your local commits to the remote repository on GitHub so others can access them.',
    params: [
      { id: 'branch', label: 'Local Branch Name', type: 'text', placeholder: 'main' },
      {
        id: 'upstream',
        label: 'Set Upstream (-u)?',
        type: 'select',
        options: [
          { value: 'true', label: 'Yes, set upstream tracking (for the first push)' },
          { value: 'false', label: 'No (for subsequent pushes)' }
        ]
      }
    ]
  },
  pull: {
    command: (params) => `git pull origin ${params.branch || 'main'}`,
    explanation: 'This downloads the latest updates from the remote GitHub branch and merges them directly into your current local branch.',
    params: [
      { id: 'branch', label: 'Remote Branch Name', type: 'text', placeholder: 'main' }
    ]
  },
  undo: {
    command: (params) => {
      if (params.undoType === 'unstaged') {
        return `git restore ${params.file || 'index.html'}`;
      } else if (params.undoType === 'staged') {
        return `git restore --staged ${params.file || 'index.html'}`;
      } else if (params.undoType === 'commit-keep') {
        return 'git reset HEAD~1';
      } else {
        return `git revert ${params.hash || 'abc1234'}`;
      }
    },
    explanation: 'Git offers multiple ways to undo changes. You can restore working files, unstage files, undo your last commit (keeping your changes), or safely revert a past commit by creating a new opposing commit.',
    params: [
      {
        id: 'undoType',
        label: 'What do you want to undo?',
        type: 'select',
        options: [
          { value: 'unstaged', label: 'Discard unstaged changes in a file' },
          { value: 'staged', label: 'Unstage a staged file (undo git add)' },
          { value: 'commit-keep', label: 'Undo the last commit (keep the changes in workspace)' },
          { value: 'revert', label: 'Revert a past commit (by hash)' }
        ]
      },
      { id: 'file', label: 'File name (if restoring/unstaging)', type: 'text', placeholder: 'index.html', dependsOn: { param: 'undoType', values: ['unstaged', 'staged'] } },
      { id: 'hash', label: 'Commit Hash (if reverting)', type: 'text', placeholder: 'abc1234', dependsOn: { param: 'undoType', values: ['revert'] } }
    ]
  },
  stash: {
    command: (params) => {
      if (params.stashAction === 'pop') {
        return 'git stash pop';
      } else if (params.stashAction === 'list') {
        return 'git stash list';
      } else {
        const msg = params.stashMsg ? ` -m '${params.stashMsg.replace(/'/g, "'\\''")}'` : '';
        return `git stash${msg}`;
      }
    },
    explanation: 'Stashing allows you to temporarily save all uncommitted local modifications, clearing your working directory without losing work. You can pop changes back, list all stashes, or create a stash with a message.',
    params: [
      {
        id: 'stashAction',
        label: 'Action',
        type: 'select',
        options: [
          { value: 'save', label: 'Save changes to stash' },
          { value: 'pop', label: 'Pop/Restore the last stashed changes' },
          { value: 'list', label: 'List all saved stashes' }
        ]
      },
      { id: 'stashMsg', label: 'Stash Message (optional, if saving)', type: 'text', placeholder: 'work in progress', dependsOn: { param: 'stashAction', values: ['save'] } }
    ]
  },
  tag: {
    command: (params) => {
      if (params.tagAction === 'list') {
        return 'git tag';
      } else if (params.tagAction === 'delete') {
        return `git tag -d ${params.tagName || 'v1.0.0'}`;
      } else {
        const msg = params.tagMsg ? ` -m '${params.tagMsg.replace(/'/g, "'\\''")}'` : " -m 'Release version 1.0.0'";
        return `git tag -a ${params.tagName || 'v1.0.0'}${msg}`;
      }
    },
    explanation: 'Tags are reference points that mark specific commits in history (usually releases like v1.0.0). You can create annotated tags with release messages, list all tags, or delete a tag locally.',
    params: [
      {
        id: 'tagAction',
        label: 'Action',
        type: 'select',
        options: [
          { value: 'create', label: 'Create an annotated release tag' },
          { value: 'list', label: 'List all tags' },
          { value: 'delete', label: 'Delete a tag locally' }
        ]
      },
      { id: 'tagName', label: 'Tag Name', type: 'text', placeholder: 'v1.0.0', dependsOn: { param: 'tagAction', values: ['create', 'delete'] } },
      { id: 'tagMsg', label: 'Tag Message / Release Notes', type: 'text', placeholder: 'Release version 1.0.0', dependsOn: { param: 'tagAction', values: ['create'] } }
    ]
  }
};

// ─────────────────────────────────────────────
// COMMAND GENERATOR ENGINE
// ─────────────────────────────────────────────

const conventionalCommitMessages = [
  "feat: implement user authentication flow via OAuth2",
  "fix: resolve race condition in token refresh handler",
  "docs: update API endpoints and deployment instructions in README",
  "style: align checkout button layout with design system guidelines",
  "refactor: optimize database query performance in dashboard analytics",
  "test: add unit tests for repository metadata parser",
  "chore: bump dependencies and security patches",
  "feat: add export to CSV functionality in cheatsheet view",
  "fix: resolve memory leak in web socket listener",
  "docs: correct typo in git branching strategy diagrams"
];

function getRandomConventionalCommit() {
  const idx = Math.floor(Math.random() * conventionalCommitMessages.length);
  return conventionalCommitMessages[idx];
}

function setupGenerator() {
  const selectAction = document.getElementById('generator-action');
  const paramsContainer = document.getElementById('generator-params');
  const outputText = document.getElementById('generated-command-text');
  const explanationText = document.getElementById('generator-explanation');
  const copyBtn = document.getElementById('copy-generated-btn');

  if (!selectAction || !paramsContainer || !outputText || !explanationText || !copyBtn) return;

  function updateGenerator() {
    const actionKey = selectAction.value;
    const actionDef = generatorActions[actionKey];
    if (!actionDef) return;

    // Render parameters
    const prevValues = {};
    paramsContainer.querySelectorAll('input, select').forEach(el => {
      prevValues[el.dataset.id] = el.value;
    });

    paramsContainer.innerHTML = actionDef.params.map(p => {
      // Check dependency
      if (p.dependsOn) {
        const dependentVal = prevValues[p.dependsOn.param] || (actionDef.params.find(x => x.id === p.dependsOn.param).options?.[0]?.value || '');
        if (!p.dependsOn.values.includes(dependentVal)) {
          return '';
        }
      }

      const val = prevValues[p.id] !== undefined ? prevValues[p.id] : (p.options?.[0]?.value || '');
      
      if (p.type === 'select') {
        return `
          <div class="form-group">
            <label class="form-label" for="gen-param-${p.id}">${p.label}</label>
            <select id="gen-param-${p.id}" class="form-select" data-id="${p.id}">
              ${p.options.map(opt => `<option value="${opt.value}" ${opt.value === val ? 'selected' : ''}>${opt.label}</option>`).join('')}
            </select>
          </div>
        `;
      } else {
        const hasSuggestBtn = p.id === 'message' || p.id === 'stashMsg';
        return `
          <div class="form-group">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <label class="form-label" for="gen-param-${p.id}">${p.label}</label>
              ${hasSuggestBtn ? `<button class="btn btn-outline" id="suggest-msg-btn-${p.id}" style="padding: 4px 10px; font-size: 0.75rem; border-radius: var(--radius-sm);" title="Suggest a Conventional Commit message">🎲 Suggest Message</button>` : ''}
            </div>
            <input type="text" id="gen-param-${p.id}" class="form-input" data-id="${p.id}" value="${escapeHtml(val)}" placeholder="${escapeHtml(p.placeholder || '')}" />
          </div>
        `;
      }
    }).join('');

    // Wire up inputs
    paramsContainer.querySelectorAll('input, select').forEach(el => {
      el.addEventListener('input', () => {
        if (el.tagName === 'SELECT') {
          updateGenerator();
        } else {
          regenerateOutput();
        }
      });
    });

    // Wire up suggest buttons
    const suggestMsgBtn = paramsContainer.querySelector('#suggest-msg-btn-message');
    if (suggestMsgBtn) {
      suggestMsgBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const input = paramsContainer.querySelector('#gen-param-message');
        if (input) {
          input.value = getRandomConventionalCommit();
          regenerateOutput();
        }
      });
    }

    const suggestStashBtn = paramsContainer.querySelector('#suggest-msg-btn-stashMsg');
    if (suggestStashBtn) {
      suggestStashBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const input = paramsContainer.querySelector('#gen-param-stashMsg');
        if (input) {
          input.value = getRandomConventionalCommit();
          regenerateOutput();
        }
      });
    }

    regenerateOutput();
  }

  function regenerateOutput() {
    const actionKey = selectAction.value;
    const actionDef = generatorActions[actionKey];
    if (!actionDef) return;

    const params = {};
    paramsContainer.querySelectorAll('input, select').forEach(el => {
      params[el.dataset.id] = el.value || el.placeholder;
    });

    // Make sure we evaluate dependencies correctly when gathering params
    actionDef.params.forEach(p => {
      if (params[p.id] === undefined) {
        params[p.id] = p.options?.[0]?.value || p.placeholder || '';
      }
    });

    const command = actionDef.command(params);
    outputText.textContent = command;
    explanationText.innerHTML = actionDef.explanation;
  }

  selectAction.addEventListener('change', updateGenerator);
  
  copyBtn.addEventListener('click', () => {
    const cmd = outputText.textContent;
    navigator.clipboard.writeText(cmd).then(() => {
      copyBtn.textContent = 'Copied! ✅';
      showToast('Command copied! 📋');
      setTimeout(() => { copyBtn.textContent = 'Copy 📋'; }, 1500);
    });
  });

  // Initial call
  updateGenerator();
}




// ─────────────────────────────────────────────
// GIT COMMIT VISUALIZER
// ─────────────────────────────────────────────

let visualGit = {
  commits: [
    { id: 'c0', message: 'Initial commit', parents: [], branch: 'main', column: 0, lane: 0 }
  ],
  branches: { main: 'c0' },
  head: 'main',
  lanes: { main: 0 },
  nextLane: 1,
  commitCount: 1,
  unstaged: ['file.txt'],
  staged: []
};

const initialVisualGit = JSON.stringify(visualGit);

function setupVisualizer() {
  const btnCommit = document.getElementById('viz-btn-commit');
  const btnAmend = document.getElementById('viz-btn-amend');
  const btnBranch = document.getElementById('viz-btn-branch');
  const btnCheckout = document.getElementById('viz-btn-checkout');
  const btnMerge = document.getElementById('viz-btn-merge');
  const btnResetSoft = document.getElementById('viz-btn-reset-soft');
  const btnReset = document.getElementById('viz-btn-reset');
  const branchInput = document.getElementById('viz-branch-input');
  const checkoutSelect = document.getElementById('viz-checkout-select');
  const mergeSelect = document.getElementById('viz-merge-select');
  const statusHead = document.getElementById('viz-status-head');
  const statusBranches = document.getElementById('viz-status-branches');
  const terminalBody = document.getElementById('viz-terminal-body');

  // Staging elements selectors
  const btnAdd = document.getElementById('viz-btn-add');
  const btnRestore = document.getElementById('viz-btn-restore');
  const unstagedList = document.getElementById('viz-unstaged-list');
  const stagedList = document.getElementById('viz-staged-list');

  // Mission Mode Elements
  const missionTitle = document.getElementById('viz-mission-title');
  const missionDesc = document.getElementById('viz-mission-desc');
  const missionProgress = document.getElementById('viz-mission-progress');
  const missionIndicator = document.getElementById('viz-mission-status-indicator');
  const missionNextBtn = document.getElementById('viz-mission-next-btn');

  const visualMissions = [
    {
      title: "Branch Out",
      desc: "Branches allow you to work in isolation. Create a new branch named <strong>dev</strong> using the 'git branch' control panel.",
      check: (state) => state.branches['dev'] !== undefined && state.head === 'dev',
      successMsg: "Fantastic! You've created and checked out 'dev' branch! 🎉"
    },
    {
      title: "Document Changes",
      desc: "Before making commits, you need to stage changes. Click <strong>git add .</strong> to stage your changes, then click <strong>git commit</strong> to commit. Do this twice to make 2 commits on your 'dev' branch.",
      check: (state) => {
        const devCommits = state.commits.filter(c => c.branch === 'dev');
        return devCommits.length >= 2;
      },
      successMsg: "Awesome! You've recorded version history by making commits! 📸"
    },
    {
      title: "Safe Merge",
      desc: "Integrate your new features back. Checkout branch <strong>main</strong> first using 'git checkout', then select <strong>dev</strong> and click <strong>git merge</strong>.",
      check: (state) => {
        const currentCommitId = state.branches[state.head];
        const currentCommit = state.commits.find(c => c.id === currentCommitId);
        return state.head === 'main' && currentCommit && currentCommit.isMerge && currentCommit.parents.includes(state.branches['dev']);
      },
      successMsg: "Perfect! You successfully merged dev into main! 🤝"
    },
    {
      title: "Clean Up & Restart",
      desc: "Undoing mistakes is crucial. Perform a <strong>git reset --soft HEAD~1</strong> on main to undo the merge commit.",
      check: (state) => {
        const currentCommitId = state.branches[state.head];
        const currentCommit = state.commits.find(c => c.id === currentCommitId);
        return state.head === 'main' && currentCommit && !currentCommit.isMerge;
      },
      successMsg: "Mission complete! You've mastered branch checkout, commit, merge, and soft reset! 🏆"
    }
  ];

  let currentMissionIndex = 0;

  if (!btnCommit) return;

  function logToTerminal(command, output) {
    if (!terminalBody) return;
    const lines = terminalBody.querySelectorAll('.terminal-line');
    if (lines.length === 0) return;
    const lastLine = lines[lines.length - 1]; // active prompt line with cursor

    // Remove cursor from last line
    const cursorSpan = lastLine.querySelector('.cursor');
    if (cursorSpan) cursorSpan.remove();

    // Append actual command text to the prompt line
    lastLine.innerHTML += escapeHtml(command);

    // Append command output if any
    if (output) {
      const outEl = document.createElement('div');
      outEl.className = 'terminal-output';
      outEl.innerHTML = output.replace(/\n/g, '<br>');
      terminalBody.appendChild(outEl);
    }

    // Append a new empty prompt line at the bottom
    const newline = document.createElement('div');
    newline.className = 'terminal-line';
    newline.innerHTML = `<span class="prompt">${visualGit.head} %</span> <span class="cursor">_</span>`;
    terminalBody.appendChild(newline);

    // Scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function resetSandbox() {
    visualGit = JSON.parse(initialVisualGit);
    currentMissionIndex = 0;
    if (branchInput) branchInput.value = '';
    renderGraph();
    // Clear terminal and print init message
    if (terminalBody) {
      terminalBody.innerHTML = `
        <div class="terminal-line"><span class="prompt">git-sandbox %</span> git init</div>
        <div class="terminal-output">Initialized empty Git repository in /Users/danush/desktop/git-sandbox/.git/</div>
        <div class="terminal-line"><span class="prompt">main %</span> <span class="cursor">_</span></div>
      `;
    }
    showToast('Sandbox reset! 🔄');
  }

  function handleAdd() {
    if (visualGit.unstaged.length === 0) {
      showToast('Nothing to add! Working tree clean.');
      return;
    }
    visualGit.staged = [...visualGit.staged, ...visualGit.unstaged];
    visualGit.unstaged = [];
    renderGraph();
    logToTerminal('git add .', '');
    showToast('Staged all changes ➕');
  }

  function handleRestore() {
    if (visualGit.unstaged.length === 0) {
      showToast('Nothing to restore!');
      return;
    }
    visualGit.unstaged = [];
    renderGraph();
    logToTerminal('git restore .', '');
    showToast('Discarded local changes ↩️');
  }

  function handleCommit() {
    if (visualGit.staged.length === 0) {
      showToast('⚠️ Nothing to commit! Run git add first.');
      logToTerminal('git commit', 'error: no changes added to commit (use "git add")');
      return;
    }

    const randomMsgs = [
      "feat: implement landing page hero graphics",
      "fix: correct bounds check crash in compiler",
      "docs: update installation requirements instructions",
      "style: format config options and buttons",
      "refactor: simplify Git visualizer node drawing",
      "test: add tests for SSH configuration wizard"
    ];
    const suggestedMsg = randomMsgs[Math.floor(Math.random() * randomMsgs.length)];
    const userInput = prompt("Enter commit message (Conventional Commit style recommended):", suggestedMsg);
    
    if (userInput === null) {
      logToTerminal('git commit', 'commit aborted by user');
      return;
    }
    
    const newMsg = userInput.trim() || `Commit ${visualGit.commitCount}`;

    const parentId = visualGit.branches[visualGit.head];
    const parentCommit = visualGit.commits.find(c => c.id === parentId);
    
    const newId = `c${visualGit.commitCount}`;
    visualGit.commitCount++;

    const newCommit = {
      id: newId,
      message: newMsg,
      parents: [parentId],
      branch: visualGit.head,
      column: parentCommit ? parentCommit.column + 1 : 0,
      lane: visualGit.lanes[visualGit.head]
    };

    visualGit.commits.push(newCommit);
    visualGit.branches[visualGit.head] = newId;

    // Clear staging and simulate new modification
    visualGit.staged = [];
    visualGit.unstaged = ['file.txt'];

    renderGraph();
    logToTerminal(`git commit -m "${newMsg}"`, `[${visualGit.head} ${newId}] ${newMsg}\n 1 file changed, 1 insertion(+)\n create mode 100644 file.txt`);
    showToast(`Created commit ${newId} on ${visualGit.head} 📸`);
  }

  function handleAmend() {
    const headCommitId = visualGit.branches[visualGit.head];
    const lastCommit = visualGit.commits.find(c => c.id === headCommitId);
    if (!lastCommit || lastCommit.id === 'c0') {
      showToast('Cannot amend initial commit!');
      return;
    }
    const newMsg = prompt("Enter new commit message:", lastCommit.message);
    if (newMsg === null) return; // cancelled
    const cleanMsg = newMsg.trim() || lastCommit.message;
    
    lastCommit.message = cleanMsg;
    renderGraph();
    logToTerminal(`git commit --amend -m "${cleanMsg}"`, `[${visualGit.head} ${lastCommit.id}] ${cleanMsg}\n Date: ${new Date().toUTCString()}\n 1 file changed, 1 insertion(+)`);
    showToast(`Amended commit ${lastCommit.id} message ✏️`);
  }

  function handleBranch() {
    const branchName = branchInput.value.trim().replace(/\s+/g, '-');
    if (!branchName) {
      showToast('Please enter a branch name!');
      return;
    }
    if (visualGit.branches[branchName]) {
      showToast('Branch already exists!');
      return;
    }

    const currentCommitId = visualGit.branches[visualGit.head];
    visualGit.branches[branchName] = currentCommitId;
    visualGit.lanes[branchName] = visualGit.nextLane++;
    visualGit.head = branchName; // auto checkout
    branchInput.value = '';

    renderGraph();
    logToTerminal(`git branch ${branchName} && git checkout ${branchName}`, `Switched to branch '${branchName}'`);
    showToast(`Created and checked out branch ${branchName} 🌿`);
  }

  function handleCheckout() {
    const targetBranch = checkoutSelect.value;
    if (!targetBranch || targetBranch === visualGit.head) return;

    if (visualGit.unstaged.length > 0 || visualGit.staged.length > 0) {
      showToast('⚠️ Please commit or stash your changes before checking out.');
      logToTerminal(`git checkout ${targetBranch}`, `error: Your local changes to the following files would be overwritten by checkout:\n\tfile.txt\nPlease commit your changes or stash them before you switch branches.`);
      return;
    }

    visualGit.head = targetBranch;
    renderGraph();
    logToTerminal(`git checkout ${targetBranch}`, `Switched to branch '${targetBranch}'`);
    showToast(`Switched to branch ${targetBranch} 🔀`);
  }

  function handleMerge() {
    const sourceBranch = mergeSelect.value;
    if (!sourceBranch || sourceBranch === visualGit.head) {
      showToast('Select a different branch to merge!');
      return;
    }

    if (visualGit.unstaged.length > 0 || visualGit.staged.length > 0) {
      showToast('⚠️ Please commit or stash your changes before merging.');
      logToTerminal(`git merge ${sourceBranch}`, `error: Your local changes to the following files would be overwritten by merge:\n\tfile.txt\nPlease commit your changes or stash them before you merge.`);
      return;
    }

    const targetCommitId = visualGit.branches[visualGit.head];
    const sourceCommitId = visualGit.branches[sourceBranch];

    if (targetCommitId === sourceCommitId) {
      showToast('Already up to date!');
      return;
    }

    // Check if sourceCommitId is already ancestor of targetCommitId
    if (isAncestor(sourceCommitId, targetCommitId)) {
      showToast('Already up to date!');
      return;
    }

    const targetCommit = visualGit.commits.find(c => c.id === targetCommitId);
    const sourceCommit = visualGit.commits.find(c => c.id === sourceCommitId);

    const newId = `c${visualGit.commitCount}`;
    const newMsg = `Merge branch '${sourceBranch}' into ${visualGit.head}`;
    visualGit.commitCount++;

    const newCommit = {
      id: newId,
      message: newMsg,
      parents: [targetCommitId, sourceCommitId],
      branch: visualGit.head,
      column: Math.max(targetCommit.column, sourceCommit.column) + 1,
      lane: visualGit.lanes[visualGit.head],
      isMerge: true
    };

    visualGit.commits.push(newCommit);
    visualGit.branches[visualGit.head] = newId;

    renderGraph();
    logToTerminal(`git merge ${sourceBranch}`, `Updating ${targetCommitId.substring(0,7)}..${sourceCommitId.substring(0,7)}\nFast-forward\n file.txt | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)\nMerge made by the 'recursive' strategy.`);
    showToast(`Merged branch ${sourceBranch} into ${visualGit.head} 🤝`);
  }

  function handleResetSoft() {
    const headCommitId = visualGit.branches[visualGit.head];
    const lastCommit = visualGit.commits.find(c => c.id === headCommitId);
    if (!lastCommit || lastCommit.id === 'c0') {
      showToast('Cannot reset initial commit!');
      return;
    }
    
    const parentId = lastCommit.parents[0];
    if (!parentId) {
      showToast('Cannot reset initial commit!');
      return;
    }
    
    // Set active branch pointer to parentId
    visualGit.branches[visualGit.head] = parentId;
    
    // Remove commit from the list to update graph visually
    visualGit.commits = visualGit.commits.filter(c => c.id !== headCommitId);
    
    // Put changes back in staging area
    visualGit.staged = ['file.txt'];
    visualGit.unstaged = [];

    renderGraph();
    logToTerminal(`git reset --soft HEAD~1`, `Unstaged changes after reset:\nM\tfile.txt`);
    showToast(`Undid last commit (soft reset) ↩️`);
  }

  function isAncestor(ancestorId, currentId) {
    if (ancestorId === currentId) return true;
    const currentCommit = visualGit.commits.find(c => c.id === currentId);
    if (!currentCommit || !currentCommit.parents) return false;
    return currentCommit.parents.some(p => isAncestor(ancestorId, p));
  }

  function updateSelects() {
    const allBranches = Object.keys(visualGit.branches);
    
    // Checkout select
    checkoutSelect.innerHTML = allBranches.map(b => 
      `<option value="${b}" ${b === visualGit.head ? 'selected' : ''}>${b}</option>`
    ).join('');

    // Merge select
    const mergeBranches = allBranches.filter(b => b !== visualGit.head);
    mergeSelect.innerHTML = mergeBranches.length > 0
      ? mergeBranches.map(b => `<option value="${b}">${b}</option>`).join('')
      : '<option value="">(No other branches)</option>';
  }

  function updateStagingUI() {
    if (unstagedList) {
      unstagedList.innerHTML = visualGit.unstaged.length > 0
        ? visualGit.unstaged.map(f => `<div style="color: var(--clr-accent-warm); padding: 2px 0;">M  ${f}</div>`).join('')
        : `<div style="color: var(--clr-text-muted); font-style: italic;">Clean working directory</div>`;
    }
    if (stagedList) {
      stagedList.innerHTML = visualGit.staged.length > 0
        ? visualGit.staged.map(f => `<div style="color: var(--clr-accent-3); padding: 2px 0;">A  ${f}</div>`).join('')
        : `<div style="color: var(--clr-text-muted); font-style: italic;">Nothing staged to commit</div>`;
    }
  }

  function updateMissionUI() {
    if (!missionTitle || currentMissionIndex >= visualMissions.length) {
      if (missionTitle) {
        missionTitle.textContent = "🏆 All Missions Complete!";
        missionDesc.innerHTML = "You've successfully finished all Git Learning Missions. Feel free to continue playing in sandbox mode!";
        missionProgress.textContent = "Finished";
        missionIndicator.innerHTML = "✨ Git Master Status Unlocked";
        missionIndicator.style.color = "var(--clr-accent-3)";
        missionNextBtn.style.display = "none";
      }
      return;
    }

    const mission = visualMissions[currentMissionIndex];
    missionTitle.textContent = mission.title;
    missionDesc.innerHTML = mission.desc;
    missionProgress.textContent = `Mission ${currentMissionIndex + 1} / ${visualMissions.length}`;

    const completed = mission.check(visualGit);
    if (completed) {
      missionIndicator.innerHTML = "✅ Objective met!";
      missionIndicator.style.color = "var(--clr-accent-3)";
      missionNextBtn.style.display = "inline-block";
    } else {
      missionIndicator.innerHTML = "❌ Objective not met";
      missionIndicator.style.color = "var(--clr-accent-warm)";
      missionNextBtn.style.display = "none";
    }
  }

  function renderGraph() {
    updateSelects();
    updateStagingUI();
    updateMissionUI();

    // Update status
    if (statusHead) statusHead.textContent = visualGit.head;
    if (statusBranches) statusBranches.textContent = Object.keys(visualGit.branches).join(', ');

    const nodesContainer = document.getElementById('visualizer-nodes');
    const svgContainer = document.getElementById('visualizer-svg');

    if (!nodesContainer || !svgContainer) return;

    nodesContainer.innerHTML = '';
    svgContainer.innerHTML = '';

    const colWidth = 90;
    const laneHeight = 60;
    const paddingX = 50;
    const paddingY = 60;

    // Render connection lines (SVG paths)
    visualGit.commits.forEach(commit => {
      const childX = paddingX + commit.column * colWidth;
      const childY = paddingY + commit.lane * laneHeight;

      commit.parents.forEach(parentId => {
        const parent = visualGit.commits.find(c => c.id === parentId);
        if (!parent) return;

        const parentX = paddingX + parent.column * colWidth;
        const parentY = paddingY + parent.lane * laneHeight;

        // Draw bezier path
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const controlX1 = (parentX + childX) / 2;
        const controlY1 = parentY;
        const controlX2 = (parentX + childX) / 2;
        const controlY2 = childY;

        path.setAttribute('d', `M ${parentX} ${parentY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${childX} ${childY}`);
        
        // Match branch line colors
        let strokeColor = 'var(--clr-accent)';
        if (parent.lane === 1) strokeColor = 'var(--clr-accent-2)';
        else if (parent.lane === 2) strokeColor = 'var(--clr-accent-3)';
        else if (parent.lane > 2) strokeColor = 'var(--clr-accent-warm)';
        
        path.setAttribute('stroke', strokeColor);
        path.setAttribute('style', `stroke: ${strokeColor}`);
        svgContainer.appendChild(path);
      });
    });

    // Render node elements
    visualGit.commits.forEach(commit => {
      const x = paddingX + commit.column * colWidth;
      const y = paddingY + commit.lane * laneHeight;

      // Circle node
      const nodeEl = document.createElement('div');
      nodeEl.className = 'viz-node';
      if (commit.isMerge) nodeEl.classList.add('merge-commit');
      
      const headCommitId = visualGit.branches[visualGit.head];
      if (commit.id === headCommitId) {
        nodeEl.classList.add('active-head');
      }

      nodeEl.style.left = `${x}px`;
      nodeEl.style.top = `${y}px`;
      nodeEl.textContent = commit.id;
      
      // Custom Tooltip Event Handlers
      const tooltipEl = document.getElementById('viz-tooltip');
      nodeEl.addEventListener('mouseenter', () => {
        if (!tooltipEl) return;
        const parentIds = commit.parents && commit.parents.length > 0 ? commit.parents.join(', ') : 'None';
        const authorName = escapeHtml(localStorage.getItem('cfg-username') || 'Danush K');
        const authorEmail = escapeHtml(localStorage.getItem('cfg-email') || 'danusu2470030@ssn.edu.in');
        tooltipEl.innerHTML = `
          <div class="viz-tooltip-hash">Commit: ${commit.id}</div>
          <div class="viz-tooltip-msg">${escapeHtml(commit.message)}</div>
          <div class="viz-tooltip-meta">
            <span><strong>Branch:</strong> ${escapeHtml(commit.branch)}</span>
            <span><strong>Parents:</strong> ${parentIds}</span>
            <span><strong>Author:</strong> ${authorName} &lt;${authorEmail}&gt;</span>
          </div>
        `;
        tooltipEl.style.display = 'block';
        tooltipEl.style.opacity = '1';
      });

      nodeEl.addEventListener('mousemove', (e) => {
        if (!tooltipEl) return;
        const graphArea = document.getElementById('visualizer-graph-area');
        if (!graphArea) return;
        const rect = graphArea.getBoundingClientRect();
        // Position relative to the scrolling graph area
        const tooltipX = e.clientX - rect.left + graphArea.scrollLeft + 15;
        const tooltipY = e.clientY - rect.top + graphArea.scrollTop + 15;
        tooltipEl.style.left = `${tooltipX}px`;
        tooltipEl.style.top = `${tooltipY}px`;
      });

      nodeEl.addEventListener('mouseleave', () => {
        if (!tooltipEl) return;
        tooltipEl.style.opacity = '0';
        tooltipEl.style.display = 'none';
      });

      nodesContainer.appendChild(nodeEl);

      // Label below node
      const labelEl = document.createElement('div');
      labelEl.className = 'viz-label';
      labelEl.style.left = `${x}px`;
      labelEl.style.top = `${y + 22}px`;
      labelEl.textContent = commit.message;
      nodesContainer.appendChild(labelEl);

      // Branch tags pointing to this commit
      const pointingBranches = Object.entries(visualGit.branches)
        .filter(([name, id]) => id === commit.id)
        .map(([name]) => name);

      pointingBranches.forEach((branchName, idx) => {
        const tagEl = document.createElement('div');
        tagEl.className = 'viz-branch-tag';
        if (branchName === visualGit.head) {
          tagEl.classList.add('head-tag');
          tagEl.innerHTML = `HEAD → ${branchName}`;
        } else {
          tagEl.textContent = branchName;
        }

        tagEl.style.left = `${x}px`;
        // offset vertically if multiple branches point to same commit
        tagEl.style.top = `${y - 20 - (idx * 24)}px`;
        nodesContainer.appendChild(tagEl);
      });
    });
  }

  btnCommit.addEventListener('click', handleCommit);
  if (btnAmend) btnAmend.addEventListener('click', handleAmend);
  btnBranch.addEventListener('click', handleBranch);
  btnCheckout.addEventListener('click', handleCheckout);
  btnMerge.addEventListener('click', handleMerge);
  if (btnResetSoft) btnResetSoft.addEventListener('click', handleResetSoft);
  btnReset.addEventListener('click', resetSandbox);

  if (btnAdd) btnAdd.addEventListener('click', handleAdd);
  if (btnRestore) btnRestore.addEventListener('click', handleRestore);

  if (missionNextBtn) {
    missionNextBtn.addEventListener('click', () => {
      const mission = visualMissions[currentMissionIndex];
      showToast(mission.successMsg);
      currentMissionIndex++;
      updateMissionUI();
    });
  }

  // Initial prompt setup
  if (terminalBody) {
    const lines = terminalBody.querySelectorAll('.terminal-line');
    if (lines.length > 0) {
      lines[lines.length - 1].querySelector('.prompt').innerHTML = `${visualGit.head} %`;
    }
  }

  // Initial draw
  renderGraph();
}


// ─────────────────────────────────────────────
// THEME SWITCHER
// ─────────────────────────────────────────────

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeToggleIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeToggleIcon(newTheme);
}

function updateThemeToggleIcon(theme) {
  const iconSpan = document.querySelector('.theme-toggle-icon');
  if (iconSpan) {
    iconSpan.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
}

// ─────────────────────────────────────────────
// BRANCHING STRATEGIES DATA & LOGIC
// ─────────────────────────────────────────────

const strategiesData = {
  'github-flow': {
    name: "GitHub Flow",
    tagline: "Simple, lightweight, and perfect for continuous delivery.",
    desc: "Developers branch off the main branch, make changes, commit, submit a pull request, discuss/review, merge back into main, and immediately deploy.",
    pros: [
      "Simple to learn and maintain.",
      "Ideal for fast-paced web apps and SaaS products.",
      "Minimizes build and merge complexity."
    ],
    cons: [
      "Main must always be in a deployable state.",
      "Not suited for release cycles or multiple product versions.",
      "Less control over feature testing before production."
    ],
    diagram: `
      <svg viewBox="0 0 400 120" style="width: 100%; height: auto;">
        <!-- tracks -->
        <line x1="50" y1="30" x2="350" y2="30" stroke="var(--clr-accent)" stroke-width="3" />
        <line x1="160" y1="30" x2="200" y2="90" stroke="var(--clr-accent-2)" stroke-width="3" stroke-dasharray="4" />
        <line x1="200" y1="90" x2="280" y2="90" stroke="var(--clr-accent-2)" stroke-width="3" />
        <line x1="280" y1="90" x2="320" y2="30" stroke="var(--clr-accent-2)" stroke-width="3" stroke-dasharray="4" />
        <!-- nodes -->
        <circle cx="80" cy="30" r="8" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="2" />
        <circle cx="150" cy="30" r="8" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="2" />
        <circle cx="335" cy="30" r="8" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="2" />
        <circle cx="210" cy="90" r="8" fill="var(--clr-accent-2)" stroke="var(--clr-bg-2)" stroke-width="2" />
        <circle cx="270" cy="90" r="8" fill="var(--clr-accent-2)" stroke="var(--clr-bg-2)" stroke-width="2" />
        <!-- text -->
        <text x="35" y="34" fill="var(--clr-text-muted)" font-family="monospace" font-size="11" text-anchor="end">main</text>
        <text x="35" y="94" fill="var(--clr-text-muted)" font-family="monospace" font-size="11" text-anchor="end">feature</text>
      </svg>
    `
  },
  'git-flow': {
    name: "Git Flow",
    tagline: "Robust and structured workflow for releases and versioning.",
    desc: "Utilizes two permanent branches (main and develop) alongside supporting branches (feature, release, hotfix). Perfect for applications that have versioned releases.",
    pros: [
      "Clear separation of working code, staging, and production.",
      "Handles release cycles and hotfixes elegantly.",
      "Excellent for complex, multi-team projects."
    ],
    cons: [
      "High overhead and complexity.",
      "Branches can diverge quickly and lead to merge conflicts.",
      "Slower feedback loop for continuous deployment."
    ],
    diagram: `
      <svg viewBox="0 0 400 180" style="width: 100%; height: auto;">
        <!-- Tracks -->
        <line x1="50" y1="30" x2="350" y2="30" stroke="var(--clr-accent)" stroke-width="3" />
        <line x1="235" y1="75" x2="295" y2="75" stroke="var(--clr-accent-yellow)" stroke-width="3" />
        <line x1="50" y1="120" x2="350" y2="120" stroke="var(--clr-accent-3)" stroke-width="3" />
        <line x1="100" y1="165" x2="180" y2="165" stroke="var(--clr-accent-2)" stroke-width="3" />
        
        <!-- Connectors -->
        <line x1="70" y1="30" x2="90" y2="120" stroke="var(--clr-accent-3)" stroke-width="2" stroke-dasharray="3" />
        <line x1="100" y1="120" x2="120" y2="165" stroke="var(--clr-accent-2)" stroke-width="2" stroke-dasharray="3" />
        <line x1="160" y1="165" x2="180" y2="120" stroke="var(--clr-accent-2)" stroke-width="2" stroke-dasharray="3" />
        <line x1="220" y1="120" x2="240" y2="75" stroke="var(--clr-accent-yellow)" stroke-width="2" stroke-dasharray="3" />
        <line x1="285" y1="75" x2="305" y2="30" stroke="var(--clr-accent)" stroke-width="2" stroke-dasharray="3" />
        <line x1="285" y1="75" x2="305" y2="120" stroke="var(--clr-accent-3)" stroke-width="2" stroke-dasharray="3" />

        <!-- Nodes -->
        <circle cx="65" cy="30" r="6" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="1.5" />
        <circle cx="315" cy="30" r="6" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="1.5" />
        
        <circle cx="95" cy="120" r="6" fill="var(--clr-accent-3)" stroke="var(--clr-bg-2)" stroke-width="1.5" />
        <circle cx="195" cy="120" r="6" fill="var(--clr-accent-3)" stroke="var(--clr-bg-2)" stroke-width="1.5" />
        <circle cx="315" cy="120" r="6" fill="var(--clr-accent-3)" stroke="var(--clr-bg-2)" stroke-width="1.5" />
        
        <circle cx="130" cy="165" r="6" fill="var(--clr-accent-2)" stroke="var(--clr-bg-2)" stroke-width="1.5" />
        <circle cx="155" cy="165" r="6" fill="var(--clr-accent-2)" stroke="var(--clr-bg-2)" stroke-width="1.5" />
        
        <circle cx="250" cy="75" r="6" fill="var(--clr-accent-yellow)" stroke="var(--clr-bg-2)" stroke-width="1.5" />
        <circle cx="275" cy="75" r="6" fill="var(--clr-accent-yellow)" stroke="var(--clr-bg-2)" stroke-width="1.5" />

        <!-- Labels -->
        <text x="40" y="34" fill="var(--clr-text-muted)" font-family="monospace" font-size="10" text-anchor="end">main (prod)</text>
        <text x="40" y="79" fill="var(--clr-text-muted)" font-family="monospace" font-size="10" text-anchor="end">release</text>
        <text x="40" y="124" fill="var(--clr-text-muted)" font-family="monospace" font-size="10" text-anchor="end">develop</text>
        <text x="40" y="169" fill="var(--clr-text-muted)" font-family="monospace" font-size="10" text-anchor="end">feature</text>
      </svg>
    `
  },
  'gitlab-flow': {
    name: "GitLab Flow",
    tagline: "Environment-driven branching model that links code to deployment stages.",
    desc: "Uses a master/main branch for stable staging, and environment branches (such as 'pre-production' and 'production') to track what is deployed. Perfect for SaaS and continuous deployment workflows.",
    pros: [
      "Explicitly defines deployment stages (e.g. staging vs production).",
      "Less overhead than Git Flow, but more structured than GitHub Flow.",
      "Clear visual tracking of environment states."
    ],
    cons: [
      "Requires maintaining multiple long-running environment branches.",
      "Can feel redundant for simple APIs or small projects.",
      "Cherry-picking releases is sometimes required."
    ],
    diagram: `
      <svg viewBox="0 0 400 140" style="width: 100%; height: auto;">
        <!-- Tracks -->
        <line x1="50" y1="30" x2="350" y2="30" stroke="var(--clr-accent-warm)" stroke-width="3" />
        <line x1="50" y1="70" x2="350" y2="70" stroke="var(--clr-accent)" stroke-width="3" />
        <line x1="140" y1="70" x2="180" y2="110" stroke="var(--clr-accent-2)" stroke-width="3" stroke-dasharray="3" />
        <line x1="180" y1="110" x2="260" y2="110" stroke="var(--clr-accent-2)" stroke-width="3" />
        <line x1="260" y1="110" x2="300" y2="70" stroke="var(--clr-accent-2)" stroke-width="3" stroke-dasharray="3" />
        
        <!-- Connectors from Master to Prod -->
        <line x1="120" y1="70" x2="140" y2="30" stroke="var(--clr-accent-warm)" stroke-width="2" stroke-dasharray="3" />
        <line x1="280" y1="70" x2="300" y2="30" stroke="var(--clr-accent-warm)" stroke-width="2" stroke-dasharray="3" />

        <!-- Nodes -->
        <circle cx="80" cy="70" r="7" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="2" />
        <circle cx="130" cy="70" r="7" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="2" />
        <circle cx="310" cy="70" r="7" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="2" />
        
        <circle cx="190" cy="110" r="6" fill="var(--clr-accent-2)" stroke="var(--clr-bg-2)" stroke-width="1.5" />
        <circle cx="250" cy="110" r="6" fill="var(--clr-accent-2)" stroke="var(--clr-bg-2)" stroke-width="1.5" />
        
        <circle cx="150" cy="30" r="7" fill="var(--clr-accent-warm)" stroke="var(--clr-bg-2)" stroke-width="2" />
        <circle cx="310" cy="30" r="7" fill="var(--clr-accent-warm)" stroke="var(--clr-bg-2)" stroke-width="2" />

        <!-- Labels -->
        <text x="40" y="34" fill="var(--clr-text-muted)" font-family="monospace" font-size="10" text-anchor="end">production</text>
        <text x="40" y="74" fill="var(--clr-text-muted)" font-family="monospace" font-size="10" text-anchor="end">master</text>
        <text x="40" y="114" fill="var(--clr-text-muted)" font-family="monospace" font-size="10" text-anchor="end">feature</text>
      </svg>
    `
  },
  'trunk': {
    name: "Trunk-Based Development",
    tagline: "High-velocity workflow focusing on frequent, small changes.",
    desc: "All developers commit directly to a single branch ('trunk' or main) or work in very short-lived feature branches (< 1 day). Avoids branch drift using feature flags.",
    pros: [
      "Prevents merge conflicts and branch drift completely.",
      "Enables true Continuous Integration (CI/CD).",
      "Fastest feedback loop for developers."
    ],
    cons: [
      "Requires high team discipline and strong testing automation.",
      "Inexperienced developers can easily break the main build.",
      "Relies heavily on feature flags for half-done code."
    ],
    diagram: `
      <svg viewBox="0 0 400 120" style="width: 100%; height: auto;">
        <!-- Trunk Line (y=40) -->
        <line x1="50" y1="40" x2="350" y2="40" stroke="var(--clr-accent)" stroke-width="4" />
        
        <!-- Short Lived Branch 1 -->
        <path d="M 100 40 Q 130 90 160 40" fill="none" stroke="var(--clr-accent-2)" stroke-width="3" stroke-dasharray="3" />
        <!-- Short Lived Branch 2 -->
        <path d="M 220 40 Q 250 90 280 40" fill="none" stroke="var(--clr-accent-2)" stroke-width="3" stroke-dasharray="3" />

        <!-- Nodes on Trunk -->
        <circle cx="70" cy="40" r="7" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="2" />
        <circle cx="110" cy="40" r="7" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="2" />
        <circle cx="170" cy="40" r="7" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="2" />
        <circle cx="200" cy="40" r="7" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="2" />
        <circle cx="290" cy="40" r="7" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="2" />
        <circle cx="330" cy="40" r="7" fill="var(--clr-accent)" stroke="var(--clr-bg-2)" stroke-width="2" />

        <!-- Nodes on branches -->
        <circle cx="130" cy="65" r="5" fill="var(--clr-accent-2)" stroke="var(--clr-bg-2)" stroke-width="1.5" />
        <circle cx="250" cy="65" r="5" fill="var(--clr-accent-2)" stroke="var(--clr-bg-2)" stroke-width="1.5" />

        <!-- Labels -->
        <text x="40" y="44" fill="var(--clr-text-muted)" font-family="monospace" font-size="11" text-anchor="end">trunk</text>
        <text x="130" y="85" fill="var(--clr-accent-2)" font-family="monospace" font-size="9" text-anchor="middle">short branch</text>
        <text x="250" y="85" fill="var(--clr-accent-2)" font-family="monospace" font-size="9" text-anchor="middle">short branch</text>
      </svg>
    `
  }
};

function setupBranchingStrategies() {
  const tabs = document.querySelectorAll('.strategy-tab-btn');
  const nameEl = document.getElementById('strategy-name');
  const taglineEl = document.getElementById('strategy-tagline');
  const descEl = document.getElementById('strategy-desc');
  const prosEl = document.getElementById('strategy-pros');
  const consEl = document.getElementById('strategy-cons');
  const diagramEl = document.getElementById('strategy-diagram');

  if (!tabs.length || !nameEl) return;

  function selectStrategy(strategyKey) {
    const data = strategiesData[strategyKey];
    if (!data) return;

    // Set text contents
    nameEl.textContent = data.name;
    taglineEl.textContent = data.tagline;
    descEl.textContent = data.desc;
    
    // Set lists
    prosEl.innerHTML = data.pros.map(pro => `<li>${pro}</li>`).join('');
    consEl.innerHTML = data.cons.map(con => `<li>${con}</li>`).join('');
    
    // Set diagram
    diagramEl.innerHTML = data.diagram;
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      selectStrategy(btn.dataset.strategy);
    });
  });

  // Initial Strategy Load
  selectStrategy('github-flow');
}

// ─────────────────────────────────────────────
// GIT CONFIG BUILDER
// ─────────────────────────────────────────────

function setupConfigBuilder() {
  const usernameInput = document.getElementById('cfg-username');
  const emailInput = document.getElementById('cfg-email');
  const branchInput = document.getElementById('cfg-branch');
  const editorSelect = document.getElementById('cfg-editor');
  const protocolSelect = document.getElementById('cfg-protocol');
  const colorCheckbox = document.getElementById('cfg-color');

  // Aliases checkboxes
  const aliasCoCheckbox = document.getElementById('cfg-alias-co');
  const aliasBrCheckbox = document.getElementById('cfg-alias-br');
  const aliasCiCheckbox = document.getElementById('cfg-alias-ci');
  const aliasStCheckbox = document.getElementById('cfg-alias-st');
  const aliasLgCheckbox = document.getElementById('cfg-alias-lg');
  
  const commandsText = document.getElementById('cfg-commands-text');
  const fileText = document.getElementById('cfg-file-text');

  const btnTerminal = document.getElementById('btn-cfg-terminal');
  const btnFile = document.getElementById('btn-cfg-file');
  const terminalView = document.getElementById('cfg-terminal-view');
  const fileView = document.getElementById('cfg-file-view');

  const copyCommandsBtn = document.getElementById('copy-cfg-commands');
  const copyFileBtn = document.getElementById('copy-cfg-file');
  const resetBtn = document.getElementById('cfg-reset-btn');

  if (!usernameInput || !commandsText || !fileText) return;

  // Load saved config values if they exist
  if (localStorage.getItem('cfg-username') !== null) usernameInput.value = localStorage.getItem('cfg-username');
  if (localStorage.getItem('cfg-email') !== null) emailInput.value = localStorage.getItem('cfg-email');
  if (localStorage.getItem('cfg-branch') !== null) branchInput.value = localStorage.getItem('cfg-branch');
  if (localStorage.getItem('cfg-editor') !== null) editorSelect.value = localStorage.getItem('cfg-editor');
  if (localStorage.getItem('cfg-protocol') !== null) protocolSelect.value = localStorage.getItem('cfg-protocol');
  if (localStorage.getItem('cfg-color') !== null) colorCheckbox.checked = localStorage.getItem('cfg-color') === 'true';

  if (aliasCoCheckbox && localStorage.getItem('cfg-alias-co') !== null) aliasCoCheckbox.checked = localStorage.getItem('cfg-alias-co') === 'true';
  if (aliasBrCheckbox && localStorage.getItem('cfg-alias-br') !== null) aliasBrCheckbox.checked = localStorage.getItem('cfg-alias-br') === 'true';
  if (aliasCiCheckbox && localStorage.getItem('cfg-alias-ci') !== null) aliasCiCheckbox.checked = localStorage.getItem('cfg-alias-ci') === 'true';
  if (aliasStCheckbox && localStorage.getItem('cfg-alias-st') !== null) aliasStCheckbox.checked = localStorage.getItem('cfg-alias-st') === 'true';
  if (aliasLgCheckbox && localStorage.getItem('cfg-alias-lg') !== null) aliasLgCheckbox.checked = localStorage.getItem('cfg-alias-lg') === 'true';

  // Toggle views
  if (btnTerminal && btnFile && terminalView && fileView) {
    btnTerminal.addEventListener('click', () => {
      btnTerminal.classList.add('active');
      btnFile.classList.remove('active');
      terminalView.style.display = 'flex';
      fileView.style.display = 'none';
    });

    btnFile.addEventListener('click', () => {
      btnFile.classList.add('active');
      btnTerminal.classList.remove('active');
      fileView.style.display = 'flex';
      terminalView.style.display = 'none';
    });
  }

  function updateOutputs() {
    const name = usernameInput.value.trim() || 'Your Name';
    const email = emailInput.value.trim() || 'your.email@example.com';
    const branch = branchInput.value.trim() || 'main';
    const editor = editorSelect.value;
    const protocol = protocolSelect ? protocolSelect.value : 'https';
    const isColor = colorCheckbox.checked;

    // Save to localStorage
    localStorage.setItem('cfg-username', usernameInput.value);
    localStorage.setItem('cfg-email', emailInput.value);
    localStorage.setItem('cfg-branch', branchInput.value);
    localStorage.setItem('cfg-editor', editorSelect.value);
    localStorage.setItem('cfg-protocol', protocolSelect ? protocolSelect.value : 'https');
    localStorage.setItem('cfg-color', colorCheckbox.checked.toString());

    if (aliasCoCheckbox) localStorage.setItem('cfg-alias-co', aliasCoCheckbox.checked.toString());
    if (aliasBrCheckbox) localStorage.setItem('cfg-alias-br', aliasBrCheckbox.checked.toString());
    if (aliasCiCheckbox) localStorage.setItem('cfg-alias-ci', aliasCiCheckbox.checked.toString());
    if (aliasStCheckbox) localStorage.setItem('cfg-alias-st', aliasStCheckbox.checked.toString());
    if (aliasLgCheckbox) localStorage.setItem('cfg-alias-lg', aliasLgCheckbox.checked.toString());

    // 1. Generate commands
    let commands = '';
    commands += `git config --global user.name "${name}"\n`;
    commands += `git config --global user.email "${email}"\n`;
    commands += `git config --global init.defaultBranch "${branch}"\n`;
    commands += `git config --global core.editor "${editor}"\n`;
    if (isColor) {
      commands += `git config --global color.ui auto\n`;
    } else {
      commands += `git config --global color.ui false\n`;
    }

    // Add aliases if checked
    let aliasCmds = '';
    let aliasFile = '';
    if (aliasCoCheckbox && aliasCoCheckbox.checked) {
      aliasCmds += `git config --global alias.co "checkout"\n`;
      aliasFile += `    co = checkout\n`;
    }
    if (aliasBrCheckbox && aliasBrCheckbox.checked) {
      aliasCmds += `git config --global alias.br "branch"\n`;
      aliasFile += `    br = branch\n`;
    }
    if (aliasCiCheckbox && aliasCiCheckbox.checked) {
      aliasCmds += `git config --global alias.ci "commit"\n`;
      aliasFile += `    ci = commit\n`;
    }
    if (aliasStCheckbox && aliasStCheckbox.checked) {
      aliasCmds += `git config --global alias.st "status"\n`;
      aliasFile += `    st = status\n`;
    }
    if (aliasLgCheckbox && aliasLgCheckbox.checked) {
      aliasCmds += `git config --global alias.lg "log --oneline --graph --all"\n`;
      aliasFile += `    lg = log --oneline --graph --all\n`;
    }

    if (aliasCmds) {
      commands += `\n# Setup custom shortcuts (aliases):\n` + aliasCmds;
    }

    if (protocol === 'ssh') {
      commands += `\n# Generate a secure SSH keypair (press Enter to accept default path):\n`;
      commands += `ssh-keygen -t ed25519 -C "${email}"\n`;
      commands += `# Print public key to copy & add to GitHub (Settings -> SSH keys):\n`;
      commands += `cat ~/.ssh/id_ed25519.pub`;
    } else {
      commands += `\n# Set credential helper to cache HTTPS password/PAT tokens:\n`;
      commands += `# On macOS: git config --global credential.helper osxkeychain\n`;
      commands += `# On Windows: git config --global credential.helper manager`;
    }
    commandsText.textContent = commands;

    // 2. Generate file content
    let fileContent = '';
    fileContent += `[user]\n`;
    fileContent += `    name = ${name}\n`;
    fileContent += `    email = ${email}\n`;
    fileContent += `[init]\n`;
    fileContent += `    defaultBranch = ${branch}\n`;
    fileContent += `[core]\n`;
    fileContent += `    editor = ${editor}\n`;
    fileContent += `[color]\n`;
    fileContent += `    ui = ${isColor ? 'auto' : 'false'}\n`;
    
    if (aliasFile) {
      fileContent += `[alias]\n` + aliasFile;
    }

    if (protocol === 'https') {
      fileContent += `[credential]\n`;
      fileContent += `    helper = osxkeychain # or 'manager' on Windows`;
    } else {
      fileContent += `# SSH config is managed via ~/.ssh/config, not .gitconfig`;
    }
    fileText.textContent = fileContent;
  }

  // Setup inputs event listeners
  const allInputs = [usernameInput, emailInput, branchInput, editorSelect, protocolSelect, colorCheckbox, aliasCoCheckbox, aliasBrCheckbox, aliasCiCheckbox, aliasStCheckbox, aliasLgCheckbox];
  allInputs.forEach(el => {
    if (el) {
      el.addEventListener('input', updateOutputs);
      el.addEventListener('change', updateOutputs);
    }
  });

  // Setup copy buttons
  if (copyCommandsBtn) {
    copyCommandsBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(commandsText.textContent).then(() => {
        copyCommandsBtn.textContent = 'Commands Copied! ✅';
        showToast('Config commands copied! 📋');
        setTimeout(() => { copyCommandsBtn.textContent = 'Copy Commands 📋'; }, 2000);
      });
    });
  }

  if (copyFileBtn) {
    copyFileBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(fileText.textContent).then(() => {
        copyFileBtn.textContent = 'File Content Copied! ✅';
        showToast('.gitconfig preview copied! 📋');
        setTimeout(() => { copyFileBtn.textContent = 'Copy File Contents 📋'; }, 2000);
      });
    });
  }

  // Reset to defaults
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      localStorage.removeItem('cfg-username');
      localStorage.removeItem('cfg-email');
      localStorage.removeItem('cfg-branch');
      localStorage.removeItem('cfg-editor');
      localStorage.removeItem('cfg-protocol');
      localStorage.removeItem('cfg-color');

      localStorage.removeItem('cfg-alias-co');
      localStorage.removeItem('cfg-alias-br');
      localStorage.removeItem('cfg-alias-ci');
      localStorage.removeItem('cfg-alias-st');
      localStorage.removeItem('cfg-alias-lg');

      usernameInput.value = 'Danush K';
      emailInput.value = 'danusu2470030@ssn.edu.in';
      branchInput.value = 'main';
      editorSelect.value = 'code --wait';
      if (protocolSelect) protocolSelect.value = 'https';
      colorCheckbox.checked = true;

      if (aliasCoCheckbox) aliasCoCheckbox.checked = true;
      if (aliasBrCheckbox) aliasBrCheckbox.checked = true;
      if (aliasCiCheckbox) aliasCiCheckbox.checked = true;
      if (aliasStCheckbox) aliasStCheckbox.checked = true;
      if (aliasLgCheckbox) aliasLgCheckbox.checked = true;

      updateOutputs();
      showToast('Config reset to defaults! 🔄');
    });
  }

  // Run initial generate
  updateOutputs();
}
// ─────────────────────────────────────────────
// ASSESSMENT CERTIFICATE GENERATOR
// ─────────────────────────────────────────────

function generateCertificate(score, total) {
  const nameInput = document.getElementById('cert-name-input');
  const recipientName = nameInput ? nameInput.value.trim() : 'Danush K';

  if (!recipientName) {
    showToast('⚠️ Please enter your name first!');
    if (nameInput) nameInput.focus();
    return;
  }

  // Save the name
  localStorage.setItem('cert-name', recipientName);

  const today = new Date().toISOString().split('T')[0];
  const scorePercent = Math.round((score / total) * 100);

  const printArea = document.getElementById('certificate-print-area');
  const certModal = document.getElementById('cert-modal');

  if (!printArea || !certModal) return;

  const nameHash = recipientName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const verID = `GL-${nameHash.toString(16).toUpperCase().padStart(4, '0')}-${today.replace(/-/g, '')}`;

  // Render SVG Certificate
  printArea.innerHTML = `
    <svg id="certificate-svg" viewBox="0 0 800 560" style="width: 100%; height: auto; max-width: 700px; background: #0d1117; border: 8px double var(--clr-accent); border-radius: 12px; font-family: 'Inter', sans-serif;">
      <!-- Border lines -->
      <rect x="15" y="15" width="770" height="530" fill="none" stroke="var(--clr-border)" stroke-width="2" />
      <rect x="22" y="22" width="756" height="516" fill="none" stroke="var(--clr-border)" stroke-width="1" stroke-dasharray="4" />
      
      <!-- Corner Accents -->
      <path d="M 25 45 L 25 25 L 45 25" fill="none" stroke="var(--clr-accent)" stroke-width="3" />
      <path d="M 775 45 L 775 25 L 755 25" fill="none" stroke="var(--clr-accent)" stroke-width="3" />
      <path d="M 25 515 L 25 535 L 45 535" fill="none" stroke="var(--clr-accent)" stroke-width="3" />
      <path d="M 775 515 L 775 535 L 755 535" fill="none" stroke="var(--clr-accent)" stroke-width="3" />
      
      <!-- Watermark logo -->
      <text x="400" y="280" font-size="120" fill="rgba(88, 166, 255, 0.025)" font-weight="800" text-anchor="middle" transform="rotate(-30 400 280)" pointer-events="none">⎇ Git</text>
      
      <!-- Content -->
      <text x="400" y="90" font-size="20" fill="var(--clr-accent)" text-anchor="middle" letter-spacing="4" font-weight="700">CERTIFICATE OF COMPLETION</text>
      <text x="400" y="140" font-size="14" fill="var(--clr-text-muted)" text-anchor="middle">This is proudly presented to</text>
      
      <!-- Recipient -->
      <text id="cert-recipient-name" x="400" y="215" font-size="34" fill="#fff" font-weight="800" text-anchor="middle" style="text-shadow: 0 0 10px rgba(88,166,255,0.3); text-transform: uppercase;">${escapeHtml(recipientName)}</text>
      <line x1="200" y1="235" x2="600" y2="235" stroke="var(--clr-accent-2)" stroke-width="2" />
      
      <!-- Text details -->
      <text x="400" y="280" font-size="14" fill="var(--clr-text)" text-anchor="middle">for successfully mastering the foundations of version control and passing the</text>
      <text x="400" y="310" font-size="18" fill="var(--clr-accent-3)" font-weight="700" text-anchor="middle">Interactive Git & GitHub Basics Assessment</text>
      <text id="cert-score-text" x="400" y="340" font-size="14" fill="var(--clr-text-muted)" text-anchor="middle">with a score of ${score} / ${total} (${scorePercent}%)</text>
      
      <!-- Date & Verification -->
      <text x="220" y="445" font-size="11" fill="var(--clr-text-muted)" text-anchor="middle">DATE</text>
      <text id="cert-date-text" x="220" y="420" font-size="14" fill="#fff" text-anchor="middle" font-weight="600">${today}</text>
      <line x1="120" y1="430" x2="320" y2="430" stroke="var(--clr-border)" stroke-width="1" />
      
      <text x="580" y="445" font-size="11" fill="var(--clr-text-muted)" text-anchor="middle">AUTHORIZED SIGNATURE</text>
      <text x="580" y="420" fill="var(--clr-accent-warm)" font-family="cursive" font-size="18" text-anchor="middle" font-weight="600">GitLearning Team</text>
      <line x1="480" y1="430" x2="680" y2="430" stroke="var(--clr-border)" stroke-width="1" />
      
      <!-- Badge -->
      <g transform="translate(370, 385)">
        <circle cx="30" cy="30" r="28" fill="var(--clr-accent)" opacity="0.08" />
        <circle cx="30" cy="30" r="22" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-dasharray="4" />
        <text x="30" y="37" fill="var(--clr-accent)" font-weight="bold" text-anchor="middle">⎇</text>
      </g>
      
      <!-- Credential Verification Code -->
      <text x="400" y="495" font-size="10" fill="var(--clr-text-muted)" text-anchor="middle" font-family="'Fira Code', monospace">Credential Verification ID: ${verID}</text>
    </svg>
  `;

  // Show modal
  certModal.classList.add('show');
}

function setupCertificateEvents() {
  const certModal = document.getElementById('cert-modal');
  const closeBtn = document.getElementById('close-cert-btn');
  const printBtn = document.getElementById('print-cert-btn');
  const downloadBtn = document.getElementById('download-cert-btn');

  if (!certModal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      certModal.classList.remove('show');
    });
  }

  // Close on backdrop click
  certModal.addEventListener('click', (e) => {
    if (e.target === certModal) {
      certModal.classList.remove('show');
    }
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const svgEl = document.getElementById('certificate-svg');
      if (!svgEl) return;
      const svgData = new XMLSerializer().serializeToString(svgEl);
      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement("a");
      downloadLink.href = svgUrl;
      downloadLink.download = `GitLearning_Certificate_${localStorage.getItem('cert-name') || 'Completed'}.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      showToast('Downloaded certificate SVG! ⬇️');
    });
  }
}

const gitProTips = [
  "Use 'git commit --amend' to add forgotten changes or edit the message of your last commit.",
  "Wrote code on the wrong branch? Use 'git stash', switch branches, and run 'git stash pop' to move it.",
  "You can switch back to your previously checked-out branch instantly using 'git checkout -'.",
  "Use 'git status -s' to show your files' status in a compact, easy-to-read format.",
  "A merge conflict is not a bug; it is Git stopping so you can decide which changes are correct.",
  "Create custom shortcuts in Git! Try 'git config --global alias.co checkout' to use 'git co' instead.",
  "Use 'git log --oneline --graph --all' to see a neat text representation of your complete branch structure.",
  "Lost a commit or branch? Don't panic! Check 'git reflog' to find the SHA-1 of deleted history.",
  "To inspect changes that have already been staged for commit, use 'git diff --cached' or 'git diff --staged'.",
  "Use 'git revert <commit>' instead of 'git reset' on public/shared branches to avoid rewriting history that others have pulled.",
  "To see who changed what line in a file and when, use 'git blame <filename>'.",
  "Want to find which commit introduced a bug? Use 'git bisect' to run a binary search through your commit history.",
  "Use 'git commit --amend --no-edit' to add newly staged changes to your last commit without editing the commit message.",
  "Clean untracked files or directories from your working directory using 'git clean -fd'.",
  "To view the commit history of a specific file and see the diffs, run 'git log -p <filename>'."
];



function setupProTipWidget() {
  const textEl = document.getElementById('protip-text');
  const btnEl = document.getElementById('next-tip-btn');
  const wrapperEl = document.getElementById('hero-protip');
  if (!textEl || !wrapperEl) return;

  let currentTipIndex = Math.floor(Math.random() * gitProTips.length);

  function displayTip() {
    textEl.textContent = gitProTips[currentTipIndex];
    wrapperEl.style.opacity = '1';
    wrapperEl.style.transform = 'translateY(0)';
  }

  displayTip();

  if (btnEl) {
    btnEl.addEventListener('click', () => {
      wrapperEl.style.opacity = '0';
      wrapperEl.style.transform = 'translateY(-5px)';
      setTimeout(() => {
        currentTipIndex = (currentTipIndex + 1) % gitProTips.length;
        displayTip();
      }, 250);
    });
  }
}

function setupShortcutsModal() {
  const modal = document.getElementById('shortcuts-modal');
  const toggleBtn = document.getElementById('shortcuts-toggle-btn');
  const closeBtn = document.getElementById('close-shortcuts-modal-btn');
  const overlay = document.getElementById('shortcuts-modal-overlay');

  if (!modal) return;

  window.toggleShortcutsModal = function() {
    if (modal.classList.contains('active')) {
      closeShortcutsModal();
    } else {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }
  };

  window.closeShortcutsModal = function() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (toggleBtn) toggleBtn.addEventListener('click', toggleShortcutsModal);
  if (closeBtn) closeBtn.addEventListener('click', closeShortcutsModal);
  if (overlay) overlay.addEventListener('click', closeShortcutsModal);
}

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    const isEditing = activeEl && (
      activeEl.tagName === 'INPUT' ||
      activeEl.tagName === 'TEXTAREA' ||
      activeEl.isContentEditable
    );

    // 1. Focus command search with Ctrl+/ or Cmd+/
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
      const searchInput = document.getElementById('commands-search');
      if (searchInput) {
        e.preventDefault();
        searchInput.focus();
        showToast('Search focused! 🔍');
      }
    }

    // 2. Escape to close Certificate Modal and Shortcuts Modal
    if (e.key === 'Escape') {
      const certModal = document.getElementById('cert-modal');
      if (certModal && certModal.classList.contains('show')) {
        certModal.classList.remove('show');
      }
      const shortcutsModal = document.getElementById('shortcuts-modal');
      if (shortcutsModal && shortcutsModal.classList.contains('active')) {
        closeShortcutsModal();
      }
    }

    // 2.5 Toggle shortcuts help overlay with '?'
    if (e.key === '?' && !isEditing) {
      e.preventDefault();
      toggleShortcutsModal();
    }

    // 3. Quiz keyboard shortcuts (1, 2, 3, 4 for options, Enter for next)
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
      const isQuizVisible = quizContainer.getBoundingClientRect().top < window.innerHeight && quizContainer.getBoundingClientRect().bottom > 0;
      if (isQuizVisible) {
        const nextBtn = document.getElementById('quiz-next');
        if (nextBtn && nextBtn.classList.contains('show') && e.key === 'Enter') {
          const nameInput = document.getElementById('cert-name-input');
          if (document.activeElement !== nameInput) {
            e.preventDefault();
            nextBtn.click();
            return;
          }
        }

        if (!quizState.answered && ['1', '2', '3', '4'].includes(e.key) && !isEditing) {
          const optIndex = parseInt(e.key, 10) - 1;
          const optBtn = document.getElementById(`quiz-opt-${optIndex}`);
          if (optBtn && !optBtn.disabled) {
            e.preventDefault();
            selectAnswer(optIndex);
          }
        }
      }
    }
  });
}

// ─────────────────────────────────────────────
// GITCODE ARENA ENGINE
// ─────────────────────────────────────────────

let arenaState = {
  activeProblem: null,
  filter: 'all',
  statusFilter: 'all',
  search: '',
  solved: [],
  submissions: {},
  drafts: {}
};

function initArena() {
  const savedSolved = localStorage.getItem('arena-solved');
  if (savedSolved) {
    arenaState.solved = JSON.parse(savedSolved);
  }
  const savedSubmissions = localStorage.getItem('arena-submissions');
  if (savedSubmissions) {
    arenaState.submissions = JSON.parse(savedSubmissions);
  }
  const savedDrafts = localStorage.getItem('arena-drafts');
  if (savedDrafts) {
    arenaState.drafts = JSON.parse(savedDrafts);
  }

  // Setup interactive editor events
  const editor = document.getElementById('arena-code-editor');
  const lineNumbers = document.getElementById('editor-line-numbers');
  if (editor) {
    editor.addEventListener('input', () => {
      updateLineNumbers();
      if (arenaState.activeProblem) {
        arenaState.drafts[arenaState.activeProblem.id] = editor.value;
        localStorage.setItem('arena-drafts', JSON.stringify(arenaState.drafts));
      }
    });

    editor.addEventListener('scroll', () => {
      if (lineNumbers) {
        lineNumbers.scrollTop = editor.scrollTop;
      }
    });

    editor.addEventListener('keydown', (e) => {
      const val = editor.value;
      const start = editor.selectionStart;
      const end = editor.selectionEnd;

      // Run / Submit Code Shortcuts
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        if (e.shiftKey) {
          executeArenaCode(true);
        } else {
          executeArenaCode(false);
        }
        return;
      }

      // Tab Key (2 spaces)
      if (e.key === 'Tab') {
        e.preventDefault();
        editor.value = val.substring(0, start) + '  ' + val.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 2;
        updateLineNumbers();
        return;
      }

      // Auto pairs
      const pairs = {
        '(': ')',
        '{': '}',
        '[': ']',
        '"': '"',
        "'": "'",
        '`': '`'
      };

      if (pairs[e.key] !== undefined) {
        e.preventDefault();
        const closeChar = pairs[e.key];
        editor.value = val.substring(0, start) + e.key + closeChar + val.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 1;
        updateLineNumbers();
      }
    });
  }

  const searchInput = document.getElementById('arena-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      arenaState.search = e.target.value;
      renderArenaDashboard();
    });
  }

  const filterBtns = document.querySelectorAll('.filter-btn:not(.status-filter-btn)');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      arenaState.filter = btn.dataset.filter;
      renderArenaDashboard();
    });
  });

  const statusBtns = document.querySelectorAll('.status-filter-btn');
  statusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      statusBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      arenaState.statusFilter = btn.dataset.statusFilter;
      renderArenaDashboard();
    });
  });

  const backBtn = document.getElementById('arena-back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (arenaState.activeProblem) {
        const editor = document.getElementById('arena-code-editor');
        if (editor) {
          arenaState.drafts[arenaState.activeProblem.id] = editor.value;
          localStorage.setItem('arena-drafts', JSON.stringify(arenaState.drafts));
        }
      }
      arenaState.activeProblem = null;
      document.getElementById('arena-workspace').style.display = 'none';
      document.getElementById('arena-dashboard').style.display = 'block';
      
      const btnDashboard = document.getElementById('nav-btn-dashboard');
      const btnWorkspace = document.getElementById('nav-btn-workspace');
      if (btnDashboard) btnDashboard.classList.add('active');
      if (btnWorkspace) btnWorkspace.classList.remove('active');

      renderArenaDashboard();
    });
  }

  const prevBtn = document.getElementById('arena-prev-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => navigateProblem(-1));
  }
  const nextBtn = document.getElementById('arena-next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => navigateProblem(1));
  }

  function navigateProblem(direction) {
    if (!arenaState.activeProblem) return;
    const editor = document.getElementById('arena-code-editor');
    if (editor) {
      arenaState.drafts[arenaState.activeProblem.id] = editor.value;
      localStorage.setItem('arena-drafts', JSON.stringify(arenaState.drafts));
    }
    const currentIndex = arenaProblemsData.findIndex(p => p.id === arenaState.activeProblem.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) {
      nextIndex = arenaProblemsData.length - 1;
    } else if (nextIndex >= arenaProblemsData.length) {
      nextIndex = 0;
    }
    loadProblem(arenaProblemsData[nextIndex].id);
  }

  // Runner buttons
  const runBtn = document.getElementById('arena-run-btn');
  if (runBtn) {
    runBtn.addEventListener('click', () => executeArenaCode(false));
  }
  const submitBtn = document.getElementById('arena-submit-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => executeArenaCode(true));
  }
  const resetBtn = document.getElementById('arena-reset-code-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (arenaState.activeProblem && confirm('Are you sure you want to reset the editor to the template?')) {
        const editor = document.getElementById('arena-code-editor');
        if (editor) {
          editor.value = arenaState.activeProblem.template;
          updateLineNumbers();
        }
      }
    });
  }

  const formatBtn = document.getElementById('arena-format-code-btn');
  if (formatBtn) {
    formatBtn.addEventListener('click', () => {
      const editor = document.getElementById('arena-code-editor');
      if (editor && editor.value.trim()) {
        editor.value = formatJSCode(editor.value);
        updateLineNumbers();
        showToast('Code formatted! 🧹');
      }
    });
  }

  // Reset Progress Button listener
  const resetProgressBtn = document.getElementById('arena-reset-progress-btn');
  if (resetProgressBtn) {
    resetProgressBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all your coding progress, solved challenges, and submission history? This action cannot be undone.')) {
        localStorage.removeItem('arena-solved');
        localStorage.removeItem('arena-submissions');
        localStorage.removeItem('arena-drafts');
        arenaState.solved = [];
        arenaState.submissions = {};
        arenaState.drafts = {};
        renderArenaDashboard();
        showToast('All progress reset successfully! 🔄');
      }
    });
  }

  // Export Progress Button listener
  const exportBtn = document.getElementById('arena-export-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const data = {
        solved: arenaState.solved,
        submissions: arenaState.submissions,
        drafts: arenaState.drafts
      };
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "gitcode-arena-backup.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Progress backup exported successfully! 📥');
    });
  }

  // Import Progress Button listener
  const importBtn = document.getElementById('arena-import-btn');
  const importInput = document.getElementById('arena-import-file-input');
  if (importBtn && importInput) {
    importBtn.addEventListener('click', () => {
      importInput.click();
    });
    importInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(evt) {
        try {
          const data = JSON.parse(evt.target.result);
          if (data && (Array.isArray(data.solved) || data.submissions || data.drafts)) {
            if (data.solved) {
              arenaState.solved = data.solved;
              localStorage.setItem('arena-solved', JSON.stringify(data.solved));
            }
            if (data.submissions) {
              arenaState.submissions = data.submissions;
              localStorage.setItem('arena-submissions', JSON.stringify(data.submissions));
            }
            if (data.drafts) {
              arenaState.drafts = data.drafts;
              localStorage.setItem('arena-drafts', JSON.stringify(data.drafts));
            }
            renderArenaDashboard();
            showToast('Backup restored successfully! 📤');
          } else {
            showToast('Invalid backup file structure.');
          }
        } catch (err) {
          showToast('Error parsing backup file.');
        }
      };
      reader.readAsText(file);
      importInput.value = ''; // reset input
    });
  }

  // Copy Solution button listener
  const copySolutionBtn = document.getElementById('arena-copy-solution-btn');
  if (copySolutionBtn) {
    copySolutionBtn.addEventListener('click', () => {
      const codeText = document.getElementById('solution-code-text');
      if (codeText) {
        const textToCopy = codeText.innerText || codeText.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
          copySolutionBtn.textContent = 'Copied! ✓';
          copySolutionBtn.style.borderColor = 'var(--clr-accent-3)';
          copySolutionBtn.style.color = 'var(--clr-accent-3)';
          showToast('Reference solution copied! 📋');
          setTimeout(() => {
            copySolutionBtn.textContent = 'Copy Solution 📋';
            copySolutionBtn.style.borderColor = '';
            copySolutionBtn.style.color = '';
          }, 1500);
        }).catch(() => {
          showToast('Copy failed — try manually.');
        });
      }
    });
  }

  // Collapsible console header
  const consoleHeader = document.getElementById('console-header');
  const consoleBody = document.getElementById('console-body');
  const consoleArrow = consoleHeader ? consoleHeader.querySelector('.console-arrow') : null;
  if (consoleHeader && consoleBody) {
    consoleHeader.addEventListener('click', () => {
      const isHidden = consoleBody.style.display === 'none';
      consoleBody.style.display = isHidden ? 'block' : 'none';
      if (consoleArrow) {
        consoleArrow.classList.toggle('collapsed', !isHidden);
      }
    });
  }

  // Console Tab switcher
  const consoleTabs = document.querySelectorAll('.console-tab');
  consoleTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid toggling collapse when clicking a tab
      consoleTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.dataset.consoleTab;
      document.getElementById('console-tab-result').style.display = target === 'result' ? 'block' : 'none';
      document.getElementById('console-tab-logs').style.display = target === 'logs' ? 'block' : 'none';
      document.getElementById('console-tab-custom').style.display = target === 'custom' ? 'block' : 'none';
    });
  });

  // Workspace Pane Tab switcher
  const paneTabs = document.querySelectorAll('.pane-tab');
  paneTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      paneTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.dataset.paneTab;
      document.getElementById('pane-description-content').style.display = target === 'desc' ? 'block' : 'none';
      document.getElementById('pane-submissions-content').style.display = target === 'submissions' ? 'block' : 'none';
      document.getElementById('pane-discussion-content').style.display = target === 'discussion' ? 'block' : 'none';
      document.getElementById('pane-solution-content').style.display = target === 'solution' ? 'block' : 'none';
    });
  });

  // Custom Input checkbox toggle
  const customCheck = document.getElementById('arena-custom-input-check');
  const customWrapper = document.getElementById('arena-custom-input-wrapper');
  if (customCheck && customWrapper) {
    customCheck.addEventListener('change', (e) => {
      customWrapper.style.display = e.target.checked ? 'flex' : 'none';
    });
  }

  // Theme selection initialization
  const themeSelect = document.getElementById('arena-theme-select');
  const editorWrapper = document.querySelector('.editor-wrapper');
  if (themeSelect && editorWrapper) {
    const savedTheme = localStorage.getItem('arena-theme') || 'vscode-dark';
    themeSelect.value = savedTheme;
    editorWrapper.classList.add(`theme-${savedTheme}`);

    themeSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      localStorage.setItem('arena-theme', selected);
      
      // Reset classes and apply new theme
      editorWrapper.className = 'editor-wrapper';
      editorWrapper.classList.add(`theme-${selected}`);
    });
  }
  const submitCommentBtn = document.getElementById('submit-comment-btn');
  if (submitCommentBtn) {
    submitCommentBtn.addEventListener('click', () => {
      const input = document.getElementById('discussion-comment-input');
      if (!input || !input.value.trim() || !arenaState.activeProblem) return;
      
      const problemId = arenaState.activeProblem.id;
      const key = `arena-comments-${problemId}`;
      const saved = localStorage.getItem(key);
      const comments = saved ? JSON.parse(saved) : (defaultDiscussionComments[problemId] || [
        { author: "git_explorer", time: "3 hours ago", text: "I wonder if there is an edge case where we need to trim whitespaces." },
        { author: "code_ninja", time: "Yesterday", text: "This is a classical version control helper function. Try to write simple checks!" }
      ]);
      
      comments.push({
        author: "You (Developer)",
        time: "Just now",
        text: input.value.trim()
      });
      
      localStorage.setItem(key, JSON.stringify(comments));
      input.value = '';
      renderDiscussion(problemId);
      showToast('Comment posted! 💬');
    });
  }

  initSubmissionModalEvents();
  renderArenaDashboard();
}

function renderArenaDashboard() {
  const listBody = document.getElementById('problems-list-body');
  if (!listBody) return;

  let problems = arenaProblemsData;
  if (arenaState.filter !== 'all') {
    problems = problems.filter(p => p.difficulty === arenaState.filter);
  }
  if (arenaState.statusFilter !== 'all') {
    problems = problems.filter(p => {
      const isSolved = arenaState.solved.includes(p.id);
      return arenaState.statusFilter === 'solved' ? isSolved : !isSolved;
    });
  }
  if (arenaState.search) {
    const q = arenaState.search.toLowerCase();
    problems = problems.filter(p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }

  updateArenaStats();

  if (problems.length === 0) {
    listBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; color: var(--clr-text-muted); padding: 40px 0;">
          🔍 No challenges found matching filters.
        </td>
      </tr>
    `;
    return;
  }

  listBody.innerHTML = problems.map(p => {
    const isSolved = arenaState.solved.includes(p.id);
    const statusIcon = isSolved ? '<span class="problem-status-icon solved">✓</span>' : '<span class="problem-status-icon unsolved">○</span>';
    const diffLabel = p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1);
    
    return `
      <tr id="problem-row-${p.id}">
        <td>${statusIcon}</td>
        <td class="problem-title-cell" onclick="loadProblem(${p.id})">${p.title}</td>
        <td><span class="problem-category-tag">${p.category}</span></td>
        <td><span class="diff-badge ${p.difficulty}">${diffLabel}</span></td>
        <td style="text-align: center;">
          <button class="btn btn-sm ${isSolved ? 'btn-outline' : 'btn-primary'}" style="padding: 4px 12px; font-size: 0.8rem; border-radius: var(--radius-sm);" onclick="loadProblem(${p.id})">
            ${isSolved ? 'Retry' : 'Solve'}
          </button>
        </td>
      </tr>
    `;
  }).join('');
  renderDailyChallenge();
  renderLeaderboard();
  renderHeatmap();
}

function renderHeatmap() {
  const grid = document.getElementById('heatmap-grid');
  const streakBadge = document.getElementById('streak-count-badge');
  if (!grid) return;

  const times = [];
  Object.keys(arenaState.submissions).forEach(probId => {
    const list = arenaState.submissions[probId] || [];
    list.forEach(sub => {
      if (sub.status === 'passed') {
        times.push(new Date(sub.time));
      }
    });
  });

  let streak = 0;
  const submissionDates = new Set(times.map(d => d.toDateString()));
  let checkDate = new Date();
  
  if (submissionDates.has(checkDate.toDateString())) {
    streak = 1;
    while (true) {
      checkDate.setDate(checkDate.getDate() - 1);
      if (submissionDates.has(checkDate.toDateString())) {
        streak++;
      } else {
        break;
      }
    }
  } else {
    checkDate.setDate(checkDate.getDate() - 1);
    if (submissionDates.has(checkDate.toDateString())) {
      streak = 1;
      while (true) {
        checkDate.setDate(checkDate.getDate() - 1);
        if (submissionDates.has(checkDate.toDateString())) {
          streak++;
        } else {
          break;
        }
      }
    }
  }

  if (streakBadge) {
    streakBadge.textContent = `${streak} Day Streak ${streak > 0 ? '🔥' : '❄️'}`;
  }

  const cellsHtml = [];
  const oneDayMs = 24 * 60 * 60 * 1000;
  const now = Date.now();

  for (let i = 104; i >= 0; i--) {
    const day = new Date(now - i * oneDayMs);
    const dayStr = day.toDateString();
    const count = times.filter(t => t.toDateString() === dayStr).length;

    let bgClass = 'var(--clr-bg-3)';
    let titleAttr = `${day.toLocaleDateString()}: No solved problems`;
    
    if (count > 0) {
      titleAttr = `${day.toLocaleDateString()}: ${count} solved problem${count > 1 ? 's' : ''}`;
      if (count === 1) bgClass = 'rgba(63, 185, 80, 0.35)';
      else if (count === 2) bgClass = 'rgba(63, 185, 80, 0.65)';
      else bgClass = 'rgba(63, 185, 80, 1.0)';
    }

    cellsHtml.push(`
      <div style="aspect-ratio: 1; background: ${bgClass}; border-radius: 2px;" title="${titleAttr}"></div>
    `);
  }

  grid.innerHTML = cellsHtml.join('');
}

function renderLeaderboard() {
  const container = document.getElementById('git-leaderboard-card');
  if (!container) return;

  const userSolvedCount = arenaState.solved.length;
  const userXP = userSolvedCount * 50;

  const data = [
    { name: "git_master_99", solved: 10, xp: 500, avatar: "🥇" },
    { name: "rebase_ninja", solved: 8, xp: 400, avatar: "🥈" },
    { name: "cherry_picker", solved: 7, xp: 350, avatar: "🥉" },
    { name: "conflict_guru", solved: 6, xp: 300, avatar: "👤" },
    { name: "commit_commander", solved: 4, xp: 200, avatar: "👤" },
    { name: "You (Developer)", solved: userSolvedCount, xp: userXP, avatar: "🚀", isUser: true }
  ];

  data.sort((a, b) => b.solved - a.solved || b.xp - a.xp);

  data.forEach((item, idx) => {
    item.rank = idx + 1;
    if (item.rank === 1 && !item.isUser) item.avatar = "🥇";
    else if (item.rank === 2 && !item.isUser) item.avatar = "🥈";
    else if (item.rank === 3 && !item.isUser) item.avatar = "🥉";
    else if (!item.isUser) item.avatar = "👤";
  });

  const listHtml = data.map(item => {
    const isUserClass = item.isUser ? 'leaderboard-row-user' : '';
    const rankBadgeClass = item.rank <= 3 ? `rank-badge-${item.rank}` : 'rank-badge-other';
    return `
      <div class="leaderboard-row ${isUserClass}">
        <div class="leaderboard-left">
          <span class="rank-badge ${rankBadgeClass}">${item.rank}</span>
          <span class="leaderboard-avatar">${item.avatar}</span>
          <span class="leaderboard-name">${item.name}</span>
        </div>
        <div class="leaderboard-right">
          <span class="leaderboard-solved-count">${item.solved} solved</span>
          <span class="leaderboard-xp">${item.xp} XP</span>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="leaderboard-header">
      <div class="leaderboard-title-row">
        <span class="leaderboard-icon">👑</span>
        <h4>Global Leaderboard</h4>
      </div>
      <span class="leaderboard-subtitle">Live Rankings</span>
    </div>
    <div class="leaderboard-list">
      ${listHtml}
    </div>
  `;
}

function getDailyChallenge() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  const idx = day % arenaProblemsData.length;
  return arenaProblemsData[idx];
}

function renderDailyChallenge() {
  const container = document.getElementById('daily-challenge-card');
  if (!container) return;

  const problem = getDailyChallenge();
  const isSolved = arenaState.solved.includes(problem.id);
  const diffLabel = problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1);
  
  if (isSolved) {
    container.classList.add('solved-challenge');
  } else {
    container.classList.remove('solved-challenge');
  }

  // Create a clean description snippet (remove HTML tags for display)
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = problem.desc;
  let textDesc = tempDiv.textContent || tempDiv.innerText || "";
  if (textDesc.length > 150) {
    textDesc = textDesc.substring(0, 150).trim() + "...";
  }

  container.innerHTML = `
    <div class="daily-challenge-header">
      <div class="daily-title-row">
        <span class="daily-icon">${isSolved ? '✅' : '🔥'}</span>
        <span class="daily-label">${isSolved ? 'DAILY CHALLENGE COMPLETED' : 'DAILY CODING CHALLENGE'}</span>
      </div>
      <div class="daily-timer-wrapper">
        <span>Resets in:</span>
        <span id="daily-challenge-timer" class="daily-timer">00:00:00</span>
      </div>
    </div>
    <div class="daily-challenge-body">
      <div class="daily-problem-details">
        <h4 class="daily-problem-title">${problem.title}</h4>
        <div class="daily-problem-meta">
          <span class="diff-badge ${problem.difficulty}">${diffLabel}</span>
          <span class="category-badge">${problem.category}</span>
          <span class="reward-badge">✨ +50 XP</span>
        </div>
        <p class="daily-problem-desc">${textDesc}</p>
      </div>
      <button id="daily-solve-btn" class="btn ${isSolved ? 'btn-outline' : 'btn-primary'} daily-solve-btn">
        ${isSolved ? 'Review Solution' : 'Solve Challenge'}
      </button>
    </div>
  `;

  const solveBtn = document.getElementById('daily-solve-btn');
  if (solveBtn) {
    solveBtn.onclick = () => {
      document.getElementById('arena-dashboard').style.display = 'none';
      document.getElementById('arena-workspace').style.display = 'block';
      loadProblem(problem.id);
    };
  }

  // Start real-time countdown timer to midnight
  updateDailyChallengeTimer();
  if (window.dailyTimerInterval) clearInterval(window.dailyTimerInterval);
  window.dailyTimerInterval = setInterval(updateDailyChallengeTimer, 1000);
}

function updateDailyChallengeTimer() {
  const timerElement = document.getElementById('daily-challenge-timer');
  if (!timerElement) return;

  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0); // exact midnight tomorrow
  const diffMs = tomorrow - now;

  const hours = String(Math.floor(diffMs / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((diffMs % (1000 * 60)) / 1000)).padStart(2, '0');

  timerElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateArenaStats() {
  const solvedCount = arenaState.solved.length;
  const totalCount = arenaProblemsData.length;
  
  const solvedRatioText = document.getElementById('arena-solved-ratio');
  if (solvedRatioText) {
    solvedRatioText.textContent = `${solvedCount}/${totalCount} Solved`;
  }

  const difficulties = ['easy', 'medium', 'hard'];
  difficulties.forEach(diff => {
    const totalDiff = arenaProblemsData.filter(p => p.difficulty === diff).length;
    const solvedDiff = arenaProblemsData.filter(p => p.difficulty === diff && arenaState.solved.includes(p.id)).length;
    
    const countEl = document.getElementById(`${diff}-solved`);
    if (countEl) {
      countEl.textContent = `${solvedDiff}/${totalDiff}`;
    }

    const ringFill = document.getElementById(`ring-${diff}`);
    if (ringFill) {
      const circumference = 188.4;
      const pct = totalDiff > 0 ? (solvedDiff / totalDiff) : 0;
      ringFill.style.strokeDashoffset = circumference * (1 - pct);
    }
  });
}

function loadProblem(id) {
  const problem = arenaProblemsData.find(p => p.id === id);
  if (!problem) return;

  arenaState.activeProblem = problem;

  // Toggle views
  document.getElementById('arena-dashboard').style.display = 'none';
  document.getElementById('arena-workspace').style.display = 'block';

  // Toggle navbar links active class
  const btnDashboard = document.getElementById('nav-btn-dashboard');
  const btnWorkspace = document.getElementById('nav-btn-workspace');
  if (btnDashboard) btnDashboard.classList.remove('active');
  if (btnWorkspace) btnWorkspace.classList.add('active');

  // Set header info
  const problemIdEl = document.getElementById('active-problem-id');
  if (problemIdEl) {
    problemIdEl.textContent = `${problem.id}.`;
  }
  const isSolved = arenaState.solved.includes(problem.id);
  const titleEl = document.getElementById('active-problem-title');
  if (titleEl) {
    titleEl.innerHTML = `${problem.title} ${isSolved ? '<span class="solved-checkmark-badge" style="color: var(--clr-accent-3); font-size: 1.1rem; margin-left: 6px; text-shadow: 0 0 8px rgba(63, 185, 80, 0.5);" title="Solved!">✓</span>' : ''}`;
  }
  const diffBadge = document.getElementById('active-problem-difficulty');
  diffBadge.textContent = problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1);
  diffBadge.className = `diff-badge ${problem.difficulty}`;

  // Render details
  document.getElementById('pane-description-content').innerHTML = problem.desc;
  
  // Set active tab to description
  const descTab = document.querySelector('.pane-tab[data-pane-tab="desc"]');
  if (descTab) descTab.click();

  // Render submissions
  renderSubmissions(problem.id);

  // Load editor content
  const editor = document.getElementById('arena-code-editor');
  if (editor) {
    editor.value = arenaState.drafts[problem.id] || problem.template;
    
    // Trigger line numbers update if function is defined
    if (typeof updateLineNumbers === 'function') {
      updateLineNumbers();
    }

    setTimeout(() => editor.focus(), 100);
  }

  // Reset Console
  const statusBadge = document.getElementById('compiler-status-badge');
  if (statusBadge) {
    statusBadge.className = 'status-badge neutral';
    statusBadge.textContent = 'Run Code first';
  }
  const details = document.getElementById('testcases-result-details');
  if (details) details.innerHTML = '';
  const runtime = document.getElementById('runtime-display');
  if (runtime) runtime.textContent = '';
  const logs = document.getElementById('console-logs-output');
  if (logs) logs.textContent = 'No console logs.';
  const beatsStats = document.getElementById('beats-stats-container');
  if (beatsStats) beatsStats.style.display = 'none';

  // Auto fill custom testcase input
  const customText = document.getElementById('arena-custom-input-text');
  const customCheck = document.getElementById('arena-custom-input-check');
  const customWrapper = document.getElementById('arena-custom-input-wrapper');
  if (customText && problem.testCases[0]) {
    customText.value = JSON.stringify(problem.testCases[0].input);
  }
  if (customCheck) customCheck.checked = false;
  if (customWrapper) customWrapper.style.display = 'none';

  // Solution locks update
  const isSolved = arenaState.solved.includes(problem.id);
  const lockOverlay = document.getElementById('solution-locked-overlay');
  const unlockedContent = document.getElementById('solution-unlocked-content');
  const unlockBtn = document.getElementById('unlock-solution-btn');
  const solutionTab = document.querySelector('.pane-tab[data-pane-tab="solution"]');

  if (solutionTab) {
    solutionTab.textContent = isSolved ? 'Solution 🔓' : 'Solution 🔒';
  }

  const approachText = document.getElementById('solution-approach-text');
  const codeText = document.getElementById('solution-code-text');
  if (approachText) approachText.innerText = problem.solutionApproach || 'No approach details available.';
  if (codeText) codeText.innerText = problem.solutionCode || '// No reference code available.';

  function unlockSolutionView() {
    if (lockOverlay) lockOverlay.style.display = 'none';
    if (unlockedContent) {
      unlockedContent.style.filter = 'none';
      unlockedContent.style.pointerEvents = 'auto';
      unlockedContent.style.userSelect = 'auto';
    }
    if (solutionTab) solutionTab.textContent = 'Solution 🔓';
  }

  if (isSolved) {
    unlockSolutionView();
  } else {
    if (lockOverlay) lockOverlay.style.display = 'flex';
    if (unlockedContent) {
      unlockedContent.style.filter = 'blur(4px)';
      unlockedContent.style.pointerEvents = 'none';
      unlockedContent.style.userSelect = 'none';
    }
    if (unlockBtn) {
      unlockBtn.onclick = () => {
        if (confirm('Revealing the solution will show the optimal code before you solve it. Are you sure you want to unlock?')) {
          unlockSolutionView();
        }
      };
    }
  }
  renderDiscussion(problem.id);
}

const defaultDiscussionComments = {
  1: [
    { author: "git_wizard", time: "2 hours ago", text: "Pro tip: using regex with `.replace(/[^a-z0-9\\-\\/]/g, '')` makes sanitization super clean!" },
    { author: "bug_hunter", time: "1 day ago", text: "Don't forget to handle multiple consecutive hyphens, e.g. '--' should squash to '-'." }
  ],
  2: [
    { author: "commit_czar", time: "3 hours ago", text: "This Conventional Commits validator is great. Remember to validate the description length!" },
    { author: "semver_coder", time: "2 days ago", text: "Does this handle scopes with hyphens like feat(auth-service): ? Yes, the constraints scope only has letters/numbers/hyphens." }
  ],
  3: [
    { author: "init_master", time: "5 hours ago", text: "Make sure to return the exact string array of commands. Spaces matter!" }
  ]
};

function renderDiscussion(problemId) {
  const container = document.getElementById('discussion-comments-list');
  if (!container) return;

  const key = `arena-comments-${problemId}`;
  const saved = localStorage.getItem(key);
  const comments = saved ? JSON.parse(saved) : (defaultDiscussionComments[problemId] || [
    { author: "git_explorer", time: "3 hours ago", text: "I wonder if there is an edge case where we need to trim whitespaces." },
    { author: "code_ninja", time: "Yesterday", text: "This is a classical version control helper function. Try to write simple checks!" }
  ]);
  
  if (comments.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--clr-text-muted); padding: 20px 0;">💬 No comments yet. Be the first to share your approach!</p>`;
    return;
  }

  container.innerHTML = comments.map(c => `
    <div style="background: var(--clr-bg-2); border: 1px solid var(--clr-border); border-radius: var(--radius-sm); padding: 12px; display: flex; flex-direction: column; gap: 6px; margin-bottom: 8px;">
      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem;">
        <span style="font-weight: 700; color: var(--clr-accent);">${escapeHtml(c.author)}</span>
        <span style="color: var(--clr-text-muted);">${escapeHtml(c.time)}</span>
      </div>
      <p style="margin: 0; font-size: 0.85rem; color: var(--clr-text); white-space: pre-wrap; line-height: 1.4;">${escapeHtml(c.text)}</p>
    </div>
  `).join('');
}

function renderSubmissions(problemId) {
  const container = document.getElementById('submissions-list');
  if (!container) return;

  const history = arenaState.submissions[problemId] || [];
  if (history.length === 0) {
    container.innerHTML = `<p class="no-submissions">No submissions yet. Solve the problem to see your history!</p>`;
    return;
  }

  container.innerHTML = history.map((sub, idx) => {
    const statusClass = sub.status === 'passed' ? 'passed' : 'failed';
    const statusLabel = sub.status === 'passed' ? 'Accepted' : 'Wrong Answer';
    const dateStr = new Date(sub.time).toLocaleString();
    const hasCode = !!sub.code;
    return `
      <div class="submission-history-item" style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid var(--clr-border); gap: 12px;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <span class="sub-status ${statusClass}">${statusLabel}</span>
          <span class="sub-time" style="font-size: 0.75rem; color: var(--clr-text-muted);">${dateStr}</span>
        </div>
        <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
          <span style="font-size: 0.85rem; color: var(--clr-text-muted);">Runtime: ${sub.runtime}</span>
          ${hasCode ? `<button class="btn btn-sm btn-outline" style="padding: 2px 8px; font-size: 0.7rem; border-radius: var(--radius-sm);" onclick="openSubmissionCodeModal(${problemId}, ${idx})">View Code 💻</button>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function openSubmissionCodeModal(problemId, index) {
  const modal = document.getElementById('sub-code-modal');
  const modalTitle = document.getElementById('sub-code-modal-title');
  const modalBadge = document.getElementById('sub-code-modal-badge');
  const modalText = document.getElementById('sub-code-modal-text');
  const modalLogs = document.getElementById('sub-code-modal-logs');

  if (!modal) return;

  const problem = arenaProblemsData.find(p => p.id === problemId);
  const sub = arenaState.submissions[problemId] ? arenaState.submissions[problemId][index] : null;

  if (!sub) return;

  if (modalTitle) modalTitle.textContent = problem ? `${problem.title} Submission` : 'Submission Detail';
  if (modalBadge) {
    modalBadge.textContent = sub.status === 'passed' ? 'Accepted' : 'Wrong Answer';
    modalBadge.className = `basics-modal-badge ${sub.status === 'passed' ? 'cat-local' : 'cat-remote'}`;
    modalBadge.style.background = sub.status === 'passed' ? 'var(--clr-accent-3)' : 'var(--clr-accent-warm)';
  }
  if (modalText) {
    modalText.textContent = sub.code || '// No code recorded for this submission.';
  }
  if (modalLogs) {
    modalLogs.textContent = sub.logs || 'No console logs outputted.';
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function initSubmissionModalEvents() {
  const modal = document.getElementById('sub-code-modal');
  const closeBtn = document.getElementById('close-sub-code-modal-btn');
  const overlay = document.getElementById('sub-code-modal-overlay');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);
}

function updateLineNumbers() {
  const textarea = document.getElementById('arena-code-editor');
  const lineNumbers = document.getElementById('editor-line-numbers');
  if (!textarea || !lineNumbers) return;

  const lines = textarea.value.split('\n');
  const lineCount = Math.max(lines.length, 1);
  
  let html = '';
  for (let i = 1; i <= lineCount; i++) {
    html += `<div>${i}</div>`;
  }
  lineNumbers.innerHTML = html;
}

function formatJSCode(code) {
  const lines = code.split('\n');
  let formatted = [];
  let indentLevel = 0;
  
  for (let line of lines) {
    let trimmed = line.trim();
    if (trimmed === '') {
      formatted.push('');
      continue;
    }
    
    let startsWithClose = /^[\]\}]/.test(trimmed);
    if (startsWithClose) {
      indentLevel = Math.max(0, indentLevel - 1);
    }
    
    formatted.push('  '.repeat(indentLevel) + trimmed);
    
    let netBrackets = 0;
    for (let char of trimmed) {
      if (char === '{' || char === '[') netBrackets++;
      if (char === '}' || char === ']') netBrackets--;
    }
    
    if (!startsWithClose) {
      indentLevel += netBrackets;
    } else {
      indentLevel += (netBrackets + 1);
    }
    indentLevel = Math.max(0, indentLevel);
  }
  return formatted.join('\n');
}

function executeArenaCode(isSubmit = false) {
  const problem = arenaState.activeProblem;
  if (!problem) return;

  const langSelect = document.getElementById('arena-lang-select');
  const lang = langSelect ? langSelect.value : 'javascript';
  const editor = document.getElementById('arena-code-editor');
  const code = editor ? editor.value : '';

  const statusBadge = document.getElementById('compiler-status-badge');
  const runtimeDisplay = document.getElementById('runtime-display');
  const details = document.getElementById('testcases-result-details');
  const logsOutput = document.getElementById('console-logs-output');

  // Open console body if collapsed
  const consoleBody = document.getElementById('console-body');
  const consoleArrow = document.querySelector('.console-arrow');
  if (consoleBody && consoleBody.style.display === 'none') {
    consoleBody.style.display = 'block';
    if (consoleArrow) consoleArrow.classList.remove('collapsed');
  }

  // Switch to "Result" tab in console
  const resultTab = document.querySelector('.console-tab[data-console-tab="result"]');
  if (resultTab) resultTab.click();

  if (lang !== 'javascript') {
    // Simulated Python execution
    statusBadge.className = 'status-badge success';
    statusBadge.textContent = 'Accepted (Simulated)';
    runtimeDisplay.textContent = 'Runtime: ~12ms';
    logsOutput.textContent = 'Python engine loaded (Mock environment).\nStdout: All tests passed.';
    details.innerHTML = `
      <div class="testcase-pill">
        <div class="testcase-pill-header passed">
          <span>Testcase 1 (Python Mock)</span>
          <span style="color: var(--clr-accent-3);">PASSED</span>
        </div>
      </div>
    `;
    if (isSubmit) {
      if (!arenaState.solved.includes(problem.id)) {
        arenaState.solved.push(problem.id);
        localStorage.setItem('arena-solved', JSON.stringify(arenaState.solved));
        const titleEl = document.getElementById('active-problem-title');
        if (titleEl && !titleEl.querySelector('.solved-checkmark-badge')) {
          titleEl.innerHTML += ` <span class="solved-checkmark-badge" style="color: var(--clr-accent-3); font-size: 1.1rem; margin-left: 6px; text-shadow: 0 0 8px rgba(63, 185, 80, 0.5);" title="Solved!">✓</span>`;
        }
      }
      showToast('Solved with Python (Mock)! 🎉');
    }
    return;
  }

  // Live JavaScript execution
  const originalLog = console.log;
  let logsCaptured = [];
  console.log = function(...args) {
    logsCaptured.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
    originalLog.apply(console, args);
  };

  const customCheck = document.getElementById('arena-custom-input-check');
  const useCustom = !isSubmit && customCheck ? customCheck.checked : false;
  const customText = document.getElementById('arena-custom-input-text');
  const customInputVal = customText ? customText.value : '';

  const entryPoints = {
    1: "sanitizeBranchName",
    2: "isValidCommitMessage",
    3: "getGitInitCommands",
    4: "parseGitLog",
    5: "parseSemVer",
    6: "resolveConflict",
    7: "findStaleBranches",
    8: "parseGitStatus",
    9: "twoSum",
    10: "mergeIntervals",
    11: "matchBranchPattern",
    12: "squashCommits",
    13: "filterCommitLogs"
  };

  const functionName = entryPoints[problem.id];
  let allPassed = true;
  let resultsHtml = '';
  let executionTime = 0;

  let customArgs = [];
  if (useCustom) {
    try {
      const parsed = JSON.parse(customInputVal);
      customArgs = Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
      if (customInputVal.trim().startsWith('[') || customInputVal.trim().startsWith('{')) {
        allPassed = false;
        resultsHtml = `
          <div class="testcase-pill" style="border-color: var(--clr-accent-warm);">
            <div class="testcase-pill-header failed">
              <span>Custom Testcase Parsing Error</span>
              <span style="color: var(--clr-accent-warm);">ERROR</span>
            </div>
            <div class="testcase-pill-body" style="display: flex;">
              <div class="testcase-field">
                <span class="testcase-field-label">Error Details</span>
                <pre class="testcase-field-value error-trace">Failed to parse custom arguments array: ${escapeHtml(e.message)}</pre>
              </div>
            </div>
          </div>
        `;
        statusBadge.className = 'status-badge error';
        statusBadge.textContent = 'Runtime Error';
        details.innerHTML = resultsHtml;
        console.log = originalLog;
        return;
      }
      customArgs = [customInputVal];
    }
  }

  let tcList = problem.testCases;
  if (useCustom) {
    tcList = [{ input: customArgs, expected: null, isCustom: true }];
  }

  try {
    // Compile code
    const compilationString = `${code}\n;if (typeof ${functionName} !== 'function') { throw new Error("Function '${functionName}' is not defined"); } return ${functionName};`;
    const startTime = performance.now();
    const userFunction = new Function(compilationString)();
    executionTime = performance.now() - startTime;

    let tabsHtml = '<div style="display: flex; gap: 8px; border-bottom: 1px solid var(--clr-border); padding-bottom: 8px; margin-bottom: 12px; flex-wrap: wrap;">';
    let contentsHtml = '';

    tcList.forEach((tc, idx) => {
      let passed = false;
      let output = null;
      let errorMsg = '';
      
      try {
        const inputsClone = JSON.parse(JSON.stringify(tc.input));
        output = userFunction.apply(null, inputsClone);
        passed = tc.isCustom ? true : arenaCompareOutputs(output, tc.expected);
      } catch (err) {
        passed = false;
        errorMsg = err.message + '\n' + err.stack;
      }

      if (!passed) allPassed = false;

      const dotColor = passed ? 'var(--clr-accent-3)' : 'var(--clr-accent-warm)';
      const statusText = passed ? (tc.isCustom ? 'SUCCESS' : 'PASSED') : 'FAILED';
      
      const expectedStr = tc.isCustom ? 'N/A (Custom Testcase)' : (typeof tc.expected === 'object' ? JSON.stringify(tc.expected) : String(tc.expected));
      const actualStr = errorMsg ? 'Runtime Error' : (typeof output === 'object' ? JSON.stringify(output) : String(output));

      tabsHtml += `
        <button class="testcase-tab-btn ${idx === 0 ? 'active' : ''}" onclick="switchTestcaseTab(event, ${idx})" style="display: flex; align-items: center; gap: 6px; background: var(--clr-bg-2); border: 1px solid var(--clr-border); color: var(--clr-text-muted); padding: 6px 12px; border-radius: var(--radius-sm); font-size: 0.8rem; cursor: pointer; transition: all var(--transition);">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: ${dotColor};"></span>
          <span>${tc.isCustom ? 'Custom' : `Case ${idx + 1}`}</span>
        </button>
      `;

      contentsHtml += `
        <div class="testcase-tab-content-panel" id="tc-panel-${idx}" style="display: ${idx === 0 ? 'flex' : 'none'}; flex-direction: column; gap: 12px; animation: fadeIn 0.3s ease both;">
          <div class="testcase-field">
            <span class="testcase-field-label">Input</span>
            <pre class="testcase-field-value">${escapeHtml(JSON.stringify(tc.input))}</pre>
          </div>
          ${tc.isCustom ? '' : `
          <div class="testcase-field">
            <span class="testcase-field-label">Expected Output</span>
            <pre class="testcase-field-value">${escapeHtml(expectedStr)}</pre>
          </div>
          `}
          <div class="testcase-field">
            <span class="testcase-field-label" style="display: flex; justify-content: space-between;">
              <span>Your Output</span>
              <strong style="color: ${dotColor}; font-size: 0.8rem;">${statusText}</strong>
            </span>
            <pre class="testcase-field-value ${errorMsg ? 'error-trace' : ''}">${escapeHtml(errorMsg ? errorMsg : actualStr)}</pre>
          </div>
        </div>
      `;
    });

    tabsHtml += '</div>';
    resultsHtml = tabsHtml + contentsHtml;
  } catch (err) {
    allPassed = false;
    resultsHtml = `
      <div class="testcase-pill" style="border-color: var(--clr-accent-warm);">
        <div class="testcase-pill-header failed">
          <span>Compilation / Parsing Error</span>
          <span style="color: var(--clr-accent-warm);">ERROR</span>
        </div>
        <div class="testcase-pill-body" style="display: flex;">
          <div class="testcase-field">
            <span class="testcase-field-label">Error Details</span>
            <pre class="testcase-field-value error-trace">${escapeHtml(err.message)}</pre>
          </div>
        </div>
      </div>
    `;
  } finally {
    console.log = originalLog;
  }

  const beatsStats = document.getElementById('beats-stats-container');
  const beatsValue = document.getElementById('beats-percentage-value');
  const beatsFill = document.getElementById('beats-bar-fill');

  if (allPassed) {
    statusBadge.className = 'status-badge success arena-success-animate';
    statusBadge.textContent = isSubmit ? 'Accepted' : 'Tests Passed';
    if (details) details.classList.add('arena-success-animate');
    setTimeout(() => {
      statusBadge.classList.remove('arena-success-animate');
      if (details) details.classList.remove('arena-success-animate');
    }, 1000);

    if (beatsStats && beatsValue && beatsFill) {
      const codeLen = code.length || 10;
      let beats = 75 + (codeLen % 20) + (problem.id * 1.3) % 4.8;
      if (beats > 99.8) beats = 99.8;
      beatsValue.textContent = `Beats ${beats.toFixed(1)}% of JavaScript submissions`;
      beatsFill.style.width = `${beats.toFixed(1)}%`;
      beatsStats.style.display = 'block';
    }
  } else {
    statusBadge.className = 'status-badge error';
    statusBadge.textContent = 'Wrong Answer';
    const consoleBody = document.getElementById('console-body');
    if (consoleBody) {
      consoleBody.classList.add('arena-shake');
      setTimeout(() => {
        consoleBody.classList.remove('arena-shake');
      }, 500);
    }
    if (beatsStats) {
      beatsStats.style.display = 'none';
    }
  }

  runtimeDisplay.textContent = `Runtime: ${executionTime.toFixed(2)} ms`;
  details.innerHTML = resultsHtml;
  logsOutput.textContent = logsCaptured.length > 0 ? logsCaptured.join('\n') : 'No console logs.';

  if (isSubmit) {
    const subRecord = {
      status: allPassed ? 'passed' : 'failed',
      time: Date.now(),
      runtime: `${executionTime.toFixed(2)} ms`,
      logs: logsCaptured.join('\n'),
      code: code
    };

    if (!arenaState.submissions[problem.id]) {
      arenaState.submissions[problem.id] = [];
    }
    arenaState.submissions[problem.id].unshift(subRecord);
    localStorage.setItem('arena-submissions', JSON.stringify(arenaState.submissions));

    if (allPassed) {
      triggerConfetti();
      if (!arenaState.solved.includes(problem.id)) {
        arenaState.solved.push(problem.id);
        localStorage.setItem('arena-solved', JSON.stringify(arenaState.solved));
        updateArenaStats();
        const titleEl = document.getElementById('active-problem-title');
        if (titleEl && !titleEl.querySelector('.solved-checkmark-badge')) {
          titleEl.innerHTML += ` <span class="solved-checkmark-badge" style="color: var(--clr-accent-3); font-size: 1.1rem; margin-left: 6px; text-shadow: 0 0 8px rgba(63, 185, 80, 0.5);" title="Solved!">✓</span>`;
        }
        showToast('Problem solved successfully! 🎉');
      } else {
        showToast('All tests passed! 🚀');
      }
    } else {
      showToast('Some test cases failed. Keep trying!');
    }

    renderSubmissions(problem.id);
  }
}

function arenaCompareOutputs(a, b) {
  if (a === b) return true;
  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch (e) {
    return false;
  }
}

// ─────────────────────────────────────────────
// GITHUB BASICS
// ─────────────────────────────────────────────

function setupGithubBasics() {
  const tabBtns = document.querySelectorAll('.github-tab-btn');
  const panels = document.querySelectorAll('.github-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanelId = `panel-gh-${btn.dataset.githubTab}`;
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Stubs for upcoming commits
  initGithubAuth();
  initGithubCollab();
  initGithubActions();
}

function initGithubAuth() {
  const btnSsh = document.getElementById('btn-method-ssh');
  const btnHttps = document.getElementById('btn-method-https');
  const panelSsh = document.getElementById('auth-ssh-steps');
  const panelHttps = document.getElementById('auth-https-steps');
  const inputEmail = document.getElementById('gh-auth-email');
  const inputUsername = document.getElementById('gh-auth-username');

  if (!btnSsh || !btnHttps || !panelSsh || !panelHttps || !inputEmail || !inputUsername) return;

  let activeMethod = 'ssh';

  function renderSshSteps() {
    const email = inputEmail.value || 'your-email@example.com';
    const username = inputUsername.value || 'your-username';

    panelSsh.innerHTML = [
      {
        num: 1,
        title: "Generate a new SSH keypair",
        desc: "Run this command in your terminal to create a secure key associated with your GitHub email. Press <code>Enter</code> to accept all default locations and enter a secure passphrase if desired.",
        cmd: `ssh-keygen -t ed25519 -C "${email}"`,
        tip: "💡 Ed25519 is the modern standard for SSH keys. It is faster and more secure than older RSA keys."
      },
      {
        num: 2,
        title: "Start the SSH Agent in the background",
        desc: "The SSH agent keeps track of your private keys and manages authentication credentials automatically.",
        cmd: `eval "$(ssh-agent -s)"`,
        tip: "💡 This command runs the agent process and configures your terminal environment variables to talk to it."
      },
      {
        num: 3,
        title: "Add your private key to the SSH Agent",
        desc: "Register your newly created private key file with the active SSH agent so Git can use it during push/pull.",
        cmd: `ssh-add ~/.ssh/id_ed25519`,
        tip: "💡 If you used a custom path when generating your key, replace <code>~/.ssh/id_ed25519</code> with that path."
      },
      {
        num: 4,
        title: "Copy the public SSH key to your clipboard",
        desc: "Read the public key file and copy its contents. Then go to GitHub settings, click <strong>New SSH Key</strong>, and paste it.",
        cmd: `pbcopy < ~/.ssh/id_ed25519.pub`,
        tip: "💡 Since you are on macOS, <code>pbcopy</code> sends the key contents directly to your clipboard. If you are on Linux, use <code>cat ~/.ssh/id_ed25519.pub</code> and copy it manually."
      },
      {
        num: 5,
        title: "Test your connection to GitHub",
        desc: "Verify that everything is linked up correctly by attempting to connect to GitHub via SSH.",
        cmd: `ssh -T git@github.com`,
        tip: `💡 You should see a greeting: <em>"Hi ${username}! You've successfully authenticated, but GitHub does not provide shell access."</em>`
      }
    ].map(step => `
      <div class="auth-step-card">
        <div class="auth-step-header">
          <span class="auth-step-number">${step.num}</span>
          <h4 class="auth-step-title">${step.title}</h4>
        </div>
        <p class="auth-step-desc">${step.desc}</p>
        <div class="auth-step-command-box">
          <pre><code>${escapeHtml(step.cmd)}</code></pre>
          <button class="auth-copy-btn" data-copy-text="${escapeHtml(step.cmd)}">Copy 📋</button>
        </div>
        <div class="auth-step-tip">${step.tip}</div>
      </div>
    `).join('');

    attachCopyListeners(panelSsh);
  }

  function renderHttpsSteps() {
    const username = inputUsername.value || 'your-username';

    panelHttps.innerHTML = [
      {
        num: 1,
        title: "Generate a Personal Access Token (PAT) on GitHub",
        desc: "Go to your GitHub Account -> <strong>Settings</strong> -> <strong>Developer Settings</strong> -> <strong>Personal Access Tokens</strong> -> <strong>Tokens (classic)</strong>. Click <strong>Generate new token</strong>, give it a name, select the <code>repo</code> scope, and copy the token.",
        cmd: "# No terminal command. Generate via GitHub website UI.",
        tip: "⚠️ GitHub no longer accepts account passwords for Git commands. You MUST use a Personal Access Token (PAT)."
      },
      {
        num: 2,
        title: "Configure Git Credential Helper to save token",
        desc: "Tell Git to store your credentials in macOS Keychain so you only have to enter your token once.",
        cmd: `git config --global credential.helper osxkeychain`,
        tip: "💡 The credential helper safely stores your token in OS-level password management."
      },
      {
        num: 3,
        title: "Authenticate on first repository action",
        desc: "Clone a repository or push changes. When Git asks for your password in the terminal, paste your copied Personal Access Token (PAT) instead.",
        cmd: `git clone https://github.com/${username}/my-repo.git`,
        tip: "💡 In modern terminals, pasting passwords does not show any typing characters for security. Just paste and press Enter."
      }
    ].map(step => `
      <div class="auth-step-card">
        <div class="auth-step-header">
          <span class="auth-step-number">${step.num}</span>
          <h4 class="auth-step-title">${step.title}</h4>
        </div>
        <p class="auth-step-desc">${step.desc}</p>
        ${step.cmd.startsWith('#') ? '' : `
        <div class="auth-step-command-box">
          <pre><code>${escapeHtml(step.cmd)}</code></pre>
          <button class="auth-copy-btn" data-copy-text="${escapeHtml(step.cmd)}">Copy 📋</button>
        </div>
        `}
        <div class="auth-step-tip">${step.tip}</div>
      </div>
    `).join('');

    attachCopyListeners(panelHttps);
  }

  function attachCopyListeners(container) {
    const btns = container.querySelectorAll('.auth-copy-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.copyText;
        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = 'Copied! ✓';
          btn.style.borderColor = 'var(--clr-accent-3)';
          btn.style.color = 'var(--clr-accent-3)';
          setTimeout(() => {
            btn.textContent = 'Copy 📋';
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 1500);
        });
      });
    });
  }

  function updateWizard() {
    if (activeMethod === 'ssh') {
      panelSsh.style.display = 'flex';
      panelHttps.style.display = 'none';
      renderSshSteps();
    } else {
      panelSsh.style.display = 'none';
      panelHttps.style.display = 'flex';
      renderHttpsSteps();
    }
  }

  btnSsh.addEventListener('click', () => {
    btnSsh.classList.add('active');
    btnHttps.classList.remove('active');
    activeMethod = 'ssh';
    updateWizard();
  });

  btnHttps.addEventListener('click', () => {
    btnHttps.classList.add('active');
    btnSsh.classList.remove('active');
    activeMethod = 'https';
    updateWizard();
  });

  inputEmail.addEventListener('input', updateWizard);
  inputUsername.addEventListener('input', updateWizard);

  updateWizard();
}
function initGithubCollab() {
  const stepperSteps = document.querySelectorAll('.collab-step');
  const btnPrev = document.getElementById('btn-collab-prev');
  const btnNext = document.getElementById('btn-collab-next');
  const stepTitle = document.getElementById('collab-step-title');
  const stepDesc = document.getElementById('collab-step-desc');
  const widgetArea = document.getElementById('collab-interactive-widget');
  const commandBlock = document.getElementById('collab-command-block');
  const commandText = document.getElementById('collab-cmd-text');
  const btnCopyCmd = document.getElementById('btn-collab-cmd-copy');
  const statusText = document.getElementById('collab-status-text');

  // Nodes
  const nodeOrigin = document.getElementById('node-origin');
  const nodeLocal = document.getElementById('node-local');
  const stateOrigin = document.getElementById('state-origin');
  const stateLocal = document.getElementById('state-local');

  // Arrows
  const arrowFork = document.getElementById('arrow-fork');
  const arrowClone = document.getElementById('arrow-clone');
  const arrowUpstream = document.getElementById('arrow-upstream');

  if (!stepperSteps.length || !btnPrev || !btnNext || !stepTitle || !stepDesc || !widgetArea) return;

  const collabState = {
    step: 1,
    forked: false,
    cloned: false,
    upstreamAdded: false,
    committed: false,
    pushed: false,
    prOpened: false,
    synced: false
  };

  function updateDiagramVisuals() {
    // Fork Node
    if (collabState.forked) {
      nodeOrigin.classList.remove('dimmed');
      stateOrigin.textContent = collabState.pushed ? "origin: C2 (feat)" : "origin: C1 (main)";
      arrowFork.classList.add('arrow-active');
    } else {
      nodeOrigin.classList.add('dimmed');
      stateOrigin.textContent = "Not Forked";
      arrowFork.classList.remove('arrow-active');
    }

    // Local Node
    if (collabState.cloned) {
      nodeLocal.classList.remove('dimmed');
      if (collabState.synced) {
        stateLocal.textContent = "Local: C3 (main)";
      } else if (collabState.committed) {
        stateLocal.textContent = "Local: C2 (feat)";
      } else {
        stateLocal.textContent = "Local: C1 (main)";
      }
      arrowClone.classList.add('arrow-active');
    } else {
      nodeLocal.classList.add('dimmed');
      stateLocal.textContent = "Not Cloned";
      arrowClone.classList.remove('arrow-active');
    }

    // Upstream Arrow
    if (collabState.upstreamAdded) {
      arrowUpstream.classList.add('arrow-active');
    } else {
      arrowUpstream.classList.remove('arrow-active');
    }
  }

  function renderStep() {
    stepperSteps.forEach((s, idx) => {
      s.classList.remove('active', 'completed');
      const stepNum = idx + 1;
      if (stepNum === collabState.step) {
        s.classList.add('active');
      } else if (stepNum < collabState.step) {
        s.classList.add('completed');
      }
    });

    btnPrev.disabled = collabState.step === 1;
    btnNext.disabled = !isStepReady(collabState.step);
    commandBlock.style.display = 'none';

    switch (collabState.step) {
      case 1:
        stepTitle.textContent = "Step 1: Fork the Repository on GitHub";
        stepDesc.textContent = "Forking creates your own personal copy of someone else's repository on GitHub. This gives you write access so you can push your changes.";
        
        if (collabState.forked) {
          widgetArea.innerHTML = `<span style="color: var(--clr-accent-3); font-weight: 600; display: flex; align-items: center; gap: 8px;">✅ Repository successfully forked!</span>`;
          statusText.textContent = "Success: Repository copy created. Your remote is origin/awesome-project.";
        } else {
          widgetArea.innerHTML = `<button class="btn btn-primary" id="btn-collab-fork-act" style="box-shadow: 0 4px 15px rgba(88, 166, 255, 0.25);">🍴 Click to Fork Repository</button>`;
          document.getElementById('btn-collab-fork-act').addEventListener('click', () => {
            collabState.forked = true;
            showToast('Repository forked successfully! 🍴');
            renderStep();
            updateDiagramVisuals();
          });
          statusText.textContent = "Action: Click the button above to copy upstream/awesome-project to your GitHub account.";
        }
        break;

      case 2:
        stepTitle.textContent = "Step 2: Clone the Fork Locally";
        stepDesc.textContent = "Copy the files from your GitHub remote fork down to your computer so you can edit them locally.";
        
        const cloneCmd = `git clone https://github.com/your-username/awesome-project.git`;
        commandBlock.style.display = 'block';
        commandText.textContent = cloneCmd;
        btnCopyCmd.dataset.copyText = cloneCmd;

        if (collabState.cloned) {
          widgetArea.innerHTML = `<span style="color: var(--clr-accent-3); font-weight: 600; display: flex; align-items: center; gap: 8px;">✅ Repository cloned locally!</span>`;
          statusText.textContent = "Success: Local repository setup complete. Ready to code!";
        } else {
          widgetArea.innerHTML = `<button class="btn btn-primary" id="btn-collab-clone-act" style="box-shadow: 0 4px 15px rgba(88, 166, 255, 0.25);">💻 Run git clone</button>`;
          document.getElementById('btn-collab-clone-act').addEventListener('click', () => {
            if (!collabState.forked) {
              showToast('Error: You must fork the repository first!');
              return;
            }
            collabState.cloned = true;
            showToast('Cloned repository to local machine! 💻');
            renderStep();
            updateDiagramVisuals();
          });
          statusText.textContent = "Action: Click the button above to execute the clone command and setup the local workspace.";
        }
        break;

      case 3:
        renderStep3();
        break;
      case 4:
        renderStep4();
        break;
      case 5:
        renderStep5();
        break;
      case 6:
        renderStep6();
        break;
    }
  }

  function isStepReady(step) {
    if (step === 1) return collabState.forked;
    if (step === 2) return collabState.cloned;
    if (step === 3) return collabState.upstreamAdded;
    if (step === 4) return collabState.committed;
    if (step === 5) return collabState.prOpened;
    if (step === 6) return collabState.synced;
    return false;
  }

  btnPrev.addEventListener('click', () => {
    if (collabState.step > 1) {
      collabState.step--;
      renderStep();
    }
  });

  btnNext.addEventListener('click', () => {
    if (collabState.step < 6 && isStepReady(collabState.step)) {
      collabState.step++;
      renderStep();
    }
  });

  function renderStep3() {
    stepTitle.textContent = "Step 3: Setup Upstream Remote URL";
    stepDesc.textContent = "Link your local repository to the original, central repository (named 'upstream'). This lets you fetch and integrate modifications made by other developers.";
    
    const upstreamCmd = `git remote add upstream https://github.com/original-owner/awesome-project.git`;
    commandBlock.style.display = 'block';
    commandText.textContent = upstreamCmd;
    btnCopyCmd.dataset.copyText = upstreamCmd;

    if (collabState.upstreamAdded) {
      widgetArea.innerHTML = `<span style="color: var(--clr-accent-3); font-weight: 600; display: flex; align-items: center; gap: 8px;">✅ Upstream remote added!</span>`;
      statusText.textContent = "Success: Upstream link configured. Run 'git remote -v' to confirm your remotes.";
    } else {
      widgetArea.innerHTML = `<button class="btn btn-primary" id="btn-collab-upstream-act" style="box-shadow: 0 4px 15px rgba(88, 166, 255, 0.25);">⚡ Connect Upstream</button>`;
      document.getElementById('btn-collab-upstream-act').addEventListener('click', () => {
        collabState.upstreamAdded = true;
        showToast('Upstream remote added! ⚡');
        renderStep();
        updateDiagramVisuals();
      });
      statusText.textContent = "Action: Click the button above to configure your local clone to track the original project repository.";
    }
  }

  function renderStep4() {
    stepTitle.textContent = "Step 4: Create a Feature Branch and Commit";
    stepDesc.textContent = "Never work directly on your 'main' branch! Create a dedicated feature branch, make modifications, and commit them.";
    
    const commitCmd = `git checkout -b feat/landing\n# Make edits to files...\ngit add .\ngit commit -m "feat: add landing page"`;
    commandBlock.style.display = 'block';
    commandText.textContent = commitCmd;
    btnCopyCmd.dataset.copyText = commitCmd;

    if (collabState.committed) {
      widgetArea.innerHTML = `<span style="color: var(--clr-accent-3); font-weight: 600; display: flex; align-items: center; gap: 8px;">✅ Local commit C2 created!</span>`;
      statusText.textContent = "Success: Your local branch 'feat/landing' has 1 new commit (C2) ahead of main.";
    } else {
      widgetArea.innerHTML = `<button class="btn btn-primary" id="btn-collab-commit-act" style="box-shadow: 0 4px 15px rgba(88, 166, 255, 0.25);">📸 Save Commit C2</button>`;
      document.getElementById('btn-collab-commit-act').addEventListener('click', () => {
        collabState.committed = true;
        showToast('Commit created successfully! 📸');
        renderStep();
        updateDiagramVisuals();
      });
      statusText.textContent = "Action: Click the button to simulate creating and committing changes to 'feat/landing'.";
    }
  }

  function renderStep5() {
    stepTitle.textContent = "Step 5: Push and Open a Pull Request";
    stepDesc.textContent = "First, push your feature branch to your fork on GitHub. Then open a Pull Request to request merging your code into the original upstream repository.";
    
    const pushCmd = `git push -u origin feat/landing`;
    commandBlock.style.display = 'block';
    commandText.textContent = pushCmd;
    btnCopyCmd.dataset.copyText = pushCmd;

    if (collabState.prOpened) {
      widgetArea.innerHTML = `<span style="color: var(--clr-accent-3); font-weight: 600; display: flex; align-items: center; gap: 8px;">✅ Pull Request opened on GitHub!</span>`;
      statusText.textContent = "Success: PR submitted. It is now awaiting review and CI tests.";
    } else if (collabState.pushed) {
      widgetArea.innerHTML = `
        <div style="background: var(--clr-bg-3); border: 1px solid var(--clr-border); padding: 16px; border-radius: var(--radius-md); width: 100%;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <strong style="color: #fff;">🐙 GitHub Pull Request</strong>
            <span style="font-size: 0.8rem; background: rgba(88,166,255,0.15); color: var(--clr-accent); padding: 2px 8px; border-radius: 100px;">Compare & Review</span>
          </div>
          <p style="font-size: 0.8rem; color: var(--clr-text-muted); margin-bottom: 12px;">Merge <strong>your-username:feat/landing</strong> into <strong>original-owner:main</strong></p>
          <button class="btn btn-primary btn-sm" id="btn-collab-pr-act" style="width: 100%; justify-content: center; background: var(--gradient-green); box-shadow: none;">Create Pull Request 🚀</button>
        </div>
      `;
      document.getElementById('btn-collab-pr-act').addEventListener('click', () => {
        collabState.prOpened = true;
        showToast('Pull Request opened on GitHub! 🚀');
        renderStep();
        updateDiagramVisuals();
      });
      statusText.textContent = "Action: Click 'Create Pull Request' on the mock GitHub UI to submit your changes for review.";
    } else {
      widgetArea.innerHTML = `<button class="btn btn-primary" id="btn-collab-push-act" style="box-shadow: 0 4px 15px rgba(88, 166, 255, 0.25);">🚀 Push Branch to origin</button>`;
      document.getElementById('btn-collab-push-act').addEventListener('click', () => {
        collabState.pushed = true;
        showToast('Branch pushed to origin fork! 🚀');
        renderStep();
        updateDiagramVisuals();
      });
      statusText.textContent = "Action: Push your local feature branch up to GitHub first before submitting a PR.";
    }
  }

  function renderStep6() {
    stepTitle.textContent = "Step 6: Fetch and Merge Upstream Changes";
    stepDesc.textContent = "In collaborative development, teammates merge changes to the original repo (upstream/main). To keep your local repository up to date and prevent merge conflicts, you must regularly switch to your main branch, fetch upstream commits, and merge them.";

    const syncCmd = `git checkout main\ngit fetch upstream\ngit merge upstream/main\ngit push origin main`;
    commandBlock.style.display = 'block';
    commandText.textContent = syncCmd;
    btnCopyCmd.dataset.copyText = syncCmd;

    if (collabState.synced) {
      widgetArea.innerHTML = `<span style="color: var(--clr-accent-3); font-weight: 600; display: flex; align-items: center; gap: 8px;">✅ Synchronized successfully! Local & origin main are up-to-date with upstream.</span>`;
      statusText.textContent = "Success: Synchronization complete. Local and origin/main branches are updated to C3.";
      const stateUpstream = document.getElementById('state-upstream');
      if (stateUpstream) stateUpstream.textContent = "upstream: C3 (main)";
    } else {
      widgetArea.innerHTML = `
        <div style="background: rgba(227, 179, 65, 0.05); border: 1px solid rgba(227, 179, 65, 0.2); padding: 12px; border-radius: var(--radius-sm); width: 100%; margin-bottom: 12px;">
          <span style="color: var(--clr-accent-yellow); font-weight: 700; font-size: 0.85rem;">📢 Upstream Update Alert</span>
          <p style="font-size: 0.8rem; color: var(--clr-text-muted); margin-top: 4px;">Another developer merged a Pull Request. Upstream is now at commit <strong>C3</strong>. Your local clone is at <strong>C1/C2</strong>.</p>
        </div>
        <button class="btn btn-primary" id="btn-collab-sync-act" style="width: 100%; justify-content: center; box-shadow: 0 4px 15px rgba(88, 166, 255, 0.25);">🔄 Fetch & Merge Upstream</button>
      `;
      document.getElementById('btn-collab-sync-act').addEventListener('click', () => {
        collabState.synced = true;
        showToast('Local branch merged and synced with upstream/main! 🔄');
        renderStep();
        updateDiagramVisuals();
      });
      statusText.textContent = "Action: Fetch and merge C3 from upstream, then push to origin to complete sync.";
    }
  }

  // Copy command button listener
  btnCopyCmd.addEventListener('click', () => {
    const text = btnCopyCmd.dataset.copyText;
    navigator.clipboard.writeText(text).then(() => {
      btnCopyCmd.textContent = 'Copied! ✓';
      btnCopyCmd.style.borderColor = 'var(--clr-accent-3)';
      btnCopyCmd.style.color = 'var(--clr-accent-3)';
      setTimeout(() => {
        btnCopyCmd.textContent = 'Copy 📋';
        btnCopyCmd.style.borderColor = '';
        btnCopyCmd.style.color = '';
      }, 1500);
    });
  });

  // Initial setup
  updateDiagramVisuals();
  renderStep();
}
function initGithubActions() {
  const wfNameInput = document.getElementById('actions-wf-name');
  const triggerPush = document.getElementById('actions-trigger-push');
  const triggerPr = document.getElementById('actions-trigger-pr');
  const branchesInput = document.getElementById('actions-branches');
  const runnerSelect = document.getElementById('actions-runner');

  // Steps
  const stepNode = document.getElementById('actions-step-node');
  const stepInstall = document.getElementById('actions-step-install');
  const stepTest = document.getElementById('actions-step-test');
  const stepDeploy = document.getElementById('actions-step-deploy');
  
  // Custom config elements
  const secretWrapper = document.getElementById('actions-secret-wrapper');
  const useSecretCheckbox = document.getElementById('actions-use-secret');
  const triggerWarning = document.getElementById('actions-trigger-warning');

  const yamlTextContainer = document.getElementById('actions-yaml-text');
  const btnCopyYaml = document.getElementById('btn-actions-yaml-copy');

  if (!wfNameInput || !yamlTextContainer || !btnCopyYaml) return;

  function generateYaml() {
    const wfName = wfNameInput.value.trim() || 'GitHub CI';
    const hasPush = triggerPush.checked;
    const hasPr = triggerPr.checked;
    const branches = branchesInput.value.trim() || 'main';
    const runner = runnerSelect.value || 'ubuntu-latest';

    if (triggerWarning) {
      triggerWarning.style.display = (!hasPush && !hasPr) ? 'block' : 'none';
    }

    if (stepDeploy && secretWrapper) {
      secretWrapper.style.display = stepDeploy.checked ? 'flex' : 'none';
    }

    const branchList = branches.split(',').map(b => b.trim()).filter(b => b.length > 0);
    const branchArrayStr = branchList.length > 0 ? `[ ${branchList.join(', ')} ]` : '[ main ]';

    let yaml = `# CI/CD Workflow configuration generated for GitHub Actions\n`;
    yaml += `name: ${wfName}\n\n`;

    yaml += `on:\n`;
    if (hasPush) {
      yaml += `  push:\n`;
      yaml += `    branches: ${branchArrayStr}\n`;
    }
    if (hasPr) {
      yaml += `  pull_request:\n`;
      yaml += `    branches: ${branchArrayStr}\n`;
    }
    if (!hasPush && !hasPr) {
      yaml += `  # No events configured. Trigger manually\n`;
      yaml += `  workflow_dispatch:\n`;
    }
    yaml += `\n`;

    yaml += `jobs:\n`;
    yaml += `  build-and-test:\n`;
    yaml += `    name: Build, Lint, and Test\n`;
    yaml += `    runs-on: ${runner}\n\n`;
    yaml += `    steps:\n`;
    yaml += `      - name: Checkout repository 📥\n`;
    yaml += `        uses: actions/checkout@v4\n\n`;

    if (stepNode && stepNode.checked) {
      yaml += `      - name: Setup Node.js Environment 🟢\n`;
      yaml += `        uses: actions/setup-node@v4\n`;
      yaml += `        with:\n`;
      yaml += `          node-version: '20'\n`;
      yaml += `          cache: 'npm'\n\n`;
    }

    if (stepInstall && stepInstall.checked) {
      yaml += `      - name: Install Project Dependencies 📦\n`;
      yaml += `        run: npm ci\n\n`;
    }

    if (stepTest && stepTest.checked) {
      yaml += `      - name: Run Unit Tests 🧪\n`;
      yaml += `        run: npm test\n\n`;
    }

    if (stepDeploy && stepDeploy.checked) {
      const tokenVar = (useSecretCheckbox && useSecretCheckbox.checked) ? 'secrets.GH_DEPLOY_PAT' : 'secrets.GITHUB_TOKEN';
      yaml += `      - name: Deploy static assets to GitHub Pages 🚀\n`;
      yaml += `        uses: peaceiris/actions-gh-pages@v3\n`;
      yaml += `        with:\n`;
      yaml += `          github_token: \${{ ${tokenVar} }}\n`;
      yaml += `          publish_dir: ./dist\n`;
    }

    yamlTextContainer.innerHTML = highlightYaml(yaml);
    btnCopyYaml.dataset.copyText = yaml;
  }

  function highlightYaml(rawYaml) {
    return rawYaml
      .split('\n')
      .map(line => {
        if (line.trim().startsWith('#')) {
          return `<span class="yaml-comment">${escapeHtml(line)}</span>`;
        }
        const match = line.match(/^(\s*)([\w-]+):(.*)$/);
        if (match) {
          const space = match[1];
          const key = match[2];
          const val = match[3];

          let highlightedVal = escapeHtml(val);
          if (val.trim()) {
            const isString = val.includes('"') || val.includes("'") || val.includes('${{');
            const cls = isString ? 'yaml-string' : 'yaml-value';
            highlightedVal = ` <span class="${cls}">${escapeHtml(val.trim())}</span>`;
          }
          return `${space}<span class="yaml-key">${key}</span>:${highlightedVal}`;
        }
        return escapeHtml(line);
      })
      .join('\n');
  }

  [
    wfNameInput, triggerPush, triggerPr, branchesInput, runnerSelect, 
    stepNode, stepInstall, stepTest, stepDeploy, useSecretCheckbox
  ].forEach(el => {
    if (el) el.addEventListener('change', generateYaml);
    if (el && el.tagName === 'INPUT') el.addEventListener('input', generateYaml);
  });

  btnCopyYaml.addEventListener('click', () => {
    const text = btnCopyYaml.dataset.copyText;
    navigator.clipboard.writeText(text).then(() => {
      btnCopyYaml.textContent = 'Copied! ✓';
      btnCopyYaml.style.borderColor = 'var(--clr-accent-3)';
      btnCopyYaml.style.color = 'var(--clr-accent-3)';
      setTimeout(() => {
        btnCopyYaml.textContent = 'Copy YAML 📋';
        btnCopyYaml.style.borderColor = '';
        btnCopyYaml.style.color = '';
      }, 1500);
    });
  });

  generateYaml();
}

function switchTestcaseTab(e, idx) {
  e.preventDefault();
  const btns = e.currentTarget.parentNode.querySelectorAll('.testcase-tab-btn');
  btns.forEach(b => {
    b.classList.remove('active');
    b.style.borderColor = 'var(--clr-border)';
    b.style.background = 'var(--clr-bg-2)';
    b.style.color = 'var(--clr-text-muted)';
  });
  
  e.currentTarget.classList.add('active');
  e.currentTarget.style.borderColor = 'var(--clr-accent)';
  e.currentTarget.style.background = 'rgba(88, 166, 255, 0.1)';
  e.currentTarget.style.color = '#fff';

  const container = e.currentTarget.parentNode.parentNode;
  const panels = container.querySelectorAll('.testcase-tab-content-panel');
  panels.forEach(p => p.style.display = 'none');

  const target = container.querySelector(`#tc-panel-${idx}`);
  if (target) target.style.display = 'flex';
}

function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const colors = ['#f78166', '#58a6ff', '#3fb950', '#d29922', '#a371f7', '#ff6b6b', '#4ecdc4'];
  const particles = [];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: width / 2 + (Math.random() - 0.5) * 50,
      y: height / 2 + (Math.random() - 0.5) * 50 - 100,
      vx: (Math.random() - 0.5) * 15,
      vy: (Math.random() - 0.7) * 15 - 5,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  let animationFrameId;
  function update() {
    ctx.clearRect(0, 0, width, height);

    let active = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.3; // gravity
      p.vx *= 0.98; // air resistance
      p.rotation += p.rotationSpeed;
      
      if (p.vy > 0) {
        p.opacity -= 0.01;
      }

      if (p.opacity > 0 && p.y < height) {
        active = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (active) {
      animationFrameId = requestAnimationFrame(update);
    } else {
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
      cancelAnimationFrame(animationFrameId);
    }
  }

  update();
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  initArena();
  setupNavbar();
  setupShortcutsModal();
  setupKeyboardShortcuts();
});

