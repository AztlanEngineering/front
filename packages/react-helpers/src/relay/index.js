"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.client = void 0;
var client_1 = require("./client");
Object.defineProperty(exports, "client", { enumerable: true, get: function () { return __importDefault(client_1).default; } });
var server_1 = require("./server");
Object.defineProperty(exports, "server", { enumerable: true, get: function () { return __importDefault(server_1).default; } });
