import { lstatSync, readdirSync } from "fs";
import { join } from "path";

export const removeEspecialChars = (value: string): string =>
  value.replace(/\D/gi, "");

export const isDirectory = (source: string): boolean =>
  lstatSync(source).isDirectory();

export const getDirectories = (source: string): string[] =>
  readdirSync(source).filter(
    (name): boolean => isDirectory(join(source, name))
  );
