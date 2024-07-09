import { helper } from "./helper-service.js";

export const execute = () => {
    const result = helper();
    if(result)
        return "Playing Cricket";
    else
        return "Playing Hockey";
}