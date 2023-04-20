import {
  HeaderContainer,
  LogoContent,
  HeaderContent,
  NewTransactionButton,
} from "./styles";
import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { Wallet } from "phosphor-react";
import { NewTransactionModal } from "../NewTransactionModal";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContent>
          <div>
            <Wallet size={44} color="#00B37E" weight="fill" />
          </div>
          <div>Smart Wallet</div>
        </LogoContent>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
