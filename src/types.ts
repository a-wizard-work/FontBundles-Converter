export interface IConversionResult {
  key: string;
  jobStatus?: string;
  jobResult?: string;
}

export interface IConversionsSummary {
  results: IConversionResult[];
}

export type ScreenClassType = "xs" | "sm" | "md" | "lg";