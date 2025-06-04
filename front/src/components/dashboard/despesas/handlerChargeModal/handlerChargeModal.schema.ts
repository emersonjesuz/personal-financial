import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(5, { message: "Nome precisar ser preenchido" }),
  description: z.string().optional(),
  expiredAt: z.string({ message: "Data de vencimento precisa ser preenchido" }).date("Data de vencimento precisa ser preenchido"),
  amount: z.number({ message: "Valor precisa ser preenchido" }).min(1, { message: "Valor  precisa ser preenchido" }),
});
