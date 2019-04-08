export const categories = {
  temperature: {
    frozen: ["t1", "t2", "t3", "t4", "t5", "t10"],
    cold: ["t1", "t2", "t3", "t4", "t10"],
    chilly: ["t1", "t2", "t3", "t10"],
    mild: ["t1", "t6", "t10"],
    warm: ["t6", "t7"],
    hot: ["t6", "t7", "t8", "t11"],
    searing: ["t6", "t7", "t8", "t11"]
  },
  humidity: {
    'very wet': ["h1", "h3", "h5"],
    wet: ['h1', "h3"],
    dry: ['h2', "h6", "h4"],
    'very dry': ['h2', "h6", "h4"]
  },
  animal: {
    'very low': [],
    'low': [],
    'medium': ['e4', 'e3', 'e4'],
    'high': ['e1', 'e3', 'e4', 'e5'],
    'very high': ['e1', 'e2', 'e3', 'e4', 'e5']
  },
  human: {
    'very low': ['hu3', 'hu6'],
    'low': ['hu3', 'hu5', 'hu6'],
    'medium': ['hu2', 'hu3', 'hu4', 'hu6'],
    'high': ['hu1', 'hu2', 'hu3', 'hu4', 'hu5', 'hu6'],
    'very high': ['hu1', 'hu2', 'hu3', 'hu4', 'hu5', 'hu6', 'hu7', 'hu8']
  },
  ant: {
    'very low': ['a8'],
    'low': ['a3', 'a4', 'a6', 'a8'],
    'medium': ['a3', 'a4', 'a5', 'a6', 'a8', 'a7'],
    'high': ['a2', 'a3', 'a4', 'a5', 'a6', 'a8', 'a7'],
    'very high': ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a8', 'a7']
  }
}
