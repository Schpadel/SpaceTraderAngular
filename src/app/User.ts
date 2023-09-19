export interface User {
  accountId: string,
  symbol: string,
  headquarters: string,
  credits: number,
  startingFaction: string
}

export interface ServerResponse {
  data: User
}
