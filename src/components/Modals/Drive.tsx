import React from "react"

import Buttom from "../Buttom.tsx"

export const Drive = () => {
    return (
        <div className="grid grid-cols-5 gap-[0.125rem] my-4">
            <Buttom locale="modal" link="https://drive.google.com/file/d/1aJZmDnlQRNXs06oWnxz_L5uwjsobuAYy/view">Localizar o drive</Buttom>
            <Buttom locale="modal" link="https://drive.google.com/file/d/1FaS1oexcy7ZtZcjyBG5nW-ZJsXh53hlm/view">Arte pelo número</Buttom>
            <Buttom locale="modal" link="https://drive.google.com/file/d/1djA4wbI6JOWhTzo9UKcf5KfdYl2BfZcW/view">Arte pela frase</Buttom>
            <Buttom locale="modal" link="https://drive.google.com/file/d/19jk0HMeCwAzBrV8EdhExSSxyE3hph9yB/view">Achei só o mockup</Buttom>
            <Buttom locale="modal" link="https://drive.google.com/file/d/1ShIDPJuvpm8rAh8lU_MuYSkbwpUzdxEf/view">Verificação de jato</Buttom>
            <Buttom locale="modal" link="https://drive.google.com/file/d/1EpAGWh9xZGGd23gSovZPGR4eTaOxl_Rw/view">Básico do corel draw</Buttom>
            <Buttom locale="modal" link="https://drive.google.com/file/d/1pGqv7wZY9ueXhR_LXYTpFWvCqsDPxu6N/view">ADD foto na arte</Buttom>
            <Buttom locale="modal" link="https://drive.google.com/file/d/1UeKOsn5ghwvJ3wna76R-xT4rzScUy59J/view">CMYK ou RGB</Buttom>
        </div>
    );
}
