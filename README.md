Migrate:

`npx prisma migrate dev --name init`

Seed:

`npx prisma db seed`

Generate Secret:
`node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
`