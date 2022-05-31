# playwright-toMatchSnapshot

This repo is only created to reproduce a possible error with Playwright, version 1.22.

To reproduce the problem you only need to run:
```sh
$ npm i
$ npx playwright test
```

Playwright will then run the file [tests/match-snapshots.spec.ts](tests/match-snapshots.spec.ts) that include two tests,
both should fail. However, the latter doesn't. But if you check `git status` you can see that a updated snapshot has been created.

You can also try to delete the folder `tests/match-snapshots.spec.ts-snapshots´ and you will get a similar result.
The first fails, the second doesn't.
