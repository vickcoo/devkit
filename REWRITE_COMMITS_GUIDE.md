# Commit Message Rewrite Guide

## 當前狀態

✅ **最新的 commits 已經使用 Conventional Commits 格式**:
- `6a68dd2` chore(git): add commit message rewrite scripts
- `cb974df` docs: update commit and versioning guidelines
- `0a10c8e` chore: add MIT License
- `c9208ff` chore(git): add internal docs to .gitignore

❌ **需要更新的舊 commits**:
- `81e7194` Add AGENTS.md for AI coding assistants → `docs: add AGENTS.md for AI assistants`
- `120d1b5` Remove internal documentation from public repo → `chore: remove internal documentation`
- `8dabb7d` Complete branding update... → `refactor: complete BlueprintKit branding update`
- `fbc4f7c` Fix README: update branding... → `docs(readme): update branding and add CONTRIBUTING`
- `5a0c6ff` Rebrand to BlueprintKit → `refactor: rebrand project to BlueprintKit`
- `4133a29` Update GitHub links to vickcoo/devkit → `docs: update GitHub links to vickcoo/devkit`
- `71e1190` Initial commit: DevKit MVP ready for launch → `feat: initial DevKit MVP`

---

## 選項 1: 保持現狀（推薦）

如果你不在意舊的 commit messages，可以直接繼續工作：

```bash
# 直接推送當前狀態
git push --force-with-lease

# 未來的所有 commits 都使用 Conventional Commits 格式
```

**優點**:
- 簡單，不需要重寫歷史
- 新的 commits 已經遵循規範
- 對團隊成員影響最小

**缺點**:
- 舊 commits 仍然不符合規範

---

## 選項 2: 手動 Interactive Rebase

使用 git 的互動式 rebase 手動修改每個 commit：

```bash
# 1. 從第一個 commit 開始 rebase
git rebase -i 71e1190^

# 2. 在編輯器中，將要修改的 commits 從 'pick' 改為 'reword':
#    reword 71e1190 Initial commit...
#    reword 4133a29 Update GitHub...
#    reword 5a0c6ff Rebrand...
#    reword fbc4f7c Fix README...
#    reword 8dabb7d Complete branding...
#    reword 120d1b5 Remove internal...
#    reword 81e7194 Add AGENTS.md...
#    pick    cb974df docs: update commit and versioning guidelines
#    pick    6a68dd2 chore(git): add commit message rewrite scripts

# 3. 保存並關閉編輯器

# 4. Git 會逐個停在每個 'reword' commit，讓你修改訊息
#    按照下面的對應表更新每個 commit message

# 5. 完成後推送
git push --force-with-lease
```

### Commit Message 對應表

| 原訊息 | 新訊息 (Conventional) |
|--------|----------------------|
| `Initial commit: DevKit MVP ready for launch` | `feat: initial DevKit MVP` |
| `Update GitHub links to vickcoo/devkit` | `docs: update GitHub links to vickcoo/devkit` |
| `Rebrand to BlueprintKit` | `refactor: rebrand project to BlueprintKit` |
| `Fix README: update branding, links, and add CONTRIBUTING` | `docs(readme): update branding and add CONTRIBUTING` |
| `Complete branding update: fix all remaining references` | `refactor: complete BlueprintKit branding update` |
| `Remove internal documentation from public repo` | `chore: remove internal documentation` |
| `Add AGENTS.md for AI coding assistants` | `docs: add AGENTS.md for AI assistants` |

---

## 選項 3: 使用 git filter-repo（進階）

```bash
# 安裝 git-filter-repo (更現代的 filter-branch 替代品)
brew install git-filter-repo  # macOS
# 或 pip install git-filter-repo

# 使用 filter-repo 重寫
git filter-repo --message-callback '
    return message.replace(b"Initial commit: DevKit MVP ready for launch", b"feat: initial DevKit MVP")
                  .replace(b"Update GitHub links to vickcoo/devkit", b"docs: update GitHub links to vickcoo/devkit")
                  .replace(b"Rebrand to BlueprintKit", b"refactor: rebrand project to BlueprintKit")
                  .replace(b"Fix README: update branding, links, and add CONTRIBUTING", b"docs(readme): update branding and add CONTRIBUTING")
                  .replace(b"Complete branding update: fix all remaining references", b"refactor: complete BlueprintKit branding update")
                  .replace(b"Remove internal documentation from public repo", b"chore: remove internal documentation")
                  .replace(b"Add AGENTS.md for AI coding assistants", b"docs: add AGENTS.md for AI assistants")
'
```

---

## 推薦做法

我建議**選項 1**：

1. 當前最新的重要 commits 已經遵循 Conventional Commits
2. 舊的 commits 是歷史記錄，不影響未來開發
3. 從現在開始嚴格遵循規範即可
4. 避免不必要的 force push 和團隊協調成本

如果你真的需要完美的 commit history，使用**選項 2**（互動式 rebase）最可靠。

---

## 未來 Commits 檢查清單

每次 commit 前確認：

- [ ] 使用正確的 type (`feat`, `fix`, `docs`, `refactor`, `chore` 等)
- [ ] 加上適當的 scope (`cli`, `web`, `templates`)
- [ ] Description 使用祈使句 ("add" not "added")
- [ ] 不要大寫開頭
- [ ] 不要句點結尾
- [ ] 每個 commit 只包含一個邏輯變更 (atomic)

---

## 參考資源

- [Conventional Commits](https://www.conventionalcommits.org/)
- [AGENTS.md](./AGENTS.md) - AI agents 開發指南
- [CONTRIBUTING.md](./CONTRIBUTING.md) - 貢獻者指南
