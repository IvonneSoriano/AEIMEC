/*Aquí va la información que saldrá en la parte del Home, especificamente donde está el slider */
export const home = {
    sliders: [
        {
            /*Aquí debemos colocar una ruta o url de imagen */
            img: "assets/img/homeSlider/1.jpg",
            /*El título que saldrá en la imagen */
            title: "¡Soluciones innovadoras!",
            /*Debemos incluir una pequeña descripción */
            description: "AEIMEC está a la vanguardia para dar soluciones óptimas a los problemas."
        },
        {
            /*Aquí debemos colocar una ruta o url de imagen */
            img: "assets/img/homeSlider/2.jpg",
            /*El título que saldrá en la imagen */
            title: "Robótica a profundidad",
            /*Debemos incluir una pequeña descripción */
            description: "Nos apasiona crear soluciones robóticas "
        },
        {
            /*Aquí debemos colocar una ruta o url de imagen */
            img: "assets/img/homeSlider/3.jpg",
            /*El título que saldrá en la imagen */
            title: "Trabajamos con pasión",
            /*Debemos incluir una pequeña descripción */
            description: "Somos un grupo de jóvenes que estamos al servicio de la gente."
        }
    ]
}

/*Aquí va la información que saldrá en la parte del Home, especificamente donde está el AboutUs */
export const aboutUs = {
    /*Esta es la info que va superpuesta en una imagen */
    subtitle: {
        title: "¿Quiénes somos?",
        description: "Somos un grupo de jóvenes de la carrera de ingeniería mecatrónica de la Universidad Don Bosco apasionados por la innovación, la tecnología y la robótica, motivados por los lazos de amistad que nos unen como también por el interés de servicio a nuestra comunidad sin dejar a un lado el compromiso con nuestro medio ambiente y el cuidado de los recursos naturales."
    },
    /* Aquí se coloca, comunmente, la Misión y la Visión, pero se puede colocar cualquier información siempre y cuando vaya en pareja */
    generalInfo: [
        {
            title: "Misión",
            description: "Desarrollar iniciativas que sirvan de potenciador para el crecimiento profesional y humano de los estudiantes."
        },
        {
            title: "Visión",
            description: "Ser referentes del Asocianismo Estudiantil a través del factor diferenciador de la experiencia AEIMEC, representando con dignidad a los estudiantes de Mecatrónica y destacando el trabajo e importancia de la carrera en El Salvador."
        }
    ],
    /*Aquí se debe colocar la información de los mimebros */
    members: {
        title: "Miembros",
        members: [

            {
                fullname: "Ricardo Aarón",
                job: "Presidente",
                img: "assets/img/junta/Ricardo Aarón - Presidente.jpg"
            },
            {
                fullname: "Francisco Peña",
                job: "Vicepresidente",
                img: "assets/img/junta/Francisco Peña - Vicepresidente.jpg"
            },
            {
                fullname: "Camila Acevedo",
                job: "Secretaria",
                img: "assets/img/junta/Camila Acevedo - Secretaria.jpg"
            },
            {
                fullname: "Maria José Pacheco",
                job: "Tesorera",
                img: "assets/img/junta/Maria José Pacheco - Tesorera.jpg"
            },
            {
                fullname: "Alejandro Martínez",
                job: "Vocal",
                img: "assets/img/junta/Alejandro Martínez - Vocal.jpg"
            }
        ],
        /*Esta es la info que va en el apartado de AD */
        ad: {
            title: "Conviértete en miembro de AEIMEC UDB",
            /*Se coloca la dirección a donde nos redirigirá el botón */
            url: "https://www.facebook.com/aeimecUDB/",
            /*Aquí se coloca lo que se ve en el botón */
            btnInfo: "Únete ahora"
        }
    }
};



/*Aquí va la información que saldrá en la parte del Home, especificamente donde está el contactUs */
export const contatUs = {
    /*Aquí colocamos el título de la sección*/
    title: "Contáctanos",
    /*Se añade la dirección de la imagen que aparecerá en la parte de contactUs */
    img: "assets/img/contact.jpg",
    /*Aquí colocamos un email de contacto */
    email: "aeimec@udb.edu.sv"
};

/*Aquí va la información que saldrá en la parte del Portafolio*/
export const portfolio = {
    /*Esta info es para la página general de portafolio */
    portfolio: {
        title: "Portafolio",
        description: "Dentro de las actividades desarrolladas como AEIMEC se destacan eventos de convivencia estudiantil, actividades formativas como: cursos, ponencias, talleres, conversatorios, visitas técnicas y clubes. Apoyo técnico – formativo a proyectos como: el Science Girl con la UDB y Vector con World Vision El Salvador. Voluntariado ecológico bajo el movimiento Chipahua Kali y la Jornada de Ingeniería Mecatrónica, el cual es un evento temático anual que reúne a estudiantes y profesionales con el objetivo de hacer visualizar la labor investigativa de los estudiantes y la importancia de la Mecatrónica en el mundo laboral a los asistentes."
    },
    /*Aquí deben colocarl todos los proyectos que tengan, con la siguiente información
        • url = como será la dirección en la barra de redireccionamiento
        • name = Nombre del proyecto
        • brand = marca
        • img = Ruta de la imagen que se mostrará
        • description = Descripción del proyecto
     */
    projects: [
        {
            url: "1",
            name: "Chipahua Kali.",
            brand: "UDB",
            img: "assets/img/chipahuaKali/front.jpg",
            description: "Proyecto enfocado al turismo ecológico; conocer nuestro hermoso país y además brindar un apoyo de concientización medioambiental. Proyecto desarrollado como voluntario ecológico por parte de la AEIMEC y la Asociación de Estudiantes de Diseño Industrial (AEDI).",
            /*Galería es un conjunto de imágenes para mostrarse en el proyecto */
            galery: [
                {
                    /*Se añade un nombre */
                    name: "Imagen 1",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/chipahuaKali/1.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 2",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/chipahuaKali/2.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 3",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/chipahuaKali/3.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 4",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/chipahuaKali/4.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 5",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/chipahuaKali/5.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 6",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/chipahuaKali/6.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 7",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/chipahuaKali/7.jpg"
                }

            ]
        },
        {
            url: "2",
            name: "Club de Drones.",
            brand: "UDB",
            img: "assets/img/clubDrones/front.jpg",
            description: "El Club de Drones es una iniciativa de parte de la Asociación Salesiana de Estudiantes en Aeronáutica (ASEA) y la Asociación de Estudiantes de Ingeniería Mecatrónica (AEIMEC) para fomentar la investigación tecnológica y científica para la construcción desde cero de prototipos de Drones, pasando por diferentes facetas de aprendizaje, desde lo más básico hasta lo más profesional, cubriendo investigaciones para lograr implementar estas tecnologías en los diferentes campos.",
            /*Galería es un conjunto de imágenes para mostrarse en el proyecto */
            galery: [
                {
                    /*Se añade un nombre */
                    name: "Imagen 1",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/clubDrones/1.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 2",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/clubDrones/2.jpg"
                }, {
                    /*Se añade un nombre */
                    name: "Imagen 3",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/clubDrones/3.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 4",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/clubDrones/4.jpg"
                }
            ]
        },
        {
            url: "3",
            name: "Club de Machine Learning e Inteligencia Artificial.",
            brand: "UDB",
            img: "assets/img/mL/front.jpg",
            description: "Iniciativa que surge de la necesidad de ampliar los conocimientos de Machine Learning e IA, tecnologías que actualmente estan en expansión con gran potencial en la industria. Proyecto creado por AEIMEC en conjunto con la Asociación Salesiana de Estudiantes de Ingenieria en Computación (ASEICC), donde se desarrollaron cursos de Python y Visión Artificial. ",
            /*Galería es un conjunto de imágenes para mostrarse en el proyecto */
            galery: [
                {
                    /*Se añade un nombre */
                    name: "Imagen 1",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/mL/1.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 2",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/mL/2.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 3",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/mL/3.jpg"
                }
            ]
        },
        {
            url: "4",
            name: "Club de Robótica.",
            brand: "Marca",
            img: "assets/img/robotica/front.jpg",
            description: "Espacio creado para que estudiantes de la Universidad Don Bosco, conozcan sobre la robótica, que puedan desarrollar nuevas competencias en programación, diseño, además de crear tecnologías que estén al servicio de la comunidad.",
            /*Galería es un conjunto de imágenes para mostrarse en el proyecto */
            galery: [
                {
                    /*Se añade un nombre */
                    name: "Imagen 1",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/robotica/1.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 2",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/robotica/2.jpg"
                }
            ]
        },
        {
            url: "5",
            name: "Vector",
            brand: "World Vision",
            img: "assets/img/vector/front.jpg",
            description: "Vector es una iniciativa que tiene por objetivo potenciar el área tecnológica en la juventud salvadoreña. La asociación de estudiantes de Ingeniería Mecatrónica (AEIMEC) y en conjunto con el Centro de Desarrollo de Carreras (CDC) y World Vision El Salvador trabajamos de la mano para la formulación de este proyecto cuyo principal enfoque es impartir talleres en las ramas de Mecánica, Informática y Robótica a niños, quienes por medio de este proyecto tendrán la posibilidad de descubrir sus habilidades para estas tecnologías y conocer el enorme potencial que tienen este tipo de carreras.",
            /*Galería es un conjunto de imágenes para mostrarse en el proyecto */
            galery: [
                {
                    /*Se añade un nombre */
                    name: "Imagen 1",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/vector/1.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 2",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/vector/2.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 3",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/vector/3.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 4",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/vector/4.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 5",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/vector/5.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 6",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/vector/6.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 7",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/vector/7.jpg"
                }

            ]
        },
        {
            url: "6",
            name: "Taller de Robótica Educativa para Docentes.",
            brand: "Secretaría de Innovación de El Salvador",
            img: "assets/img/tallerRoboS/front.jpg",
            description: "Taller enfocado a reforzar conocimientos tecnológicos para docentes que lideran materias de informática y robótica en diferentes centros escolares del país. Iniciativa coordinada por la Secretaría de Innovación, con el apoyo del Ministerio de Educación y Plan Internacional El Salvador. ",
            /*Galería es un conjunto de imágenes para mostrarse en el proyecto */
            galery: [
                {
                    /*Se añade un nombre */
                    name: "Imagen 1",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/tallerRoboS/1.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 2",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/tallerRoboS/2.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 3",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/tallerRoboS/3.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 4",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/tallerRoboS/4.jpg"
                },
                {
                    /*Se añade un nombre */
                    name: "Imagen 5",
                    /*Se añade la url o la ruta de la imagen */
                    img: "assets/img/tallerRoboS/5.jpg"
                }
            ]
        }

    ],
    /*Este apartado es para la sección de colaboraciones */
    colaborations: {
        title: "Colaboraciones",
        /*Se añade el nombre de los partners, así como su logo */
        partners: [
            {
                name: "UDB",
                img: "assets/img/partners/UDB.png"
            },
            {
                name: "WorldVision",
                img: "assets/img/partners/World vision.png"
            },
            {
                name: "Secretaría de innovación de El Salvador",
                img: "assets/img/partners/Secretaría de innovación.png"
            },


        ]
    }
};

/*Aquí va la info de We Are */
export const weAre = {
    event: {
        year: "2021",
        description: "El evento mecatrónico más esperado",
        ticketUrl: null
    },
    date: {
        date: "23 de agosto de 2021",
        englishDate: "08/23/2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit a ac etiam tempor semper. Est aenean leo mi facilisis purus morbi. Interdum dolor lectus nisi.",

    },
    agenda: [
        {
            title: "Día 1",
            events: [
                {
                    time: "8:00 am",
                    img: "https://images.generated.photos/wJJSEyljfrNHAWlTKA-HYS_gevZFug-nzdVSjSMVmGg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODEyNjJfMDc5/MDUzMF8wNzYwNTIy/LmpwZw.jpg",
                    title: "Título de la ponencia en evento"
                },
                {
                    time: "9:00 am",
                    img: "https://images.generated.photos/wJJSEyljfrNHAWlTKA-HYS_gevZFug-nzdVSjSMVmGg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODEyNjJfMDc5/MDUzMF8wNzYwNTIy/LmpwZw.jpg",
                    title: "Título de la ponencia en evento 2"
                },
                {
                    time: "12:00 am",
                    img: "https://images.generated.photos/wJJSEyljfrNHAWlTKA-HYS_gevZFug-nzdVSjSMVmGg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODEyNjJfMDc5/MDUzMF8wNzYwNTIy/LmpwZw.jpg",
                    title: "Título de la ponencia en evento 3"
                }
            ],
        },

        {
            title: "Día 2",
            events: [
                {
                    time: "8:00 am",
                    img: "https://images.generated.photos/wJJSEyljfrNHAWlTKA-HYS_gevZFug-nzdVSjSMVmGg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODEyNjJfMDc5/MDUzMF8wNzYwNTIy/LmpwZw.jpg",
                    title: "Título de la ponencia en evento"
                },
                {
                    time: "9:00 am",
                    img: "https://images.generated.photos/wJJSEyljfrNHAWlTKA-HYS_gevZFug-nzdVSjSMVmGg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODEyNjJfMDc5/MDUzMF8wNzYwNTIy/LmpwZw.jpg",
                    title: "Título de la ponencia en evento 2"
                },
                {
                    time: "12:00 am",
                    img: "https://images.generated.photos/wJJSEyljfrNHAWlTKA-HYS_gevZFug-nzdVSjSMVmGg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODEyNjJfMDc5/MDUzMF8wNzYwNTIy/LmpwZw.jpg",
                    title: "Título de la ponencia en evento 3"
                }
            ],
        },
        {
            title: "Día 3",
            events: [
                {
                    time: "8:00 am",
                    img: "https://images.generated.photos/wJJSEyljfrNHAWlTKA-HYS_gevZFug-nzdVSjSMVmGg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODEyNjJfMDc5/MDUzMF8wNzYwNTIy/LmpwZw.jpg",
                    title: "Título de la ponencia en evento"
                },
                {
                    time: "9:00 am",
                    img: "https://images.generated.photos/wJJSEyljfrNHAWlTKA-HYS_gevZFug-nzdVSjSMVmGg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODEyNjJfMDc5/MDUzMF8wNzYwNTIy/LmpwZw.jpg",
                    title: "Título de la ponencia en evento 2"
                },
                {
                    time: "12:00 am",
                    img: "https://images.generated.photos/wJJSEyljfrNHAWlTKA-HYS_gevZFug-nzdVSjSMVmGg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODEyNjJfMDc5/MDUzMF8wNzYwNTIy/LmpwZw.jpg",
                    title: "Título de la ponencia en evento 3"
                }
            ],
        },

    ],
    gallery: [
        {
            img: "assets/img/weare/weare1.jpg"
        },
        {
            img: "assets/img/weare/weare2.jpg"
        },
        {
            img: "assets/img/weare/weare3.jpg"
        },

        {
            img: "assets/img/weare/weare4.jpg"
        },

        {
            img: "assets/img/weare/weare5.jpg"
        },

        {
            img: "assets/img/weare/weare6.jpg"
        },

        {
            img: "assets/img/weare/weare7.jpg"
        },

        {
            img: "assets/img/weare/weare8.jpg"
        },

        {
            img: "assets/img/weare/weare9.jpg"
        },

        {
            img: "assets/img/weare/weare10.jpg"
        },

    ],
    sponsors: [
        {
            name: "Uno",
            url: "",
            img: "assets/img/sponsors/Sennheiser.png"

        },
        {
            name: "dos",
            url: "",
            img: "assets/img/sponsors/Group8.png"

        }
        ,
        {
            name: "tres",
            url: "",
            img: "assets/img/sponsors/Group.png"

        }
        ,
        {
            name: "Cu",
            url: "",
            img: "assets/img/sponsors/Etrade.png"

        }
    ]
};


export const menu = {
    nav: ["Home", "Nosotros", "Contáctenos", "Portafolio", "We Are"],
    footer: "All Right Reserved 2020."
}

/*Aquí se colocarán todas las redes sociales que hay */
export const socialNetworks = {
    /*     • Aquí solo colocaremos las url de las redes sociales*/
    facebook: "https://www.facebook.com/aeimecUDB ",
    instagram: "https://www.instagram.com/aeimec_udb/",
    whatsapp: "https://www.facebook.com/"
};

