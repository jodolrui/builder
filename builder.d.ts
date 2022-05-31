type Predesign<T> = (create: () => T) => T | void;
type Design<T> = (item: T) => void;
type Batch<T> = {
  isPredesign: boolean;
  funct: Predesign<T> | Design<T>;
};
export type Data<T> = {
  create: () => T;
  before: (item: T) => void;
  after: (item: T) => void;
  batch: Batch<T>[]; //* almacena funciones predesign y design
};
export type Builder<T> = {
  create: (funct: () => T) => void;
  before: (funct: (item: T) => void) => void;
  design: (funct: (item: T) => void) => void;
  after: (funct: (item: T) => void) => void;
  predesign: (funct: (create: () => T) => T | void) => void;
  build: () => void;
};
export declare function createBuilder<T>(): Builder<T>;
