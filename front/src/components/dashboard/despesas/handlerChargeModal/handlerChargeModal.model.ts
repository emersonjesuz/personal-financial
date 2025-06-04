import { useForm } from "react-hook-form";
import { formSchema } from "./handlerChargeModal.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { use } from "react";
import { ChargeContext } from "@/context/dashboard/despesas/despesas.context";
import { z } from "zod";

export function HandlerChargeModalModel() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      expiredAt: "",
    },
  });

  const { actionChargeModal, handlerChargeModal } = use(ChargeContext);

  function closeModal() {
    handlerChargeModal({ modal: false, id: 0 });
  }

  const sendChargeSubmit = async (formData: z.infer<typeof formSchema>) => {
    console.log(formData);
  };

  return {
    form,
    closeModal,
    actionChargeModal,
    sendChargeSubmit,
  };
}
