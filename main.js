import "./style.css";
import { response } from "./api.js";
import { buildNestedObject } from "./buildObject.js";
import { insertNestedHtmlList } from "./htmlBuilder.js";

const nestedObject = buildNestedObject(response.services);

const container = document.getElementById("app");

const rootItems = Object.values(nestedObject);

insertNestedHtmlList(container, rootItems);
