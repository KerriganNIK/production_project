export interface LoginSchema {
    username: string;
    password: string;
    isLoading?: boolean;
    isError?: boolean;
}