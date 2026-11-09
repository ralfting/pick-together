# PickTogether

**Stop the endless "where should we go?" group chat.** PickTogether lets you put a few places on the table, send one link to your friends, and get a decision by a set time. No more back and forth.

## What it is

You're planning a night out. You have a few places in mind, and everyone has an opinion. PickTogether turns that into a quick vote:

1. **Create a pick.** Add **up to 4 places** (restaurants, bars, parks, anything) and set a **deadline**.
2. **Invite your friends.** They get an **email** with a link to the vote.
3. **They vote.** The link opens a **public voting page**. Each friend enters their email and votes once. No account needed.
4. **The deadline hits.** Voting closes, and **everyone gets an email** with the winning place.
5. **It's a tie?** PickTogether **picks one of the tied places at random**, so the group still gets one answer.

### Core rules

| Rule     | Behavior                                    |
| -------- | ------------------------------------------- |
| Options  | 2 to 4 places per pick                      |
| Voters   | Anyone with the link; one vote per email    |
| Deadline | Voting closes automatically at the set time |
| Result   | Emailed to the organizer and every voter    |
| Tie      | Random pick among the tied places           |

## How to run

### Requirements

- [Node.js](https://nodejs.org/) **24+**
- [Bun](https://bun.sh/) **1.4.4**

### Start the app

```sh
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other commands

| Command               | What it does                  |
| --------------------- | ----------------------------- |
| `bun run build`       | Production build of every app |
| `bun run lint`        | Lint every workspace          |
| `bun run check-types` | Type-check every workspace    |
| `bun run format`      | Format the code with Prettier |

## Project structure

This is a [Turborepo](https://turborepo.dev/) monorepo:

```
apps/
  web/                  Next.js app (UI + voting page)
packages/
  eslint-config/        Shared ESLint config
  typescript-config/    Shared tsconfig files
```
