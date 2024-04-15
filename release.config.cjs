// Copied from https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-angular/writer-opts.js#L27
// and modified to support adding all commit types to the release notes
function customTransform(commit) {
  const convertedCommit = commit;

  // BREAKING CHANGES title 轉換
  convertedCommit.notes = commit.notes.map((note) => ({ ...note, title: "BREAKING CHANGES" }));

  // commit type 轉換
  if (commit.type === "feat") {
    convertedCommit.type = "✨ Features";
  } else if (commit.type === "fix") {
    convertedCommit.type = "🐞 Bug Fixes";
  } else if (commit.type === "docs") {
    convertedCommit.type = "📃 Documentation";
  } else if (commit.type === "style") {
    convertedCommit.type = "🌈 Styles";
  } else if (commit.type === "refactor") {
    convertedCommit.type = "🦄 Code Refactoring";
  } else if (commit.type === "test") {
    convertedCommit.type = "🧪 Tests";
  } else if (commit.type === "chore") {
    convertedCommit.type = "🔧 Chores";
  } else {
    // 都匹配不到則忽略
    return;
  }

  // 設置 short commit hash
  if (typeof commit.hash === "string") {
    convertedCommit.shortHash = commit.hash.substring(0, 7);
  }

  // 設置 committer
  if (typeof commit.subject === "string") {
    convertedCommit.subject = `${commit.subject} (by @${commit.committer.name})`;
  }

  // 設置 jira 單連結
  if (typeof commit.scope === "string") {
    convertedCommit.scope = `[${commit.scope}](https://gl-jira-new.funnyhelp9.com/browse/${commit.scope})`;
  }

  return convertedCommit;
}

module.exports = {
  branches: "master", // 要發布的分支
  writerOpts: { transform: customTransform }, // 自定義 commit 轉換
  plugins: [
    "@semantic-release/commit-analyzer",
    { preset: "angular" }, // commit 分析器
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    { changelogFile: "CHANGELOG.md" }, // changelog 路徑
    "@semantic-release/npm",
    {
      npmPublish: false, // 不發布到 npm
    },
    "@semantic-release/git",
    "@semantic-release/github",
    {
      assets: ["package.json", "CHANGELOG.md"], // gitlab release 時需要上傳的檔案
    },
  ],
};
