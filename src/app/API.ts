export interface User {
  accountId: string,
  symbol: string,
  headquarters: string,
  credits: number,
  startingFaction: string
}

export interface UserResponse {
  data: User
}

export interface FactionResponse {
  data: Faction[]
}
export interface Faction {
  symbol: string,
  name: string,
  description: string,
  headquarters: string,
  traits: Trait[]
}

export interface Trait {
  symbol: string,
  name: string,
  description: string
}
