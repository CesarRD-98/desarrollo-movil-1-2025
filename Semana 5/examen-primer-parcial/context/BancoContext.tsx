import { createContext } from "react";
import { Transaccion } from "../models/Transaccion";

export const BancoContext = createContext({
    saldo: 0,
    tipoTransaccion: {} as Transaccion[],
    depositarSaldo: () => {},
    transferirSaldo: (retiro: number) => {}
})