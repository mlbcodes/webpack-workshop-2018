import log from "./log";
// import { warn, info } from "./utils";
import { warn } from "./utils";

warn("warning!");
const loadLog = () => import("./log");

setTimeout(() => {
	//load functionality
	loadLog().then(logModule => {
		logModule("Hello");
	})
})