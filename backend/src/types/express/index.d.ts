declare module Express {
  export interface Request {
    token: string;
    user: any;
    accessToken: any;
  }
}
