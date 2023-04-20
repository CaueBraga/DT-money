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
        <Dialog.Title>New Transaction</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Price" required />
          <input type="text" placeholder="Category" required />

          <TransactionType>
            <TypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Income
            </TypeButton>
            <TypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Outcome
            </TypeButton>
          </TransactionType>

          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
