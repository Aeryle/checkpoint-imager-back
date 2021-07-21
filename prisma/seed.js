const faker = require("faker");

const prismaClient = require("../src/prismaClient");

async function main() {
  const users = await Promise.all(
    new Array(30).fill(undefined).map(() => {
      const user = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        avatarURL: Math.round(Math.random())
          ? faker.internet.avatar()
          : undefined,
      };

      return prismaClient.user.create({ data: user });
    })
  );

  const images = await Promise.all(
    new Array(10).fill(undefined).map(() => {
      const image = {
        url: faker.image.unsplash.imageUrl(),
        name: faker.lorem.sentence(Math.round(Math.random() * 10) + 5),
        uploaderId: users[Math.floor(Math.random() * users.length)].id,
      };

      return prismaClient.image.create({ data: image });
    })
  );

  await Promise.all(
    new Array(10).fill(undefined).map(() => {
      const tag = {
        name: faker.lorem.slug(),
        images: {
          connect: new Array(Math.floor(Math.random() * 3))
            .fill(undefined)
            .map(() => ({
              id: images[Math.floor(Math.random() * images.length)].id,
            })),
        },
      };

      return prismaClient.tag.create({ data: tag });
    })
  );
}

main().finally(() => prismaClient.$disconnect());
