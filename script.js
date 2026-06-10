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
        <div class="cheat-row" onclick="copyCommand(this, '${row.cmd.replace(/'/g, "\\'")}')" title="Click to copy command">
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
  const progressBar = document.getElementById('reading-progress');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

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

    // Close menu when clicking a link
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('.menu-toggle-icon').textContent = '☰';
      });
    });
  }

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY || window.pageYOffset;
    navbar.classList.toggle('scrolled', scrollPos > 50);

    // Highlight active nav link (Scrollspy)
    let current = '';
    const isAtBottom = (window.innerHeight + scrollPos) >= document.documentElement.scrollHeight - 20;

    if (isAtBottom) {
      if (sections.length > 0) {
        current = sections[sections.length - 1].id;
      }
    } else {
      sections.forEach(sec => {
        const top = sec.offsetTop - 150;
        if (scrollPos >= top) {
          current = sec.id;
        }
      });
    }

    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });

    // Update Reading Progress Bar
    if (progressBar) {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + '%';
    }
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
  commitCount: 1
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

  function handleCommit() {
    const parentId = visualGit.branches[visualGit.head];
    const parentCommit = visualGit.commits.find(c => c.id === parentId);
    
    const newId = `c${visualGit.commitCount}`;
    const newMsg = `Commit ${visualGit.commitCount}`;
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

  function renderGraph() {
    updateSelects();

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
        tooltipEl.innerHTML = `
          <div class="viz-tooltip-hash">Commit: ${commit.id}</div>
          <div class="viz-tooltip-msg">${commit.message}</div>
          <div class="viz-tooltip-meta">
            <span><strong>Branch:</strong> ${commit.branch}</span>
            <span><strong>Parents:</strong> ${parentIds}</span>
            <span><strong>Author:</strong> Danush K</span>
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
  
  const commandsText = document.getElementById('cfg-commands-text');
  const fileText = document.getElementById('cfg-file-text');

  const btnTerminal = document.getElementById('btn-cfg-terminal');
  const btnFile = document.getElementById('btn-cfg-file');
  const terminalView = document.getElementById('cfg-terminal-view');
  const fileView = document.getElementById('cfg-file-view');

  const copyCommandsBtn = document.getElementById('copy-cfg-commands');
  const copyFileBtn = document.getElementById('copy-cfg-file');

  if (!usernameInput || !commandsText || !fileText) return;

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
    if (protocol === 'https') {
      fileContent += `[credential]\n`;
      fileContent += `    helper = osxkeychain # or 'manager' on Windows`;
    } else {
      fileContent += `# SSH config is managed via ~/.ssh/config, not .gitconfig`;
    }
    fileText.textContent = fileContent;
  }

  // Setup inputs event listeners
  [usernameInput, emailInput, branchInput, editorSelect, protocolSelect, colorCheckbox].forEach(el => {
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

  // Run initial generate
  updateOutputs();
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
  "Lost a commit or branch? Don't panic! Check 'git reflog' to find the SHA-1 of deleted history."
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

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // 1. Focus command search with Ctrl+/ or Cmd+/
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
      const searchInput = document.getElementById('commands-search');
      if (searchInput) {
        e.preventDefault();
        searchInput.focus();
        showToast('Search focused! 🔍');
      }
    }

    // 2. Escape to close Certificate Modal
    if (e.key === 'Escape') {
      const certModal = document.getElementById('cert-modal');
      if (certModal && certModal.classList.contains('show')) {
        certModal.classList.remove('show');
      }
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

        if (!quizState.answered && ['1', '2', '3', '4'].includes(e.key)) {
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
  setupBranchingStrategies();
  setupConfigBuilder();
  setupCertificateEvents();
  setupGenerator();
  setupVisualizer();
  renderCheatsheet();
  renderQuiz();
  setupProTipWidget();
  setupNavbar();
  setupCommandTabs();
  setupSearch();
  setupKeyboardShortcuts();
  setupBackToTop();

  // Setup scroll reveal after a tick so elements exist
  setTimeout(setupScrollReveal, 100);
});

