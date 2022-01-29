import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const UsersController = {
  index: async (req, res) => {
    const users = await prisma.user.findMany({
      include: {
        Profile: true,
      },
    });

    return res.json(users);
  },
  create: async (req, res) => {
    const { name, email, password } = req.body;

    const verifyEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (verifyEmail) return res.json({ msg: "Esse email já existe." });

    await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return res.json({ msg: "Usuário criado." });
  },
  update: async (req, res) => {
    const { user_id } = req.params;
    const { name, email } = req.body;

    await prisma.user.update({
      where: {
        id: Number(user_id),
      },
      data: {
        name,
        email,
      },
    });

    return res.json({ msg: "Usuario atualizado." });
  },
  destroy: async (req, res) => {
    const { user_id } = req.params;

    await prisma.user.delete({
      where: {
        id: Number(user_id),
      },
    });

    return res.json({ msg: "Usuário deletado." });
  },
};

export default UsersController;
