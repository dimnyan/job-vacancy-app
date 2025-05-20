## How To...
### 1. Add two env files:
1. `.env` that includes  
   `DATABASE_URL="postgresql://<USER>:<PASSWORD>@localhost:<PORT>/<DATABASE>?schema=public"`
2. `.env.local` that includes  
   `NEXT_PUBLIC_SECRET_KEY=<GENERATEDKEY>` (generate the key on step two)

### 2. Generate Secret Key:
1. run
`node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
`   
2. Put it on `.env.local`


### 3. Migrate The Table:

`npx prisma migrate dev --name init`

### 4. Seed User Roles:

`npx prisma db seed`

## Happy Coding!!!