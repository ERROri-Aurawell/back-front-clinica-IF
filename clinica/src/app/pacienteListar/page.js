'use client'
import Image from "next/image";
import styles from "./pacienteListar.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default () => {

    const [paciente, setPaciente] = useState([])

    const getApi = async () => {
        const conteudo = await fetch('https://api-clinica-2a.onrender.com/pacientes')
        if (!conteudo.ok) {
            throw new Error('Erro ao buscar:' + conteudo.statusText);
        }
        const data = await conteudo.json();
        setPaciente(data)
        console.log(paciente)
    }

    useEffect(() => {
        getApi();
    }, [])

    return (
        <section>
            <div className={styles.divPrincipal}>
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
                        {paciente.map(medico => (
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