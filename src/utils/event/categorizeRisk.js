
export const categorizeRisk = function(num){
    switch(true){
      case num < 2:
        return 'very low'
      case num < 4:
        return 'low'
      case num < 6:
        return 'medium'
      case num < 8:
        return 'high'
      default:
        return 'very high'
    }
}
