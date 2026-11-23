
/* ==========================================
   SDFL CONTACT FORM VALIDATION
   File: src/security/contactValidation.js
========================================== */

(() => {
  "use strict";

  // ==========================================
  // VALIDATION RULES
  // ==========================================

  const RULES = {

    // ----------------------------------------
    // FULL NAME
    // ----------------------------------------

    name: {
      required: true,
      maxLength: 50,

      validate(value) {
        if (!value) {
          return "Full name is required.";
        }

        if (value.length > 50) {
          return "Full name cannot exceed 50 characters.";
        }

        // Allow uppercase and lowercase letters.
        // Allow first, middle and last names.
        // Allow spaces between names.
        // Numbers, apostrophes and hyphens are NOT allowed.

        if (
          !/^[\p{L}\p{M}]+(?: +[\p{L}\p{M}]+)*$/u.test(value)
        ) {
          return "Name can contain letters and spaces only.";
        }

        return "";
      },
    },

    // ----------------------------------------
    // EMAIL ADDRESS
    // ----------------------------------------

    email: {
      required: true,
      maxLength: 254,

      validate(value) {
        if (!value) {
          return "Email address is required.";
        }

        if (
          value.length > 254 ||
          !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
        ) {
          return "Please enter a valid email address.";
        }

        return "";
      },
    },

    // ----------------------------------------
    // PHONE NUMBER
    // ----------------------------------------

    phone: {
      required: true,
      maxLength: 12,

      validate(value) {
        if (!value) {
          return "Phone number is required.";
        }

        // Accepted formats:
        // Local: 0712345678
        // International: +94712345678

        const localFormat = /^0[0-9]{9}$/;

        const internationalFormat = /^\+94[1-9][0-9]{8}$/;

        if (
          !localFormat.test(value) &&
          !internationalFormat.test(value)
        ) {
          return "Enter a valid 10-digit phone number or +94 followed by 9 digits.";
        }

        return "";
      },
    },

    // ----------------------------------------
    // COMPANY / ORGANISATION
    // ----------------------------------------

    organisation: {
      required: false,
      maxLength: 100,

      validate(value) {
        if (value.length > 100) {
          return "Company name cannot exceed 100 characters.";
        }

        if (/[\u0000-\u001F\u007F]/.test(value)) {
          return "Company name contains invalid characters.";
        }

        // Numbers are allowed in company names.

        return "";
      },
    },

    // ----------------------------------------
    // SUBJECT
    // ----------------------------------------

    subject: {
      required: true,
      maxLength: 150,

      validate(value) {
        if (!value) {
          return "Subject is required.";
        }

        if (value.length > 150) {
          return "Subject cannot exceed 150 characters.";
        }

        return "";
      },
    },

    // ----------------------------------------
    // MESSAGE
    // ----------------------------------------

    message: {
      required: true,
      maxLength: 500,

      validate(value) {
        if (!value) {
          return "Message is required.";
        }

        if (value.length > 500) {
          return "Message cannot exceed 500 characters.";
        }

        if (
          /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(value)
        ) {
          return "Message contains invalid control characters.";
        }

        return "";
      },
    },
  };

  // ==========================================
  // FIND SDFL CONTACT FORM
  // ==========================================

  function isContactForm(form) {
    return (
      form instanceof HTMLFormElement &&
      form.elements.namedItem("name") &&
      form.elements.namedItem("email") &&
      form.elements.namedItem("phone") &&
      form.elements.namedItem("subject") &&
      form.elements.namedItem("message")
    );
  }

  // ==========================================
  // VALIDATE INDIVIDUAL FIELD
  // ==========================================

  function validateField(form, fieldName) {
    const field = form.elements.namedItem(fieldName);

    const rule = RULES[fieldName];

    if (!field || !rule) {
      return true;
    }

    const value = field.value.trim();

    const error = rule.validate(value);

    field.setCustomValidity(error);

    field.setAttribute(
      "aria-invalid",
      error ? "true" : "false"
    );

    return error === "";
  }

  // ==========================================
  // VALIDATE AGREEMENT CHECKBOX
  // ==========================================

  function validateAgreement(form) {
    const consent = form.elements.namedItem("consent");

    // Agreement checkbox must exist.

    if (!consent) {
      return false;
    }

    const error = consent.checked
      ? ""
      : "You must agree before submitting the form.";

    consent.setCustomValidity(error);

    consent.setAttribute(
      "aria-invalid",
      error ? "true" : "false"
    );

    return error === "";
  }

  // ==========================================
  // VALIDATE COMPLETE FORM
  // ==========================================

  function validateForm(form) {
    let isValid = true;

    Object.keys(RULES).forEach((fieldName) => {
      if (!validateField(form, fieldName)) {
        isValid = false;
      }
    });

    if (!validateAgreement(form)) {
      isValid = false;
    }

    return isValid;
  }

  // ==========================================
  // LIVE FIELD VALIDATION
  // ==========================================

  document.addEventListener(
    "input",
    (event) => {
      const field = event.target;

      const form = field.form;

      if (!form || !isContactForm(form)) {
        return;
      }

      if (RULES[field.name]) {
        validateField(form, field.name);
      }
    },
    true
  );

  // ==========================================
  // CHECKBOX AND SELECT VALIDATION
  // ==========================================

  document.addEventListener(
    "change",
    (event) => {
      const field = event.target;

      const form = field.form;

      if (!form || !isContactForm(form)) {
        return;
      }

      if (field.name === "consent") {
        validateAgreement(form);
      }

      if (RULES[field.name]) {
        validateField(form, field.name);
      }
    },
    true
  );

  // ==========================================
  // FORM SUBMISSION VALIDATION
  // ==========================================

  document.addEventListener(
    "submit",
    (event) => {
      const form = event.target;

      if (!isContactForm(form)) {
        return;
      }

      const valid = validateForm(form);

      if (!valid) {
        event.preventDefault();

        // Stop React's existing submission handler
        // from processing invalid form data.

        event.stopImmediatePropagation();

        const firstInvalid = form.querySelector(
          '[aria-invalid="true"]'
        );

        firstInvalid?.focus();

        form.reportValidity();
      }
    },
    true
  );

  // ==========================================
  // INITIALIZATION
  // ==========================================

  console.info(
    "SDFL Contact Form Validation Initialized."
  );

})();
