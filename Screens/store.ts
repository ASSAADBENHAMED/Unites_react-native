import { proxy } from "valtio";

type StoreType = {
    unit: string;
};

export const store = proxy<StoreType>({
    unit: "gegabytes",
});

export function setUnit(unit: string): void {
    store.unit = unit;
}

export default store;
