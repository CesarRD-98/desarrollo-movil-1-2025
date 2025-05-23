import React, { useContext, useState } from 'react'
import { Children } from '../models/ChildrenModel'
import { BancoContext } from '../context/BancoContext'
import { Transaccion } from '../models/Transaccion'

export default function BancoProvider({ children }: Children) {

    const [saldo, setSaldo] = useState<number>(10000)
    const [tipoTransaccion, setTipoTransaccion] = useState<Transaccion[]>([])
    const [index, setIndex] = useState<number>(0)

    function autoIncremento() {
        setIndex(index + 1)
    }
    
    function depositarSaldo() {
        setSaldo(saldo + 500)
        autoIncremento()
        setTipoTransaccion([...tipoTransaccion, {id: index, saldo: 500, descripcion: 'Deposito'}])
    }

    function transferirSaldo(retiro: number) {
        setSaldo(saldo - retiro)
        autoIncremento()
        setTipoTransaccion([...tipoTransaccion, {id: index, saldo: retiro, descripcion: 'Retiro'}])
    }

    return (
        <>
        <BancoContext.Provider value={{saldo, tipoTransaccion, depositarSaldo, transferirSaldo}}>
            {children}
        </BancoContext.Provider>
        </>
    )
}

export function useBanco() {
    return useContext(BancoContext)
}
