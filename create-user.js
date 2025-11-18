const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Create a default user
    const user = await prisma.user.create({
      data: {
        email: 'admin@example.com',
        name: 'Admin User',
        password: '$2b$10$examplehashedpassword', // This should be properly hashed in production
        role: 'ADMIN'
      }
    });

    console.log('User created:', user);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();