'use client'
import Image from "next/image";
import styles from "./medicoListar.module.css";
import { useState } from "react";
import Link from "next/link";

export default () =>{

    const medicosFake = [
        {
            id: 1,
            nome: "aaa",
            telefone: 1975,
            email: "a@gmail",
            espec: "sim",
        },
        {
            id: 2,
            nome: "bbb",
            telefone: 1980,
            email: "b@gmail",
            espec: "não",
        },
        {
            id: 3,
            nome: "ccc",
            telefone: 1990,
            email: "c@gmail",
            espec: "talvez",
        },
        {
            id: 4,
            nome: "ddd",
            telefone: 1975,
            email: "d@gmail",
            espec: "se pá",
        },
        {
            id: 5,
            nome: "eee",
            telefone: 2200,
            email: "e@gmail",
            espec: "creio que não",
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
                            <th className={styles.th}>Especialidade</th>
                        </tr>
                    </thead>
                    <tbody>
                    {medicosFake.map(medico =>(
                        <tr key={medico.id}>
                            <td className={styles.td}>{medico.id}</td>
                            <td className={styles.td}>{medico.nome}</td>
                            <td className={styles.td}>{medico.telefone}</td>
                            <td className={styles.td}>{medico.email}</td>
                            <td className={styles.td}>{medico.espec}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}