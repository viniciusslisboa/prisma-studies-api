import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PostsController = {
  index: async (req, res) => {
    const { user_id } = req.params;

    const posts = await prisma.post.findMany({
      where: {
        Author: {
          id: Number(user_id),
        },
      },
      include: {
        Comments: true,
      },
    });

    return res.json(posts);
  },
  create: async (req, res) => {
    const { user_id } = req.params;
    const { title, description } = req.body;

    await prisma.post.create({
      data: {
        title,
        description,
        authorId: Number(user_id),
      },
      include: {
        Comments: true,
      },
    });

    return res.json({ msg: "Postagem criada." });
  },
  update: async (req, res) => {
    const { post_id } = req.params;
    const { title, description } = req.body;

    await prisma.post.update({
      where: {
        id: Number(post_id),
      },
      data: {
        title,
        description,
      },
    });

    return res.json({ msg: "Postagem atualizada." });
  },
  destroy: async (req, res) => {
    const { post_id } = req.params;

    await prisma.post.delete({
      where: {
        id: Number(post_id),
      },
    });

    return res.json({ msg: "Postagem deletada." });
  },
};

export default PostsController;
