export const defaultState = {
  ants: {
    worker: 10,
    pupae: 6,
    larvae: 5,
    eggs: 5
  },
  choice: "defend",
  event: [],
  game: true,
  home: {
    description: "A wet and hot abandoned ant colony by the meadow",
    resources: {
      food: 6,
      water: 5
    },
    risk: {
      human: 8,
      ant: 6,
      animal: 3
    },
    weather: {
      temperature: {
        desc: "hot",
        risk: 5
      },
      humidity: {
        desc: "very wet",
        risk: 8
      }
    }
  },
  status: ["HEALTHY"],
  store:{
    food: 150,
    water: 150
  }
}

export const noStoreState = {
  ants: {
    worker: 10,
    pupae: 6,
    larvae: 5,
    eggs: 5
  },
  choice: "defend",
  event: [],
  game: true,
  home: {
    description: "A wet and hot abandoned ant colony by the meadow",
    resources: {
      food: 6,
      water: 5
    },
    risk: {
      human: 8,
      ant: 6,
      animal: 3
    },
    weather: {
      temperature: {
        desc: "hot",
        risk: 5
      },
      humidity: {
        desc: "very wet",
        risk: 8
      }
    }
  },
  status: ["HEALTHY"],
  store:{
    food: 0,
    water: 0
  }
}


export const controlState= {
  ants: {
    worker: 10,
    pupae: 6,
    larvae: 5,
    eggs: 5
  },
  choice: "defend",
  event: [],
  game: true,
  home: {
    description: "A wet and hot abandoned ant colony by the meadow",
    resources: {
      food: 6,
      water: 5
    },
    risk: {
      human: 8,
      ant: 6,
      animal: 3
    },
    weather: {
      temperature: {
        desc: "hot",
        risk: 5
      },
      humidity: {
        desc: "very wet",
        risk: 8
      }
    }
  },
  status: ["HEALTHY"],
  store:{
    food: 150,
    water: 150
  }
}
