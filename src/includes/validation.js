// https://www.udemy.com/course/complete-vue-js-developer-zero-to-mastery-vuex/learn/lecture/25046764#content

// https://vee-validate.logaretm.com/v4/

import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";

import {
  required,
  email,
  min,
  max,
  max_value as maxVal,
  min_value as minVal,
  confirmed,
  not_one_of as excluded,
  alpha_spaces as alphaSpaces,
  integer,
  alpha_dash as alphaDash,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("passwords_mismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("country_excluded", excluded);
    defineRule("alphaSpaces", alphaSpaces);
    defineRule("alphaDash", alphaDash);
    defineRule("integer", integer);

    // the generateMessage function will be called whenever a glboal validator function returns false. This function will handle all global validators, inside the function, we must return a string that will represent the message we want to output to the document.

    // https://www.udemy.com/course/complete-vue-js-developer-zero-to-mastery-vuex/learn/lecture/25070492#content

    configure({
      generateMessage: (ctx) => {
        const errorMessages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alphaSpaces: `The field ${ctx.field} may only contain alphabetic characters and spaces.`,
          alphaDash: `The field ${ctx.field} may only contain alphabetic characters numbers, dashes, or underscores.`,
          email: `The field ${ctx.field} must be a valid email.`,
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is too high.`,
          integer: `The value needs to be a number.`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
          country_excluded: `Due to restrictions, we do not accept users from this location.`,
          passwords_mismatch: `The passwords do not match.`,
          tos: `You must accept the Terms of Service.`,
        };

        const errorMessage = errorMessages[ctx.rule.name]
          ? errorMessages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;

        return errorMessage;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
