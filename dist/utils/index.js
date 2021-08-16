"use strict";
const combine_objects = require("./combine_objects");
const merge_objects = require("./merge_objects");
const timeout = require("./timeout");
const capitalize_first_letter = require("./capitalize_first_letter");
const set_immediate_promise = require("./set_immediate_promise");
const unique_array_elements = require("./unique_array_elements");
const array_flatten = require("./array_flatten");
const empty_function = require("./empty_function");
const object = require("js-object-utilities");
const dynamoose = require("./dynamoose");
const all_elements_match_1 = require("./all_elements_match");
const type_name_1 = require("./type_name");
const find_best_index_1 = require("./find_best_index");
const can_use_index_of_table_1 = require("./can_use_index_of_table");
module.exports = {
    combine_objects,
    merge_objects,
    timeout,
    capitalize_first_letter,
    set_immediate_promise,
    unique_array_elements,
    all_elements_match: all_elements_match_1.default,
    array_flatten,
    empty_function,
    object,
    dynamoose,
    type_name: type_name_1.default,
    find_best_index: find_best_index_1.default,
    can_use_index_of_table: can_use_index_of_table_1.default
};
//# sourceMappingURL=index.js.map