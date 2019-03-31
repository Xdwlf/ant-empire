import {decideIfGameIsPlaying} from '../general'

describe("decideIfGameIsPlaying function", ()=>{
  const status = ["HEALTHY"]
  test("returns an object", ()=>{
    const gameResults= decideIfGameIsPlaying(status);
    expect(typeof gameResults).toBe("object")
  })
  test('returns game and notification keys', ()=>{
    const gameResults= decideIfGameIsPlaying(status);
    expect(gameResults.hasOwnProperty("game") && gameResults.hasOwnProperty("notification")).toBeTruthy()
  })
  describe("if statusEffects makes the game over", ()=>{
    const falsyStatus = ["KILLED_BY_PREDATORS"]
    test("return false for game", ()=>{
      const {game}= decideIfGameIsPlaying(falsyStatus)
      expect(game).toBe(false)
    })
    test("return a notification", ()=>{
      const {notification}= decideIfGameIsPlaying(falsyStatus)
      expect(typeof notification).toBe("string")
    })
    test("runs correctly for an array of statuses including one game over status", ()=>{
      const arrayOfStatuses =["THIRSTY", "HUNGRY", "CAPTURED_BY_HUMANS"];
      const {game, notification} = decideIfGameIsPlaying(arrayOfStatuses)
      expect(game).toBe(false)
      expect(typeof notification).toBe("string")
    })
  })
  describe("if statusEffects says the game playing", ()=>{
    const truthyStatus = ["THIRSTY"]
    test("game returns true", ()=>{
      const {game} = decideIfGameIsPlaying(truthyStatus)
      expect(game).toBe(true)
    })
    test("notification is not truthy", ()=>{
      const {notification} = decideIfGameIsPlaying(truthyStatus)
      expect(notification).not.toBeTruthy()
    })
  })
})
