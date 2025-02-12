'use client'
import Image from "next/image";
import styles from "./consultas.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default () =>{

    const [consulta, setConsulta] = useState([])

    const getApi = async () =>{
        const conteudo = await fetch('https://api-clinica-2a.onrender.com/consultas')
        if (!conteudo.ok) {
            throw new Error('Erro ao buscar:' + conteudo.statusText);
        }
        const data = await conteudo.json();
        setConsulta(data)
        console.log(consulta)
    }

    useEffect(() => {
        getApi();
    }, [])
    return(
        <section>
        <div className={styles.divPrincipal}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>ID</th>
                        <th className={styles.th}>Nome</th>
                        <th className={styles.th}>Médico</th>
                        <th className={styles.th}>Paciente</th>
                        <th className={styles.th}>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                {consulta.map(medico =>(
                    <tr key={medico.id}>
                        {console.log(medico.nome)}
                        <td className={styles.td}>{medico.id}</td>
                        <td className={styles.td}>{medico.especialidade}</td>
                        <td className={styles.td}>{medico.medico}</td>
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