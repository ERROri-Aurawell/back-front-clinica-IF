'use client'
import Image from "next/image";
import styles from "./pacienteListar.module.css";
import { useState } from "react";
import Link from "next/link";

export default () =>{

    const pacienteFake = [
        {
            id: 1,
            nome: "aaa",
            telefone: 1975,
            email: "a@gmail",
            cpf: "0000000000",
        },
        {
            id: 2,
            nome: "bbb",
            telefone: 1980,
            email: "b@gmail",
            cpf: "9999999999",
        },
        {
            id: 3,
            nome: "ccc",
            telefone: 1990,
            email: "c@gmail",
            cpf: "88888888888",
        },
        {
            id: 4,
            nome: "ddd",
            telefone: 1975,
            email: "d@gmail",
            cpf: "666666666666",
        },
        {
            id: 5,
            nome: "eee",
            telefone: 2200,
            email: "e@gmail",
            cpf: "444444444444",
        },

    ]

    return(
        <section>
            <div>
                <p>paragráfo</p>


                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>Nome</th>
                            <th className={styles.th}>Telefone</th>
                            <th className={styles.th}>Email</th>
                            <th className={styles.th}>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                    {pacienteFake.map(medico =>(
                        <tr key={medico.id}>
                            <td className={styles.td}>{medico.id}</td>
                            <td className={styles.td}>{medico.nome}</td>
                            <td className={styles.td}>{medico.telefone}</td>
                            <td className={styles.td}>{medico.email}</td>
                            <td className={styles.td}>{medico.cpf}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}