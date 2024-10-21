import { Store } from "./stores/store.type"

export type RecipeType = {
  id: number
  name: string
}

export type CreateRecipeType = Pick<RecipeType, "name">

export class Recipe {
  private store;

  constructor(store: Store<RecipeType[]>) {
    this.store = store;
  }

  async readAll() {
    return await this.store.getValue();
  }
  async setAll(value: RecipeType[]) {
    return await this.store.setValue(value);
  }
}


