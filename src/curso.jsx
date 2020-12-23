import React from 'react';

const Curso = () => (
    <>
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png" alt="go desde cero" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/24c5fb07-752a-4212-adf3-266b64396067.jpg" alt="" />
                        </div>
                    </div>
                    <span className="small">Alexys Lozada</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://ed.team/cursos/go">$ 20USD</a>
            </div>
        </div>
    </article>
    </>
);

export default Curso