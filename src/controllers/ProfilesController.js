import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ProfilesController = {
  show: async (req, res) => {
    const { user_id } = req.params;
    const profile = await prisma.profile.findUnique({
      where: {
        userId: Number(user_id),
      },
    });

    if (profile == null) return res.status(304).json();

    return res.json(profile);
  },
  create: async (req, res) => {
    const { user_id } = req.params;
    const { photo_url, user_description, age } = req.body;

    await prisma.profile.create({
      data: {
        photo_url,
        user_description,
        age,
        userId: Number(user_id),
      },
    });

    return res.status(200).json();
  },
  update: async (req, res) => {
    const { user_id } = req.params;
    const { photo_url, user_description, age } = req.body;

    await prisma.user.update({
      where: {
        id: Number(user_id),
      },
      data: {
        Profile: {
          update: {
            photo_url,
            user_description,
            age,
          },
        },
      },
    });

    return res.json({ msg: "Perfil atualizado." });
  },
};

export default ProfilesController;
