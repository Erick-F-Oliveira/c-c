import * as z from "zod";

const discordAuthSchema = z.object({
  discordId: z.string().min(1, "Discord ID é obrigatório"),
  username: z.string().min(1, "Username é obrigatório"),
  avatar: z.string().default(""),
  email: z.email("E-mail inválido ou não fornecido"),
});

const googleAuthSchema = z.object({
  googleId: z.string().min(1, "Google ID é obrigatório"),
  username: z.string().min(1, "Nome de exibição é obrigatório"),
  avatar: z.string().default(""),
  email: z.email("E-mail inválido ou não fornecido"),
});

export { discordAuthSchema, googleAuthSchema };
