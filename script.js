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
    example: "git init my-project"
  },
  {
    icon: "📸",
    title: "Commit",
    desc: "A commit is a snapshot of your changes. Every commit has a unique ID and a message describing what changed.",
    example: "git commit -m 'Add login page'"
  },
  {
    icon: "🌿",
    title: "Branch",
    desc: "A branch is an independent line of development. You can create branches to work on features without affecting the main code.",
    example: "git checkout -b feature/login"
  },
  {
    icon: "🔀",
    title: "Merge",
    desc: "Merging combines changes from one branch into another. This is how features get integrated into the main codebase.",
    example: "git merge feature/login"
  },
  {
    icon: "☁️",
    title: "Remote",
    desc: "A remote is a version of your repo hosted on the internet (like GitHub). It lets you share code with teammates.",
    example: "git remote add origin <url>"
  },
  {
    icon: "⬇️",
    title: "Pull & Push",
    desc: "Push sends your local commits to the remote. Pull downloads remote changes and merges them into your local branch.",
    example: "git push origin main"
  }
];

const commandsData = {
  setup: [
    { cmd: "git config --global user.name 'Name'", desc: "Set your Git username globally" },
    { cmd: "git config --global user.email 'email@x.com'", desc: "Set your Git email globally" },
    { cmd: "git init", desc: "Initialize a new Git repository" },
    { cmd: "git clone <url>", desc: "Clone a remote repository locally" },
    { cmd: "git config --list", desc: "View all Git configuration" },
  ],
  basic: [
    { cmd: "git status", desc: "Show the working tree status" },
    { cmd: "git add .", desc: "Stage all changed files for commit" },
    { cmd: "git add <file>", desc: "Stage a specific file" },
    { cmd: "git commit -m 'message'", desc: "Commit staged changes with a message" },
    { cmd: "git log --oneline", desc: "View compact commit history" },
    { cmd: "git diff", desc: "Show unstaged changes" },
  ],
  branch: [
    { cmd: "git branch", desc: "List all local branches" },
    { cmd: "git branch <name>", desc: "Create a new branch" },
    { cmd: "git checkout <branch>", desc: "Switch to an existing branch" },
    { cmd: "git checkout -b <name>", desc: "Create and switch to a new branch" },
    { cmd: "git merge <branch>", desc: "Merge a branch into current branch" },
    { cmd: "git branch -d <name>", desc: "Delete a local branch" },
  ],
  remote: [
    { cmd: "git remote -v", desc: "List all remote connections" },
    { cmd: "git remote add origin <url>", desc: "Add a remote named 'origin'" },
    { cmd: "git push origin main", desc: "Push main branch to remote" },
    { cmd: "git pull origin main", desc: "Pull latest from remote main" },
    { cmd: "git fetch", desc: "Download remote changes (without merge)" },
    { cmd: "git push -u origin main", desc: "Push and set upstream tracking" },
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
  }
];


// ─────────────────────────────────────────────
// RENDER FUNCTIONS
// ─────────────────────────────────────────────

function renderConcepts() {
  const grid = document.getElementById('concepts-grid');
  grid.innerHTML = conceptsData.map(c => `
    <div class="concept-card">
      <span class="card-icon">${c.icon}</span>
      <div class="card-title">${c.title}</div>
      <div class="card-desc">${c.desc}</div>
      <div class="card-example">${c.example}</div>
    </div>
  `).join('');
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
        <div class="cheat-row">
          <span class="cheat-cmd">${escapeHtml(row.cmd)}</span>
          <span class="cheat-label">${row.label}</span>
        </div>
      `).join('')}
    </div>
  `).join('');
}


// ─────────────────────────────────────────────
// QUIZ ENGINE
// ─────────────────────────────────────────────

let quizState = { current: 0, score: 0, answered: false };

function renderQuiz() {
  const container = document.getElementById('quiz-container');
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
  quizState.answered = false;
}

function selectAnswer(index) {
  if (quizState.answered) return;
  quizState.answered = true;

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
}

function nextQuestion() {
  quizState.current++;
  renderQuiz();
}

function renderQuizResult(container) {
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

  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-result">
        <div style="font-size:3rem;">${emoji}</div>
        <div class="result-score" style="background:var(--gradient-main);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">
          ${score}/${total}
        </div>
        <div class="result-msg">${msg}</div>
        <div class="result-highscore" style="font-size: 0.95rem; color: var(--clr-text-muted); margin-bottom: 24px;">
          🏆 Personal Best: ${highScore} / ${total}
          ${highScore > 0 ? `<button class="btn btn-sm btn-outline" style="margin-left:12px; padding: 4px 10px; font-size:0.75rem; vertical-align: middle;" onclick="resetHighScore()">Reset 🔄</button>` : ''}
        </div>
        <button class="btn btn-primary" onclick="restartQuiz()">Try Again 🔄</button>
      </div>
    </div>
  `;
}

function resetHighScore() {
  if (confirm("Are you sure you want to reset your high score?")) {
    localStorage.removeItem('quiz-highscore');
    showToast('High score reset! 🔄');
    const container = document.getElementById('quiz-container');
    renderQuizResult(container);
  }
}

function restartQuiz() {
  quizState = { current: 0, score: 0, answered: false };
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
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    // Highlight active nav link
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });
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
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    const activeTabBtn = document.querySelector('.tab-btn.active');
    const activeTab = activeTabBtn ? activeTabBtn.dataset.tab : 'setup';
    renderCommands(activeTab, query);
    filterCheatsheet(query);
  });
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
      
      const cmdText = cmdSpan ? cmdSpan.textContent.toLowerCase() : '';
      const labelText = labelSpan ? labelSpan.textContent.toLowerCase() : '';

      if (cmdText.includes(cleanQuery) || labelText.includes(cleanQuery)) {
        row.style.display = '';
        visibleRows++;
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
  }
};

// ─────────────────────────────────────────────
// COMMAND GENERATOR ENGINE
// ─────────────────────────────────────────────

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
        return `
          <div class="form-group">
            <label class="form-label" for="gen-param-${p.id}">${p.label}</label>
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
// INIT
// ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  renderConcepts();
  renderCommands('setup');
  renderWorkflow();
  setupGenerator();
  renderCheatsheet();
  renderQuiz();
  setupNavbar();
  setupCommandTabs();
  setupSearch();
  setupBackToTop();

  // Setup scroll reveal after a tick so elements exist
  setTimeout(setupScrollReveal, 100);
});

