# wool_mail — weekday morning triage

## Schedule

| Field | Value |
| --- | --- |
| Cron | `CRON_TZ=Europe/Amsterdam 0 8 * * 1-5` |
| Flexibility | ±15 minutes |
| State | On |

Runs weekday mornings at 08:00 Europe/Amsterdam (flexible ±15 min).

## Prompt

Confirm the live mailbox is `lvb@boldwool.com` (Boldwool Outlook).

Then:

1. Triage unread and recent inbox into **urgent** / **action** / **fyi** / **noise**
2. For each actionable item, give:
   - Subject
   - From
   - One-line why
   - Suggested next step
3. Never send, reply, or forward
4. Never invent emails or deadlines
5. If nothing actionable, stay quiet
