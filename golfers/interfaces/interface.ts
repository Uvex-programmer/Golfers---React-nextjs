export interface Golfclub {
  image: string
  url: string
  name: string
}
export interface Golfclubs {
  golfclubs: [Golfclub]
}
export interface Message {
  name: string
  text: string
  createdAt: String
}

export interface User {
  id: string
  role: string
}
