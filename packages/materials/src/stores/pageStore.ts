import { create } from "zustand";
import { ApiType, BasicConfig, MaterialId } from "../typings";
import { produce } from "immer";
export interface PageState extends BasicConfig {
  formData: Record<string, any>;
  variables: Record<string, any>;
  apis: Record<string, ApiType>;
}

export interface PageAction {
  setFormData: (values: any) => void;
  setState: (state: Partial<PageState>) => void;
}

const usePageStore = create<PageState & PageAction>((set, get) => ({
  title: "",
  id: "",
  formData: {},
  events: {},
  variables: {},
  style: {},
  attrs: {},
  scope: {},
  apis: {},
  setFormData(values) {
    set(
      produce<PageState>((state) => {
        state.formData = values;
      }),
    );
  },
  setState(state) {
    set(state);
  },
}));

const initStore = () => {};
export default usePageStore;
