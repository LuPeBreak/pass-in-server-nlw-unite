import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: '3ac67642-a40c-40b5-ac1e-ee8cb5bd53b4',
      title: "Unite Summit Seeded",
      slug: "unite-summit-seeded",
      details: "Um evento p/ devs apaixonados usado para testar a aplicação",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database Seeded");
  prisma.$disconnect();
});
