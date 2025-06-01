import { submodule1 } from "./submodule/submodule1.js";
import { testk123 } from "./submodule/submodule2.js";
export const func1 = () => {
  return submodule1;
};

export const func2 = () => {
  return 2;
};

export default func2;
