import { ColorsInputDropdown } from "../../../../components/ColorsInputDropdown";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { InputCurrency } from "../../../../components/inputCurrency";
import { useNewAccountModalController } from "./useNewAccountModalController";

export function NewAccountModal() {
  const {
    closeNewAccountModal,
    isNewAccountModalOpen
  } = useNewAccountModalController();

  return (
    <Modal
      title="Nova Conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}>
      <form>
        <div>
          <span className="text-gray-600 tracking-[0.5px] text-xs">Saldo</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[0.5px] text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Nome da conta"
          />
          <Select
            placeholder="Tipo"
            options={[
              {
                value: "CHECKING",
                label: "Conta Corrente",
              },
              {
                value: "INVESTMENT",
                label: "Investimentos",
              },
              {
                value: "CASH",
                label: "Dinheiro Físico",
              }
            ]}
          />

          <ColorsInputDropdown />
        </div>
      </form>
    </Modal>
  )
}
