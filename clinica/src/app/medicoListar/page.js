'use client'
import Image from "next/image";
import styles from "./medicoListar.module.css";
import { useState , useEffect} from "react";
import Link from "next/link";

export default () =>{


    const [divCima, setDivCima] = useState(false)


    const [medicos, setMedicos] = useState([])
    const [procurar, setProcurar] = useState([])

    const [letra, setLetra] = useState([])

    const mudarLetra = (evento) => {
        console.log(evento.target.value);
        setLetra(evento.target.value);
    }

    function mudarDiv() {
        setDivCima(!divCima)
    }

    const getApi = async () =>{
        const conteudo = await fetch('https://api-clinica-2a.onrender.com/medicos')
        if (!conteudo.ok) {
            throw new Error('Erro ao buscar:' + conteudo.statusText);
        }
        const data = await conteudo.json();
        setMedicos(data)
        console.log(medicos)
    }

    const getProcurar = async (variavel) =>{
        const conteudo = await fetch(`https://api-clinica-2a.onrender.com/medicos?nome=${variavel}`)
        if (!conteudo.ok) {
            throw new Error('Erro ao buscar:' + conteudo.statusText);
        }
        const data = await conteudo.json();
        setProcurar(data)
        console.log(procurar)
    }

    useEffect(() => {
        getApi();
    }, [])

    return(
        <section className={styles.section}>
            <button className={styles.button} onClick={mudarDiv}>Buscar médico</button>

            {divCima && <div className={styles.vaiAparecer}>
                <p>coisas</p>
                <input type="text" onChange={mudarLetra} />

                <ul>
                    {procurar.map(especifico =>(
                        <li key={especifico.id}>{especifico.nome}</li>
                    ))}
                </ul>
            </div>}
            
                {!divCima &&<div className={styles.divPrincipal}>
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
                    {medicos.map(medico =>(
                        <tr key={medico.id}>
                            <td className={styles.td}>{medico.id}</td>
                            <td className={styles.td}>{medico.nome}</td>
                            <td className={styles.td}>{medico.telefone}</td>
                            <td className={styles.td}>{medico.email}</td>
                            <td className={styles.td}>{medico.especialidade}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>}
        </section>
    )
}