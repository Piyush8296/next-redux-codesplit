export const createTypes = (types = "", options = {}) => {
    const { prefix = "" } = options;

    return types.trim()
        .split(/\s/)
        .filter(el => el.length > 0)
        .map((key) => {
            return { [key]: `${prefix}${key}` };
        })
        .reduce((obj, item) => {
            const key = Object.keys(item)[0];
            obj[key] = item[key];
            return obj;
        }, {});
};
