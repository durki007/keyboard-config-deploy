export interface CreateAppResult {
    app: unknown;
    PL: unknown;
}

export function createApp(options: unknown): Promise<CreateAppResult>;
