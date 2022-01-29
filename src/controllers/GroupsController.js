import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const GroupsController = {
  index: async (req, res) => {
    const { user_id } = req.params;
    const groups = await prisma.user.findMany({
      where: {
        id: Number(user_id),
      },
      select: {
        Groups: {
          include: {
            Members: true,
          },
        },
      },
    });

    return res.json(groups[0]);
  },
  create: async (req, res) => {
    const { title, description } = req.body;

    await prisma.group.create({
      data: {
        title,
        description,
      },
    });
    return res.json({ msg: "Grupo criado." });
  },
  update: async (req, res) => {
    const { group_id } = req.params;
    const { title, description } = req.body;

    await prisma.group.update({
      where: {
        id: Number(group_id),
      },
      data: {
        title,
        description,
      },
    });
    return res.json({ msg: "Grupo atualizado." });
  },
  destroy: async (req, res) => {
    const { group_id } = req.params;

    await prisma.group.delete({
      where: {
        id: Number(group_id),
      },
    });
    return res.json({ msg: "Grupo apagado" });
  },
  addMembers: async (req, res) => {
    const { group_id } = req.params;
    const { users_id } = req.body;

    await prisma.group.update({
      where: {
        id: Number(group_id),
      },
      data: {
        Members: {
          connect: users_id,
        },
      },
    });

    return res.json({ msg: "Membro adicionado" });
  },
  removeMembers: async (req, res) => {
    const { group_id } = req.params;
    const { users_id } = req.body;

    await prisma.group.update({
      where: {
        id: Number(group_id),
      },
      data: {
        Members: {
          disconnect: users_id,
        },
      },
    });

    return res.json({ msg: "Membros removidos." });
  },
};

export default GroupsController;
