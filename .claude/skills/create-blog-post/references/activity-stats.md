# Activity Stats

Gather the numbers for posts that report the author's activity: contribution calendars, commit counts per project, a year in review.

## Periods

Use whole periods that end yesterday (e.g. January 1 through yesterday). Today's numbers keep changing until the day is over. Say in the text or caption how far the numbers go, and that contributions measure activity, not value.

Write the intermediate files (calendars, event pages, date lists) to the session scratchpad, shown below as `$D`, so nothing lands in the repo.

## GitHub Contributions

Fetch one calendar per year. It includes private-repository contributions:

```bash
gh api graphql -f query='{ viewer { contributionsCollection(from:"YYYY-01-01T00:00:00Z", to:"YYYY-12-31T23:59:59Z") { contributionCalendar { totalContributions weeks { contributionDays { date contributionCount } } } } } }' > "$D/cal-YYYY.json"
```

For the current year, sum the daily counts through yesterday rather than using `totalContributions`.

## Skymatic GitLab Events

Skymatic's GitLab (`gitlab.skymatic.de`) adds a second source of activity. Its events API needs a personal access token with `read_api` scope, which the user supplies. Set the token in the same Bash command as the loop, since shell state does not carry over between calls. Keep it out of files, and remind the user to revoke it afterwards. Save each page to a file and parse it with `jq`. Piping the response through `echo` mangles backslash escapes and breaks the JSON.

`after` and `before` are exclusive, so pass the day before the period starts and today's date:

```bash
TOKEN='<token>'; D='<scratchpad>'; for p in $(seq 1 100); do
  curl -s -H "PRIVATE-TOKEN: $TOKEN" "https://gitlab.skymatic.de/api/v4/events?after=<day before start>&before=<today>&per_page=100&page=$p" -o "$D/page.json"
  jq -e 'type == "array"' "$D/page.json" >/dev/null || { head -c 300 "$D/page.json"; break; }
  [ "$(jq length "$D/page.json")" -eq 0 ] && break
  jq -r '.[].created_at[0:10]' "$D/page.json" >> "$D/gitlab-events.txt"
done
```

An error response (such as a revoked or wrong token) is a JSON object rather than an array, so the guard prints it and stops the loop.

Count events per day from the dates. GitLab removes events older than three years, so earlier years are GitHub-only; say so. An event is a push, comment, or merge request, so one push of many commits counts once. Show the two sources as "GitHub + GitLab" totals rather than presenting them as one measure.

## Commit Counts

Count the author's commits in local clones under `~/Developer`, grouped by org directory (`github.com/<org>/`, `gitlab.skymatic.de/<group>/`):

```bash
git -C <repo> log --since=YYYY-01-01 --until='YYYY-MM-DD 23:59:59' --all --no-merges --author='Tobias Hagemann' --format=%H | sort -u | wc -l
```

Clones that were never pulled undercount, so call the numbers approximate. Show internal Skymatic repositories only as aggregate counts and leave their names out.
