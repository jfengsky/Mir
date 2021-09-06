import { AdminStore } from './adminstore';
import { GlobalStore } from "./globalstore";
export const store = {
  GlobalStore: new GlobalStore(),
  AdminStore: new AdminStore()
};
