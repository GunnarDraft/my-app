import { TempoContainer, P, B } from "@/styles";
import { useState, useEffect } from "react";

const Timer = () => {
    const [dias, setDias] = useState<number>(0);
    const [horas, setHoras] = useState<number>(0);
    const [minutos, setMinutos] = useState<number>(0);
    const [segundos, setSegundos] = useState<number>(0);

    useEffect(() => {
        const fechaFinal = new Date('2024-12-31T23:59:59');

        const actualizarTemporizador = () => {
            const ahora = new Date();
            const diferencia = Math.floor((fechaFinal.getTime() - ahora.getTime()) / 1000);

            const diasRestantes = Math.floor(diferencia / (24 * 60 * 60));
            const horasRestantes = Math.floor((diferencia % (24 * 60 * 60)) / (60 * 60));
            const minutosRestantes = Math.floor((diferencia % (60 * 60)) / 60);
            const segundosRestantes = Math.floor(diferencia % 60);

            setDias(diasRestantes);
            setHoras(horasRestantes);
            setMinutos(minutosRestantes);
            setSegundos(segundosRestantes);
        };

        const temporizadorInterval = setInterval(actualizarTemporizador, 1000);

        return () => clearInterval(temporizadorInterval);
    }, []);

    return (
        <TempoContainer>
            <P><B>{dias}</B><br />DÍAS</P>
            <P><B>{horas}</B><br />HRS</P>
            <P><B>{minutos}</B><br />MIN</P>
            <P><B>{segundos}</B><br />SEG</P>
        </TempoContainer>
    );
};
export default Timer