const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados

    proffyValue = {
        name:"Magno Pacheco",
        avatar: "https://media-exp1.licdn.com/dms/image/C5603AQHcJzpwYjiuNQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=8rQQ_C2mDcO9zDZhCWodUyQZjhBtVY6OvfTN9sCQ2dA",
        whatsapp: "988987452", 
        bio: "Entusiasta das melhores tecnicas de musculação em alta performance. Especialição em Biomecânica de movimento para proporcionar ao aluno uma correta execução de um exercício, diminuindo o risco de lesão e eficácia no treinamento. Bora ficar grande?", 

    }

    classValue = {
        subject: 1, 
        cost: "20", 
        // o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, apos cadastramos a class
        {    
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {    
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }

    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    // todos os proffys

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // o horario que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horario do time_from (8h) precisa ser antes ou igual ao horario solicitado
    // o time_to precisa ser acima
    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectedProffys)
})













