# Issue tracker: GitHub

Issues and specs live in GitHub Issues for chann44/Logia.
Use the gh CLI from this repository.

## Operations

- Create: gh issue create --repo chann44/Logia --title "..." --body-file <file>
- Read: gh issue view <number> --repo chann44/Logia --json number,title,body,labels,comments
- List: gh issue list --repo chann44/Logia --state open --json number,title,body,labels
- Comment: gh issue comment <number> --repo chann44/Logia --body-file <file>
- Label: gh issue edit <number> --repo chann44/Logia --add-label "<label>"
- Remove label: use gh issue edit with --remove-label.
- Close completed work: gh issue close <number> --repo chann44/Logia.

Use body files for multiline content.

## Ticket relationships

Publish blockers before dependent tickets.

Use GitHub's native issue dependencies. Add a blocker using:
gh api --method POST repos/chann44/Logia/issues/<child>/dependencies/blocked_by -F issue_id=<blocker-database-id>

Retrieve a database ID using:
gh api repos/chann44/Logia/issues/<number> --jq .id

When tickets derive from a published spec, attach them as sub-issues:
gh api --method POST repos/chann44/Logia/issues/<parent>/sub_issues -F sub_issue_id=<child-database-id>

If native relationships are unavailable, record parent and blocker
issue references in ticket bodies.

Work on tickets whose blockers are complete.
Publishing child tickets does not close or rewrite the parent spec.

## Publishing

“Publish to the issue tracker” means create a GitHub issue.
“Fetch the relevant ticket” means read its body and comments.
Use the configured triage-label mapping.

## Pull requests as a triage surface

PRs as a request surface: no.
