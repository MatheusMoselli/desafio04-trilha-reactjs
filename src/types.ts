export type FoodItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
};

export type FoodInput = Omit<FoodItem, "id">;

export type RequestCloseParam =
  | React.MouseEvent<Element, MouseEvent>
  | React.KeyboardEvent<Element>;
