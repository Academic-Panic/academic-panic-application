import { PrismaClient, Role, Course } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding the database');
  const password = await hash('changeme', 10);
  config.defaultAccounts.forEach(async (account) => {
    let role: Role = 'USER';
    if (account.role === 'ADMIN') {
      role = 'ADMIN';
    }
    console.log(`Creating user ${account.username} at ${account.email} with role: ${role}`);
    await prisma.user.upsert({
      // NOTE: Compound uniqueness concatenates fields with underscores. See
      // https://www.prisma.io/docs/orm/prisma-schema/data-model/models#defining-a-unique-field
      // for more information. Multi-IDs require unique combinations, and are
      // less strict as a result
      where: { email: account.email },
      update: {},
      create: {
        username: account.username,
        email: account.email,
        password,
        role,
      },
    });
  });
  // config.defaultData.forEach(async (data, index) => {
  //   let condition: Condition = 'good';
  //   if (data.condition === 'poor') {
  //     condition = 'poor';
  //   } else if (data.condition === 'excellent') {
  //     condition = 'excellent';
  //   } else {
  //     condition = 'fair';
  //   }
  //   console.log(`Adding stuff: ${data.name} (${data.owner})`);
  //   await prisma.stuff.upsert({
  //     where: { id: index + 1 },
  //     update: {},
  //     create: {
  //       name: data.name,
  //       quantity: data.quantity,
  //       owner: data.owner,
  //       condition,
  //     },
  //   });
  // });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
