import { Modal } from "@/components/modal/modal";
import { IHandlerChargeModalViewProps } from "./handlerChargeModal.type";
export function HandlerChargeModalView(props: IHandlerChargeModalViewProps) {
  const { form, actionChargeModal, closeModal, sendChargeSubmit } = props;
  return (
    <Modal.root
      onSubmit={form.handleSubmit(sendChargeSubmit)}
      modal={actionChargeModal.modal}
      className="flex flex-col w-[500px] h-fit space-y-5 bg-[#ecedf7] p-10 rounded-lg"
    >
      <Modal.title titleText={"Criar cobrança"} className="text-2xl font-bold" />
      <Modal.box>
        <Modal.label labelText="Nome*" className="pl-2" />
        <Modal.input
          name="name"
          className="w-full h-10 bg-white text-[#34425b] pl-2 rounded-lg"
          value={form.watch("name")}
          onChange={(e) => form.setValue("name", e.target.value)}
          error={form.formState.errors.name?.message as string}
        />
      </Modal.box>
      <Modal.box>
        <Modal.label labelText="Descrição" className="pl-2" />
        <Modal.input
          name="description"
          placeholder="Descrição da cobrança"
          className="w-full h-10 bg-white text-[#34425b] pl-2 rounded-lg"
          value={form.watch("description")}
          onChange={(e) => form.setValue("description", e.target.value)}
          error={form.formState.errors.description?.message as string}
        />
      </Modal.box>
      <Modal.box>
        <Modal.label labelText="Data de vencimento*" className="px-2" />
        <Modal.input
          name="expiredAt"
          type="date"
          className="w-full h-10 bg-white text-[#34425b] pl-2 rounded-lg"
          value={form.watch("expiredAt")}
          onChange={(e) => form.setValue("expiredAt", e.target.value)}
          error={form.formState.errors.expiredAt?.message as string}
        />
      </Modal.box>
      <Modal.box>
        <Modal.label labelText="Valor*" className="pl-2" />
        <Modal.input
          name="amount"
          type="number"
          placeholder="Valor da cobrança"
          className="w-full h-10 bg-white text-[#34425b] pl-2 rounded-lg"
          value={form.watch("amount")}
          onChange={(e) => form.setValue("amount", +e.target.value)}
          error={form.formState.errors.amount?.message as string}
        />
      </Modal.box>
      <Modal.box className="flex gap-10 mt-5">
        <Modal.button
          title="Salvar"
          className="w-full h-10 bg-[#727c94] text-white rounded-lg font-semibold hover:bg-[#34425b] duration-300 cursor-pointer"
        />
        <Modal.button
          type="button"
          title="Cancelar"
          onClick={closeModal}
          className="w-full h-10 bg-[#c4c7d5] text-white rounded-lg font-semibold hover:bg-[#34425b] duration-300 cursor-pointer"
        />
      </Modal.box>
    </Modal.root>
  );
}
