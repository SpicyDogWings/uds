import { File } from "../types.ts";
import { info, error } from "../presets.ts";

export default (file: File) => {
  let fileName = file.name.value ? file.name.value : "undefined";
  fileName = `${fileName.toLowerCase().replace(/\s/g, "-")}.desktop`;
  console.log("File:", info(fileName));
  console.log("|");
  console.log(info("[Desktop Entry]"));
  let key = file.type.value ? info(file.type.key) : error(file.type.key);
  console.log(key, "=", file.type.value);
  key = file.version.value ? info(file.version.key) : error(file.version.key);
  console.log(key, "=", file.version.value);
  key = file.name.value ? info(file.name.key) : error(file.name.key);
  console.log(key, "=", file.name.value);
  key = file.comment.value ? info(file.comment.key) : error(file.comment.key);
  console.log(key, "=", file.comment.value);
  key = file.exec.value ? info(file.exec.key) : error(file.exec.key);
  console.log(key, "=", file.exec.value);
  key = file.icon.value ? info(file.icon.key) : error(file.icon.key);
  console.log(key, "=", file.icon.value);
  console.log(info(file.terminal.key), "=", file.terminal.value);
};
