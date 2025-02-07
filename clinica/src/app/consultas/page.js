'use client'
import Image from "next/image";
import styles from "./consultas.module.css";
import { useState } from "react";
import Link from "next/link";

export default () =>{

    const consultaFake = [
        {
            id: 1,
            medico: "aaa",
            espec: 1975,
            paciente: "a@gmail",
            tipo: "sim",
        },
        {
            id: 2,
            medico: "bbb",
            espec: 1980,
            paciente: "b@gmail",
            tipo: "não",
        },
        {
            id: 3,
            medico: "ccc",
            espec: 1990,
            paciente: "c@gmail",
            tipo: "talvez",
        },
        {
            id: 4,
            medico: "ddd",
            espec: 1975,
            paciente: "d@gmail",
            tipo: "se pá",
        },
        {
            id: 5,
            medico: "eee",
            espec: 2200,
            paciente: "e@gmail",
            tipo: "creio que não",
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
                        <th className={styles.th}>Médico</th>
                        <th className={styles.th}>Especialidade</th>
                        <th className={styles.th}>Paciente</th>
                        <th className={styles.th}>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                {consultaFake.map(medico =>(
                    <tr key={medico.id}>
                        <td className={styles.td}>{medico.id}</td>
                        <td className={styles.td}>{medico.medico}</td>
                        <td className={styles.td}>{medico.espec}</td>
                        <td className={styles.td}>{medico.paciente}</td>
                        <td className={styles.td}>{medico.tipo}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </section>
    )
}