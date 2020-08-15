

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as LogoSvg from "./logo.svg";

import './App.css'
;

var logo = LogoSvg.default;

function App(Props) {
  var match = React.useState(function () {
        return 0;
      });
  var setCount = match[1];
  return React.createElement("div", {
              className: "App"
            }, React.createElement("header", {
                  className: "App-header"
                }, React.createElement("img", {
                      className: "App-logo",
                      alt: "logo",
                      src: logo
                    }), React.createElement("p", undefined, "Hello Vite + Reason React"), React.createElement("p", undefined, React.createElement("button", {
                          onClick: (function (param) {
                              return Curry._1(setCount, (function (count) {
                                            return count + 1 | 0;
                                          }));
                            })
                        }, "count is: " + String(match[0]))), React.createElement("p", undefined, "Edit ", React.createElement("code", undefined, "App.jsx "), "and save to test HMR updates."), React.createElement("a", {
                      className: "App-link",
                      href: "https://reasonml.github.io/reason-react/",
                      rel: "noopener noreferrer",
                      target: "_blank"
                    }, "Learn Reason React")));
}

var make = App;

export {
  logo ,
  make ,
  
}
/*  Not a pure module */
