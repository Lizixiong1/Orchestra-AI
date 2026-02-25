export type MaterialId = string | number;

export interface ApiType {}

export interface ElementItem {
  type: string;
  id: MaterialId;
  config?: Record<string, any>;
}
export interface BasicConfig {
  title: string;
  id: MaterialId;
  attrs: Record<string, any>;
  style: React.CSSProperties;
  scope: Record<string, any>;
  events: Record<string, Function>;
}
