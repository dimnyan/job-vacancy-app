const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // roles
  const roles = await prisma.m_roles.createMany({
    data: [
      {
        id: 1,
        role_name: "Super Admin",
      },
      {
        id: 2,
        role_name: "Recruiter",
      },
      {
        id: 3,
        role_name: "User",
      },
    ]
  })
  console.log(roles)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })