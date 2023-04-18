import * as Dialog from "@radix-ui/react-dialog";

import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TypeButton,
} from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TypeButton>
            <TypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
