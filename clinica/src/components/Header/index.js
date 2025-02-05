'use client'
import Image from "next/image";
import styles from "./Header.module.css";
import { useState } from "react";
import Link from "next/link";

export default () => {

    const [div1, setDiv1] = useState(false);
    const [div2, setDiv2] = useState(false);
    const [div3, setDiv3] = useState(false);


    return (
        <header className={styles.header}>
            <div>
                <Link className={styles.pPrimeiro} href="/">Home </Link>
            </div>

            <div onMouseLeave={() => setDiv1(false)} >
                <p className={styles.pPrimeiro} onMouseEnter={() => setDiv1(true)}>Médicos</p>

                {div1 && (<div className={styles.div}>
                    <Link  href="/medicoListar">Listar</Link>
                    <Link  href="/">Adicionar</Link>
                    <Link  href="/">Editar</Link>
                    <Link  href="/">Excluir</Link>
                </div>)}
            </div>

            <div   onMouseLeave={() => setDiv2(false)}>
                <p className={styles.pPrimeiro} onMouseEnter={() => setDiv2(true)}>Pacientes</p>

                {div2 && (<div className={styles.div}>
                    <Link  href="/">Listar</Link>
                    <Link  href="/">Adicionar</Link>
                    <Link  href="/">Editar</Link>
                    <Link  href="/">Excluir</Link>
                </div>)}
            </div>

            <div   onMouseLeave={() => setDiv3(false)}>
                <p className={styles.pPrimeiro} onMouseEnter={() => setDiv3(true)}>Agendamento</p>

                {div3 && (<div className={styles.div}>
                    <Link  href="/">Listar Consultas</Link>
                    <Link  href="/">Agendar Consultas</Link>
                    <Link  href="/">Editar Agendamento</Link>
                    <Link  href="/">Cancelar</Link>
                </div>)}
            </div>

        </header>
    )
}