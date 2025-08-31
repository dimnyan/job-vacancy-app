const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // roles
  await prisma.m_roles.createMany({
    data: [
      {
        role_id: 1,
        role_name: "Super Admin",
      },
      {
        role_id: 2,
        role_name: "Recruiter",
      },
      {
        role_id: 3,
        role_name: "User",
      },
    ]
  })
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