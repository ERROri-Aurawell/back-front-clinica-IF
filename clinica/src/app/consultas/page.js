'use client'
import Image from "next/image";
import styles from "./consultas.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default () => {

    const [divPrincipal, setDivPrincipal] = useState(true);
    const [botao1, setBotao1] = useState(false);
    const [botao2, setBotao2] = useState(false);

    const [consulta, setConsulta] = useState([]);

    const [medico, setMedico] = useState([]);

    const [paciente, setPaciente] = useState([]);

    const mudardiv = (numero) => {
        setDivPrincipal(false);
        setBotao1(false);
        setBotao2(false);

        switch (numero) {
            case 1:
                setBotao1(true);
                break;
            case 2:
                setBotao2(true);
                break;
            case 3:
                setDivPrincipal(true);
                break;
        }
    };


    const mudarLetraM = (evento) => {
        let letra = "";
        console.log(evento.target.value + " :Evento capturado");
        letra = evento.target.value;
        letra = letra.toLowerCase();
        console.log(letra + " : letra armazenada");
        getMedico(letra);
    }

    
    const mudarLetraP = (evento) => {
        let letra = "";
        console.log(evento.target.value + " :Evento capturado");
        letra = evento.target.value;
        letra = letra.toLowerCase();
        console.log(letra + " : letra armazenada");
        getPaciente(letra);
    }

    const getApi = async () => {
        const conteudo = await fetch('https://api-clinica-2a.onrender.com/consultas')
        if (!conteudo.ok) {
            console.log(new Error('Erro ao buscar:' + conteudo.statusText));
        }
        const data = await conteudo.json();
        setConsulta(data)
        console.log(consulta)
    }

    const getPaciente = async (paciente) => {
        const conteudo = await fetch(`https://api-clinica-2a.onrender.com/consultas?paciente=${paciente}`)
        if (!conteudo.ok) {
            console.log(new Error('Erro ao buscar:' + conteudo.statusText));
        }
        const data = await conteudo.json();
        setPaciente(data)
        console.log(paciente)
    }

    const getMedico = async (medico) => {
        console.log(medico + ": Nome pesquisado")
        const conteudo = await fetch(`https://api-clinica-2a.onrender.com/consultas?medico=${medico}`)
        if (!conteudo.ok) {
            console.log(new Error('Erro ao buscar:' + conteudo.statusText));
            setMedico( [{id: "", nome: "", email: "", telefone: "", especialidade: ""}]);
        } else {
            const data = await conteudo.json();
            setMedico(data)
            console.log(medico)
        }
    }


    useEffect(() => {
        getApi();
    }, [])

    return (
        <section className={styles.base}>

            <div className={styles.divDoButton}>
                <button className={styles.button} onClick={() => { mudardiv(1) }}>Buscar médico</button>
            </div>

            <div className={styles.divDoButton}>
                <button className={styles.button} onClick={() => { mudardiv(2) }}>Buscar paciente</button>
            </div>

            <div>
                <button onClick={() => { mudardiv(3) }} className={styles.button}>Voltar</button>
            </div>


            {botao1 && <div className={styles.divsS}>
                <p>Procure por um médico</p>
                <input type="text" onChange={mudarLetraM} />
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
                            {medico.map(medico => (
                                <tr key={medico.id}>
                                    {console.log(medico.nome)}
                                    <td className={styles.td}>{medico.id}</td>
                                    <td className={styles.td}>{medico.nome}</td>
                                    <td className={styles.td}>{medico.telefone}</td>
                                    <td className={styles.td}>{medico.email}</td>
                                    <td className={styles.td}>{medico.especialidade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
            }




            {botao2 && <div className={styles.divsS}>
                <p>Procure por um paciente</p>
                <input type="text" onChange={mudarLetraP} />
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
                                    {console.log(medico.nome)}
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
            }

            <section className={styles.section2}>

                {divPrincipal && <div className={styles.divPrincipal}>
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
                            {consulta.map(medico => (
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
                </div>}
            </section>

        </section>
    )
}