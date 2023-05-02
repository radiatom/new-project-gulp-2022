import replace from "gulp-replace";
import plumber from "gulp-plumber"; //combine errors
import notify from "gulp-notify"; //massage
import browsersync from "browser-sync"; //local server
import newer from "gulp-newer"; //update
import ifPlugin from "gulp-if";

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};
