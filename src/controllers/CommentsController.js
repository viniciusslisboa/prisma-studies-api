import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CommentsController = {
  create: async (req, res) => {
    const { post_id, user_id } = req.params;
    const {
      comments: { text },
    } = req.body;

    await prisma.post.update({
      where: {
        id: Number(post_id),
      },
      data: {
        Comments: {
          create: [{ text, authorId: Number(user_id) }],
        },
      },
    });

    return res.json({ msg: "Comentário criado." });
  },
  destroy: async (req, res) => {
    const { comment_id } = req.params;

    await prisma.comment.delete({
      where: {
        id: Number(comment_id),
      },
    });

    return res.json({ msg: "Comentário deletado." });
  },
};

export default CommentsController;
