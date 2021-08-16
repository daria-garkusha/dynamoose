"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_flatten = require("./array_flatten");
function default_1(indexes, comparisonChart) {
    var _a;
    const validIndexes = array_flatten(Object.values(indexes))
        .map((index) => {
        const { hash, range } = index.KeySchema.reduce((res, item) => {
            res[item.KeyType.toLowerCase()] = item.AttributeName;
            return res;
        }, {});
        index._hashKey = hash;
        index._rangeKey = range;
        return index;
    })
        .filter((index) => { var _a; return ((_a = comparisonChart[index._hashKey]) === null || _a === void 0 ? void 0 : _a.type) === "EQ"; });
    const index = validIndexes.find((index) => comparisonChart[index._rangeKey]) || validIndexes[0];
    return (_a = index === null || index === void 0 ? void 0 : index.IndexName) !== null && _a !== void 0 ? _a : null;
}
exports.default = default_1;
//# sourceMappingURL=find_best_index.js.map