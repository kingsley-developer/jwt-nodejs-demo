import { Response, Request } from "express";
export declare function createAccess(userId: number): string;
export declare function createRefresh(userId: number): string;
export declare function sendAccess(req: Request, res: Response, accessToken: string): void;
export declare function sendRefresh(res: Response, refreshToken: string): void;
//# sourceMappingURL=tokens.d.ts.map