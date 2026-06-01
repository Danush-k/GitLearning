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

function renderCommands(tab = 'setup') {
  const grid = document.getElementById('commands-grid');
  const cmds = commandsData[tab] || [];
  grid.innerHTML = cmds.map(c => `
    <div class="cmd-card" onclick="copyCommand(this, '${c.cmd.replace(/'/g, "\\'")}')" title="Click to copy">
      <div class="cmd-command">${escapeHtml(c.cmd)}</div>
      <div class="cmd-desc">${c.desc}</div>
      <span class="copy-hint">📋 Click to copy</span>
    </div>
  `).join('');
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

  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-progress">
        <div class="quiz-bar"><div class="quiz-bar-fill" style="width:${pct}%"></div></div>
        <span class="quiz-counter">${current + 1} / ${quizData.length}</span>
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
  let emoji, msg;
  if (pct === 100) { emoji = '🏆'; msg = "Perfect score! You're a Git master!"; }
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
        <button class="btn btn-primary" onclick="restartQuiz()">Try Again 🔄</button>
      </div>
    </div>
  `;
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
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderCommands(btn.dataset.tab);
    });
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


// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderConcepts();
  renderCommands('setup');
  renderWorkflow();
  renderCheatsheet();
  renderQuiz();
  setupNavbar();
  setupCommandTabs();

  // Setup scroll reveal after a tick so elements exist
  setTimeout(setupScrollReveal, 100);
});
