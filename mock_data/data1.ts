export const appDefaults = {
  hourlyCost: 25,
  currencyISO: "USD",
  hoursPerDay: 8,
  daysPerWeek: 5
};

export const mockData = {
    ok: true,
    appDefaults: {
      hourlyCost: 25,
      currencyISO: "USD",
      hoursPerDay: 8,
      daysPerWeek: 5,
    },
    humanAssets: [
      {
        id: "A1",
        name: "Pablo Juele",
        hourlyCost: 25,
      },
      {
        id: "A2",
        name: "Robo Flecto",
        hourlyCost: 25,
      },
      {
        id: "A3",
        name: "Pluscu Amperfecto",
        hourlyCost: 25,
      }
    ],
    projects: [
      {
        id: "P1",
        name: "Proyecto Ejemplo",
        deliverables: [
          {
            id: "1D1",
            name: "Regionalization Support",
            startDate: "2021-01-01",
            elements: [
              {
                id: "E1",
                name: "Primera cuestion",
                hours: 6,
                who: null,
              },
              {
                id: "E2",
                name: "Segunda cuestion",
                hours: 4,
                who: null,
              },
            ],
          },
          {
            id: "1D2",
            name: "Enums to DB",
            startDate: "2021-02-01",
            elements: [
              {
                id: "E3",
                name: "Tercera cuestion",
                hours: 3,
                who: null,
              },
              {
                id: "E4",
                name: "Pelaremos el gato",
                hours: 2,
                who: null,
              },
            ],
          }
        ],
      },
      {
        id: "P2",
        name: "Proyecto Ejemplo 2",
        deliverables: [
          {
            id: "2D1",
            name: "Preparar la Gallina",
            startDate: "2021-03-01",
            elements: [
              {
                id: "E1",
                name: "Tirar de las plumas",
                hours: 16,
                who: null,
              },
              {
                id: "E2",
                name: "Ver si se pelaron las plumas",
                hours: 4,
                who: null,
              },
            ]
          }
        ],
      }
    ],
  };