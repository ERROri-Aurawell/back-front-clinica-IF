'use client'
import Image from "next/image";
import styles from "./pacienteListar.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default () => {

    const [paciente, setPaciente] = useState([])
    const [procurar, setProcurar] = useState([])

    const [divCima, setDivCima] = useState(false)

    let letra = "";
    let saida = "";

    const getApi = async () => {
        const conteudo = await fetch('https://api-clinica-2a.onrender.com/pacientes')
        if (!conteudo.ok) {
            console.log( new Error('Erro ao buscar:' + conteudo.statusText));
        }
        const data = await conteudo.json();
        setPaciente(data)
        console.log(paciente)
    }

    const getProcurar = async (variavel) => {
        console.log(variavel + ": Nome pesquisado")
        const conteudo = await fetch(`https://api-clinica-2a.onrender.com/pacientes?nome=${variavel}`)
        if (!conteudo.ok) {
            console.log(new Error('Erro ao buscar:' + conteudo.statusText));
            setProcurar([{id: "", nome: ""}])
        } else {
            const data = await conteudo.json();
            setProcurar(data)
            console.log(procurar)
        }
    }

    const mudarLetra = (evento) => {
        console.log(evento.target.value + " :Evento capturado");

        letra = evento.target.value;
        saida = letra.toLowerCase();
        console.log(saida + " : letra armazenada");

        getProcurar(saida)
    }

    function mudarDiv() {
        setDivCima(!divCima)
    }

    useEffect(() => {
        getApi();
    }, [])

    return (
        <section className={styles.section}>
            <div className={styles.divDoButton}>
                <button className={styles.button} onClick={mudarDiv}>Buscar paciente</button>
            </div> 

            {!divCima && <div className={styles.divPrincipal}>
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
            </div>}


            {divCima &&<div className={styles.vaiAparecer}>
                <p>Procure por um paciente</p>
                <input type="text" onChange={mudarLetra} />
                    {procurar.map(especifico => (
                        <li key={especifico.id}>{especifico.nome}</li>
                    ))}

                </div>}
        </section>
    )
}